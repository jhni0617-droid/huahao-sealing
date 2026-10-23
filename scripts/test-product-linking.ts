import { blogPosts } from "../lib/blog-data"
import { getRelatedProductsForPost } from "../lib/product-linking"
import { products } from "../lib/products"

const locales = ["zh", "en", "vi", "th", "ru", "ja", "ko"]

// 0) 自检：TAG_FALLBACK 里的 slug 必须真实存在，否则兜底会静默断档
const realSlugs = new Set(products.map((p) => p.slug))
console.log("产品池 slug 数:", realSlugs.size)
let badSlug = 0
for (const p of blogPosts) {
  const r = getRelatedProductsForPost(p, "zh", 3)
  for (const x of r) {
    if (!realSlugs.has(x.slug)) { console.log("  ✗ 不存在的 slug:", x.slug, "来自文章", p.slug); badSlug++ }
  }
}
console.log(badSlug === 0 ? "✓ 所有推荐 slug 均真实存在" : `✗ ${badSlug} 个无效 slug`)

// 1) 覆盖率：有多少文章能拿到关键词命中（score>0），多少走了兜底
for (const loc of locales) {
  let hit = 0
  let fallback = 0
  let empty = 0
  const dist = new Map<string, number>()
  for (const p of blogPosts) {
    const r = getRelatedProductsForPost(p, loc, 3)
    if (r.length === 0) empty++
    else if (r.some((x) => x.score > 0)) hit++
    else fallback++
    for (const x of r) dist.set(x.slug, (dist.get(x.slug) ?? 0) + 1)
  }
  console.log(`\n[${loc}] 命中=${hit} 兜底=${fallback} 空=${empty} / 共 ${blogPosts.length}`)
  const top = [...dist.entries()].sort((a, b) => b[1] - a[1])
  console.log("  被推荐次数 Top12:", top.slice(0, 12).map(([k, v]) => `${k}:${v}`).join("  "))
  const zero = top.filter(([, v]) => v === 0).map(([k]) => k)
  console.log("  从未被推荐:", zero.length ? zero.join(",") : "（无）")
}

// 2) 抽样人工检查相关性
console.log("\n\n================ 抽样检查（zh）================")
const samples = [
  "carbon-graphite-seal-ring-basics",
  "graphite-bushing-self-lubrication",
  "graphite-hardness-wear-resistance",
  "impregnated-graphite-types",
  "centrifugal-compressor-labyrinth-seal-carbon-graphite",
  "marine-stern-shaft-graphite-seal",
]
for (const slug of samples) {
  const p = blogPosts.find((x) => x.slug === slug)
  if (!p) { console.log(`(缺) ${slug}`); continue }
  const r = getRelatedProductsForPost(p, "zh", 3)
  console.log(`\n《${p.title.zh}》 tag=${p.tag}`)
  console.log("  →", r.map((x) => `${x.slug}(score=${x.score})`).join(", ") || "（无）")
}
