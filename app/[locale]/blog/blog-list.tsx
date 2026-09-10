"use client"

import { useMemo } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Link } from "@/i18n/routing"
import type { BlogListItem } from "@/lib/blog-list-data"

/* 置顶公司新闻封面：按 slug 映射工厂实拍图（见 public/images/factory/） */
const pinnedCovers: Record<string, string> = {
  "huahao-relocated-to-luan-2018": "/images/factory/company-plaque-2018.webp",
  "cnc-machining-upgrade-2020": "/images/factory/cnc-turning-graphite.webp",
  "self-built-factory-2021": "/images/factory/factory-aerial-2021.webp",
}

/* 标签文案：与筛选逻辑在同一处，改标签只需改这里 */
const tagLabelsByLocale: Record<string, Record<string, string>> = {
  zh: { process: "加工工艺", selection: "材料选型", precision: "精度控制", news: "行业动态", faq: "技术问答", application: "应用案例", maintenance: "维护保养", material: "材料特性" },
  en: { process: "Process", selection: "Selection", precision: "Precision", news: "News", faq: "FAQ", application: "Application", maintenance: "Maintenance", material: "Material" },
  vi: { process: "Công nghệ", selection: "Chọn vật liệu", precision: "Chính xác", news: "Tin tức", faq: "FAQ", application: "Ứng dụng", maintenance: "Bảo trì", material: "Vật liệu" },
  th: { process: "กระบวนการ", selection: "เลือกวัสดุ", precision: "ความแม่นยำ", news: "ข่าวสาร", faq: "FAQ", application: "การประยุกต์", maintenance: "บำรุงรักษา", material: "วัสดุ" },
  ru: { process: "Процессы", selection: "Выбор", precision: "Точность", news: "Новости", faq: "FAQ", application: "Применение", maintenance: "Обслуживание", material: "Материал" },
  ja: { process: "加工技術", selection: "材料選択", precision: "精密", news: "ニュース", faq: "FAQ", application: "応用", maintenance: "メンテナンス", material: "材料" },
  ko: { process: "공정", selection: "재료 선택", precision: "정밀", news: "뉴스", faq: "FAQ", application: "응용", maintenance: "유지보수", material: "재료" },
}

// 注意：`posts`（文章计数单位）故意只区分中英两种 —— 与原实现保持一致，
// 不在这里新增未经校对的其它语言译文（原先非中文/英文语言也是回落到 "posts"）。
const copy = {
  zh: { filter: "当前筛选", clear: "清除筛选", pinned: "公司新闻" },
  en: { filter: "Filtered by", clear: "Clear filter", pinned: "Company News" },
  vi: { filter: "Đang lọc", clear: "Xóa bộ lọc", pinned: "Tin công ty" },
  th: { filter: "กำลังกรอง", clear: "ล้างตัวกรอง", pinned: "ข่าวบริษัท" },
  ru: { filter: "Фильтр", clear: "Сбросить фильтр", pinned: "Новости компании" },
  ja: { filter: "絞り込み", clear: "フィルタを解除", pinned: "会社ニュース" },
  ko: { filter: "필터", clear: "필터 해제", pinned: "회사 소식" },
} as const

type Props = {
  items: BlogListItem[]
  monthLabels: Record<string, string>
  locale: string
  readMore: string
}

/**
 * 博客列表（含标签筛选）。
 *
 * 标签筛选放在客户端：`useSearchParams()` 读取 ?tag=，从而让页面本身保持静态预渲染。
 * 外层必须用 <Suspense> 包裹，见 app/[locale]/blog/page.tsx。
 */
export default function BlogList({ items, monthLabels, locale, readMore }: Props) {
  const searchParams = useSearchParams()
  const c = copy[(locale as keyof typeof copy)] ?? copy.en
  const tagLabels = tagLabelsByLocale[locale] ?? tagLabelsByLocale.en
  const postsUnit = locale === "zh" ? "篇" : "posts"

  const { activeTag, pinnedPosts, grouped, months } = useMemo(() => {
    const rawTag = searchParams.get("tag")
    const valid = rawTag && tagLabels[rawTag] ? rawTag : null

    const pinned = items.filter((p) => p.pinned && (!valid || p.tag === valid))
    const listed = valid ? items.filter((p) => p.tag === valid && !p.pinned) : items.filter((p) => !p.pinned)

    const g: Record<string, BlogListItem[]> = {}
    for (const post of listed) {
      const ym = post.date.slice(0, 7) // "2026-06"
      if (!g[ym]) g[ym] = []
      g[ym].push(post)
    }

    return {
      activeTag: valid,
      pinnedPosts: pinned,
      grouped: g,
      months: Object.keys(g).sort((a, b) => b.localeCompare(a)),
    }
  }, [items, searchParams, tagLabels])

  return (
    <div className="container-wide">
      {activeTag && (
        <div className="mb-10 flex flex-wrap items-center gap-3 border border-border bg-white px-4 py-3">
          <span className="text-sm text-muted">{c.filter}</span>
          <span className="border border-accent/30 bg-accent/5 px-2.5 py-1 text-xs font-bold text-accent">
            {tagLabels[activeTag] || activeTag}
          </span>
          <Link href="/blog" className="ml-auto text-xs font-semibold text-accent hover:underline">
            {c.clear}
          </Link>
        </div>
      )}

      {/* 置顶公司新闻（带封面图） */}
      {pinnedPosts.length > 0 && (
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-serif-sc text-2xl font-bold text-primary">{c.pinned}</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pinnedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden border border-border bg-white transition-shadow hover:shadow-lg">
                <div className="relative aspect-[16/9] overflow-hidden bg-background">
                  <Image
                    src={pinnedCovers[post.slug] ?? "/images/og-banner.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <span className="border border-accent/30 bg-accent/5 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
                      {tagLabels[post.tag] || post.tag}
                    </span>
                    <span className="text-[11px] text-muted">{post.date}</span>
                  </div>
                  <h3 className="mt-2 font-serif-sc text-lg font-bold leading-snug text-primary transition-colors line-clamp-2 group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">{post.excerpt}</p>
                  <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-accent">
                    {readMore}
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {months.map((ym) => (
        <div key={ym} className="mb-12 last:mb-0">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-serif-sc text-2xl font-bold text-primary">{monthLabels[ym] ?? ym}</h2>
            <span className="text-sm text-muted">({grouped[ym].length} {postsUnit})</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {grouped[ym].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-white">
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
                      {tagLabels[post.tag] || post.tag}
                    </span>
                    <span className="text-[11px] text-muted">{post.date.slice(5)}</span>
                  </div>
                  <h3 className="mt-2 font-serif-sc text-base font-bold leading-snug text-primary transition-colors group-hover:text-accent line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">{post.excerpt}</p>
                  <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-accent">
                    {readMore}
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
