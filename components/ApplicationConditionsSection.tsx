import { getLocale, getTranslations } from "next-intl/server"
import { getLocalized } from "@/lib/locale-data"
import { applicationConditionsByLocale } from "@/lib/translations"

export default async function ApplicationConditionsSection() {
  const locale = await getLocale()
  const t = await getTranslations("applicationConditions")
  const conditions = getLocalized(applicationConditionsByLocale, locale)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-bold text-sm tracking-widest">{t("tag")}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            {t("title")}
          </h2>
          <p className="text-muted leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 py-3 font-semibold">{t("industry")}</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">{t("tempRange")}</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">{t("pressure")}</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">{t("speed")}</th>
                <th className="text-left px-4 py-3 font-semibold">{t("media")}</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">{t("phRange")}</th>
              </tr>
            </thead>
            <tbody>
              {conditions.map((cond, idx) => (
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
          {t("note")}
        </div>
      </div>
    </section>
  )
}
