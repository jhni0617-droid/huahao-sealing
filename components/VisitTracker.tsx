"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const SESSION_KEY = "hh_session_id"
const SESSION_TTL = 30 * 60 * 1000 // 30 分钟无活动算新会话

function getOrCreateSessionId(): string {
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
    const newId = (crypto?.randomUUID?.() || Math.random().toString(36).slice(2) + Date.now().toString(36))
    localStorage.setItem(SESSION_KEY, JSON.stringify({ id: newId, ts: now }))
    return newId
  } catch {
    return "fallback-" + Math.random().toString(36).slice(2)
  }
}

export default function VisitTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.startsWith("/admin")) return

    const locale = pathname.split("/")[1]
    const cleanPath =
      locale && ["zh", "en", "vi", "th", "ru", "ja", "ko"].includes(locale)
        ? pathname.replace(`/${locale}`, "") || "/"
        : pathname

    const sessionId = getOrCreateSessionId()

    const timer = setTimeout(() => {
      fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: cleanPath, locale, sessionId }),
        keepalive: true,
      }).catch(() => {})
    }, 1500)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
