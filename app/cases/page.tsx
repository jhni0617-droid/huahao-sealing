import { cases } from "@/lib/constants"
import CTASection from "@/components/CTASection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "Case Studies | HuaHao Sealing Success Stories",
  description: "Real-world case studies showing how our carbon graphite sealing solutions solved complex industrial challenges for clients worldwide.",
  path: "/cases",
})

export default function CasesPage() {
  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            Real challenges, engineered solutions, measurable results.
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
                  <div className="text-xs text-muted mb-1">Key Result</div>
                  <div className="text-sm font-semibold text-green-700">{c.result}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-primary mb-4">Want to Be Our Next Success Story?</h2>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              Contact us to discuss how our sealing solutions can solve your specific challenges.
            </p>
            <a href="/contact" className="btn-primary">Start Your Project</a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
