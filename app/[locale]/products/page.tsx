import Image from "next/image"
import { Link } from "@/i18n/routing"
import { products, categories, getCategoryCounts, getProductsByCategory } from "@/lib/products"
import CTASection from "@/components/CTASection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "产品中心 | 碳石墨密封环、轴套与三瓣环",
  description: "主营产品：碳石墨密封环、碳石墨轴套、碳石墨三瓣环，支持按图定制。",
  path: "/products",
})

export default function ProductsPage() {
  const counts = getCategoryCounts()

  const categorizedProducts = categories.map((cat) => ({
    ...cat,
    count: counts[cat.slug] || 0,
    items: getProductsByCategory(cat.slug),
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
            <div key={cat.slug} id={cat.slug} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-primary">{cat.name}</h2>
                <span className="text-sm text-muted bg-gray-100 px-3 py-1 rounded-full">
                  {cat.count} 个产品
                </span>
              </div>

              <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.items.map((product) => (
                  <Link key={product.slug} href={`/products/${product.slug}`} className="card p-4 flex flex-col group hover:shadow-md transition-shadow">
                    {product.image && (
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-50 mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-3"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    )}
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                    <p className="text-xs text-muted leading-relaxed flex-1">{product.shortDesc}</p>
                    {cat.slug !== "seal-rings" && product.applications.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
                        {product.applications.slice(0, 3).map((app) => (
                          <span key={app} className="text-[10px] bg-gray-50 border border-border px-1.5 py-0.5 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    )}
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
