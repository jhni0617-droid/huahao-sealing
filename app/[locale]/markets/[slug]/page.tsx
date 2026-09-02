import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { marketLandings } from "@/lib/markets-data"
import { productsByLocale } from "@/lib/translations-products"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"
import FAQAccordion from "@/components/FAQAccordion"
import Breadcrumb from "@/components/Breadcrumb"
import Icon from "@/components/ui/Icon"

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return marketLandings.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params
  const market = marketLandings.find((m) => m.slug === slug)
  if (!market) return {}

  const title = getLocalized(market.title, locale)
  const description = getLocalized(market.description, locale)

  return generateMeta({
    title,
    description,
    path: `/markets/${slug}`,
    locale,
  })
}

export default async function MarketDetailPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)

  const market = marketLandings.find((m) => m.slug === slug)
  if (!market) notFound()

  const tnav = await getTranslations("nav")

  const title = getLocalized(market.title, locale)
  const description = getLocalized(market.description, locale)
  const industries = getLocalized(market.industries, locale) as string[]
  const solutions = getLocalized(market.solutions, locale) as string[]
  const faqItems = getLocalized(market.faq, locale) as { q: string; a: string }[]

  // 本地化的 section 标题（zh/en/vi/th 直接数据，ru/ja/ko 回落英文）
  const headings = getLocalized(
    {
      zh: {
        eyebrow: "全球市场",
        stats: "市场关键数据",
        industries: "主要应用行业",
        solutions: "华豪市场解决方案",
        relatedProducts: "相关产品",
        faq: "常见问题",
        viewDetails: "查看详情",
        ctaTitle: `获取 ${title} 的选型与报价`,
        ctaSubtitle: "提交工况参数（温度、压力、介质、转速），工程师 24 小时内回复选型建议与报价。",
      },
      en: {
        eyebrow: "Global Market",
        stats: "Market Key Data",
        industries: "Key Industries",
        solutions: "Huahao Market Solutions",
        relatedProducts: "Related Products",
        faq: "Frequently Asked Questions",
        viewDetails: "View details",
        ctaTitle: `Get Grade Selection & Quotation for ${title}`,
        ctaSubtitle:
          "Submit your duty parameters (temperature, pressure, media, speed) — engineers reply with grade selection and quotation within 24 hours.",
      },
      vi: {
        eyebrow: "Thị trường toàn cầu",
        stats: "Dữ liệu thị trường",
        industries: "Ngành chính",
        solutions: "Giải pháp Huahao",
        relatedProducts: "Sản phẩm liên quan",
        faq: "Câu hỏi thường gặp",
        viewDetails: "Xem chi tiết",
        ctaTitle: "Nhận tư vấn và báo giá",
        ctaSubtitle:
          "Gửi thông số vận hành — kỹ sư phản hồi trong 24 giờ.",
      },
      th: {
        eyebrow: "ตลาดโลก",
        stats: "ข้อมูลตลาด",
        industries: "อุตสาหกรรมหลัก",
        solutions: "โซลูชัน Huahao",
        relatedProducts: "สินค้าที่เกี่ยวข้อง",
        faq: "คำถามที่พบบ่อย",
        viewDetails: "ดูรายละเอียด",
        ctaTitle: "รับคำแนะนำและใบเสนอราคา",
        ctaSubtitle:
          "ส่งพารามิเตอร์ — วิศวกรตอบใน 24 ชม.",
      },
    },
    locale,
  )

  // 关联产品查找
  const localeProducts = productsByLocale[locale] || productsByLocale.en
  const relatedProducts = market.relatedProducts
    .map((pSlug) => localeProducts.find((p) => p.slug === pSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ slug: p.slug, name: p.name }))

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tnav("home"), url: "" },
          { name: tnav("markets") ?? "Markets", url: "/markets" },
          { name: title, url: `/markets/${slug}` },
        ]}
      />
      {faqItems && faqItems.length > 0 && <FaqJsonLd questions={faqItems} />}

      <Breadcrumb
        items={[
          { name: tnav("markets") ?? "Markets", url: "/markets" },
          { name: title, url: `/markets/${slug}` },
        ]}
        locale={locale}
      />

      <PageHero
        eyebrow={headings.eyebrow}
        title={title}
        subtitle={description}
        primaryLabel={tnav("contact")}
        primaryHref="/contact"
        secondaryLabel={tnav("products")}
        secondaryHref="/products"
      />

      {/* Market Stats */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
            01
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {headings.stats}
          </h2>
          <div className="industrial-divider" />
          <div className="card p-6 md:p-8 mt-8">
            <table className="w-full text-sm">
              <tbody>
                {market.marketStats.map((stat, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-3 pr-4 text-muted font-medium w-40">{stat.label}</td>
                    <td className="py-3 text-primary font-semibold">{stat.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
            02
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {headings.industries}
          </h2>
          <div className="industrial-divider" />
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {industries.map((ind, i) => (
              <div key={i} className="card p-5 flex items-start gap-3">
                <Icon name="factory" className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted leading-relaxed">{ind}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
            03
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {headings.solutions}
          </h2>
          <div className="industrial-divider" />
          <ul className="space-y-4 mt-8">
            {solutions.map((s, i) => (
              <li key={i} className="card p-5 flex items-start gap-3">
                <Icon name="check" className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted leading-relaxed">{s}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-wide max-w-5xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
              04
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {headings.relatedProducts}
            </h2>
            <div className="industrial-divider" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {relatedProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="card p-5 hover:border-accent/30 transition-all flex flex-col gap-2"
                >
                  <Icon name="box" className="w-5 h-5 text-accent" />
                  <div className="font-semibold text-primary text-sm leading-snug">
                    {p.name}
                  </div>
                  <div className="text-xs text-muted inline-flex items-center gap-1 mt-auto">
                    {headings.viewDetails}
                    <Icon name="arrow-right" className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide max-w-4xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent text-center">
              05
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              {headings.faq}
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <FAQAccordion key={i} title={item.q}>
                  <p className="text-sm text-muted leading-relaxed">{item.a}</p>
                </FAQAccordion>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title={headings.ctaTitle} subtitle={headings.ctaSubtitle} />
    </>
  )
}
