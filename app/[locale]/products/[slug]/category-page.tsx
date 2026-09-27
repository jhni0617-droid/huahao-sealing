import Image from "next/image"
import { Link } from "@/i18n/routing"
import type { ProductCategoryLanding } from "@/lib/product-category-data"
import { productsByLocale } from "@/lib/translations-products"
import { getLocalized } from "@/lib/locale-data"
import { FaqJsonLd } from "@/components/JsonLd"
import Breadcrumb from "@/components/Breadcrumb"
import PageHead from "@/components/ui/PageHead"
import CTASection from "@/components/CTASection"
import FAQAccordion from "@/components/FAQAccordion"
import Icon from "@/components/ui/Icon"

interface Props {
  category: ProductCategoryLanding
  locale: string
  tnav: (key: string) => string
}

const headings = {
  zh: { eyebrow: "产品类别", facts: "关键参数速览", specs: "工况与技术边界", advantages: "产品优势", applications: "典型应用", models: "该类别下的型号", related: "相关页面", faq: "常见问题", details: "查看详情", all: "查看全部型号", ctaTitle: "获取选型与报价", ctaSubtitle: "提交轴径、转速、温度、压力与介质，工程师 24 小时内回复牌号选型与报价。" },
  en: { eyebrow: "Product Category", facts: "Key Facts", specs: "Duty Envelope & Technical Data", advantages: "Why This Category", applications: "Typical Applications", models: "Models in This Category", related: "Related Pages", faq: "Frequently Asked Questions", details: "View details", all: "View all models", ctaTitle: "Get Grade Selection & Quotation", ctaSubtitle: "Send shaft diameter, speed, temperature, pressure and media — engineers reply with grade selection and quotation within 24 hours." },
  vi: { eyebrow: "Dòng sản phẩm", facts: "Thông số chính", specs: "Giới hạn làm việc và dữ liệu kỹ thuật", advantages: "Ưu điểm", applications: "Ứng dụng điển hình", models: "Các model trong dòng này", related: "Trang liên quan", faq: "Câu hỏi thường gặp", details: "Xem chi tiết", all: "Xem tất cả model", ctaTitle: "Nhận tư vấn chọn mác vật liệu và báo giá", ctaSubtitle: "Gửi đường kính trục, tốc độ, nhiệt độ, áp suất và môi trường — kỹ sư phản hồi trong 24 giờ." },
  th: { eyebrow: "ประเภทสินค้า", facts: "ข้อมูลสำคัญ", specs: "ขอบเขตการทำงานและข้อมูลทางเทคนิค", advantages: "ข้อดีของสินค้ากลุ่มนี้", applications: "การใช้งานทั่วไป", models: "รุ่นในกลุ่มนี้", related: "หน้าที่เกี่ยวข้อง", faq: "คำถามที่พบบ่อย", details: "ดูรายละเอียด", all: "ดูทุกรุ่น", ctaTitle: "รับคำแนะนำเลือกเกรดและใบเสนอราคา", ctaSubtitle: "ส่งเส้นผ่านศูนย์กลางเพลา ความเร็ว อุณหภูมิ ความดัน และสื่อ — วิศวกรตอบกลับภายใน 24 ชั่วโมง" },
}

export default function ProductCategoryPage({ category, locale, tnav }: Props) {
  const h = getLocalized(headings, locale)
  const name = getLocalized(category.name, locale)
  const intro = getLocalized(category.intro, locale)
  const advantages = getLocalized(category.advantages, locale) as string[]
  const applications = getLocalized(category.applications, locale) as string[]
  const faqItems = category.faq.map((f) => ({ q: getLocalized(f.q, locale), a: getLocalized(f.a, locale) }))

  const localeProducts = productsByLocale[locale] || productsByLocale.en
  const models = category.relatedProducts
    .map((slug) => localeProducts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <>
      <FaqJsonLd questions={faqItems} />

      <Breadcrumb
        items={[
          { name: tnav("products"), url: "/products" },
          { name, url: `/products/${category.slug}` },
        ]}
        locale={locale}
      />

      <PageHead en={h.eyebrow} title={name} description={intro} />

      {/* Image + Key Facts */}
      <section className="section-padding bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">{h.facts}</h2>
            <dl className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {category.keyFacts.map((f) => (
                <div key={f.label} className="bg-white p-3.5">
                  <dt className="text-[11px] font-medium text-muted">{f.label}</dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug text-primary">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          {category.image && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-gray-50 shadow-sm">
              <Image
                src={category.image}
                alt={name}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Duty envelope */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">01</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{h.specs}</h2>
          <div className="industrial-divider" />
          <div className="card mt-8 p-6 md:p-8">
            <table className="w-full text-sm">
              <tbody>
                {category.specs.map((s, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="w-40 py-3 pr-4 font-medium text-muted">{s.label}</td>
                    <td className="py-3 font-semibold text-primary">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">02</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{h.advantages}</h2>
          <div className="industrial-divider" />
          <ul className="mt-8 space-y-4">
            {advantages.map((a, i) => (
              <li key={i} className="card flex items-start gap-3 p-5">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-muted">{a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">03</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{h.applications}</h2>
          <div className="industrial-divider" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {applications.map((app, i) => (
              <div key={i} className="card flex items-start gap-3 p-5">
                <Icon name="gear" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-muted">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models in this category */}
      {models.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">04</div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{h.models}</h2>
            <div className="industrial-divider" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {models.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group flex flex-col border border-border bg-white transition-colors hover:border-accent/40 focus-ring"
                >
                  {p.image ? (
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-[#f0f1f2]">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="font-mono text-base font-bold text-primary">{p.model}</span>
                    <h3 className="mt-1 font-serif-sc text-sm font-bold leading-snug text-primary line-clamp-2">{p.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">{p.shortDesc}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold text-accent">
                      {h.details}
                      <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/products" className="btn-secondary">
                {h.all}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Related pages */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">05</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{h.related}</h2>
          <div className="industrial-divider" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {category.relatedPages.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="card flex items-center justify-between gap-4 p-5 transition-colors hover:border-accent/30"
              >
                <span className="text-sm font-semibold leading-snug text-primary">{getLocalized(r.label, locale)}</span>
                <Icon name="arrow-right" className="h-4 w-4 shrink-0 text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-accent">06</div>
          <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-primary">{h.faq}</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <FAQAccordion key={i} title={item.q}>
                <p className="text-sm leading-relaxed text-muted">{item.a}</p>
              </FAQAccordion>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={h.ctaTitle} subtitle={h.ctaSubtitle} />
    </>
  )
}
