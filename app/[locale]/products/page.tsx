import { getTranslations, setRequestLocale } from "next-intl/server"
import ProductsPageContent from "./products-content"
import { generateMeta } from "@/lib/utils"
import Breadcrumb from "@/components/Breadcrumb"

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

export default async function ProductsPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams?: Promise<{ category?: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("products")
  const { category } = (await searchParams) ?? {}

  return (
    <>
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/products" }]} locale={locale} />

      <ProductsPageContent initialCategory={category} />
    </>
  )
}
