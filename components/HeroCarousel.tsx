"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"

const images = [
  { src: "/images/IMG_20260321_153130.jpg", alt: "华豪密封工厂车间实景" },
  { src: "/images/实拍/IMG_20260517_193456.png", alt: "华豪密封车间实拍" },
  { src: "/images/实拍/IMG_20260517_193309.png", alt: "华豪密封车间实拍" },
  { src: "/images/实拍/IMG_20260517_193327.png", alt: "华豪密封车间实拍" },
  { src: "/images/实拍/IMG_20260517_193418.jpg", alt: "华豪密封车间实拍" },
  { src: "/images/实拍/IMG_20260517_193443.png", alt: "华豪密封车间实拍" },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const dragTotalX = useRef(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setCurrent((index % images.length + images.length) % images.length)
  }, [])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(goNext, 4000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [goNext])

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(goNext, 4000)
  }

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStartX.current = e.clientX
    dragTotalX.current = 0
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    dragTotalX.current = e.clientX - dragStartX.current
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (Math.abs(dragTotalX.current) > 50) {
      goTo(dragTotalX.current > 0 ? current - 1 : current + 1)
    }
    resetTimer()
  }

  const handleMouseLeave = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (Math.abs(dragTotalX.current) > 50) {
      goTo(dragTotalX.current > 0 ? current - 1 : current + 1)
    }
    resetTimer()
  }

  // Touch support
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? current + 1 : current - 1)
    }
    resetTimer()
  }

  return (
    <div className="relative group select-none">
      {/* Prev button */}
      <button
        onClick={(e) => {
          e.preventDefault()
          goTo(current - 1)
          resetTimer()
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="上一张"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.preventDefault()
          goTo(current + 1)
          resetTimer()
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="下一张"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Glass card */}
      <div
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-[0_30px_80px_-10px_rgba(0,0,0,0.5)] transition-shadow duration-500 group-hover:shadow-[0_40px_100px_-10px_rgba(189,122,44,0.15)]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images with fade transition */}
        {images.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
              draggable={false}
            />
          </div>
        ))}

        {/* Glass shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Drag hint */}
        {isDragging && (
          <div className="absolute inset-0 bg-black/10 pointer-events-none transition-opacity" />
        )}

        {/* Bottom gradient for dots readability */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Dot indicators */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault()
              goTo(index)
              resetTimer()
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-accent w-4"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`切换到第 ${index + 1} 张图片`}
          />
        ))}
      </div>
    </div>
  )
}
