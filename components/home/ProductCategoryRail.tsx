"use client"

import { useState } from "react"
import Image from "next/image"
import { Link } from "@/i18n/routing"

/**
 * Hero 下方产品分类行 —— 还原上海良工阀门（lgvf.com）的 hover 展开动效。
 *
 * 动效要点（与良工原版一致）：
 * - 默认 5 列等宽（每列 1/5 = 20%）
 * - hover 时被 hover 项展宽到 1/4（25%），其余 4 项收窄到 15%
 * - 被 hover 项背景变 bg-accent（#e60012），文字变白
 * - "MORE" 按钮默认 opacity:0 + top:24px，hover 时上移 + 淡入，0.5s 延迟
 * - 全程 transition: all 0.5s
 */

type Item = {
  title: string
  href: string
  image?: string
}

const items: Item[] = [
  {
    title: "浸锑石墨毛坯",
    href: "/products",
    image: "/images/products/antimony-blank.webp",
  },
  {
    title: "浸树脂石墨毛坯",
    href: "/products",
    image: "/images/products/resin-blank.webp",
  },
  {
    title: "碳石墨轴承",
    href: "/products",
    image: "/images/products/carbon-graphite-bearing.webp",
  },
  {
    title: "碳石墨密封环",
    href: "/products",
    image: "/images/products/carbon-graphite-seal-ring.webp",
  },
  {
    title: "碳石墨三瓣环",
    href: "/products",
    image: "/images/products/carbon-graphite-three-segment.webp",
  },
]

export default function ProductCategoryRail() {
  const [hovered, setHovered] = useState<number | null>(null)
  const anyHovered = hovered !== null

  return (
    <section
      aria-label="产品分类导航"
      className="border-t border-border bg-white"
    >
      {/* ============ 桌面端：6 列 + hover 展开 ============ */}
      <ul className="hidden md:flex">
        {items.map((item, i) => {
          const isHovered = hovered === i
          const widthClass = !anyHovered
            ? "w-1/5"
            : isHovered
              ? "w-1/4"
              : "w-[18.75%]"
          return (
            <li
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocusCapture={() => setHovered(i)}
              onBlurCapture={() => setHovered(null)}
              className={`relative shrink-0 border-r border-border-light last:border-r-0 ${widthClass} transition-all duration-500 ease-out`}
            >
              <Link
                href={item.href}
                className={`relative block h-[360px] overflow-hidden transition-all duration-500 lg:h-[440px] ${
                  isHovered ? "bg-accent" : "bg-white"
                }`}
              >
                {/* 标题区 */}
                <div className="absolute left-[40px] right-[40px] top-[50px] z-10 lg:left-[50px] lg:top-[60px]">
                  <b
                    className={`block text-[22px] font-bold leading-tight transition-colors duration-500 lg:text-[26px] ${
                      isHovered ? "text-white" : "text-primary"
                    }`}
                  >
                    {item.title}
                  </b>
                </div>

                {/* MORE 按钮：默认隐藏，hover 时上移 + 淡入，0.5s 延迟 */}
                <span
                  className={`absolute right-[40px] top-[24px] z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-500 lg:right-[50px] ${
                    isHovered ? "-translate-y-6 opacity-100" : "translate-y-0 opacity-0"
                  }`}
                  style={{ transitionDelay: isHovered ? "0.5s" : "0s" }}
                >
                  MORE
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                {/* 图片区 */}
                <div className="absolute bottom-[40px] left-1/2 z-[2] h-[200px] w-[240px] -translate-x-1/2">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="240px"
                      className="object-contain transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center border border-dashed text-xs transition-colors duration-500 ${
                        isHovered ? "border-white/40 text-white/60" : "border-border-light text-muted/60"
                      }`}
                    >
                      Image
                    </div>
                  )}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* ============ 移动端：2 列网格（不展开） ============ */}
      <ul className="grid grid-cols-2 md:hidden">
        {items.map((item, i) => (
          <li key={i} className="border-b border-r border-border-light">
            <Link
              href={item.href}
              className="relative block h-[240px] overflow-hidden bg-white p-5"
            >
              <b className="block text-[16px] font-bold leading-tight text-primary">
                {item.title}
              </b>
              <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                MORE →
              </span>
              <div className="absolute bottom-4 left-1/2 h-[100px] w-[140px] -translate-x-1/2">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="140px"
                    className="object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center border border-dashed border-border-light text-[10px] text-muted/60">
                    Image
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
