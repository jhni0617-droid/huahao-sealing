import { getLocale, getTranslations } from "next-intl/server"
import ProductsPageContent from "./products-content"
import { generateMeta } from "@/lib/utils"

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

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("pageTitle")}</h1>
          <div className="w-14 h-0.5 bg-accent rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            {t("pageSubtitle")}
          </p>
        </div>
      </section>

      <ProductsPageContent />
    </>
  )
}
