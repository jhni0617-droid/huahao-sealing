/**
 * 转化事件埋点（仅客户端组件中调用）。
 * 与 VisitTracker 共用同一个 localStorage 会话 id，方便后台把"浏览→点击→询盘"串成漏斗。
 */

const SESSION_KEY = "hh_session_id"
const SESSION_TTL = 30 * 60 * 1000 // 30 分钟无活动算新会话
const LOCALES = ["zh", "en", "vi", "th", "ru", "ja", "ko"]

export function getOrCreateSessionId(): string {
  try {
    const now = Date.now()
    const raw = localStorage.getItem(SESSION_KEY)
    if (raw) {
      const { id, ts } = JSON.parse(raw)
      if (id && typeof id === "string" && now - ts < SESSION_TTL) {
        localStorage.setItem(SESSION_KEY, JSON.stringify({ id, ts: now }))
        return id
      }
    }
    const newId = crypto?.randomUUID?.() || Math.random().toString(36).slice(2) + Date.now().toString(36)
    localStorage.setItem(SESSION_KEY, JSON.stringify({ id: newId, ts: now }))
    return newId
  } catch {
    return "fallback-" + Math.random().toString(36).slice(2)
  }
}

export function trackEvent(type: string, label?: string) {
  if (typeof window === "undefined") return
  try {
    const pathname = window.location.pathname
    const locale = pathname.split("/")[1]
    const cleanPath =
      locale && LOCALES.includes(locale) ? pathname.replace(`/${locale}`, "") || "/" : pathname

    fetch("/api/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        label,
        path: cleanPath,
        locale,
        sessionId: getOrCreateSessionId(),
        referrer: document.referrer || "",
      }),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // 埋点失败不影响用户操作
  }
}
