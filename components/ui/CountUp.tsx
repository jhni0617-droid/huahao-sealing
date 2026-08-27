"use client"

import { useEffect, useRef, useState } from "react"

type CountUpProps = {
  /** Final value as displayed text, e.g. "1,000+", "20+", "10+" */
  value: string
  /** Animation duration in ms */
  duration?: number
  className?: string
}

/**
 * Animated number ticker, triggered once when scrolled into view.
 * Preserves any non-numeric affixes ("+") and thousands separators,
 * and shows the final value immediately without JS / for reduced motion.
 */
export default function CountUp({ value, duration = 1400, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/)
    if (!match || typeof IntersectionObserver === "undefined") return
    const [, prefix, numStr, suffix] = match
    const target = Number(numStr.replace(/,/g, ""))
    if (!Number.isFinite(target)) return
    const useSeparator = numStr.includes(",")

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    setDisplay(`${prefix}0${suffix}`)
    let raf = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        observer.disconnect()
        const start = performance.now()
        const format = (n: number) =>
          Math.round(n).toLocaleString(useSeparator ? "en-US" : undefined)
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // easeOutCubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(`${prefix}${format(target * eased)}${suffix}`)
          if (progress < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
