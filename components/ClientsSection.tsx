import { clientCountries, exportRegions } from "@/lib/constants"

export default function ClientsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-bold text-sm tracking-widest">全球布局</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            产品出口全球50+国家
          </h2>
          <p className="text-muted leading-relaxed">
            客户遍布六大洲，我们的产品远销欧洲、亚洲、美洲和中东的工业市场。
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: "50+", label: "出口国家" },
            { value: "5,000+", label: "全球客户" },
            { value: "20+", label: "出口经验" },
            { value: "6", label: "服务大洲" },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 bg-gray-50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Continents visual map */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {exportRegions.map((region) => (
            <div key={region.continent} className="card p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <h3 className="font-bold text-sm text-primary tracking-wider">{region.continent}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {region.countries.map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 bg-gray-50 border border-border rounded text-xs font-medium text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full country list */}
        <details className="group">
          <summary className="cursor-pointer text-sm text-primary font-semibold hover:text-accent transition-colors list-none text-center">
            <span className="group-open:hidden">查看全部国家</span>
            <span className="hidden group-open:inline">收起列表</span>
          </summary>
          <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-3xl mx-auto">
            {clientCountries.map((country) => (
              <span
                key={country}
                className="px-3 py-1.5 bg-gray-50 border border-border rounded text-sm text-muted"
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
