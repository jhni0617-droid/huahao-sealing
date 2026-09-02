import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { materialLandings } from "@/lib/materials-data"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import CTASection from "@/components/CTASection"
import PageHero from "@/components/PageHero"
import Breadcrumb from "@/components/Breadcrumb"
import { BreadcrumbJsonLd } from "@/components/JsonLd"
import Icon from "@/components/ui/Icon"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "materials" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/materials",
    locale,
  })
}

export default async function MaterialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("materials")
  const tnav = await getTranslations("nav")

  const hero = getLocalized({
    zh: { eyebrow: "材料技术", primary: "描述工况获取选型", secondary: "查看产品", stats: ["材料牌号", "耐温范围", "pH 覆盖"] },
    en: { eyebrow: "Material Technology", primary: "Get Grade Selection", secondary: "View Products", stats: ["Material Grades", "Temperature Range", "pH Coverage"] },
    vi: { eyebrow: "Công nghệ vật liệu", primary: "Tư vấn chọn vật liệu", secondary: "Xem sản phẩm", stats: ["Vật liệu", "Dải nhiệt", "Phạm vi pH"] },
    th: { eyebrow: "เทคโนโลยีวัสดุ", primary: "รับคำแนะนำเลือกวัสดุ", secondary: "ดูสินค้า", stats: ["เกรดวัสดุ", "ช่วงอุณหภูมิ", "คลุม pH"] },
    ru: { eyebrow: "Технология материалов", primary: "Подбор марки", secondary: "Смотреть продукцию", stats: ["Марки", "Температурный диапазон", "Диапазон pH"] },
    ja: { eyebrow: "材料技術", primary: "材質選定相談", secondary: "製品を見る", stats: ["材質グレード", "耐温範囲", "pH 対応"] },
    ko: { eyebrow: "소재 기술", primary: "등급 선정 상담", secondary: "제품 보기", stats: ["소재 등급", "온도 범위", "pH 범위"] },
  }, locale)

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tnav("home"), url: "" },
          { name: t("pageTitle"), url: "/materials" },
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
          { value: "8+", label: hero.stats[0] },
          { value: "600°C", label: hero.stats[1] },
          { value: "0-14", label: hero.stats[2] },
        ]}
      />
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/materials" }]} locale={locale} />

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialLandings.map((material) => (
              <Link
                key={material.slug}
                href={`/materials/${material.slug}`}
                className="card-static p-6 hover:border-accent transition-colors block flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="layers" className="w-6 h-6 text-accent" />
                  <h2 className="text-lg font-bold text-primary leading-tight">
                    {getLocalized(material.title, locale)}
                  </h2>
                </div>
                <p className="text-sm text-muted leading-relaxed line-clamp-4 mb-4 flex-1">
                  {getLocalized(material.description, locale)}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {material.properties.slice(0, 3).map((prop, i) => (
                    <span key={i} className="tag-accent text-xs">
                      {prop.value}
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
          zh: "不确定选哪个牌号？让工程师帮您",
          en: "Not sure which grade? Let our engineers help",
          vi: "Không chắc chọn vật liệu nào? Kỹ sư giúp bạn",
          th: "ไม่แน่ใจเลือกเกรดใด วิศวกรช่วยคุณ",
          ru: "Не уверены в выборе марки? Помогут наши инженеры",
          ja: "グレード選びに迷ったらエンジニアへご相談ください",
          ko: "등급 선택이 막막하시면 엔지니어에게 문의하세요",
        }, locale)}
        subtitle={getLocalized({
          zh: "提交工况参数（温度、压力、介质、转速），24 小时内获得选型建议与报价。",
          en: "Submit your duty parameters — engineers reply with grade selection and quotation within 24 hours.",
          vi: "Gửi thông số vận hành — kỹ sư phản hồi trong 24 giờ.",
          th: "ส่งพารามิเตอร์ — วิศวกรตอบใน 24 ชม.",
          ru: "Отправьте параметры — ответ инженеров в течение 24 часов.",
          ja: "運転パラメータを送信 — 24時間以内にエンジニアが回答。",
          ko: "운전 파라미터 제출 — 24시간 내 엔지니어 답변.",
        }, locale)}
      />
    </>
  )
}
