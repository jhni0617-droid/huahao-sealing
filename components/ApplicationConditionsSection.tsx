import { applicationConditions } from "@/lib/constants"

export default function ApplicationConditionsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-bold text-sm tracking-widest">运行参数</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            典型应用工况参数
          </h2>
          <p className="text-muted leading-relaxed">
            碳石墨密封件在广泛的运行条件下均能可靠工作。以下是常见工业应用的典型参数范围。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 py-3 font-semibold">行业 / 应用</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">温度范围</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">压力</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">速度</th>
                <th className="text-left px-4 py-3 font-semibold">适用介质</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">pH范围</th>
              </tr>
            </thead>
            <tbody>
              {applicationConditions.map((cond, idx) => (
                <tr key={cond.industry} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-4 py-3 font-semibold text-primary">{cond.industry}</td>
                  <td className="px-4 py-3">{cond.tempRange}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{cond.pressureRange}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{cond.speedRange}</td>
                  <td className="px-4 py-3 text-muted">{cond.media}</td>
                  <td className="px-4 py-3 text-sm">{cond.phRange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded text-sm text-muted text-center">
          注：实际运行极限取决于具体材料牌号、浸渍类型和使用条件。请联系我们的工程团队获取针对特定应用的推荐方案。
        </div>
      </div>
    </section>
  )
}
