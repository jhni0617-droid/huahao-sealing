import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { marketLandings } from "@/lib/markets-data"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import CTASection from "@/components/CTASection"
import PageHero from "@/components/PageHero"
import Breadcrumb from "@/components/Breadcrumb"
import { BreadcrumbJsonLd } from "@/components/JsonLd"
import Icon from "@/components/ui/Icon"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "markets" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/markets",
    locale,
  })
}

export default async function MarketsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("markets")
  const tnav = await getTranslations("nav")

  const hero = getLocalized({
    zh: { eyebrow: "全球市场", primary: "描述工况获取选型", secondary: "查看产品", stats: ["出口市场", "语言支持", "FTA 优惠"] },
    en: { eyebrow: "Global Markets", primary: "Get Grade Selection", secondary: "View Products", stats: ["Export Markets", "Languages", "FTA Coverage"] },
    vi: { eyebrow: "Thị trường toàn cầu", primary: "Tư vấn chọn vật liệu", secondary: "Xem sản phẩm", stats: ["Thị trường", "Ngôn ngữ", "FTA"] },
    th: { eyebrow: "ตลาดโลก", primary: "รับคำแนะนำ", secondary: "ดูสินค้า", stats: ["ตลาดส่งออก", "ภาษา", "FTA"] },
    ru: { eyebrow: "Глобальные рынки", primary: "Подбор марки", secondary: "Смотреть продукцию", stats: ["Рынки экспорта", "Языки", "FTA"] },
    ja: { eyebrow: "グローバル市場", primary: "材質選定相談", secondary: "製品を見る", stats: ["輸出市場", "言語", "FTA"] },
    ko: { eyebrow: "글로벌 시장", primary: "등급 선정", secondary: "제품 보기", stats: ["수출 시장", "언어", "FTA"] },
  }, locale)

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tnav("home"), url: "" },
          { name: t("pageTitle"), url: "/markets" },
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
          { value: "6", label: hero.stats[0] },
          { value: "7", label: hero.stats[1] },
          { value: "0%", label: hero.stats[2] },
        ]}
      />
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/markets" }]} locale={locale} />

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketLandings.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="card-static p-6 hover:border-accent transition-colors block flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="globe" className="w-6 h-6 text-accent" />
                  <h2 className="text-lg font-bold text-primary leading-tight">
                    {getLocalized(market.title, locale)}
                  </h2>
                </div>
                <p className="text-sm text-muted leading-relaxed line-clamp-4 mb-4 flex-1">
                  {getLocalized(market.description, locale)}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {market.marketStats.slice(0, 3).map((stat, i) => (
                    <span key={i} className="tag-accent text-xs">
                      {stat.value}
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
          zh: "找不到您的市场？联系工程师对接",
          en: "Don't see your market? Contact our engineers",
          vi: "Không thấy thị trường? Liên hệ kỹ sư",
          th: "ไม่เห็นตลาด? ติดต่อวิศวกร",
          ru: "Не нашли свой рынок? Свяжитесь с инженерами",
          ja: "対象市場がない？エンジニアにご相談を",
          ko: "해당 시장이 없나요? 엔지니어에게 문의",
        }, locale)}
        subtitle={getLocalized({
          zh: "无论您在哪个国家，我们都能提供多语言对接、原产地证与物流方案。",
          en: "Wherever you are, we offer multilingual dialogue, origin certificates and logistics solutions.",
          vi: "Bất cứ nơi đâu, chúng tôi hỗ trợ đa ngôn ngữ, chứng nhận xuất xứ và logistics.",
          th: "ไม่ว่าคุณอยู่ที่ไหน เราสนับสนุนหลายภาษา ใบรับรองและลอจิสติกส์",
          ru: "Где бы вы ни были — многоязычная поддержка, сертификаты происхождения, логистика.",
          ja: "どこにいても多言語対応・原産地証明・物流を提供します。",
          ko: "어디에 계시든 다국어 지원, 원산지 증명, 물류 솔루션 제공.",
        }, locale)}
      />
    </>
  )
}
