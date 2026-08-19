import { products } from "@/lib/products"
import { blogPosts } from "@/lib/blog-data"
import { industryLandings } from "@/lib/industry-landing-data"
import { comparisons } from "@/lib/compare-data"
import { routing } from "@/i18n/routing"

const baseUrl = "https://huahaoindustrial.com"

// 内容页面更新不频繁，使用稳定的最后修改日期（而非每次构建都变的 new Date()）
const CONTENT_LAST_MODIFIED = "2026-06-01"

const staticRoutes = [
  { path: "", priority: "1.0" },
  { path: "/products", priority: "0.9" },
  { path: "/applications", priority: "0.8" },
  { path: "/cases", priority: "0.7" },
  { path: "/factory", priority: "0.7" },
  { path: "/blog", priority: "0.8" },
  { path: "/faq", priority: "0.7" },
  { path: "/about", priority: "0.7" },
  { path: "/contact", priority: "0.8" },
  { path: "/technical-params", priority: "0.7" },
  { path: "/compare", priority: "0.7" },
]

export default async function sitemap() {
  const locales = routing.locales

  // localePrefix: "always" —— 所有语言（含默认语言 en）都带前缀，规范 URL 如 https://huahaoindustrial.com/en/products
  const routes = staticRoutes.flatMap((r) => {
    const entries = locales.map((locale) => ({
      url: `${baseUrl}/${locale}${r.path}`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: r.priority,
      alternates: {
        languages: Object.fromEntries(
          [
            ["x-default", `${baseUrl}/en${r.path}`],
            ...locales.map((l) => [l, `${baseUrl}/${l}${r.path}`]),
          ]
        ),
      },
    }))
    return entries
  })

  const productRoutes = products.flatMap((p) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/products/${p.slug}`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: "0.6" as const,
      alternates: {
        languages: Object.fromEntries(
          [
            ["x-default", `${baseUrl}/en/products/${p.slug}`],
            ...locales.map((l) => [l, `${baseUrl}/${l}/products/${p.slug}`]),
          ]
        ),
      },
    }))
  )

  const blogRoutes = blogPosts.flatMap((p) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: "0.7" as const,
      alternates: {
        languages: Object.fromEntries(
          [
            ["x-default", `${baseUrl}/en/blog/${p.slug}`],
            ...locales.map((l) => [l, `${baseUrl}/${l}/blog/${p.slug}`]),
          ]
        ),
      },
    }))
  )

  const industryRoutes = industryLandings.flatMap((item) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/applications/${item.slug}`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: "0.7" as const,
      alternates: {
        languages: Object.fromEntries(
          [
            ["x-default", `${baseUrl}/en/applications/${item.slug}`],
            ...locales.map((l) => [l, `${baseUrl}/${l}/applications/${item.slug}`]),
          ]
        ),
      },
    }))
  )

  const comparisonRoutes = comparisons.flatMap((item) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/compare/${item.slug}`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: "0.6" as const,
      alternates: {
        languages: Object.fromEntries(
          [
            ["x-default", `${baseUrl}/en/compare/${item.slug}`],
            ...locales.map((l) => [l, `${baseUrl}/${l}/compare/${item.slug}`]),
          ]
        ),
      },
    }))
  )

  return [...routes, ...productRoutes, ...blogRoutes, ...industryRoutes, ...comparisonRoutes]
}
