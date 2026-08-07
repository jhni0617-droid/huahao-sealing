"use client"

import { useEffect, useState } from "react"

/**
 * 仅在桌面端（≥1024px）渲染 children；移动端返回 null。
 * 用于阻止移动端下载/执行只在桌面显示的内容（如 Hero 轮播、粒子动画）。
 * 初始返回 null，客户端 hydration 后一帧内切换——与 ssr:false 动态组件行为一致，无闪烁。
 */
export default function DesktopOnly({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // 用 rem 与 Tailwind v4 的 lg 断点（64rem）对齐：matchMedia 的 rem 同样基于 root font-size，
    // 避免用户浏览器默认字号非 16px 时门控与 CSS 显示不一致
    const mq = window.matchMedia("(min-width: 64rem)")
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  return isDesktop ? <>{children}</> : null
}
