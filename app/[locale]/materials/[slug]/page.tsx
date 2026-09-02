import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { materialLandings } from "@/lib/materials-data"
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
  return materialLandings.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params
  const material = materialLandings.find((m) => m.slug === slug)
  if (!material) return {}

  const title = getLocalized(material.title, locale)
  const description = getLocalized(material.description, locale)

  return generateMeta({
    title,
    description,
    path: `/materials/${slug}`,
    locale,
  })
}

export default async function MaterialDetailPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)

  const material = materialLandings.find((m) => m.slug === slug)
  if (!material) notFound()

  const tnav = await getTranslations("nav")

  const title = getLocalized(material.title, locale)
  const description = getLocalized(material.description, locale)
  const advantages = getLocalized(material.advantages, locale) as string[]
  const applications = getLocalized(material.applications, locale) as string[]
  const faqItems = getLocalized(material.faq, locale) as { q: string; a: string }[]

  // 本地化的 section 标题（zh/en/vi/th 直接数据，ru/ja/ko 回落英文）
  const headings = getLocalized(
    {
      zh: {
        eyebrow: "材料技术",
        properties: "性能参数",
        advantages: "材料优势",
        applications: "应用领域",
        grades: "牌号对照",
        relatedProducts: "相关产品",
        faq: "常见问题",
        viewDetails: "查看详情",
        ctaTitle: "获取本材料的选型与报价",
        ctaSubtitle: "提交工况参数（温度、压力、介质、转速），工程师 24 小时内回复选型建议与报价。",
      },
      en: {
        eyebrow: "Material Technology",
        properties: "Properties & Specifications",
        advantages: "Material Advantages",
        applications: "Applications",
        grades: "Grade Selection",
        relatedProducts: "Related Products",
        faq: "Frequently Asked Questions",
        viewDetails: "View details",
        ctaTitle: "Get Grade Selection & Quotation",
        ctaSubtitle:
          "Submit your duty parameters (temperature, pressure, media, speed) — engineers reply with grade selection and quotation within 24 hours.",
      },
      vi: {
        eyebrow: "Công nghệ vật liệu",
        properties: "Thông số kỹ thuật",
        advantages: "Ưu điểm vật liệu",
        applications: "Ứng dụng",
        grades: "Lựa chọn vật liệu",
        relatedProducts: "Sản phẩm liên quan",
        faq: "Câu hỏi thường gặp",
        viewDetails: "Xem chi tiết",
        ctaTitle: "Nhận tư vấn chọn vật liệu và báo giá",
        ctaSubtitle:
          "Gửi thông số vận hành — kỹ sư phản hồi lựa chọn vật liệu và báo giá trong 24 giờ.",
      },
      th: {
        eyebrow: "เทคโนโลยีวัสดุ",
        properties: "คุณสมบัติและสเปค",
        advantages: "ข้อดีของวัสดุ",
        applications: "การใช้งาน",
        grades: "เลือกเกรด",
        relatedProducts: "สินค้าที่เกี่ยวข้อง",
        faq: "คำถามที่พบบ่อย",
        viewDetails: "ดูรายละเอียด",
        ctaTitle: "รับคำแนะนำเลือกเกรดและใบเสนอราคา",
        ctaSubtitle:
          "ส่งพารามิเตอร์การทำงาน — วิศวกรตอบกลับการเลือกวัสดุและใบเสนอราคาภายใน 24 ชั่วโมง",
      },
    },
    locale,
  )

  // 关联产品查找（过滤不存在的 slug）
  const localeProducts = productsByLocale[locale] || productsByLocale.en
  const relatedProducts = material.relatedProducts
    .map((pSlug) => localeProducts.find((p) => p.slug === pSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ slug: p.slug, name: p.name }))

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tnav("home"), url: "" },
          { name: tnav("materials") ?? "Materials", url: "/materials" },
          { name: title, url: `/materials/${slug}` },
        ]}
      />
      {faqItems && faqItems.length > 0 && <FaqJsonLd questions={faqItems} />}

      <Breadcrumb
        items={[
          { name: tnav("materials") ?? "Materials", url: "/materials" },
          { name: title, url: `/materials/${slug}` },
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

      {/* Properties & Specifications */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
            01
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {headings.properties}
          </h2>
          <div className="industrial-divider" />
          <div className="card p-6 md:p-8 mt-8">
            <table className="w-full text-sm">
              <tbody>
                {material.properties.map((prop, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-3 pr-4 text-muted font-medium w-40">{prop.label}</td>
                    <td className="py-3 text-primary font-semibold">{prop.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
            02
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {headings.advantages}
          </h2>
          <div className="industrial-divider" />
          <ul className="space-y-4 mt-8">
            {advantages.map((a, i) => (
              <li key={i} className="card p-5 flex items-start gap-3">
                <Icon name="check" className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted leading-relaxed">{a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
            03
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {headings.applications}
          </h2>
          <div className="industrial-divider" />
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {applications.map((app, i) => (
              <div key={i} className="card p-5 flex items-start gap-3">
                <Icon name="gear" className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted leading-relaxed">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Selection */}
      {material.grades && material.grades.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-wide max-w-4xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
              04
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {headings.grades}
            </h2>
            <div className="industrial-divider" />
            <div className="card p-6 md:p-8 mt-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left text-muted font-semibold">
                      {getLocalized(
                        {
                          zh: "牌号",
                          en: "Grade Code",
                          vi: "Mã vật liệu",
                          th: "รหัสเกรด",
                        },
                        locale,
                      )}
                    </th>
                    <th className="py-3 pr-4 text-left text-muted font-semibold">
                      {getLocalized(
                        {
                          zh: "耐温范围",
                          en: "Temperature",
                          vi: "Dải nhiệt",
                          th: "ช่วงอุณหภูมิ",
                        },
                        locale,
                      )}
                    </th>
                    <th className="py-3 text-left text-muted font-semibold">
                      {getLocalized(
                        {
                          zh: "说明",
                          en: "Notes",
                          vi: "Ghi chú",
                          th: "หมายเหตุ",
                        },
                        locale,
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {material.grades.map((grade, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="py-3 pr-4 text-primary font-bold whitespace-nowrap">
                        {grade.code}
                      </td>
                      <td className="py-3 pr-4 text-primary font-semibold whitespace-nowrap">
                        {grade.temp}
                      </td>
                      <td className="py-3 text-muted leading-relaxed">
                        {getLocalized(grade.note, locale)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide max-w-5xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
              05
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
        <section className="section-padding bg-gray-50">
          <div className="container-wide max-w-4xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent text-center">
              06
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
