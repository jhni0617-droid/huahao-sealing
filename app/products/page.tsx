import Link from "next/link"
import { products, categories, getCategoryCounts } from "@/lib/products"
import CTASection from "@/components/CTASection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "产品中心 | 碳石墨密封件与机械密封",
  description: "浏览我们产品系列，包括碳石墨密封环、碳石墨套、碳石墨三瓣环、碳石墨轴承及机械密封等。",
  path: "/products",
})

export default function ProductsPage() {
  const counts = getCategoryCounts()

  const categorizedProducts = categories.map((cat) => ({
    ...cat,
    count: counts[cat.slug] || 0,
    items: products.filter((p) => p.category.toLowerCase().replace(/\s+/g, "-") === cat.slug),
  }))

  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">产品中心</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            全系列碳石墨密封解决方案，满足每一种工业应用需求。每件产品都经过精心设计，确保可靠性、耐用性和卓越性能。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {categorizedProducts.map((cat) => (
            <div key={cat.slug} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-primary">{cat.name}</h2>
                <span className="text-sm text-muted bg-gray-100 px-3 py-1 rounded-full">
                  {cat.count} {cat.count === 1 ? "个产品" : "个产品"}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((product) => (
                  <Link key={product.slug} href={`/products/${product.slug}`} className="card p-6 flex flex-col group">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                    <p className="text-sm text-muted mb-1">{product.model}</p>
                    <p className="text-sm text-muted leading-relaxed mt-3 flex-1">{product.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                      {product.applications.slice(0, 3).map((app) => (
                        <span key={app} className="text-xs bg-gray-50 border border-border px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="需要帮助选择合适的产品？"
        subtitle="描述您的应用工况，我们的工程师将在24小时内推荐最佳产品方案。"
      />
    </>
  )
}
