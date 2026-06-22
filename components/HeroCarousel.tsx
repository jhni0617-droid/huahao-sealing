"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { useLocale } from "next-intl"
import { siteConfig } from "@/lib/constants"
import { getLocalized } from "@/lib/locale-data"

const carouselImages = [
  { src: "/images/轴套/IMG_20260408_150153.webp", label: "碳石墨轴套 · CS 系列", enLabel: "Carbon Graphite Bushing · CS Series" },
  { src: "/images/轴套/IMG_20260404_133002.webp", label: "碳石墨轴套 · 精密加工", enLabel: "Carbon Graphite Bushing · Precision Machining" },
  { src: "/images/轴套/IMG_20260408_152358_edit_25785.webp", label: "碳石墨轴套 · 耐高温型", enLabel: "Carbon Graphite Bushing · High-Temp Grade" },
  { src: "/images/轴套/IMG_20260418_151357.webp", label: "碳石墨制品 · 定制加工", enLabel: "Carbon Graphite Products · Custom Machining" },
  { src: "/images/轴套/mmexport1772969134237.webp", label: "碳石墨轴套 · 耐腐蚀型", enLabel: "Carbon Graphite Bushing · Corrosion-Resistant" },
  { src: "/images/密封环/IMG_20260410_175147.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260411_144415.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260430_155027.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260504_140916.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260504_142652.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260505_125534.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260505_125610.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260505_125818.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/mmexport1776699514989.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260404_133116.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260410_173548.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260410_173715.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260410_175102.webp", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const locale = useLocale()
  const isZh = locale === "zh"
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % carouselImages.length)
    }, 5000)
  }, [])

  const goTo = useCallback((idx: number) => {
    setCurrent(idx)
    startTimer()
  }, [startTimer])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  return (
    <div className="hidden flex-col items-center lg:flex">
      <div className="relative w-full max-w-[480px]">
        <div className="absolute -inset-6 bg-accent/10 blur-[90px] opacity-60 transition-opacity duration-700" />

        <div className="card-glass relative w-full aspect-square max-h-[480px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
          {carouselImages.map((img, idx) => (
            <div
              key={img.src}
              className="absolute inset-0 transition-opacity duration-[500ms] ease-in-out"
              style={{ opacity: current === idx ? 1 : 0 }}
            >
              {Math.abs(idx - current) <= 1 && (
                <Image
                  src={img.src}
                  alt={isZh ? img.label : img.enLabel}
                  fill
                  className="object-contain p-8 md:p-10 scale-[0.88]"
                  sizes="480px"
                  priority={idx === current}
                />
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => goTo((current - 1 + carouselImages.length) % carouselImages.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200 z-10 cursor-pointer backdrop-blur-sm"
            aria-label="Previous"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo((current + 1) % carouselImages.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200 z-10 cursor-pointer backdrop-blur-sm"
            aria-label="Next"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {[0, 1, 2, 3, 4].map((i) => (
              <button
                key={i}
                onClick={() => goTo(i * Math.ceil(carouselImages.length / 5))}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  Math.floor(current / Math.ceil(carouselImages.length / 5)) === i
                    ? "bg-white w-4"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none rounded-lg" />
          <div className="absolute left-5 top-5 border border-white/12 bg-primary/55 px-3 py-2 backdrop-blur-sm">
            <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">
              {isZh ? "精密零部件" : "Precision component"}
            </div>
            <div className="mt-0.5 text-xs font-semibold text-white">
              {isZh ? carouselImages[current].label : carouselImages[current].enLabel}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
