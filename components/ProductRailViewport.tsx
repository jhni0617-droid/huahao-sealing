"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/**
 * 轮播视口守卫。
 *
 * 首页两行产品图轮播是纯 CSS 动画，滚出视口后仍在 60fps 空转合成，
 * 白烧 GPU 和电量（弱机上还会拖累滚动帧率）。
 *
 * 这里用 IntersectionObserver 监视轮播容器：离开视口就给容器加
 * `product-rail-paused` 类，CSS 随即将两行轨道动画置为 paused 并撤掉
 * will-change，让浏览器释放这条合成层；滚回视口再原样恢复。
 * 视觉上无感知 —— 用户根本看不到已经滚过去的那一屏。
 *
 * 必须是客户端组件，但两行轨道仍由服务端组件 ProductRail 渲染后作为
 * children 传进来，图片 HTML 照旧走 SSR，不增加任何客户端数据。
 */
export default function ProductRailViewport({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return
    const io = new IntersectionObserver(
      (entries) => setPaused(!entries[entries.length - 1].isIntersecting),
      // 留 200px 余量：真离屏后才停，避免刚出视口那几帧出现动画突然定格
      { rootMargin: "200px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`space-y-2 md:space-y-3${paused ? " product-rail-paused" : ""}`}
    >
      {children}
    </div>
  )
}
