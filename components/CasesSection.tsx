import Link from "next/link"
import { cases } from "@/lib/constants"

export default function CasesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Success Stories</h2>
          <div className="industrial-divider mx-auto" />
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Real results from real partnerships. See how our sealing solutions solve complex industrial challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="card p-6 flex flex-col">
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{c.company}</div>
              <h3 className="font-bold text-lg mb-3">{c.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{c.description}</p>
              <div className="pt-4 border-t border-border">
                <div className="text-xs text-muted mb-1">Result</div>
                <div className="text-sm font-semibold text-green-700">{c.result}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/cases" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
