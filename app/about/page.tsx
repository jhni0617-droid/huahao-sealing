import { factoryHighlights } from "@/lib/constants"
import CTASection from "@/components/CTASection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "About Us | HuaHao Carbon Graphite Sealing",
  description: "Learn about HuaHao Sealing's 20+ years of manufacturing expertise, our production facilities, quality control, and commitment to sealing excellence.",
  path: "/about",
})

const milestones = [
  { year: "2003", event: "Company founded as a specialized carbon graphite sealing manufacturer" },
  { year: "2008", event: "Expanded production capacity with CNC machining centers" },
  { year: "2012", event: "Achieved ISO 9001 quality management certification" },
  { year: "2015", event: "Opened international sales division; exports to 20+ countries" },
  { year: "2018", event: "Developed advanced anti-oxidation impregnation technology" },
  { year: "2023", event: "50+ export countries, 5000+ customers served worldwide" },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About HuaHao Sealing</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            Two decades of relentless commitment to carbon graphite sealing excellence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
              <div className="industrial-divider" />
              <p className="text-muted mt-4 leading-relaxed">
                Founded in 2003, HuaHao Sealing started as a specialized workshop focused on carbon graphite
                seal ring manufacturing. Over two decades, we have grown into a comprehensive sealing solutions
                provider serving over 5,000 customers across 50+ countries.
              </p>
              <p className="text-muted mt-4 leading-relaxed">
                Our core expertise lies in understanding the unique properties of carbon graphite materials and
                applying them to solve real-world sealing challenges. From standard catalog products to custom-engineered
                solutions, every product we manufacture reflects our commitment to quality, precision, and reliability.
              </p>
              <p className="text-muted mt-4 leading-relaxed">
                Today, our products are trusted in some of the most demanding industrial environments — from
                chemical processing plants to marine vessels, power generation facilities to paper mills.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {factoryHighlights.map((h) => (
                <div key={h.label} className="card p-6 text-center">
                  <div className="text-3xl font-bold text-accent">{h.value}</div>
                  <div className="text-sm text-muted mt-1">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0 relative">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full shrink-0 mt-1" />
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div>
                  <span className="text-sm font-bold text-accent">{m.year}</span>
                  <p className="text-muted mt-1">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Quality & Manufacturing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Raw Material Control",
                desc: "Every batch of carbon graphite raw material is tested for density, hardness, and purity before production begins.",
              },
              {
                title: "Precision Machining",
                desc: "Our CNC machining centers achieve dimensional tolerances within microns, ensuring consistent quality across every production run.",
              },
              {
                title: "Performance Testing",
                desc: "Each product undergoes rigorous inspection including dimensional verification, pressure testing, and surface quality assessment.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner with HuaHao Sealing"
        subtitle="Whether you need standard products or custom-engineered solutions, our team is ready to support your project."
      />
    </>
  )
}
