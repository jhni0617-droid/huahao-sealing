"use client"

import dynamic from "next/dynamic"

export default dynamic(() => import("@/components/HeroCarousel"), {
  ssr: false,
  loading: () => null,
})
