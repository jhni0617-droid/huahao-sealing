import { NextRequest, NextResponse } from "next/server"
import { getDb, dbRun, dbGet } from "@/lib/admin/db"
import { createHash } from "crypto"
import { getCountryCodeByIp } from "@/lib/ip-geolocation"

// 已知的搜索引擎/爬虫 User-Agent 关键词（小写匹配）
const BOT_KEYWORDS = [
  "bot", "crawler", "spider", "archiver", "slurp", "baidu", "bingpreview",
  "facebookexternalhit", "twitterbot", "linkedinbot", "telegrambot",
  "whatsapp", "applebot", "yandex", "duckduckbot", "sogou", "exabot",
  "ia_archiver", "siteaudit", "semrush", "ahrefsbot", "dataforseo",
  "mj12bot", "dotbot", "petalbot", "bytespider", "googleother",
  "claudebot", "gptbot", "ccbot", "anthropic-ai", "oai-searchbot",
  "perfcraw", "headlesschrome", "phantomjs", "selenium", "puppeteer",
  "wget", "curl", "python-requests", "go-http-client", "node-fetch",
  "httpclient", "httpx", "scrapy", "java/",
]

function isBotUA(ua: string): boolean {
  const lower = ua.toLowerCase()
  return BOT_KEYWORDS.some((k) => lower.includes(k))
}

function extractReferrer(referrer: string | null, host: string | null): string | null {
  if (!referrer) return null
  try {
    const u = new URL(referrer)
    // 自己站点内部跳转不算来源
    if (host && u.hostname === host) return null
    return u.hostname
  } catch {
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const path = typeof body.path === "string" ? body.path : null
    if (!path) {
      return NextResponse.json({ error: "path required" }, { status: 400 })
    }
    const locale = typeof body.locale === "string" ? body.locale : "zh"
    const sessionId = typeof body.sessionId === "string" && body.sessionId.length <= 64 ? body.sessionId : null

    // 读 header
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
                request.headers.get("x-real-ip") ||
                "unknown"
    const ipCountry = getCountryCodeByIp(ip)
    const country = ipCountry ||
                     request.headers.get("x-vercel-ip-country") ||
                     request.headers.get("x-country") ||
                     null
    const ua = request.headers.get("user-agent") || ""
    const referrerRaw = request.headers.get("referer") || request.headers.get("referrer")
    const host = request.headers.get("host")
    const referrer = extractReferrer(referrerRaw, host)

    // IP hash（不存原 IP，做隐私保护）
    const ipHash = ip === "unknown" ? null : createHash("sha256").update(ip).digest("hex").slice(0, 32)

    const isBot = isBotUA(ua) ? 1 : 0

    const db = await getDb()

    // 会话级去重：同一 session_id 或 ip_hash 在 30 分钟内只算一次访问，
    // 不管浏览了多少个页面，避免点击多界面导致访问量虚高
    if (ipHash || sessionId) {
      const recent = await dbGet(
        `SELECT id FROM page_views
         WHERE (ip_hash = ? OR session_id = ?)
           AND visited_at >= datetime('now', '-30 minutes')
         LIMIT 1`,
        [ipHash, sessionId],
      )
      if (recent) {
        return NextResponse.json({ success: true, deduplicated: true })
      }
    }

    // 存储为北京时间（UTC+8），与后台查询/显示一致
    const visitedAt = new Date(Date.now() + 8 * 60 * 60 * 1000)
      .toISOString()
      .replace("T", " ")
      .slice(0, 19)

    await dbRun(
      `INSERT INTO page_views (path, locale, country, referrer, user_agent, ip_hash, session_id, is_bot, visited_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        path,
        locale,
        country,
        referrer,
        ua.slice(0, 500),
        ipHash,
        sessionId,
        isBot,
        visitedAt,
      ],
    )

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: true })
  }
}
