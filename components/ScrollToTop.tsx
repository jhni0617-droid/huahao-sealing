"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    scrollToTop()
    const rafId = requestAnimationFrame(() => {
      scrollToTop()
      requestAnimationFrame(scrollToTop)
    })

    return () => cancelAnimationFrame(rafId)
  }, [pathname])

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0)
    }
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [])

  return null
}