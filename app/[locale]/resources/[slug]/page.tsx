import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { resourceLandings } from "@/lib/resources-data"
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
  return resourceLandings.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params
  const resource = resourceLandings.find((r) => r.slug === slug)
  if (!resource) return {}

  const title = getLocalized(resource.title, locale)
  const description = getLocalized(resource.description, locale)

  return generateMeta({
    title,
    description,
    path: `/resources/${slug}`,
    locale,
  })
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)

  const resource = resourceLandings.find((r) => r.slug === slug)
  if (!resource) notFound()

  const tnav = await getTranslations("nav")

  const title = getLocalized(resource.title, locale)
  const description = getLocalized(resource.description, locale)
  const faqItems = getLocalized(resource.faq, locale) as { q: string; a: string }[]

  // 本地化的 section 标题（zh/en/vi/th 直接数据，ru/ja/ko 回落英文）
  const headings = getLocalized(
    {
      zh: {
        eyebrow: "技术资源",
        sections: "章节内容",
        faq: "常见问题",
        ctaTitle: `需要 ${title} 的具体数据？`,
        ctaSubtitle: "提交工况参数（温度、压力、介质、转速），工程师 24 小时内回复选型建议与报价。",
      },
      en: {
        eyebrow: "Technical Resource",
        sections: "Section Content",
        faq: "Frequently Asked Questions",
        ctaTitle: `Need specific data from ${title}?`,
        ctaSubtitle:
          "Submit your duty parameters (temperature, pressure, media, speed) — engineers reply with grade selection and quotation within 24 hours.",
      },
      vi: {
        eyebrow: "Tài nguyên kỹ thuật",
        sections: "Nội dung",
        faq: "Câu hỏi thường gặp",
        ctaTitle: "Cần dữ liệu cụ thể?",
        ctaSubtitle:
          "Gửi thông số vận hành — kỹ sư phản hồi trong 24 giờ.",
      },
      th: {
        eyebrow: "แหล่งข้อมูลเทคนิค",
        sections: "เนื้อหา",
        faq: "คำถามที่พบบ่อย",
        ctaTitle: "ต้องการข้อมูลเฉพาะ?",
        ctaSubtitle:
          "ส่งพารามิเตอร์ — วิศวกรตอบใน 24 ชม.",
      },
    },
    locale,
  )

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tnav("home"), url: "" },
          { name: tnav("resources") ?? "Resources", url: "/resources" },
          { name: title, url: `/resources/${slug}` },
        ]}
      />
      {faqItems && faqItems.length > 0 && <FaqJsonLd questions={faqItems} />}

      <Breadcrumb
        items={[
          { name: tnav("resources") ?? "Resources", url: "/resources" },
          { name: title, url: `/resources/${slug}` },
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

      {/* Sections */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-5xl">
          {resource.sections.map((section, idx) => {
            const heading = getLocalized(section.heading, locale)
            const intro = section.intro ? getLocalized(section.intro, locale) : null
            const columns = getLocalized(section.table?.columns || { zh: [], en: [] }, locale) as string[]
            const rows = section.table ? getLocalized({ zh: section.table.rows.map(r => r.zh), en: section.table.rows.map(r => r.en), vi: section.table.rows.map(r => r.vi || r.en), th: section.table.rows.map(r => r.th || r.en) }, locale) as string[][] : null
            const paragraphs = section.paragraphs ? getLocalized(section.paragraphs, locale) as string[] : null

            return (
              <div key={idx} className={idx > 0 ? "mt-16" : ""}>
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {heading}
                </h2>
                <div className="industrial-divider" />

                {intro && (
                  <p className="text-sm text-muted leading-relaxed mt-6 mb-6">
                    {intro}
                  </p>
                )}

                {paragraphs && (
                  <ul className="space-y-3 mt-6">
                    {paragraphs.map((p, i) => (
                      <li key={i} className="card p-4 flex items-start gap-3">
                        <Icon name="check" className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <p className="text-sm text-muted leading-relaxed">{p}</p>
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && rows && rows.length > 0 && (
                  <div className="card p-4 md:p-6 mt-6 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-border">
                          {columns.map((col, i) => (
                            <th key={i} className="py-3 pr-4 text-left text-muted font-semibold whitespace-nowrap">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, i) => (
                          <tr key={i} className="border-b border-border last:border-0">
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className={`py-3 pr-4 ${j === 0 ? "text-primary font-bold whitespace-nowrap" : "text-muted"}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-wide max-w-4xl">
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
