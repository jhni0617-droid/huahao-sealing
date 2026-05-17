import { clientCountries, exportRegions } from "@/lib/constants"

export default function ClientsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">Global Presence</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Exporting to 50+ Countries Worldwide
          </h2>
          <p className="text-muted leading-relaxed">
            Trusted by customers across six continents. Our products are exported to industrial markets
            throughout Europe, Asia, the Americas, and the Middle East.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: "50+", label: "Export Countries" },
            { value: "5,000+", label: "Customers Worldwide" },
            { value: "20+", label: "Years Exporting" },
            { value: "6", label: "Continents Served" },
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
                <h3 className="font-bold text-sm text-primary uppercase tracking-wider">{region.continent}</h3>
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
            <span className="group-open:hidden">Show all countries</span>
            <span className="hidden group-open:inline">Hide full list</span>
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
