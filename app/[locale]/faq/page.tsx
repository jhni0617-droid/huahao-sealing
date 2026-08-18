import { getLocale, getTranslations, setRequestLocale } from "next-intl/server"
import { faqCoreTablesByLocale, faqCategoriesByLocale, faqFormulasByLocale } from "@/lib/translations-faq-page"
import type { FAQItem } from "@/lib/faq-data"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { FaqJsonLd } from "@/components/JsonLd"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import PageHero from "@/components/PageHero"
import Breadcrumb from "@/components/Breadcrumb"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "faq" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/faq",
    locale,
  })
}

function TableView({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="bg-primary/5 text-primary font-semibold px-4 py-2.5 text-left border border-border whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="even:bg-gray-50/50 hover:bg-primary/[0.02]">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-2.5 border border-border ${ci === 0 ? "font-medium text-primary whitespace-nowrap" : "text-muted"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function FAQItemBlock({ item }: { item: FAQItem }) {
  return (
    <FAQAccordion title={item.question}>
      <div className="text-sm text-muted leading-relaxed whitespace-pre-line">{item.answer}</div>
    </FAQAccordion>
  )
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("faq")
  const hero = getLocalized({
    zh: { eyebrow: "技术资料库", primary: "咨询工程师", stats: ["核心表格", "FAQ 分类", "公式"] },
    en: { eyebrow: "Technical reference", primary: "Ask an Engineer", stats: ["Core tables", "FAQ groups", "Formulas"] },
    vi: { eyebrow: "Tài liệu kỹ thuật", primary: "Hỏi kỹ sư", stats: ["Bảng chính", "Nhóm FAQ", "Công thức"] },
    th: { eyebrow: "ข้อมูลอ้างอิงทางเทคนิค", primary: "ถามวิศวกร", stats: ["ตารางหลัก", "กลุ่ม FAQ", "สูตร"] },
    ru: { eyebrow: "Технический справочник", primary: "Спросить инженера", stats: ["Основные таблицы", "Группы FAQ", "Формулы"] },
    ja: { eyebrow: "技術資料", primary: "技術者に相談", stats: ["主要表", "FAQ分類", "公式"] },
    ko: { eyebrow: "기술 자료", primary: "엔지니어 문의", stats: ["핵심 표", "FAQ 그룹", "공식"] },
  }, locale)

  const tables = faqCoreTablesByLocale[locale] || faqCoreTablesByLocale.en
  const categories = faqCategoriesByLocale[locale] || faqCategoriesByLocale.en
  const techFormulas = faqFormulasByLocale[locale] || faqFormulasByLocale.en

  return (
    <>
      {/* FAQ Structured Data */}
      <FaqJsonLd questions={
        categories.flatMap((cat) => cat.items.map((item) => ({ q: item.question, a: item.answer }))).concat(
          tables.flatMap((t) => t.rows.slice(0, 3).map((row) => ({ q: row[0], a: row.slice(1).join("；") })))
        )
      } />

      <PageHero
        eyebrow={hero.eyebrow}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        primaryLabel={hero.primary}
        stats={[
          { value: `${tables.length}`, label: hero.stats[0] },
          { value: `${categories.length}`, label: hero.stats[1] },
          { value: `${techFormulas.length}`, label: hero.stats[2] },
        ]}
      />
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/faq" }]} locale={locale} />

      {/* Part 1: Core Tables */}
      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t("tablesTitle")}</h2>
            <div className="industrial-divider mx-auto" />
            <p className="text-muted mt-4 max-w-2xl mx-auto">{t("tablesSubtitle")}</p>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {tables.map((table) => (
              <FAQAccordion key={table.id} title={table.title} description={table.description}>
                <TableView headers={table.headers} rows={table.rows} />
              </FAQAccordion>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: FAQ Categories */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t("categoriesTitle")}</h2>
            <div className="industrial-divider mx-auto" />
            <p className="text-muted mt-4 max-w-2xl mx-auto">{t("categoriesSubtitle")}</p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{cat.category}</h3>
                  <span className="text-xs text-muted bg-gray-100 px-2 py-0.5 rounded-full">
                    {cat.items.length} {t("itemsLabel")}
                  </span>
                </div>
                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <FAQItemBlock key={i} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 3: Formulas */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t("formulasTitle")}</h2>
            <div className="industrial-divider mx-auto" />
            <p className="text-muted mt-4 max-w-2xl mx-auto">{t("formulasSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {techFormulas.map((f) => (
              <div key={f.name} className="card p-6 flex flex-col">
                <h3 className="font-bold text-lg text-primary mb-2">{f.name}</h3>
                <p className="text-xs text-muted mb-4">{f.description}</p>

                {/* Formula display */}
                <div className="bg-primary/[0.04] border border-primary/10 rounded-lg p-4 mb-4">
                  <code className="text-sm font-mono text-accent font-semibold leading-relaxed block whitespace-pre-line">
                    {f.formula}
                  </code>
                </div>

                {/* Variables table */}
                <div className="text-sm">
                  <h4 className="font-semibold text-primary mb-2">{t("symbolLabel")}</h4>
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-border px-3 py-1.5 text-left font-medium text-primary w-20">{t("symbolLabel")}</th>
                        <th className="border border-border px-3 py-1.5 text-left font-medium text-primary">{t("meaningLabel")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {f.variables.map((v) => (
                        <tr key={v.symbol} className="even:bg-gray-50/50">
                          <td className="border border-border px-3 py-1.5 text-accent font-mono font-medium">
                            {v.symbol}
                          </td>
                          <td className="border border-border px-3 py-1.5 text-muted">{v.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {f.note && (
                  <div className="mt-4 pt-3 border-t border-border text-xs text-muted leading-relaxed">
                    <span className="font-semibold text-primary">{t("noteLabel")}: </span>
                    {f.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
      />
    </>
  )
}
