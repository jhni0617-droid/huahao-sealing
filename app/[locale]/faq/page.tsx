import { Link } from "@/i18n/routing"
import { coreTables, faqCategories, formulas } from "@/lib/faq-data"
import type { FAQItem } from "@/lib/faq-data"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "常见问题解决 | 华豪密封件",
  description: "碳石墨密封件选型、装配间隙、加工安装、使用故障、维护保养、定制非标等常见问题解答，及核心技术表格与计算公式。",
  path: "/faq",
})

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

export default function FAQPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">常见问题解决</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            选型、装配、故障排查、计算公式 —— 一站式碳石墨密封技术参考资料。
          </p>
        </div>
      </section>

      {/* Part 1: Core Tables */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">核心实用表格合集</h2>
            <div className="industrial-divider mx-auto" />
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              选型、设计、安装、故障排查必备参考数据。点击条目展开详情。
            </p>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {coreTables.map((table) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">常见问题分类</h2>
            <div className="industrial-divider mx-auto" />
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              按类别浏览常见问题，快速找到您需要的答案。
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{cat.category}</h3>
                  <span className="text-xs text-muted bg-gray-100 px-2 py-0.5 rounded-full">
                    {cat.items.length} 问
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">技术计算公式专区</h2>
            <div className="industrial-divider mx-auto" />
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              密封设计与故障分析中常用的工程计算公式。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {formulas.map((f) => (
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
                  <h4 className="font-semibold text-primary mb-2">符号说明</h4>
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-border px-3 py-1.5 text-left font-medium text-primary w-20">符号</th>
                        <th className="border border-border px-3 py-1.5 text-left font-medium text-primary">含义</th>
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
                    <span className="font-semibold text-primary">注：</span>
                    {f.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="还有未解决的问题？"
        subtitle="我们的工程师团队随时为您提供专业的碳石墨密封技术支持。"
      />
    </>
  )
}
