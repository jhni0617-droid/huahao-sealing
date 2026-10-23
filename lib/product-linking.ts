/**
 * 产品内链推荐（SEO 收录修复）
 *
 * 背景（2026-10-23 GSC 诊断）：
 * 站内 24 个型号产品页每个只有 2~4 条内链，7 语言全部「已发现 - 尚未编入索引」（168 个 URL）；
 * 而 4 个品类落地页有 45~72 条内链，全部已收录。差距的来源是：
 * 每篇博客正文里都硬编码了指向同样 4 个品类页的链接，型号页从 889 个博客页面里拿不到任何入口。
 *
 * 本模块按关键词相关度，把博客文章匹配到具体型号产品页，
 * 在博客详情页渲染「相关产品」区块，给型号页补充高权重入口。
 */

import { productsByLocale } from "./translations-products"

/** 品类落地页：每篇博客正文均已硬编码链接，不计入推荐，避免重复且无新增入口 */
const CATEGORY_LANDING_SLUGS = new Set([
  "seal-rings",
  "carbon-graphite-bushings",
  "carbon-graphite-bearings",
  "three-piece-carbon-seal-rings",
])

/** 型号核心词过短或易误判的，不进索引 */
const MODEL_DENYLIST = new Set(["f", "us", "type", "series"])

export interface RelatedProduct {
  slug: string
  name: string
  model: string
  score: number
}

interface KeywordEntry {
  keyword: string
  weight: number
  /** 是否按整词匹配（字母型号必须整词，避免 "press" 命中 "pressure"） */
  wordBoundary: boolean
}

/** 从 model 字段提取型号核心词："104 Series"→104，"58U系列"→58u，"BIA Series"→bia */
function modelCores(model: string): string[] {
  const s = model.toLowerCase()
  const cores = new Set<string>()

  const alnum = s.match(/[a-z]*\d+[a-z]*/g) ?? []
  for (const t of alnum) {
    if (t.length >= 2 && !MODEL_DENYLIST.has(t)) cores.add(t)
  }

  // 无数字的纯字母型号（BIA / FBD / G6 之外的命名型）
  if (cores.size === 0) {
    const words = s.split(/[\s,，、/()（）.-]+/).filter(Boolean)
    for (const w of words) {
      if (w.length >= 3 && !MODEL_DENYLIST.has(w) && !/^\d+$/.test(w)) {
        cores.add(w)
        break
      }
    }
  }

  return [...cores]
}

/** 为一个产品构建关键词索引（按语种取本地化字段） */
function buildKeywords(product: {
  name: string
  model: string
  category: string
  applications: string[]
  materials: string[]
}): KeywordEntry[] {
  const entries: KeywordEntry[] = []

  for (const core of modelCores(product.model)) {
    // 型号一律整词匹配：纯数字型号（104/120/2100）若走子串匹配，
    // 会被 "120℃"、"1040 mm" 之类的工况参数误命中，导致个别型号被过度推荐
    entries.push({ keyword: core, weight: 6, wordBoundary: true })
  }

  if (product.name.length >= 4) {
    entries.push({ keyword: product.name.toLowerCase(), weight: 4, wordBoundary: false })
  }

  for (const app of product.applications) {
    if (app.length >= 2) entries.push({ keyword: app.toLowerCase(), weight: 2, wordBoundary: false })
  }

  for (const mat of product.materials) {
    if (mat.length >= 3) entries.push({ keyword: mat.toLowerCase(), weight: 1, wordBoundary: false })
  }

  return entries
}

function countOccurrences(haystack: string, needle: string, wordBoundary: boolean): number {
  if (!needle) return 0
  const pattern = wordBoundary
    ? new RegExp(`(^|[^\\p{L}\\p{N}])(${needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})($|[^\\p{L}\\p{N}])`, "gu")
    : null
  if (pattern) {
    const m = haystack.match(pattern)
    return m ? m.length : 0
  }
  let count = 0
  let idx = haystack.indexOf(needle)
  while (idx !== -1) {
    count++
    idx = haystack.indexOf(needle, idx + needle.length)
  }
  return count
}

/** 标签 → 兜底推荐型号（关键词无命中时用，保证区块不为空）。
 *  只允许填 `lib/products.ts` 里真实存在的产品 slug —— 填不存在的 slug 会被静默跳过，
 *  导致兜底数量不足、区块少渲染一张卡片。 */
const TAG_FALLBACK: Record<string, string[]> = {
  material: ["graphite-bushing", "graphite-bearing", "three-part-series", "graphite-thrust-disc"],
  selection: ["104-series", "109-series", "us-series", "527-series"],
  application: ["m7n-series", "206-series", "press-series", "oil-pump-double-seal"],
  process: ["104-series", "109-series", "fbd-series", "g6-series"],
  precision: ["104-series", "109-series", "1527-series", "2100-series"],
  maintenance: ["graphite-bushing", "graphite-bearing", "three-part-series", "oil-pump-double-seal"],
  faq: ["104-series", "bia-series", "f-type-series", "graphite-thrust-disc"],
  news: ["bia-series", "f-type-series", "graphite-bearing", "dyeing-machine-series"],
}

/**
 * 为一篇博客文章推荐相关型号产品页。
 *
 * @param post   博客文章（需含本地化 title/excerpt/content）
 * @param locale 当前语种
 * @param count  返回数量
 */
export function getRelatedProductsForPost(
  post: {
    title: Record<string, string | undefined>
    excerpt: Record<string, string | undefined>
    content: Record<string, string | undefined>
    tag: string
  },
  locale: string,
  count = 3
): RelatedProduct[] {
  const pool = productsByLocale[locale] ?? productsByLocale.en
  const title = post.title[locale] ?? post.title.en ?? post.title.zh ?? ""
  const excerpt = post.excerpt[locale] ?? post.excerpt.en ?? post.excerpt.zh ?? ""
  const content = post.content[locale] ?? post.content.en ?? post.content.zh ?? ""

  // 标题权重最高：标题里出现的关键词额外加权
  const titleText = ` ${title.toLowerCase()} `
  const bodyText = `${excerpt} ${content}`.toLowerCase()

  const scored: RelatedProduct[] = []
  for (const product of pool) {
    if (CATEGORY_LANDING_SLUGS.has(product.slug)) continue
    const keywords = buildKeywords(product)
    let score = 0
    for (const { keyword, weight, wordBoundary } of keywords) {
      const inTitle = countOccurrences(titleText, keyword, wordBoundary)
      if (inTitle > 0) score += weight * 3 * Math.min(inTitle, 2)
      const inBody = countOccurrences(bodyText, keyword, wordBoundary)
      if (inBody > 0) score += weight * Math.min(inBody, 3)
    }
    if (score >= 4) scored.push({ slug: product.slug, name: product.name, model: product.model, score })
  }

  scored.sort((a, b) => b.score - a.score)
  const picked = scored.slice(0, count)

  // 不足时用标签兜底补齐（同样排除品类页与已选中的）
  if (picked.length < count) {
    const chosen = new Set(picked.map((p) => p.slug))
    for (const slug of TAG_FALLBACK[post.tag] ?? TAG_FALLBACK.faq) {
      if (picked.length >= count) break
      if (chosen.has(slug)) continue
      const product = pool.find((p) => p.slug === slug)
      if (!product || CATEGORY_LANDING_SLUGS.has(slug)) continue
      picked.push({ slug: product.slug, name: product.name, model: product.model, score: 0 })
      chosen.add(slug)
    }
  }

  return picked
}
