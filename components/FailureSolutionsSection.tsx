import { failureSolutions } from "@/lib/constants"
import Link from "next/link"

export default function FailureSolutionsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-bold text-sm tracking-widest">工程解决方案</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            常见密封故障 — 我们的解决方案
          </h2>
          <p className="text-muted leading-relaxed">
            数十年现场经验让我们深刻理解实际密封挑战。以下是我们解决最常见故障模式的方法。
          </p>
        </div>

        <div className="space-y-4">
          {failureSolutions.map((item) => (
            <details
              key={item.failure}
              className="card overflow-hidden [&[open]]:border-accent/20 [&[open]]:shadow-md transition-all"
            >
              <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-1 self-stretch bg-accent rounded shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary">{item.failure}</h3>
                    <p className="text-sm text-muted mt-0.5">{item.cause}</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-accent shrink-0 transition-transform [details[open]_&]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-border">
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-primary/5 p-4 rounded">
                    <div className="text-xs font-semibold text-primary tracking-wider mb-1">华豪方案</div>
                    <p className="text-sm leading-relaxed">{item.solution}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-xs font-semibold text-green-700 tracking-wider mb-1">实际效果</div>
                    <p className="text-sm font-semibold text-green-700">{item.benefit}</p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" className="btn-primary">
            获取定制方案
          </Link>
        </div>
      </div>
    </section>
  )
}
