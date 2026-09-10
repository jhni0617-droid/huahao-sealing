import { NextRequest, NextResponse } from "next/server"
import { dbRun } from "@/lib/admin/db"
import { isBotUA } from "@/lib/visit-helpers"

/**
 * 真实用户性能指标（Web Vitals）上报。
 *
 * 由 components/WebVitalsReporter.tsx 在页面加载后调用，用于在后台看到
 * 真机上的 LCP / CLS / INP 等指标 —— 构建期的 scripts/perf-budget.mjs 只能防
 * 「打包体积」回归，防不了「真机上变慢」。
 *
 * 与 /api/event（转化埋点）分开建表，避免两类数据语义混杂。
 */
const METRICS = new Set([
  "LCP",  // 最大内容绘制（毫秒）
  "CLS",  // 累计布局偏移（无单位，0–1 量级）
  "INP",  // 交互到下一次绘制（毫秒）
  "FCP",  // 首次内容绘制（毫秒）
  "TTFB", // 首字节时间（毫秒）
  "FID",  // 首次输入延迟（旧指标，兼容老浏览器上报）
])

/** 指标合理上限，超出视为异常数据丢弃（防脏数据污染 p75 统计） */
const MAX_VALUE: Record<string, number> = {
  LCP: 120000,
  FCP: 120000,
  TTFB: 120000,
  INP: 120000,
  FID: 120000,
  CLS: 10,
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const metric = typeof body.metric === "string" ? body.metric.toUpperCase() : ""
    if (!METRICS.has(metric)) {
      return NextResponse.json({ error: "invalid metric" }, { status: 400 })
    }

    const value = Number(body.value)
    if (!Number.isFinite(value) || value < 0 || value > MAX_VALUE[metric]) {
      return NextResponse.json({ error: "invalid value" }, { status: 400 })
    }

    const path = typeof body.path === "string" && body.path.length <= 300 ? body.path : "/"
    const locale = typeof body.locale === "string" && body.locale.length <= 8 ? body.locale : "en"
    const device = typeof body.device === "string" && body.device.length <= 16 ? body.device : null
    const rating = typeof body.rating === "string" && body.rating.length <= 16 ? body.rating : null
    const sessionId = typeof body.sessionId === "string" && body.sessionId.length <= 64 ? body.sessionId : null

    const ua = request.headers.get("user-agent") || ""

    await dbRun(
      `INSERT INTO web_vitals (metric, value, rating, path, locale, device, session_id, is_bot, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        metric,
        // CLS 是小数，保留 4 位；其余是毫秒，取整
        metric === "CLS" ? Math.round(value * 10000) / 10000 : Math.round(value),
        rating,
        path,
        locale,
        device,
        sessionId,
        isBotUA(ua) ? 1 : 0,
        new Date().toISOString().replace("T", " ").slice(0, 19),
      ],
    )

    return NextResponse.json({ success: true })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    console.error("[vitals] error:", msg)
    // 性能上报失败绝不能影响用户浏览
    return NextResponse.json({ success: true })
  }
}
