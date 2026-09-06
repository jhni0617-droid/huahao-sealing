import { NextRequest, NextResponse } from "next/server"
import { getDb, dbRun, dbGet } from "@/lib/admin/db"
import { createHash } from "crypto"
import { getCountryCodeByIp, extractClientIp } from "@/lib/ip-geolocation"
import { isBotUA, extractReferrer } from "@/lib/visit-helpers"

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
    // 优先取前端 document.referrer（真实外部来源）；header 的 Referer 是同源当前页，仅作兜底
    const referrerRaw =
      (typeof body.referrer === "string" && body.referrer ? body.referrer : null) ||
      request.headers.get("referer") ||
      request.headers.get("referrer")
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