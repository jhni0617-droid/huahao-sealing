/**
 * Meta Pixel 前端辅助函数（浏览器端使用）
 *
 * - trackPixelEvent: 发送标准/自定义事件到已初始化的 fbq
 * - getMetaBrowserCookies: 读取 _fbp / _fbc cookie，供服务端 CAPI 透传增强匹配
 */

export function trackPixelEvent(
  eventName: string,
  data?: Record<string, unknown>,
  eventId?: string,
): void {
  if (typeof window === "undefined") return
  const w = window as unknown as { fbq?: (...args: unknown[]) => void }
  if (typeof w.fbq !== "function") return
  if (eventId) {
    w.fbq("track", eventName, data ?? {}, { eventID: eventId })
  } else {
    w.fbq("track", eventName, data ?? {})
  }
}

export function getMetaBrowserCookies(): { fbp?: string; fbc?: string } {
  if (typeof document === "undefined") return {}
  const cookies = new Map<string, string>()
  for (const part of document.cookie.split(";")) {
    const i = part.indexOf("=")
    if (i > 0) cookies.set(part.slice(0, i).trim(), part.slice(i + 1))
  }
  return {
    fbp: cookies.get("_fbp"),
    fbc: cookies.get("_fbc"),
  }
}
