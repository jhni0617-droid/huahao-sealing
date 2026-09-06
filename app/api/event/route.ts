import { NextRequest, NextResponse } from "next/server"
import { dbRun } from "@/lib/admin/db"
import { createHash } from "crypto"
import { getCountryCodeByIp, extractClientIp } from "@/lib/ip-geolocation"
import { isBotUA, extractReferrer } from "@/lib/visit-helpers"

// 允许的事件类型白名单（前端 trackEvent 只上报这些）
const EVENT_TYPES = new Set([
  "inquiry_submit",      // 询盘表单提交成功
  "whatsapp_click",      // WhatsApp 按钮点击
  "zalo_click",          // Zalo 按钮点击（越南市场）
  "email_click",         // 邮箱链接点击
  "phone_click",         // 电话链接点击
  "datasheet_download",  // 数据表/检测报告/目录下载
])

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const type = typeof body.type === "string" ? body.type : ""
    if (!EVENT_TYPES.has(type)) {
      return NextResponse.json({ error: "invalid event type" }, { status: 400 })
    }
    const label = typeof body.label === "string" && body.label.length <= 120 ? body.label : null
    const path = typeof body.path === "string" && body.path.length <= 300 ? body.path : "/"
    const locale = typeof body.locale === "string" && body.locale.length <= 8 ? body.locale : "en"
    const sessionId = typeof body.sessionId === "string" && body.sessionId.length <= 64 ? body.sessionId : null

    const ua = request.headers.get("user-agent") || ""
    const ip = extractClientIp(request.headers)
    const country =
      request.headers.get("x-vercel-ip-country") || request.headers.get("x-country") || getCountryCodeByIp(ip) || null
    const referrer = extractReferrer(
      (typeof body.referrer === "string" && body.referrer) || request.headers.get("referer"),
      request.headers.get("host"),
    )
    const ipHash = ip === "unknown" ? null : createHash("sha256").update(ip).digest("hex").slice(0, 32)

    await dbRun(
      `INSERT INTO conversion_events (event_type, event_label, path, locale, country, referrer, ip_hash, session_id, is_bot, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [type, label, path, locale, country, referrer, ipHash, sessionId, isBotUA(ua) ? 1 : 0, new Date().toISOString().replace("T", " ").slice(0, 19)],
    )

    return NextResponse.json({ success: true })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    console.error("[event] error:", msg)
    // 统计失败不影响用户操作
    return NextResponse.json({ success: true })
  }
}
