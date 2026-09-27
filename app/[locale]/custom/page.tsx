import { setRequestLocale } from "next-intl/server"
import { customLanding } from "@/lib/custom-landing-data"
import { getLocalized } from "@/lib/locale-data"
import { generateMeta } from "@/lib/utils"
import { FaqJsonLd } from "@/components/JsonLd"
import Breadcrumb from "@/components/Breadcrumb"
import PageHead from "@/components/ui/PageHead"
import CTASection from "@/components/CTASection"
import FAQAccordion from "@/components/FAQAccordion"
import StepStrip from "@/components/ui/StepStrip"
import Icon from "@/components/ui/Icon"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return generateMeta({
    title: getLocalized(customLanding.title, locale),
    description: getLocalized(customLanding.description, locale),
    path: "/custom",
    locale,
  })
}

const h = {
  zh: { eyebrow: "按图定制", facts: "关键事实", caps: "加工能力", tols: "典型公差与表面边界", grades: "可用材料牌号", inputs: "你可以提供什么", process: "下单流程", cases: "典型非标场景", faq: "常见问题", ctaTitle: "把图纸发过来", ctaSubtitle: "上传图纸或寄样品，工程师评审后给出牌号、工艺路线与报价。非标件机加工与浸渍在同一厂区完成。", gradeCol: "牌号", tempCol: "耐温", noteCol: "用于非标件时的说明", featCol: "项目", valCol: "边界" },
  en: { eyebrow: "Custom Machining", facts: "Key Facts", caps: "Machining Capabilities", tols: "Typical Tolerances & Surface Limits", grades: "Material Grades Available", inputs: "What You Can Send Us", process: "How an Order Runs", cases: "Typical Non-Standard Cases", faq: "Frequently Asked Questions", ctaTitle: "Send Us Your Drawing", ctaSubtitle: "Upload a drawing or ship a sample — engineers review it and return grade, process route and quotation. Machining and impregnation happen in the same plant.", gradeCol: "Grade", tempCol: "Max Temp", noteCol: "Notes for custom parts", featCol: "Feature", valCol: "Boundary" },
  vi: { eyebrow: "Gia công theo bản vẽ", facts: "Thông số chính", caps: "Năng lực gia công", tols: "Dung sai và giới hạn bề mặt điển hình", grades: "Mác vật liệu khả dụng", inputs: "Bạn có thể gửi gì", process: "Quy trình đặt hàng", cases: "Tình huống phi tiêu chuẩn điển hình", faq: "Câu hỏi thường gặp", ctaTitle: "Gửi bản vẽ cho chúng tôi", ctaSubtitle: "Tải bản vẽ hoặc gửi mẫu — kỹ sư rà soát và trả lại mác vật liệu, quy trình và báo giá. Gia công và impregnation thực hiện cùng một nhà máy.", gradeCol: "Mác", tempCol: "Nhiệt tối đa", noteCol: "Ghi chú cho chi tiết theo bản vẽ", featCol: "Hạng mục", valCol: "Giới hạn" },
  th: { eyebrow: "ผลิตตามแบบ", facts: "ข้อมูลสำคัญ", caps: "ความสามารถในการแปรรูป", tols: "ความคลาดเคลื่อนและขอบเขตผิวโดยทั่วไป", grades: "เกรดวัสดุที่เลือกใช้", inputs: "คุณส่งอะไรมาได้บ้าง", process: "ลำดับการสั่งผลิต", cases: "งานพิเศษที่พบบ่อย", faq: "คำถามที่พบบ่อย", ctaTitle: "ส่งแบบมาให้เรา", ctaSubtitle: "อัปโหลดแบบหรือส่งตัวอย่าง วิศวกรตรวจแล้วตอบกลับเกรด กระบวนการผลิต และราคา การแปรรูปและ impregnation ทำในโรงงานเดียวกัน", gradeCol: "เกรด", tempCol: "ทนความร้อน", noteCol: "หมายเหตุสำหรับชิ้นงานตามแบบ", featCol: "รายการ", valCol: "ขอบเขต" },
}

