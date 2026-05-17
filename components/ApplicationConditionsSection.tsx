import { applicationConditions } from "@/lib/constants"

export default function ApplicationConditionsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">Operating Parameters</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Typical Application Conditions
          </h2>
          <p className="text-muted leading-relaxed">
            Carbon graphite seals perform reliably across a wide range of operating conditions. Below are typical
            parameters for common industrial applications.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 py-3 font-semibold">Industry / Application</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Temp. Range</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Pressure</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Speed</th>
                <th className="text-left px-4 py-3 font-semibold">Media Compatibility</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">pH Range</th>
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
          Note: Actual operating limits depend on specific material grade, impregnation type, and application
          conditions. Contact our engineering team for application-specific recommendations.
        </div>
      </div>
    </section>
  )
}
