import { Link } from "@/i18n/routing"

const problems = [
  {
    title: "密封磨损、寿命短",
    description:
      "普通密封件使用几个月就开始磨损，频繁更换推高维护成本和备件库存费用。每一次更换都意味着拆解设备、更换零件和生产线停机的损失。",
    metric: "使用寿命比碳石墨短3-6倍",
  },
  {
    title: "泄漏与环保风险",
    description:
      "密封失效导致介质泄漏，带来安全隐患、环保违规处罚和高昂的物料损失。在化工和船舶领域，一次密封故障就可能造成监管罚款和商誉损害。",
    metric: "70%的泵故障与密封相关",
  },
  {
    title: "非计划停机损失",
    description:
      "密封故障引发的紧急停机打乱生产计划、延迟交货并产生加班人工成本。每一次非计划停机都直接影响企业利润。",
    metric: "平均停机成本：每小时数百至数千元",
  },
]

export default function ProblemSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-bold text-sm tracking-widest">常见问题</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            密封失效的真实成本
          </h2>
          <p className="text-muted leading-relaxed">
            如果您正面临以下问题，您当前的密封方案可能正在让您付出远超零件价格的代价。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="card p-6 md:p-8 flex flex-col">
              <h3 className="text-lg font-bold text-primary mb-3">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{p.description}</p>
              <div className="bg-accent/5 border border-accent/20 rounded p-3">
                <div className="text-xs text-muted mb-0.5">影响程度</div>
                <div className="text-sm font-semibold text-accent">{p.metric}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 p-8 bg-white border border-border rounded-lg">
          <h3 className="text-xl font-bold text-primary mb-3">
            碳石墨密封 — 三者皆可解决
          </h3>
          <p className="text-muted text-sm max-w-2xl mx-auto mb-6">
            自润滑、耐磨、耐腐蚀 — 华豪碳石墨密封件使用寿命延长3-6倍，消除泄漏，大幅减少非计划停机。
            源于20+年制造经验和对品质的持续追求。
          </p>
          <Link href="/contact" className="btn-primary">
            解决我的密封问题
          </Link>
        </div>
      </div>
    </section>
  )
}
