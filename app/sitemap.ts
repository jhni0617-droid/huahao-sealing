import { products } from "@/lib/products"

const baseUrl = "https://huahao-sealing.vercel.app"

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
  const routes = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }))

  const productRoutes = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: "0.6",
  }))

  return [...routes, ...productRoutes]
}
