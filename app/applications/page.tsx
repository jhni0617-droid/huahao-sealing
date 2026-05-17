import Link from "next/link"
import { applications } from "@/lib/constants"
import { products } from "@/lib/products"
import CTASection from "@/components/CTASection"
import ApplicationConditionsSection from "@/components/ApplicationConditionsSection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "应用领域 | 华豪密封",
  description: "碳石墨密封解决方案，服务于泵行业、船舶、化工处理和通用工业领域。在20+行业中得到验证的可靠性。",
  path: "/applications",
})

const details: Record<string, { description: string; products: string[] }> = {
  "pump-industry": {
    description:
      "我们的密封件广泛应用于离心泵、化工泵、清水泵和油泵。碳石墨的自润滑特性使其成为对可靠性要求苛刻的高速旋转设备的理想选择。",
    products: ["109-series", "58u-series", "m7n-series", "206-series"],
  },
  "marine-industry": {
    description:
      "船舶环境要求特殊的耐腐蚀性能。我们经过特殊处理的碳石墨密封件和轴承能够承受海水腐蚀，同时在变化载荷下保持尺寸稳定性。",
    products: ["59u-series", "204-series", "58b-series", "109-series"],
  },
  "chemical-processing": {
    description:
      "化工反应釜、搅拌器和工艺泵要求密封件能够抵抗腐蚀性介质。我们的浸渍碳石墨牌号提供优异的耐化学性能，满足严格的安全要求。",
    products: ["m7n-series", "59u-series", "206-series", "bia-series"],
  },
  "general-sealing": {
    description:
      "从阀杆到压缩机和搅拌器，我们的标准及定制工程密封解决方案以可靠、经济的性能服务于各类通用工业设备。",
    products: ["104-series", "155-series", "58b-series", "58u-series"],
  },
}

export default function ApplicationsPage() {
  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">服务行业</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            数十年行业经验，为全球最严苛的工业领域解决密封挑战。
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
                      <h3 className="font-semibold mb-3">推荐产品</h3>
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
                    <h3 className="font-semibold mb-4">为什么 {app.title} 选择碳石墨？</h3>
                    <ul className="space-y-3">
                      {[
                        "自润滑 — 无需外部润滑",
                        "恶劣环境中耐腐蚀",
                        "耐高温和抗热冲击",
                        "变载条件下尺寸稳定",
                        "长寿命减少维护停机时间",
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
        title="不确定哪种方案适合您的工况？"
        subtitle="告诉我们您的运行条件，我们的工程师将为您推荐最佳的密封方案。"
      />
    </>
  )
}