export default async function CustomPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = getLocalized(h, locale)
  const name = getLocalized(customLanding.name, locale)
  const intro = getLocalized(customLanding.intro, locale)
  const useCases = getLocalized(customLanding.useCases, locale) as string[]
  const faqItems = customLanding.faq.map((f) => ({ q: getLocalized(f.q, locale), a: getLocalized(f.a, locale) }))

  return (
    <>
      <FaqJsonLd questions={faqItems} />

      <Breadcrumb
        items={[{ name, url: "/custom" }]}
        locale={locale}
      />

      <PageHead en={t.eyebrow} title={name} description={intro} />

      {/* Key facts */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">01</div>
          <h2 className="mb-2 text-2xl font-bold text-primary md:text-3xl">{t.facts}</h2>
          <div className="industrial-divider" />
          <dl className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {customLanding.keyFacts.map((f) => (
              <div key={f.label} className="bg-white p-4">
                <dt className="text-[11px] font-medium text-muted">{f.label}</dt>
                <dd className="mt-1 text-sm font-semibold leading-snug text-primary">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">02</div>
          <h2 className="mb-2 text-2xl font-bold text-primary md:text-3xl">{t.caps}</h2>
          <div className="industrial-divider" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {customLanding.capabilities.map((c) => (
              <div key={c.title.en} className="card p-5">
                <div className="flex items-start gap-3">
                  <Icon name="wrench" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-sm font-bold text-primary">{getLocalized(c.title, locale)}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{getLocalized(c.desc, locale)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tolerances */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">03</div>
          <h2 className="mb-2 text-2xl font-bold text-primary md:text-3xl">{t.tols}</h2>
          <div className="industrial-divider" />
          <div className="card mt-8 overflow-x-auto p-6 md:p-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="w-48 py-3 pr-4 text-left font-semibold text-muted">{t.featCol}</th>
                  <th className="py-3 text-left font-semibold text-muted">{t.valCol}</th>
                </tr>
              </thead>
              <tbody>
                {customLanding.tolerances.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-3 pr-4 font-medium text-muted">{getLocalized(row.feature, locale)}</td>
                    <td className="py-3 font-semibold text-primary">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Grades */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-4xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">04</div>
          <h2 className="mb-2 text-2xl font-bold text-primary md:text-3xl">{t.grades}</h2>
          <div className="industrial-divider" />
          <div className="card mt-8 overflow-x-auto p-6 md:p-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-left font-semibold text-muted">{t.gradeCol}</th>
                  <th className="py-3 pr-4 text-left font-semibold text-muted whitespace-nowrap">{t.tempCol}</th>
                  <th className="py-3 text-left font-semibold text-muted">{t.noteCol}</th>
                </tr>
              </thead>
              <tbody>
                {customLanding.grades.map((g) => (
                  <tr key={g.code} className="border-b border-border last:border-0">
                    <td className="py-3 pr-4 font-bold whitespace-nowrap text-primary">{g.code}</td>
                    <td className="py-3 pr-4 font-semibold whitespace-nowrap text-primary">{g.temp}</td>
                    <td className="py-3 leading-relaxed text-muted">{getLocalized(g.note, locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Inputs */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">05</div>
          <h2 className="mb-2 text-2xl font-bold text-primary md:text-3xl">{t.inputs}</h2>
          <div className="industrial-divider" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {customLanding.inputs.map((input) => (
              <div key={input.label.en} className="card p-5">
                <h3 className="text-sm font-bold text-primary">{getLocalized(input.label, locale)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{getLocalized(input.desc, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">06</div>
          <h2 className="mb-2 text-2xl font-bold text-primary md:text-3xl">{t.process}</h2>
          <div className="industrial-divider" />
          <div className="mt-8">
            <StepStrip
              items={customLanding.process.map((p) => ({
                title: getLocalized(p.title, locale),
                desc: getLocalized(p.desc, locale),
              }))}
            />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">07</div>
          <h2 className="mb-2 text-2xl font-bold text-primary md:text-3xl">{t.cases}</h2>
          <div className="industrial-divider" />
          <ul className="mt-8 space-y-4">
            {useCases.map((c, i) => (
              <li key={i} className="card flex items-start gap-3 p-5">
                <Icon name="clipboard" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-muted">{c}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-accent">08</div>
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">{t.faq}</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <FAQAccordion key={i} title={item.q}>
                <p className="text-sm leading-relaxed text-muted">{item.a}</p>
              </FAQAccordion>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t.ctaTitle} subtitle={t.ctaSubtitle} />
    </>
  )
}
