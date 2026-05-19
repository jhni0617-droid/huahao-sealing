import { products } from "@/lib/products"
import { routing } from "@/i18n/routing"

const baseUrl = "https://huahaoindustrial.com"

const staticRoutes = [
  { path: "", priority: "1.0" },
  { path: "/products", priority: "0.9" },
  { path: "/applications", priority: "0.8" },
  { path: "/cases", priority: "0.7" },
  { path: "/faq", priority: "0.7" },
  { path: "/about", priority: "0.7" },
  { path: "/contact", priority: "0.8" },
]

export default async function sitemap() {
  const defaultLocale = routing.defaultLocale
  const locales = routing.locales

  const routes = staticRoutes.flatMap((r) => {
    const entries = locales.map((locale) => ({
      url: locale === defaultLocale
        ? `${baseUrl}${r.path}`
        : `${baseUrl}/${locale}${r.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: r.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, l === defaultLocale
            ? `${baseUrl}${r.path}`
            : `${baseUrl}/${l}${r.path}`])
        ),
      },
    }))
    return entries
  })

  const productRoutes = products.flatMap((p) =>
    locales.map((locale) => ({
      url: locale === defaultLocale
        ? `${baseUrl}/products/${p.slug}`
        : `${baseUrl}/${locale}/products/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: "0.6" as const,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, l === defaultLocale
            ? `${baseUrl}/products/${p.slug}`
            : `${baseUrl}/${l}/products/${p.slug}`])
        ),
      },
    }))
  )

  return [...routes, ...productRoutes]
}
