"use client"

import dynamic from "next/dynamic"
import DesktopOnly from "@/components/DesktopOnly"

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), {
  ssr: false,
  loading: () => null,
})

/**
 * 桌面端背景装饰：粒子动画。
 * 移动端不渲染（粒子在手机上本来 count=0，纯 rAF 空转 + 事件监听浪费）。
 */
export default function HeroDynamicContent() {
  return (
    <DesktopOnly>
      <div className="opacity-45">
        <HeroParticles />
      </div>
    </DesktopOnly>
  )
}
