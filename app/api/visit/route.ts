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
]

function isBotUA(ua: string): boolean {
  const lower = ua.toLowerCase()
  return BOT_KEYWORDS.some((k) => lower.includes(k))
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

    const country = ipCountry || vercelCountry || xCountry || null

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
         WHERE (ip_hash = ? OR session_id = ?)
           AND visited_at >= datetime('now', '-30 minutes')
         LIMIT 1`,
        [ipHash, sessionId],
      )
      if (recent) {
        return NextResponse.json({ success: true, deduplicated: true })
      }
    }

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
  } catch (e: any) {
    console.error("[visit] error:", e?.message || e)
    return NextResponse.json({ success: true })
  }
}