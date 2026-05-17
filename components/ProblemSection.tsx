import Link from "next/link"

const problems = [
  {
    title: "Seal Wear & Short Service Life",
    description:
      "Ordinary seals wear out in months, requiring frequent replacements that drive up maintenance costs and inventory carrying costs. Each replacement means disassembling equipment, replacing parts, and lost production time.",
    metric: "Up to 6x shorter lifespan vs. carbon graphite",
  },
  {
    title: "Leakage & Environmental Risk",
    description:
      "Failed seals cause fluid leakage that creates safety hazards, environmental compliance violations, and costly product loss. In chemical and marine applications, a single seal failure can result in regulatory fines and reputational damage.",
    metric: "70% of pump failures are seal-related",
  },
  {
    title: "Unplanned Downtime Losses",
    description:
      "Emergency shutdowns due to seal failure disrupt production schedules, delay deliveries, and incur overtime labor costs. Every hour of unplanned downtime directly impacts your bottom line.",
    metric: "Average downtime cost: hundreds to thousands per hour",
  },
]

export default function ProblemSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">Common Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            The True Cost of Seal Failure
          </h2>
          <p className="text-muted leading-relaxed">
            If you&apos;re experiencing any of these issues, your current sealing solution may be costing you far more
            than the price of a replacement part.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="card p-6 md:p-8 flex flex-col">
              <h3 className="text-lg font-bold text-primary mb-3">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{p.description}</p>
              <div className="bg-accent/5 border border-accent/20 rounded p-3">
                <div className="text-xs text-muted mb-0.5">Impact</div>
                <div className="text-sm font-semibold text-accent">{p.metric}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 p-8 bg-white border border-border rounded-lg">
          <h3 className="text-xl font-bold text-primary mb-3">
            Carbon Graphite Solves All Three
          </h3>
          <p className="text-muted text-sm max-w-2xl mx-auto mb-6">
            Self-lubricating, wear-resistant, and corrosion-proof — HuaHao carbon graphite seals deliver 3-6x longer
            service life, eliminate leakage, and drastically reduce unplanned downtime. Backed by 20+ years of
            manufacturing expertise and ISO 9001 certified quality.
          </p>
          <Link href="/contact" className="btn-primary">
            Solve My Seal Problems
          </Link>
        </div>
      </div>
    </section>
  )
}
