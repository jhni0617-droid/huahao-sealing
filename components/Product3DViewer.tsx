"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"

export default function Product3DViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)
  const shineRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const mouse = useRef({ x: 0.5, y: 0.5 })

  // Direct DOM animation — 60fps without React re-renders
  useEffect(() => {
    const inner = innerRef.current
    const shadow = shadowRef.current
    const shine = shineRef.current
    if (!inner || !shadow || !shine) return

    const current = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }
    let time = 0
    let raf: number

    const animate = () => {
      time += 0.008

      if (isHovered) {
        target.x = (mouse.current.y - 0.5) * -28
        target.y = (mouse.current.x - 0.5) * 28
      } else {
        target.x = Math.sin(time * 0.35) * 3
        target.y = Math.sin(time * 0.5) * 6
      }

      // Smooth lerp
      current.x += (target.x - current.x) * 0.055
      current.y += (target.y - current.y) * 0.055

      const rotY = isFlipped ? 180 : current.y

      // Apply transforms via DOM — no React re-render cost
      inner.style.transform = `rotateX(${current.x}deg) rotateY(${rotY}deg)`

      // Shadow shifts and stretches with rotation
      const sy = current.y * 0.6
      shadow.style.transform = `translateX(${sy}px) translateY(10px) scaleX(${1 + Math.abs(current.y) * 0.006})`
      shadow.style.opacity = String(0.35 + Math.abs(current.y) * 0.006)

      if (isHovered) {
        shine.style.opacity = "1"
        shine.style.background = `radial-gradient(circle at ${mouse.current.x * 100}% ${mouse.current.y * 100}%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 50%, transparent 70%)`
      } else {
        shine.style.opacity = "0"
      }

      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [isHovered, isFlipped])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouse.current = {
      x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
      y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[480px] mx-auto select-none"
      style={{ perspective: "700px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); mouse.current = { x: 0.5, y: 0.5 } }}
    >
      <div className="relative px-4">
        {/* Soft backlight glow behind the product */}
        <div className="absolute -inset-8 pointer-events-none opacity-40">
          <div className="w-full h-full rounded-full bg-accent/10 blur-[90px]" />
        </div>

        {/* Dynamic shadow */}
        <div
          ref={shadowRef}
          className="absolute bottom-0 left-[10%] right-[10%] h-16 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, transparent 70%)",
            filter: "blur(8px)",
            transform: "translateY(10px)",
            opacity: 0.35,
          }}
        />

        {/* 3D Card */}
        <div
          className="relative w-full cursor-pointer"
          style={{ aspectRatio: "1/1" }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            ref={innerRef}
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* === Front face === */}
            <div className="absolute inset-0 backface-hidden">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent shadow-[0_30px_80px_-10px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/轴套/IMG_20260408_150153.jpg"
                  alt="碳石墨轴套"
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 480px) 80vw, 480px"
                  priority
                  draggable={false}
                />
              </div>
            </div>

            {/* === Back face === */}
            <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent shadow-[0_30px_80px_-10px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/轴套/IMG_20260408_150138.jpg"
                  alt="碳石墨轴套 - 侧面"
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 480px) 80vw, 480px"
                  draggable={false}
                />
              </div>
            </div>

            {/* Shine overlay (follows cursor) */}
            <div
              ref={shineRef}
              className="absolute inset-0 backface-hidden rounded-[32px] pointer-events-none"
              style={{ opacity: 0, transition: "opacity 0.4s ease" }}
            />
          </div>
        </div>

        {/* Interaction hint — Apple-style minimal */}
        <div className="flex justify-center gap-6 mt-6 text-[11px] text-gray-500/60 tracking-[0.15em] font-medium">
          <span className="flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
            </svg>
            拖拽旋转
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
            </svg>
            点击翻转
          </span>
        </div>
      </div>
    </div>
  )
}
