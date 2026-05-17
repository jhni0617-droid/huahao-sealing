import { clientCountries, exportRegions } from "@/lib/constants"

export default function ClientsSection() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* World map background decoration */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 40%, #1B2838 1px, transparent 1px),
            radial-gradient(ellipse at 30% 30%, #1B2838 1px, transparent 1px),
            radial-gradient(ellipse at 50% 50%, #1B2838 1px, transparent 1px),
            radial-gradient(ellipse at 70% 35%, #1B2838 1px, transparent 1px),
            radial-gradient(ellipse at 85% 45%, #1B2838 1px, transparent 1px),
            radial-gradient(ellipse at 45% 60%, #1B2838 1px, transparent 1px),
            radial-gradient(ellipse at 60% 65%, #1B2838 1px, transparent 1px),
            radial-gradient(ellipse at 20% 65%, #1B2838 1px, transparent 1px),
            radial-gradient(ellipse at 75% 55%, #1B2838 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%'
        }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-bold text-sm tracking-widest">全球布局</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            产品出口全球 <span className="text-accent">10+</span> 国家
          </h2>
          <p className="text-muted leading-relaxed">
            客户遍布六大洲，产品远销欧洲、亚洲、美洲和中东，深受全球工业市场信赖。
          </p>
        </div>

        {/* Big stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden mb-14">
          {[
            { value: "10+", label: "出口国家" },
            { value: "1,000+", label: "全球客户" },
            { value: "20+", label: "出口经验（年）" },
            { value: "6", label: "服务大洲" },
          ].map((s) => (
            <div key={s.label} className="bg-white p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{s.value}</div>
              <div className="text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>

        {/* World regions visual grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {exportRegions.map((region, ri) => {
            const continentColors = [
              "border-l-accent",
              "border-l-blue-500",
              "border-l-emerald-600",
              "border-l-orange-600",
            ]
            return (
              <div key={region.continent} className="bg-white border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <div className={`w-1 h-6 rounded ${continentColors[ri]} bg-accent`} />
                  <h3 className="font-bold text-primary">{region.continent}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {region.countries.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 bg-gray-50 border border-border rounded text-xs font-medium text-muted hover:bg-accent/5 hover:text-accent hover:border-accent/20 transition-colors"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Full country list toggle */}
        <details className="group max-w-lg mx-auto">
          <summary className="cursor-pointer text-sm text-primary font-semibold hover:text-accent transition-colors list-none text-center p-3 bg-white border border-border rounded-lg hover:shadow-sm">
            <span className="group-open:hidden">展开全部国家列表</span>
            <span className="hidden group-open:inline">收起列表</span>
            <svg className="w-4 h-4 inline ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {clientCountries.map((country) => (
              <span
                key={country}
                className="px-3 py-1.5 bg-white border border-border rounded text-sm text-muted"
              >
                {country}
              </span>
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}
