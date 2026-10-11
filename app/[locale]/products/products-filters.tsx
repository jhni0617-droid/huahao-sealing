"use client"

import { useEffect, useMemo, useState } from "react"
import { Link } from "@/i18n/routing"
import Icon from "@/components/ui/Icon"
import type { ProductSearchRow } from "@/lib/products-page-data"

type CategoryTab = { slug: string; name: string; count: number }

type Props = {
  categoryTabs: CategoryTab[]
  allLabel: string
  allCount: number
  searchPlaceholder: string
  drawingLabel: string
  applicationsLabel: string
  referenceNote: string
  searchIndex: ProductSearchRow[]
}

/**
 * 产品目录的搜索框 + 分类筛选。
 *
 * 它只负责「显隐」服务端已经渲染出来的卡片（`#products-grid` 里带 data-product-slug 的元素），
 * 不再自己渲染列表。这样全部产品链接都会出现在交付给爬虫的 HTML 里 ——
 * 之前整个目录挂在 useSearchParams + <Suspense> 后面，静态路由下服务端只吐骨架，
 * /products 交付的 HTML 里一条产品链接都没有。
 *
 * 用 inline style 而不是 hidden 属性 / class 切换：卡片自带 `flex`，
 * UA 的 [hidden]{display:none} 会被作者样式覆盖，class 又和 `flex` 同权重看打包顺序。
 */
export default function ProductsFilters({
  categoryTabs,
  allLabel,
  allCount,
  searchPlaceholder,
  drawingLabel,
  applicationsLabel,
  referenceNote,
  searchIndex,
}: Props) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [query, setQuery] = useState("")

  const knownSlugs = useMemo(() => new Set(categoryTabs.map((cat) => cat.slug)), [categoryTabs])
  const textBySlug = useMemo(() => new Map(searchIndex.map((row) => [row.slug, row.text])), [searchIndex])

  // 兼容 /products#seal-rings 形式的锚点链接：命中分类时直接激活对应筛选。
  // 必须放在 effect 里而不是 useState 惰性初始化 —— 服务端渲染时读不到 hash，
  // 若在初始化阶段读会与 SSR 结果不一致，导致 hydration mismatch。
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    // 这里读的是浏览器地址栏（React 之外的外部状态），且必须在挂载后执行；
    // 上面的注释解释了为什么不能改成惰性初始化。规则属于启发式误报，故本地放行。
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (hash && knownSlugs.has(hash)) setActiveCategory(hash)
  }, [knownSlugs])

  useEffect(() => {
    const grid = document.getElementById("products-grid")
    const empty = document.getElementById("products-empty")
    if (!grid) return

    const q = query.trim().toLowerCase()
    let visible = 0

    for (const card of Array.from(grid.querySelectorAll<HTMLElement>("[data-product-slug]"))) {
      const slug = card.dataset.productSlug || ""
      const cats = (card.dataset.cats || "").split(" ").filter(Boolean)
      const matchesCategory = activeCategory === "all" || cats.includes(activeCategory)
      const matchesQuery = !q || (textBySlug.get(slug) || "").includes(q)
      const show = matchesCategory && matchesQuery
      card.style.display = show ? "" : "none"
      if (show) visible += 1
    }

    grid.style.display = visible > 0 ? "" : "none"
    if (empty) empty.style.display = visible > 0 ? "none" : ""
  }, [activeCategory, query, textBySlug])

  return (
    <>
      <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <label className="relative block">
          <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="form-input rounded-none pl-11"
            placeholder={searchPlaceholder}
            aria-label="Search products"
          />
        </label>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            {drawingLabel}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
          <Link href="/applications" className="btn-secondary">
            {applicationsLabel}
          </Link>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`border px-4 py-2 text-sm font-semibold transition-colors ${
            activeCategory === "all"
              ? "border-accent bg-accent text-white"
              : "border-border bg-white text-primary hover:border-accent hover:text-accent"
          }`}
        >
          {allLabel}
          <span className="ml-2 text-xs opacity-70">{allCount}</span>
        </button>
        {categoryTabs.map((cat) => (
          <button
            key={cat.slug}
            id={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`scroll-mt-28 border px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === cat.slug
                ? "border-accent bg-accent text-white"
                : "border-border bg-white text-primary hover:border-accent hover:text-accent"
            }`}
          >
            {cat.name}
            <span className="ml-2 text-xs opacity-70">{cat.count}</span>
          </button>
        ))}
        <span className="ml-auto hidden text-xs leading-relaxed text-muted lg:block">{referenceNote}</span>
      </div>
    </>
  )
}
