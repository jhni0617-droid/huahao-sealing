/**
 * 博客列表页的服务端取数。
 *
 * 为什么要单独放这里：
 * `app/[locale]/blog/page.tsx` 之前 `await searchParams` 取 ?tag=，
 * 这让整个路由退化为「每请求 SSR」（App Router 里读取 searchParams 的页面无法静态化）。
 *
 * 现在把标签筛选搬到客户端的 `blog-list.tsx`，页面即可恢复静态预渲染。
 * 代价是要把「当前语言」的文章列表数据作为 props 传下去，
 * 所以这里只产出**序列化友好**的结构（纯字符串，不含函数、不含其它 6 种语言）。
 */
import { blogPostsMeta } from "./blog-data"

/** 列表页每条文章需要的字段（title/excerpt 已解析成当前语言的字符串） */
export type BlogListItem = {
  slug: string
  tag: string
  date: string
  pinned: boolean
  title: string
  excerpt: string
}

const MONTH_NAMES_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

/** 各语言的「年月」文案。传入 "2026-06" 返回该语言的可读月份。 */
function formatMonth(ym: string, locale: string): string {
  const year = ym.slice(0, 4)
  const month = parseInt(ym.slice(5, 7), 10)
  switch (locale) {
    case "zh":
    case "ja":
      return year + "年" + month + "月"
    case "vi":
      return "Tháng " + month + " " + year
    case "th":
      return "เดือน " + month + " " + year
    case "ru":
      return year + " г. " + month + " мес."
    case "ko":
      return year + "년 " + month + "월"
    default:
      return MONTH_NAMES_EN[month - 1] + " " + year
  }
}

function pick(obj: Record<string, string | undefined>, locale: string): string {
  return obj[locale] ?? obj.en ?? obj.zh ?? ""
}

export type BlogListData = {
  /** 当前语言的全部文章（含置顶），顺序与 blogPostsMeta 一致 */
  items: BlogListItem[]
  /** 全部出现过的年月 → 当前语言的可读月份文案 */
  monthLabels: Record<string, string>
}

/**
 * 取博客列表页数据。
 * 只解析当前语言的 title/excerpt —— 避免把 7 种语言的文案都塞进 RSC 载荷。
 */
export function getBlogListData(locale: string): BlogListData {
  const items: BlogListItem[] = blogPostsMeta.map((post) => ({
    slug: post.slug,
    tag: post.tag,
    date: post.date,
    pinned: Boolean(post.pinned),
    title: pick(post.title, locale),
    excerpt: pick(post.excerpt, locale),
  }))

  const monthLabels: Record<string, string> = {}
  for (const item of items) {
    const ym = item.date.slice(0, 7)
    if (!monthLabels[ym]) monthLabels[ym] = formatMonth(ym, locale)
  }

  return { items, monthLabels }
}
