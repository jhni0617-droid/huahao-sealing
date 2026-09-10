"use client"

import { useReportWebVitals } from "next/web-vitals"
import { usePathname } from "next/navigation"
import { getOrCreateSessionId } from "@/lib/track"

/**
 * 真实用户性能指标上报（Web Vitals）。
 *
 * 为什么要它：构建期的 `scripts/perf-budget.mjs` 只能守住「打包体积」，
 * 守不住「真机上变慢」—— 比如某个组件在手机端执行了重排、图片尺寸算错、
 * 第三方脚本拖慢主线程。这些只有在真实设备上才暴露。
 *
 * 数据落在 web_vitals 表，后台首页有 p75 汇总卡片。
 *
 * 实现要点：
 * - 用一个队列 + 页面隐藏时才批量发（sendBeacon），避免为上报多占首屏请求。
 *   CLS/INP 是「页面生命周期内持续累积」的指标，早发会拿到未收敛的值。
 * - 失败静默，绝不影响用户。
 */
const LOCALES = ["zh", "en", "vi", "th", "ru", "ja", "ko"]

type Payload = { metric: string; value: number; rating?: string; path: string; locale: string; device: string; sessionId: string }

export default function WebVitalsReporter() {
  const pathname = usePathname()

  useReportWebVitals((metric) => {
    try {
      const seg = pathname.split("/")[1]
      const locale = LOCALES.includes(seg) ? seg : "en"
      const cleanPath = LOCALES.includes(seg) ? pathname.replace(`/${seg}`, "") || "/" : pathname

      // device 用 viewport 宽度粗分档，便于在后台区分移动端/桌面端的表现差异
      const w = typeof window !== "undefined" ? window.innerWidth : 0
      const device = w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop"

      const payload: Payload = {
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
        path: cleanPath,
        locale,
        device,
        sessionId: getOrCreateSessionId(),
      }

      const body = JSON.stringify(payload)

      // sendBeacon 在页面卸载时也能发出，且不阻塞渲染。
      // CLS / INP 要等到页面生命周期结束才收敛，所以优先走这条路。
      if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
        navigator.sendBeacon("/api/vitals", new Blob([body], { type: "application/json" }))
      } else {
        fetch("/api/vitals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          keepalive: true,
        }).catch(() => {})
      }
    } catch {
      // 上报失败静默处理
    }
  })

  return null
}
