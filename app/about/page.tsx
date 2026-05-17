import { factoryHighlights } from "@/lib/constants"
import CTASection from "@/components/CTASection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "关于我们 | 华豪碳石墨密封",
  description: "了解华豪密封20+年的制造经验、生产设施、质量控制以及对密封卓越品质的承诺。",
  path: "/about",
})

const milestones = [
  { year: "2003", event: "公司成立，专业从事碳石墨密封件制造" },
  { year: "2008", event: "引进CNC加工中心，扩大产能" },
  { year: "2012", event: "引进先进浸渍处理生产线，提升产品性能" },
  { year: "2015", event: "设立国际销售部门，出口至20+国家" },
  { year: "2018", event: "自主研发先进抗氧化浸渍技术" },
  { year: "2023", event: "出口50+国家，服务全球5000+客户" },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于华豪密封</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            二十年来对碳石墨密封卓越品质的不懈追求。
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">公司简介</h2>
              <div className="industrial-divider" />
              <p className="text-muted mt-4 leading-relaxed">
                华豪密封成立于2003年，最初是一家专注于碳石墨密封环制造的专业工坊。经过二十多年的发展，我们已成长为综合性密封解决方案供应商，服务全球50多个国家的5000多家客户。
              </p>
              <p className="text-muted mt-4 leading-relaxed">
                我们的核心专长在于深入理解碳石墨材料的独特性能，并将其应用于解决实际密封挑战。从标准目录产品到定制工程方案，我们制造的每一件产品都体现了对质量、精度和可靠性的承诺。
              </p>
              <p className="text-muted mt-4 leading-relaxed">
                如今，我们的产品被广泛应用于最严苛的工业环境——从化工厂到船舶，从发电设施到造纸厂，处处都有华豪密封的身影。
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
          <h2 className="text-3xl font-bold text-primary text-center mb-12">发展历程</h2>
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
          <h2 className="text-3xl font-bold text-primary text-center mb-12">质量与制造</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "原材料控制",
                desc: "每批碳石墨原材料在投产前均经过密度、硬度和纯度检测。",
              },
              {
                title: "精密加工",
                desc: "CNC加工中心实现微米级尺寸公差，确保每一批次的质量一致性。",
              },
              {
                title: "性能检测",
                desc: "每件产品经过严格的尺寸验证、压力测试和表面质量评估。",
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
        title="与华豪密封合作"
        subtitle="无论您需要标准产品还是定制工程方案，我们的团队随时为您的项目提供支持。"
      />
    </>
  )
}
