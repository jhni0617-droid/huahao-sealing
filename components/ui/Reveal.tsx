"use client"

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  /** Stagger delay in ms, e.g. index * 80 for card grids */
  delay?: number
  className?: string
  style?: CSSProperties
}

/**
 * Scroll-triggered reveal: fades/slides the element in once it enters the
 * viewport. Falls back to instantly visible when IntersectionObserver is
 * unavailable or the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-revealed")
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      el.classList.add("is-revealed")
    } else {
      observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{ ...style, ...(delay ? { transitionDelay: `${delay}ms` } : null) }}
    >
      {children}
    </div>
  )
}
