import { cases } from "@/lib/constants"
import CTASection from "@/components/CTASection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "案例中心 | 华豪密封成功案例",
  description: "真实案例研究，展示我们的碳石墨密封方案如何为全球客户解决复杂的工业密封挑战。",
  path: "/cases",
})

export default function CasesPage() {
  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">案例中心</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            真实挑战，工程解决方案，可量化成果。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c, i) => (
              <div key={i} className="card p-6 md:p-8 flex flex-col">
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">{c.company}</div>
                <h2 className="text-xl font-bold text-primary mb-4">{c.title}</h2>
                <p className="text-sm text-muted leading-relaxed flex-1 mb-6">{c.description}</p>
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <div className="text-xs text-muted mb-1">关键成果</div>
                  <div className="text-sm font-semibold text-green-700">{c.result}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-primary mb-4">想成为下一个成功案例？</h2>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              联系我们，探讨我们的密封方案如何解决您的特定挑战。
            </p>
            <a href="/contact" className="btn-primary">开始您的项目</a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
