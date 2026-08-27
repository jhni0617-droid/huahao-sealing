import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"
import { casesByLocale } from "@/lib/translations"
import Icon from "@/components/ui/Icon"
import Reveal from "@/components/ui/Reveal"
import SectionHead from "@/components/ui/SectionHead"

export default async function CasesSection() {
  const locale = await getLocale()
  const t = await getTranslations("home.casesSection")
  const items = getLocalized(casesByLocale, locale)

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0 max-w-full flex-1 lg:max-w-[calc(100%-440px)]">
            <SectionHead en="Case Studies" title={t("title")} />
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted max-lg:hidden">{t("description")}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
          {items.map((c, i) => (
            <Reveal key={i} delay={(i % 3) * 90}>
            <div className="card-static group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_42px_rgba(23,25,29,0.12)]">
              <div className="border-b border-border bg-white p-4 sm:p-5 lg:p-6">
                <div className="en-caption mb-2 text-xs text-muted-light">{c.company}</div>
                <h3 className="text-base font-bold text-primary line-clamp-2 transition-colors group-hover:text-accent sm:text-lg">{c.title}</h3>
              </div>
              <div className="flex flex-1 flex-col bg-white p-4 sm:p-5 lg:p-6">
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3 sm:mb-5 flex-1 line-clamp-3 sm:line-clamp-4">{c.condition}</p>
              </div>
              <div className="mt-auto border-t border-border bg-background p-4 sm:p-5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon name="check" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-success" />
                  <span className="en-caption text-[11px] font-medium text-muted">
                    {t("resultLabel")}
                  </span>
                </div>
                <div className="border-l-2 border-success pl-3 text-xs sm:text-sm font-semibold text-green-700 leading-relaxed line-clamp-2">{c.result}</div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link href="/cases" className="btn-secondary">
            {t("viewAll")}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
