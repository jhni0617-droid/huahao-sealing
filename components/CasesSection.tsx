import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"
import { casesByLocale } from "@/lib/translations"
import Icon from "@/components/ui/Icon"

export default async function CasesSection() {
  const locale = await getLocale()
  const t = await getTranslations("home.casesSection")
  const items = getLocalized(casesByLocale, locale)

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-14">
          <div className="badge-accent justify-center mx-auto mb-4">
            {t("tag")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{t("title")}</h2>
          <div className="industrial-divider mx-auto" />
          <p className="text-muted mt-4 max-w-2xl mx-auto text-base">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <div key={i} className="card p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-xs font-semibold text-accent uppercase tracking-wider">{c.company}</div>
                <span className="w-1 h-1 rounded-full bg-accent/30" />
              </div>
              <h3 className="font-bold text-base mb-3 text-primary">{c.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1 line-clamp-4">{c.condition}</p>
              <div className="pt-4 border-t border-border mt-auto">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon name="check" className="w-3.5 h-3.5 text-success" />
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                    {t("resultLabel")}
                  </span>
                </div>
                <div className="text-sm font-semibold text-green-700 leading-relaxed">{c.result}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/cases" className="btn-secondary">
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  )
}
