import { Suspense } from "react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import ProductsPageContent from "./products-content"
import { generateMeta } from "@/lib/utils"
import Breadcrumb from "@/components/Breadcrumb"
import { getProductsPageData } from "@/lib/products-page-data"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "products" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/products",
    locale,
  })
}

/** 筛选器骨架，避免 <Suspense> 期间布局跳动 */
function ProductsFallback() {
  return (
    <div className="container-wide py-16">
      <div className="h-8 w-64 animate-pulse bg-border" />
      <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-72 animate-pulse bg-white" />
        ))}
      </div>
    </div>
  )
}

/**
 * 注意：这里**不读 searchParams**。
 * 之前 `await searchParams` 取 ?category= 会让整个路由退化为「每请求 SSR」，
 * 现在取参搬到客户端组件里用 useSearchParams()，页面恢复静态预渲染。
 * 代价是需要 <Suspense> 包裹使用 useSearchParams 的组件。
 */
export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("products")

  // 服务端按当前语言取数，客户端组件不再 import 任何数据模块
  const data = getProductsPageData(locale)

  return (
    <>
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/products" }]} locale={locale} />

      <Suspense fallback={<ProductsFallback />}>
        <ProductsPageContent {...data} />
      </Suspense>
    </>
  )
}
