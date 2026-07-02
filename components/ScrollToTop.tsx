"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * 路由切换时立即滚动到顶部，避免 Next.js 默认滚动恢复
 * 在异步内容加载时出现的"先显示底部再跳回顶部"视觉错乱。
 * 使用 requestAnimationFrame 确保在浏览器绘制前执行，
 * 用户感知不到跳动。
 */
export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // 立即滚动（同步），避免任何视觉跳动
    window.scrollTo(0, 0)
    // 再用 rAF 兜底一次，处理某些浏览器异步布局情况
    const id = requestAnimationFrame(() => window.scrollTo(0, 0))
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return null
}
