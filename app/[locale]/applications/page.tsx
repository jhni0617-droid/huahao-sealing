import { Link } from "@/i18n/routing"
import { applications } from "@/lib/constants"
import CTASection from "@/components/CTASection"
import ApplicationConditionsSection from "@/components/ApplicationConditionsSection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "应用领域 | 华豪密封件",
  description: "碳石墨密封解决方案，服务于泵行业、船舶与海洋工程、化工制药、电力能源、食品制药、冶金矿山、石油天然气等行业。在20+行业中得到验证的可靠性。",
  path: "/applications",
})

interface DetailData {
  description: string
  reasons: string[]
}

const details: Record<string, DetailData> = {
  "pump-industry": {
    description:
      "我们的密封件广泛应用于各类离心泵、化工泵、清水泵和油泵的旋转轴密封。碳石墨的自润滑特性使其成为高速旋转设备的理想选择，配合高精度研磨的石墨轴套，可显著提升泵组运行稳定性，降低轴磨损，将大修周期从3个月延长至18个月以上。",
    reasons: [
      "自润滑免维护，无需外部润滑系统",
      "配合高精度研磨轴套，显著降低轴磨损",
      "耐冲刷，适应含固体颗粒介质",
      "启动和停机过程中保持密封稳定",
      "将大修周期从3个月延长至18个月以上",
    ],
  },
  "marine-industry": {
    description:
      "船舶环境要求特殊的耐腐蚀性能。我们经过特殊浸渍处理的碳石墨密封件和轴承能够承受海水的长期腐蚀，同时在变化载荷和冲击工况下保持尺寸稳定性。石墨轴套在船舶艉轴密封和海水泵中表现尤为突出，自润滑特性确保在长期浸水和干湿交替工况下可靠运行。",
    reasons: [
      "特殊浸渍工艺抵抗海水长期腐蚀",
      "干湿交替工况下尺寸稳定",
      "自润滑特性确保长期浸水可靠运行",
      "通过DNV等船级社认证",
      "冲击和振动载荷下保持密封完整性",
    ],
  },
  "chemical-processing": {
    description:
      "化工反应釜、搅拌器和工艺泵要求密封件能够抵抗各类腐蚀性介质。我们的浸渍碳石墨牌号具有优异的化学惰性，耐受强酸、强碱及有机溶剂的腐蚀。配套的石墨轴套和轴承在腐蚀性介质中保持化学稳定，为搅拌轴和泵轴提供长期可靠的支撑和导向。",
    reasons: [
      "化学惰性，耐受强酸强碱及有机溶剂",
      "无金属污染风险，适合洁净工艺",
      "高温下保持化学稳定性和机械强度",
      "无外部润滑需求，避免介质污染",
      "丰富的浸渍牌号可选，适配不同介质",
    ],
  },
  "power-energy": {
    description:
      "电厂循环水泵、核电站辅助泵、热电联产供热泵、汽轮机润滑油泵等一系列能源行业设备都离不开可靠的密封和轴承部件。碳石墨耐高温特性（可达600°C）确保在高温蒸汽和热介质工况中保持尺寸稳定，大幅减少计划外停机，显著提升发电设备的运行可用率。",
    reasons: [
      "耐高温达600°C，适用高温蒸汽环境",
      "热膨胀系数低，温度波动下尺寸稳定",
      "自润滑确保润滑油泵故障时仍可运行",
      "年停机时间可减少720小时以上",
      "无油运行，适合高温区域防火安全要求",
    ],
  },
  "food-pharma": {
    description:
      "食品和制药机械对密封材料有严格的卫生和安全要求。我们的食品级树脂浸渍碳石墨完全无油自润滑运行，无金属颗粒和润滑脂污染风险，符合FDA和EU食品接触材料标准。广泛应用于巧克力搅拌机、食品输送泵、灌装机、制药混合机等设备。",
    reasons: [
      "FDA和EU食品接触材料认证",
      "完全无油运行，零润滑脂污染风险",
      "无金属离子析出，适合洁净生产环境",
      "微量磨损碳粉呈黑色易发现易清除",
      "耐蒸汽清洗和CIP在线清洗",
    ],
  },
  "mining-metallurgy": {
    description:
      "矿山渣浆泵、冶金轧机润滑系统、选矿设备搅拌器、除尘风机等重载设备对耐磨性和可靠性要求极高。碳石墨材料优异的自润滑性能和抗热冲击性能，在含固体颗粒介质和高粉尘恶劣环境中保持长寿命，显著减少频繁停机更换带来的维护成本。",
    reasons: [
      "优异的耐磨性，抵抗固体颗粒冲刷",
      "抗热冲击性能卓越，适应骤冷骤热",
      "干式运行能力，应对润滑中断",
      "高粉尘环境中自润滑性能稳定",
      "大幅降低重载设备停机维护频率",
    ],
  },
  "oil-gas": {
    description:
      "输油泵机械密封、天然气压缩机轴承、油田注水泵轴套、LNG低温泵密封等油气行业关键部件，要求材料在极端工况下保持稳定。碳化和特殊浸渍处理的碳石墨牌号在油气介质中保持化学惰性和尺寸精度，满足API标准要求，适用于陆地和海上油气田。",
    reasons: [
      "碳化处理后在油气介质中化学惰性稳定",
      "满足API标准密封和轴承要求",
      "低温和高温工况均保持尺寸精度",
      "适用于陆地及海上油气平台",
      "自润滑降低压缩机轴承维护频率",
    ],
  },
  "general-sealing": {
    description:
      "阀杆密封、压缩机密封、搅拌器密封、风机轴承、造纸设备密封及各类非标工业设备的定制工程密封方案。碳石墨材料灵活的可加工性和丰富的牌号选择，使其能够适应各种复杂的安装空间和工况条件，为通用机械制造和OEM厂商提供经济可靠的密封与轴承配套解决方案。",
    reasons: [
      "可加工性强，适应非标结构和异形件",
      "丰富的牌号覆盖不同温度/介质需求",
      "成本效益高，性价比优于金属轴承",
      "OEM配套经验成熟，交期稳定",
      "材料来源稳定，供应链可靠",
    ],
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
                      <h3 className="font-semibold mb-3">适用产品类型</h3>
                      <div className="flex flex-wrap gap-2">
                        <Link href="/products#seal-rings" className="px-3 py-1.5 bg-primary/5 border border-primary/20 text-sm rounded hover:bg-primary hover:text-white transition-colors">
                          碳石墨密封环
                        </Link>
                        <Link href="/products#carbon-graphite-sleeves" className="px-3 py-1.5 bg-primary/5 border border-primary/20 text-sm rounded hover:bg-primary hover:text-white transition-colors">
                          石墨轴套及轴承
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <h3 className="font-semibold mb-4">为什么 {app.title} 选择碳石墨？</h3>
                    <ul className="space-y-3">
                      {(detail.reasons || [
                        "自润滑 — 无需外部润滑",
                        "恶劣环境中耐腐蚀",
                        "耐高温和抗热冲击",
                        "变载条件下尺寸稳定",
                        "长寿命减少维护停机时间",
                      ]).map((item, i) => (
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
