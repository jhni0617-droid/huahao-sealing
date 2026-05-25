"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { getProductsByCategory } from "@/lib/products"
import { getEnProductsByCategory } from "@/lib/products-en"
import {
  productsByLocale, categoriesByLocale,
  getViProductsByCategory, getThProductsByCategory, getRuProductsByCategory, getJaProductsByCategory, getKoProductsByCategory,
} from "@/lib/translations-products"
import CTASection from "@/components/CTASection"
import SpecBadge from "@/components/ui/SpecBadge"
import type { Product } from "@/lib/products"

export default function ProductsPageContent() {
  const locale = useLocale()
  const t = useTranslations("products")
  const dt = useTranslations("productDetail")

  const catList = categoriesByLocale[locale] || categoriesByLocale.en
  const getItemsMap: Record<string, (slug: string) => Product[]> = {
    zh: getProductsByCategory,
    en: getEnProductsByCategory,
    vi: getViProductsByCategory,
    th: getThProductsByCategory,
    ru: getRuProductsByCategory,
    ja: getJaProductsByCategory,
    ko: getKoProductsByCategory,
  }
  const getItems = getItemsMap[locale] || getItemsMap.en
  const allProducts = productsByLocale[locale] || productsByLocale.en

  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return allProducts
    return getItems(activeCategory)
  }, [activeCategory, allProducts, getItems])

  const getSpec = (product: typeof allProducts[0], labelZh: string, labelEn: string) => {
    return product.specs.find((s) => s.label === labelZh || s.label === labelEn)
  }

  return (
    <>
      {/* Category Tabs */}
      <section className="sticky top-16 z-30 bg-white/95 border-b border-border backdrop-blur-md">
        <div className="container-wide">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-primary hover:bg-gray-50"
              }`}
            >
              {t("all")}
              <span className="ml-1.5 text-xs opacity-70">({allProducts.length})</span>
            </button>
            {catList.map((cat) => {
              const count = getItems(cat.slug).length
              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                    activeCategory === cat.slug
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {cat.name}
                  <span className="ml-1.5 text-xs opacity-70">({count})</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => {
              const tempSpec = getSpec(product, "温度范围", "Temperature")
              const pressureSpec = getSpec(product, "压力", "Pressure")
              const speedSpec = getSpec(product, "转速", "Speed")

              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="card-static group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
                >
                  {product.image && (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-7 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  )}

                  <div className="p-5 flex flex-col flex-1 border-t border-border">
                    <div className="text-xs font-semibold text-accent uppercase tracking-[0.08em] mb-2">{product.category}</div>
                    <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                    <p className="text-xs text-muted mb-4 flex-1 line-clamp-2 leading-relaxed">{product.shortDesc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {tempSpec && <SpecBadge icon="thermometer" label={dt("specTemp")} value={tempSpec.value} />}
                      {pressureSpec && <SpecBadge icon="gear" label={dt("specPressure")} value={pressureSpec.value} />}
                      {speedSpec && <SpecBadge icon="clock" label={dt("specSpeed")} value={speedSpec.value} />}
                    </div>

                    {product.applications.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border mt-auto">
                        {product.applications.slice(0, 3).map((app) => (
                          <span key={app} className="tag">
                            {app}
                          </span>
                        ))}
                        {product.applications.length > 3 && (
                          <span className="tag">+{product.applications.length - 3}</span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 text-muted">
              {t("empty")}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
      />
    </>
  )
}
