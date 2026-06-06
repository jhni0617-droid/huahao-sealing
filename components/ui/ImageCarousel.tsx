"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"

interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  aspectRatio?: string
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
  variant?: "glass" | "solid" | "minimal"
  className?: string
}

export default function ImageCarousel({
  images,
  aspectRatio = "4/3",
  autoPlay = true,
  interval = 4000,
  showDots = true,
  showArrows = true,
  variant = "glass",
  className = "",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, interval)
  }, [interval, images.length])

  const goTo = useCallback((idx: number) => {
    setCurrent(idx)
    if (autoPlay) startTimer()
  }, [autoPlay, startTimer])

  const goNext = useCallback(() => {
    goTo((current + 1) % images.length)
  }, [current, goTo, images.length])

  const goPrev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length)
  }, [current, goTo, images.length])

  useEffect(() => {
    if (autoPlay) startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [autoPlay, startTimer])

  if (images.length === 0) return null

  const containerStyle = variant === "glass"
    ? "rounded-lg overflow-hidden border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm shadow-[0_20px_50px_-18px_rgba(0,0,0,0.45)]"
    : variant === "solid"
    ? "rounded-lg overflow-hidden border border-border bg-white shadow-sm"
    : "rounded-lg overflow-hidden"

  return (
    <div className={className}>
      <div className="relative w-full" style={{ aspectRatio }}>
        <div className={`absolute inset-0 ${containerStyle}`}>
          {images.map((img, idx) => (
            <div
              key={img.src}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: current === idx ? 1 : 0 }}
            >
              {Math.abs(idx - current) <= 1 && (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx === 0}
                />
              )}
            </div>
          ))}

          {showArrows && images.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/15 flex items-center justify-center hover:bg-black/60 transition-all z-10 cursor-pointer text-white"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/15 flex items-center justify-center hover:bg-black/60 transition-all z-10 cursor-pointer text-white"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {variant === "glass" && (
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
          )}
        </div>
      </div>

      {showDots && images.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                current === idx ? "bg-accent w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
