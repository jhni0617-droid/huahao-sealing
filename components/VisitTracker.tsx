"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { getOrCreateSessionId } from "@/lib/track"

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
    // 真实来源只能从 document.referrer 取（fetch 请求的 Referer 是同源当前页，会被后端过滤）
    const referrer = document.referrer || ""

    const timer = setTimeout(() => {
      fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: cleanPath, locale, sessionId, referrer }),
        keepalive: true,
      }).catch(() => {})
    }, 1500)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
