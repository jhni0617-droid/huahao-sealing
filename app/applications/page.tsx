import Link from "next/link"
import { applications } from "@/lib/constants"
import { products } from "@/lib/products"
import CTASection from "@/components/CTASection"
import ApplicationConditionsSection from "@/components/ApplicationConditionsSection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "Applications | Industries We Serve",
  description: "Carbon graphite sealing solutions for pump industry, marine, chemical processing, and general industrial applications. Proven reliability across 20+ industries.",
  path: "/applications",
})

const details: Record<string, { description: string; products: string[] }> = {
  "pump-industry": {
    description:
      "Our seals are widely used in centrifugal pumps, chemical process pumps, water pumps, and oil pumps. Carbon graphite's self-lubricating properties make it ideal for high-speed rotating applications where reliability is critical.",
    products: ["109-series", "58u-series", "m7n-series", "206-series"],
  },
  "marine-industry": {
    description:
      "Marine environments demand exceptional corrosion resistance. Our specially treated carbon graphite seals and bearings withstand seawater corrosion while maintaining dimensional stability under varying loads.",
    products: ["59u-series", "204-series", "58b-series", "109-series"],
  },
  "chemical-processing": {
    description:
      "Chemical reactors, agitators, and process pumps require seals that resist aggressive media. Our impregnated carbon graphite grades provide excellent chemical resistance and meet stringent safety requirements.",
    products: ["m7n-series", "59u-series", "206-series", "bia-series"],
  },
  "general-sealing": {
    description:
      "From valve stems to compressors and mixers, our standard and custom-engineered sealing solutions serve a broad spectrum of general industrial equipment with reliable, cost-effective performance.",
    products: ["104-series", "155-series", "58b-series", "58u-series"],
  },
}

export default function ApplicationsPage() {
  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            Decades of experience solving sealing challenges across the world's most demanding industries.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {applications.map((app, idx) => {
            const detail = details[app.slug]
            return (
              <div key={app.slug} id={app.slug} className={`mb-20 last:mb-0 ${idx > 0 ? "pt-10" : ""}`}>
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">{app.title}</h2>
                    <div className="industrial-divider" />
                    <p className="text-muted mt-4 leading-relaxed">{detail.description}</p>

                    <div className="mt-6">
                      <h3 className="font-semibold mb-3">Recommended Products</h3>
                      <div className="flex flex-wrap gap-2">
                        {detail.products.map((slug) => {
                          const product = products.find((p) => p.slug === slug)
                          return product ? (
                            <Link
                              key={slug}
                              href={`/products/${slug}`}
                              className="px-3 py-1.5 bg-primary/5 border border-primary/20 text-sm rounded hover:bg-primary hover:text-white transition-colors"
                            >
                              {product.name}
                            </Link>
                          ) : null
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <h3 className="font-semibold mb-4">Why Carbon Graphite for {app.title}?</h3>
                    <ul className="space-y-3">
                      {[
                        "Self-lubricating — no external lubrication required",
                        "Corrosion-resistant in harsh environments",
                        "Handles high temperatures and thermal shock",
                        "Dimensional stability under varying loads",
                        "Long service life reduces maintenance downtime",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-accent shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <ApplicationConditionsSection />

      <CTASection
        title="Not Sure Which Solution Fits Your Application?"
        subtitle="Tell us about your operating conditions, and our engineers will recommend the optimal sealing solution."
      />
    </>
  )
}
