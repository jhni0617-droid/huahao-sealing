import CTASection from "@/components/CTASection"
import FailureSolutionsSection from "@/components/FailureSolutionsSection"
import { generateMeta } from "@/lib/utils"
import { getDb } from "@/lib/admin/db"

export const metadata = generateMeta({
  title: "案例中心 | 华豪密封成功案例",
  description: "真实案例研究，展示我们的碳石墨密封方案如何为全球客户解决复杂的工业密封挑战。",
  path: "/cases",
})

interface CaseRow {
  title: string
  company: string
  condition: string
  diagnosis: string
  solution: string
  result: string
}

export default function CasesPage() {
  const db = getDb()
  const cases = db
    .prepare("SELECT title, company, condition, diagnosis, solution, result FROM cases WHERE published = 1 ORDER BY created_at DESC")
    .all() as CaseRow[]

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
        <div className="container-wide space-y-10">
          {cases.map((c, i) => (
            <div key={i} className="card p-6 md:p-8">
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">{c.company}</div>
              <h2 className="text-xl font-bold text-primary mb-6">{c.title}</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
                    <span className="text-accent">▸</span> 工况描述
                  </h3>
                  <div className="text-sm text-muted leading-relaxed whitespace-pre-line">{c.condition}</div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
                    <span className="text-red-500">▸</span> 问题诊断
                  </h3>
                  <div className="text-sm text-muted leading-relaxed whitespace-pre-line">{c.diagnosis}</div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
                    <span className="text-green-600">▸</span> 解决方案
                  </h3>
                  <div className="text-sm text-muted leading-relaxed whitespace-pre-line">{c.solution}</div>
                </div>
              </div>

              <div className="mt-6 bg-green-50 border border-green-200 rounded p-4">
                <div className="text-xs text-muted mb-1">关键成果</div>
                <div className="text-sm font-semibold text-green-700 whitespace-pre-line">{c.result}</div>
              </div>
            </div>
          ))}

          {cases.length === 0 && (
            <div className="text-center py-16 text-muted">暂无案例</div>
          )}
        </div>

        <div className="container-wide text-center mt-16">
          <h2 className="text-2xl font-bold text-primary mb-4">想成为下一个成功案例？</h2>
          <p className="text-muted mb-6 max-w-xl mx-auto">
            联系我们，探讨我们的密封方案如何解决您的特定挑战。
          </p>
          <a href="/contact" className="btn-primary">开始您的项目</a>
        </div>
      </section>

      <FailureSolutionsSection />

      <CTASection />
    </>
  )
}
