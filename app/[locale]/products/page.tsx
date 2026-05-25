import { getLocale, getTranslations } from "next-intl/server"
import ProductsPageContent from "./products-content"
import { generateMeta } from "@/lib/utils"
import PageHero from "@/components/PageHero"

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations("products")
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/products",
    locale,
  })
}

export default async function ProductsPage() {
  const locale = await getLocale()
  const t = await getTranslations("products")
  const isZh = locale === "zh"

  return (
    <>
      <PageHero
        eyebrow={isZh ? "产品中心" : "Product portfolio"}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        primaryLabel={isZh ? "提交图纸询价" : "Request Quote"}
        secondaryLabel={isZh ? "查看应用场景" : "View Applications"}
        secondaryHref="/applications"
        stats={[
          { value: "3", label: isZh ? "核心产品线" : "Core product lines" },
          { value: "OEM", label: isZh ? "按图加工" : "Drawing-based" },
          { value: "24h", label: isZh ? "响应询盘" : "Response" },
        ]}
      />

      <ProductsPageContent />
    </>
  )
}
