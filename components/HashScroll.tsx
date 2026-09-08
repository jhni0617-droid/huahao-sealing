"use client"

import { useEffect } from "react"

/**
 * 首屏带 #hash 进入（如首页瓷砖链到 /applications#slug）时，
 * 水合后补一次定位：Next 路由会把浏览器原生锚点滚动重置回顶部。
 */
export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const timer = setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" })
    }, 300)
    return () => clearTimeout(timer)
  }, [])
  return null
}
