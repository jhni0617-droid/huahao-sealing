import { NextRequest, NextResponse } from "next/server"
import { getDb, dbRun, dbGet } from "@/lib/admin/db"
import { createHash } from "crypto"
import { getCountryCodeByIp, extractClientIp } from "@/lib/ip-geolocation"

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
  "googlebot", "bingbot", "msnbot", "yahoo", "teoma", "ask jeeves",
  "scrubby", "yandexbot", "yandexsearch", "sogou spider",
  "360spider", "so.com", "haosou", "baiduspider", "baiduimage",
  "googlebot-image", "googlebot-mobile", "bingbot-mobile",
  "linkedinbot", "facebookbot", "pinterest", "slackbot",
  "redditbot", "discordbot", "whatsappbot", "linebot", "kakao",
  "tiktokbot", "douyin", "xiaohongshu", "snapchatbot", "instagram",
  "twitchbot", "twitterbot", "telegram", "messenger", "skype",
  "google-assistant", "alexa", "siri", "cortana",
  "baidu-ai", "alibaba", "toutiao", "meituan", "jd",
  "qqbot", "wechatbot", "weixin", "smtbot", "youdaobot",
  "google-cloud", "aws-sdk", "azure-sdk", "digitalocean", "cloudflare",
]

function isBotUA(ua: string): boolean {
  // 无 User-Agent（健康检查、脚本、部分爬虫）一律视为非真实访客
  if (!ua || !ua.trim()) return true
  const lower = ua.toLowerCase()
  if (BOT_KEYWORDS.some((k) => lower.includes(k))) return true
  // 常见脚本/非浏览器特征（无 bot 字样）
  if (/^(python|curl|wget|go-http-client|node|java\/|okhttp|axios|httpclient|ruby|perl|php|powershell|lua)/.test(lower)) return true
  return false
}

function extractReferrer(referrer: string | null, host: string | null): string | null {
  if (!referrer) return null
  try {
    const u = new URL(referrer)
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
    const locale = typeof body.locale === "string" ? body.locale : "en"
    const sessionId = typeof body.sessionId === "string" && body.sessionId.length <= 64 ? body.sessionId : null

    const ip = extractClientIp(request.headers)
    const ipCountry = getCountryCodeByIp(ip)

    const vercelCountry = request.headers.get("x-vercel-ip-country")
    const xCountry = request.headers.get("x-country")

    // Vercel 官方提供的国家信息最可靠；x-country 是 CDN/自建代理的透传；
    // ip2region 数据库陈旧（海外覆盖差），仅作为非 Vercel 部署环境的兜底。
    const country = vercelCountry || xCountry || ipCountry || null

    if (process.env.NODE_ENV === "development") {
      console.log("[visit] IP:", ip, "| ip2region:", ipCountry, "| vercel:", vercelCountry, "| final:", country)
    }

    const ua = request.headers.get("user-agent") || ""
    const referrerRaw = request.headers.get("referer") || request.headers.get("referrer")
    const host = request.headers.get("host")
    const referrer = extractReferrer(referrerRaw, host)

    const ipHash = ip === "unknown" ? null : createHash("sha256").update(ip).digest("hex").slice(0, 32)

    const isBot = isBotUA(ua) ? 1 : 0

    const db = await getDb()

    if (ipHash || sessionId) {
      const recent = await dbGet(
        `SELECT id FROM page_views
         WHERE path = ?
           AND (ip_hash = ? OR session_id = ?)
           AND visited_at >= datetime('now', '-30 minutes')
         LIMIT 1`,
        [path, ipHash, sessionId],
      )
      if (recent) {
        return NextResponse.json({ success: true, deduplicated: true })
      }
    }

    const visitedAt = new Date().toISOString().replace("T", " ").slice(0, 19)

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
  } catch (e: any) {
    console.error("[visit] error:", e?.message || e)
    return NextResponse.json({ success: true })
  }
}