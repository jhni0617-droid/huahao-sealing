import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { resourceLandings } from "@/lib/resources-data"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import CTASection from "@/components/CTASection"
import PageHero from "@/components/PageHero"
import Breadcrumb from "@/components/Breadcrumb"
import { BreadcrumbJsonLd } from "@/components/JsonLd"
import Icon from "@/components/ui/Icon"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "resources" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/resources",
    locale,
  })
}

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("resources")
  const tnav = await getTranslations("nav")

  const hero = getLocalized({
    zh: { eyebrow: "技术资源", primary: "描述工况获取选型", secondary: "查看产品", stats: ["技术资源", "牌号数据", "介质数据"] },
    en: { eyebrow: "Technical Resources", primary: "Get Grade Selection", secondary: "View Products", stats: ["Resources", "Grade Data", "Media Data"] },
    vi: { eyebrow: "Tài nguyên kỹ thuật", primary: "Tư vấn chọn vật liệu", secondary: "Xem sản phẩm", stats: ["Tài nguyên", "Vật liệu", "Môi trường"] },
    th: { eyebrow: "แหล่งข้อมูลเทคนิค", primary: "รับคำแนะนำ", secondary: "ดูสินค้า", stats: ["แหล่งข้อมูล", "เกรด", "สื่อ"] },
    ru: { eyebrow: "Технические ресурсы", primary: "Подбор марки", secondary: "Смотреть продукцию", stats: ["Ресурсы", "Марки", "Среды"] },
    ja: { eyebrow: "技術リソース", primary: "材質選定相談", secondary: "製品を見る", stats: ["リソース", "グレード", "媒体"] },
    ko: { eyebrow: "기술 자료", primary: "등급 선정 상담", secondary: "제품 보기", stats: ["자료", "등급", "매체"] },
  }, locale)

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tnav("home"), url: "" },
          { name: t("pageTitle"), url: "/resources" },
        ]}
      />
      <PageHero
        eyebrow={hero.eyebrow}
        title={t("pageTitle")}
        subtitle={t("heroSubtitle")}
        primaryLabel={hero.primary}
        primaryHref="/contact"
        secondaryLabel={hero.secondary}
        secondaryHref="/products"
        stats={[
          { value: "2", label: hero.stats[0] },
          { value: "8", label: hero.stats[1] },
          { value: "40", label: hero.stats[2] },
        ]}
      />
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/resources" }]} locale={locale} />

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {resourceLandings.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="card-static p-6 hover:border-accent transition-colors block flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="file-text" className="w-6 h-6 text-accent" />
                  <h2 className="text-lg font-bold text-primary leading-tight">
                    {getLocalized(resource.title, locale)}
                  </h2>
                </div>
                <p className="text-sm text-muted leading-relaxed line-clamp-4 mb-4 flex-1">
                  {getLocalized(resource.description, locale)}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {resource.sections.slice(0, 4).map((section, i) => (
                    <span key={i} className="tag-accent text-xs">
                      {getLocalized(section.heading, locale)}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-accent font-semibold mt-4 inline-flex items-center gap-1">
                  {getLocalized({ zh: "查看详情", en: "View details", vi: "Xem chi tiết", th: "ดูรายละเอียด", ru: "Подробнее", ja: "詳細を見る", ko: "상세 보기" }, locale)}
                  <Icon name="arrow-right" className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={getLocalized({
          zh: "找不到所需数据？联系工程师对接",
          en: "Don't see the data you need? Contact our engineers",
          vi: "Không thấy dữ liệu? Liên hệ kỹ sư",
          th: "ไม่เห็นข้อมูล? ติดต่อวิศวกร",
          ru: "Не нашли данные? Свяжитесь с инженерами",
          ja: "データがない？エンジニアにご相談を",
          ko: "데이터가 없나요? 엔지니어에게 문의",
        }, locale)}
        subtitle={getLocalized({
          zh: "提交工况参数，工程师提供个性化选型与耐蚀性数据。",
          en: "Submit duty parameters — engineers provide personalized selection and resistance data.",
          vi: "Gửi thông số — kỹ sư trả lời cá nhân hóa.",
          th: "ส่งพารามิเตอร์ — วิศวกรตอบเฉพาะ",
          ru: "Отправьте параметры — инженеры дадут персональные данные.",
          ja: "パラメータ送信 — エンジニアが個別回答。",
          ko: "파라미터 제출 — 엔지니어가 맞춤 답변.",
        }, locale)}
      />
    </>
  )
}
