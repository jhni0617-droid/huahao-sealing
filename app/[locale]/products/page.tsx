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

/**
 * 产品目录页。
 *
 * 目录主体是服务端组件（products-content.tsx），全部产品链接都在交付 HTML 里；
 * 搜索与分类筛选是对已渲染卡片的客户端显隐（products-filters.tsx），不需要 Suspense。
 * 若将来要支持 ?category= 深链，请建成真实路由并进 sitemap，不要退回
 * 「useSearchParams + <Suspense>」—— 那会让整个目录对爬虫变成空壳。
 */
export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("products")

  // 服务端按当前语言取数，客户端控件组件不再 import 任何数据模块
  const data = getProductsPageData(locale)

  return (
    <>
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/products" }]} locale={locale} />

      <ProductsPageContent {...data} />
    </>
  )
}
