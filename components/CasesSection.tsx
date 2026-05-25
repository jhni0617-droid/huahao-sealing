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
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_360px] md:items-end">
          <div>
            <div className="badge-accent mb-4">
              {t("tag")}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">{t("title")}</h2>
            <div className="industrial-divider" />
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-right">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((c, i) => (
            <div key={i} className="card-static flex flex-col overflow-hidden">
              <div className="border-b border-border bg-white p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-accent">{c.company}</div>
                <h3 className="text-lg font-bold text-primary">{c.title}</h3>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-muted leading-relaxed mb-5 flex-1 line-clamp-4">{c.condition}</p>
              </div>
              <div className="border-t border-border bg-green-50/65 p-5">
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
