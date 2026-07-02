import { getLocale, getTranslations } from "next-intl/server"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"
import Icon from "@/components/ui/Icon"
import Link from "next/link"

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations("download")
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/download",
    locale,
  })
}

const downloadItems = [
  {
    id: "catalog",
    title: { zh: "产品电子样本", en: "Product Catalog" },
    description: { zh: "完整的碳石墨密封产品目录，包含规格参数和应用案例。", en: "Complete carbon graphite sealing product catalog with specifications and application cases." },
    file: "/downloads/huahao-product-catalog.pdf",
    size: "11 KB",
    icon: "file-text",
  },
  {
    id: "manual",
    title: { zh: "技术参数手册", en: "Technical Manual" },
    description: { zh: "详细的技术参数、安装指南和维护说明。", en: "Detailed technical specifications, installation guide and maintenance instructions." },
    file: "/downloads/huahao-technical-manual.pdf",
    size: "16 KB",
    icon: "book-open",
  },
  {
    id: "template",
    title: { zh: "定制图纸模板", en: "Drawing Template" },
    description: { zh: "标准化的图纸模板PDF，便于您提供定制需求。", en: "Standardized drawing template PDF for custom requirements." },
    file: "/downloads/huahao-drawing-template.pdf",
    size: "2.3 KB",
    icon: "file-image",
  },
]

export default async function DownloadPage() {
  const locale = await getLocale()
  const t = await getTranslations("download")
  const eyebrow = getLocalized({
    zh: "资料下载",
    en: "Download Center",
    vi: "Trung tâm tải xuống",
    th: "ศูนย์ดาวน์โหลด",
    ru: "Центр загрузок",
    ja: "資料ダウンロード",
    ko: "자료 다운로드",
  }, locale)

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        primaryLabel={t("ctaButton")}
      />

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="grid gap-4 md:grid-cols-2">
            {downloadItems.map((item) => (
              <div key={item.id} className="card-static bg-white p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center">
                  <Icon name={item.icon as any} className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary mb-1">{getLocalized(item.title, locale)}</h3>
                  <p className="text-sm text-muted mb-3">{getLocalized(item.description, locale)}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted">{item.size}</span>
                    <Link href={item.file} download className="btn-secondary text-sm px-4">
                      {t("download")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
