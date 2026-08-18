import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { industryLandings } from "@/lib/industry-landing-data"
import { productsByLocale } from "@/lib/translations-products"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"
import FAQAccordion from "@/components/FAQAccordion"
import Icon from "@/components/ui/Icon"

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return industryLandings.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params
  const industry = industryLandings.find((i) => i.slug === slug)
  if (!industry) return {}

  const title = getLocalized(industry.title, locale)
  const description = getLocalized(industry.description, locale)

  return generateMeta({
    title,
    description,
    path: `/applications/${slug}`,
    locale,
  })
}

export default async function IndustryLandingPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)

  const industry = industryLandings.find((i) => i.slug === slug)
  if (!industry) notFound()

  const tnav = await getTranslations("nav")

  const title = getLocalized(industry.title, locale)
  const description = getLocalized(industry.description, locale)
  const challenges = getLocalized(industry.challenges, locale)
  const solutions = getLocalized(industry.solutions, locale)
  const faqItems = getLocalized(industry.faq, locale) as { q: string; a: string }[]

  // 本地化的 section 标题（zh/en/vi/th 直接数据，ru/ja/ko 回落英文）
  const headings = getLocalized(
    {
      zh: {
        eyebrow: "行业应用",
        challenges: "关键技术挑战",
        solutions: "华豪碳石墨解决方案",
        specs: "技术参数",
        relatedProducts: "相关产品",
        faq: "常见问题",
        viewDetails: "查看详情",
        ctaTitle: "获取本行业定制密封方案",
        ctaSubtitle: "提交工况参数，工程师 24 小时内回复选型建议与报价。",
      },
      en: {
        eyebrow: "Industry Application",
        challenges: "Key Technical Challenges",
        solutions: "Huahao Carbon Graphite Solutions",
        specs: "Technical Parameters",
        relatedProducts: "Related Products",
        faq: "Frequently Asked Questions",
        viewDetails: "View details",
        ctaTitle: "Get a Custom Sealing Solution for This Industry",
        ctaSubtitle:
          "Submit your duty parameters — our engineers reply with grade selection and quotation within 24 hours.",
      },
      vi: {
        eyebrow: "Ứng dụng ngành",
        challenges: "Thách thức kỹ thuật chính",
        solutions: "Giải pháp than chì carbon Huahao",
        specs: "Thông số kỹ thuật",
        relatedProducts: "Sản phẩm liên quan",
        faq: "Câu hỏi thường gặp",
        viewDetails: "Xem chi tiết",
        ctaTitle: "Nhận giải pháp kín tùy chỉnh cho ngành này",
        ctaSubtitle:
          "Gửi thông số vận hành — kỹ sư phản hồi lựa chọn vật liệu và báo giá trong 24 giờ.",
      },
      th: {
        eyebrow: "การใช้งานอุตสาหกรรม",
        challenges: "ความท้าทายทางเทคนิคหลัก",
        solutions: "โซลูชันคาร์บอนกราไฟต์ Huahao",
        specs: "พารามิเตอร์ทางเทคนิค",
        relatedProducts: "สินค้าที่เกี่ยวข้อง",
        faq: "คำถามที่พบบ่อย",
        viewDetails: "ดูรายละเอียด",
        ctaTitle: "รับโซลูชันซีลแบบกำหนดเองสำหรับอุตสาหกรรมนี้",
        ctaSubtitle:
          "ส่งพารามิเตอร์การทำงาน — วิศวกรตอบกลับการเลือกวัสดุและใบเสนอราคาภายใน 24 ชั่วโมง",
      },
    },
    locale,
  )

  // 关联产品查找（过滤不存在的 slug）
  const localeProducts = productsByLocale[locale] || productsByLocale.en
  const relatedProducts = industry.relatedProducts
    .map((pSlug) => localeProducts.find((p) => p.slug === pSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ slug: p.slug, name: p.name }))

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tnav("home"), url: "" },
          { name: tnav("applications"), url: "/applications" },
          { name: title, url: `/applications/${slug}` },
        ]}
      />
      {faqItems && faqItems.length > 0 && <FaqJsonLd questions={faqItems} />}

      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-border">
        <div className="container-wide py-4 text-sm text-muted">
          <Link href="/" className="hover:text-primary">
            {tnav("home")}
          </Link>
          <span className="mx-2">/</span>
          <Link href="/applications" className="hover:text-primary">
            {tnav("applications")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{title}</span>
        </div>
      </section>

      <PageHero
        eyebrow={headings.eyebrow}
        title={title}
        subtitle={description}
        primaryLabel={tnav("contact")}
        primaryHref="/contact"
        secondaryLabel={tnav("products")}
        secondaryHref="/products"
      />

      {/* Challenges */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
            01
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {headings.challenges}
          </h2>
          <div className="industrial-divider" />
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {challenges.map((c, i) => (
              <div
                key={i}
                className="card p-5 flex items-start gap-3"
              >
                <Icon name="warning" className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
            02
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

      {/* Technical Parameters */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
            03
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {headings.specs}
          </h2>
          <div className="industrial-divider" />
          <div className="card p-6 md:p-8 mt-8">
            <table className="w-full text-sm">
              <tbody>
                {industry.specs.map((spec, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-3 pr-4 text-muted font-medium w-40">{spec.label}</td>
                    <td className="py-3 text-primary font-semibold">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
