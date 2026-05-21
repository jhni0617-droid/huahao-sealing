"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function VisitTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.startsWith("/admin")) return

    const locale = pathname.split("/")[1]
    const cleanPath =
      locale && ["zh", "en", "vi", "th", "ru", "ja", "ko"].includes(locale)
        ? pathname.replace(`/${locale}`, "") || "/"
        : pathname

    fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: cleanPath, locale }),
      keepalive: true,
    }).catch(() => {})
  }, [pathname])

  return null
}
