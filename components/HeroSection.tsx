"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useTranslations, useLocale } from "next-intl"
import { siteConfig, factoryHighlights, enFactoryHighlights } from "@/lib/constants"

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), {
  ssr: false,
  loading: () => null,
})

const carouselImages = [
  { src: "/images/轴套/IMG_20260408_150153.jpg", label: "碳石墨轴套 · CS 系列", enLabel: "Carbon Graphite Bushing · CS Series" },
  { src: "/images/轴套/IMG_20260404_133002.jpg", label: "碳石墨轴套 · 精密加工", enLabel: "Carbon Graphite Bushing · Precision Machining" },
  { src: "/images/轴套/IMG_20260408_152358_edit_25785.jpg", label: "碳石墨轴套 · 耐高温型", enLabel: "Carbon Graphite Bushing · High-Temp Grade" },
  { src: "/images/轴套/IMG_20260418_151357.jpg", label: "碳石墨制品 · 定制加工", enLabel: "Carbon Graphite Products · Custom Machining" },
  { src: "/images/轴套/mmexport1772969134237.jpg", label: "碳石墨轴套 · 耐腐蚀型", enLabel: "Carbon Graphite Bushing · Corrosion-Resistant" },
  { src: "/images/密封环/IMG_20260410_175147.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260411_144415.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260430_155027.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260504_140916.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260504_142652.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260505_125534.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260505_125610.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260505_125818.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/mmexport1776699514989.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260404_133116.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260410_173548.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260410_173715.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
  { src: "/images/密封环/IMG_20260410_175102.jpg", label: "碳石墨密封环", enLabel: "Carbon Graphite Seal Ring" },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const t = useTranslations("home.hero")
  const locale = useLocale()
  const isEn = locale !== "zh"
  const highlights = isEn ? enFactoryHighlights : factoryHighlights

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
    <section className="bg-hero-bg text-white relative overflow-hidden min-h-[90vh] flex items-center">
      <HeroParticles />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/95 via-hero-bg/60 to-hero-bg/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-transparent to-transparent pointer-events-none" />

      {/* Brand glow */}
      <div className="absolute top-1/3 right-0 w-[45vw] h-[45vw] -translate-y-1/2 pointer-events-none">
        <div className="w-full h-full bg-accent/6 blur-[150px] rounded-full" />
      </div>

      <div className="container-wide relative z-10 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 text-accent text-xs font-bold tracking-[0.15em] px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              {t("tag")}
            </div>

            <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight mb-5">
              {t("title1")}
              <br />
              <span className="text-accent">{t("title2")}</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed mb-10">
              {t("description")}
            </p>

            {/* Primary CTA group */}
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-sm group">
                {t("ctaQuote")}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("ctaWhatsApp")}
              </a>
              <Link href="/products" className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                {t("ctaProducts")}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats row */}
            <div className="hidden md:flex gap-8 mt-12 pt-8 border-t border-white/10">
              {highlights.map((h) => (
                <div key={h.label} className="group">
                  <div className="text-2xl font-bold text-accent group-hover:scale-105 transition-transform origin-left">
                    {h.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 tracking-wide">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Premium Carousel */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[480px]">
              <div className="absolute -inset-6 bg-accent/8 blur-[80px] rounded-full opacity-60 transition-opacity duration-700" />

              <div className="card-glass w-full aspect-square max-h-[480px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
                {carouselImages.map((img, idx) => (
                  <div
                    key={img.src}
                    className="absolute inset-0 transition-opacity duration-[500ms] ease-in-out"
                    style={{ opacity: current === idx ? 1 : 0 }}
                  >
                    <Image
                      src={img.src}
                      alt={isEn ? img.enLabel : img.label}
                      fill
                      className="object-contain p-10 scale-[0.85]"
                      sizes="480px"
                      priority={idx === 0}
                    />
                  </div>
                ))}

                {/* Nav buttons — cleaner */}
                <button
                  type="button"
                  onClick={() => goTo((current - 1 + carouselImages.length) % carouselImages.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200 z-10 cursor-pointer backdrop-blur-sm"
                  aria-label={isEn ? "Previous" : "上一张"}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => goTo((current + 1) % carouselImages.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200 z-10 cursor-pointer backdrop-blur-sm"
                  aria-label={isEn ? "Next" : "下一张"}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots indicator */}
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

                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats — mobile */}
        <div className="flex md:hidden gap-6 mt-10 pt-6 border-t border-white/10">
          {highlights.map((h) => (
            <div key={h.label}>
              <div className="text-lg font-bold text-accent">{h.value}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{h.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-600">
          <span className="text-[10px] tracking-[0.2em]">SCROLL</span>
          <div className="w-4 h-7 border border-gray-600/40 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-accent/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
