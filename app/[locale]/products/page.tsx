import { getLocale, getTranslations, setRequestLocale } from "next-intl/server"
import ProductsPageContent from "./products-content"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import PageHero from "@/components/PageHero"
import Breadcrumb from "@/components/Breadcrumb"

const heroCopy = {
  zh: {
    eyebrow: "产品中心",
    primary: "提交图纸询价",
    secondary: "查看应用场景",
    stats: ["核心产品线", "按图加工", "响应询盘"],
  },
  en: {
    eyebrow: "Product portfolio",
    primary: "Request Quote",
    secondary: "View Applications",
    stats: ["Core product lines", "Drawing-based", "Response"],
  },
  vi: {
    eyebrow: "Danh mục sản phẩm",
    primary: "Gửi bản vẽ báo giá",
    secondary: "Xem ứng dụng",
    stats: ["Dòng sản phẩm chính", "Gia công theo bản vẽ", "Phản hồi"],
  },
  th: {
    eyebrow: "กลุ่มสินค้า",
    primary: "ส่งแบบเพื่อขอราคา",
    secondary: "ดูการใช้งาน",
    stats: ["กลุ่มสินค้าหลัก", "ผลิตตามแบบ", "ตอบกลับ"],
  },
  ru: {
    eyebrow: "Каталог продукции",
    primary: "Отправить чертеж",
    secondary: "Смотреть применения",
    stats: ["Основные линейки", "По чертежам", "Ответ"],
  },
  ja: {
    eyebrow: "製品ポートフォリオ",
    primary: "図面で見積依頼",
    secondary: "用途を見る",
    stats: ["主要製品ライン", "図面加工", "対応"],
  },
  ko: {
    eyebrow: "제품 포트폴리오",
    primary: "도면 견적 요청",
    secondary: "응용 분야 보기",
    stats: ["핵심 제품군", "도면 기반", "응답"],
  },
}

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
  const copy = getLocalized(heroCopy, locale)
  const { category } = (await searchParams) ?? {}

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        primaryLabel={copy.primary}
        secondaryLabel={copy.secondary}
        secondaryHref="/applications"
        stats={[
          { value: "3", label: copy.stats[0] },
          { value: "OEM", label: copy.stats[1] },
          { value: "24h", label: copy.stats[2] },
        ]}
      />
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/products" }]} locale={locale} />

      <ProductsPageContent initialCategory={category} />
    </>
  )
}
