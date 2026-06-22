"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), {
  ssr: false,
  loading: () => null,
})

const HeroCarousel = dynamic(() => import("@/components/HeroCarousel"), {
  ssr: false,
  loading: () => null,
})

export default function HeroDynamicContent() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024)
  }, [])

  return (
    <>
      <div className="opacity-45">
        <HeroParticles />
      </div>
      {/* Carousel chunk is NEVER loaded on mobile — conditionally rendered */}
      {isDesktop && <HeroCarousel />}
    </>
  )
}
