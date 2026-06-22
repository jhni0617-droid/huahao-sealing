"use client"

import dynamic from "next/dynamic"

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), {
  ssr: false,
  loading: () => null,
})

const HeroCarousel = dynamic(() => import("@/components/HeroCarousel"), {
  ssr: false,
  loading: () => null,
})

export default function HeroDynamicContent() {
  return (
    <>
      <div className="opacity-45">
        <HeroParticles />
      </div>
      {/* Carousel — CSS hidden on mobile, shown on lg+ */}
      <HeroCarousel />
    </>
  )
}
