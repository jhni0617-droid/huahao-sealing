import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"
import { applicationsByLocale } from "@/lib/translations"

const iconMap: Record<string, string> = {
  pump: "M3 12h2v-2H3v2zm16 0h2v-2h-2v2zM5 12l6-6v4h6v4h-6v4l-6-6z",
  ship: "M20 21v-2h-2v-2h-2v-2h-2V9h-2V7h-2V3l-2 4v2H4v4h2v4h2v2h2v2h10z",
  chem: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
  seal: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15L17 12.23l-4-2.37z",
}

export default async function ApplicationsSection() {
  const locale = await getLocale()
  const t = await getTranslations("home.applicationsSection")
  const items = getLocalized(applicationsByLocale, locale)
  const viewText = getLocalized({
    zh: "查看应用",
    en: "View application",
    vi: "Xem ứng dụng",
    th: "ดูการใช้งาน",
    ru: "Смотреть применение",
    ja: "用途を見る",
    ko: "응용 보기",
  }, locale)

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_360px] md:items-end">
          <div>
            <div className="badge-accent mb-4">{t("tag")}</div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">{t("title")}</h2>
            <div className="industrial-divider" />
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-right">
            {t("description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map((app, index) => (
            <Link
              key={app.slug}
              href={`/applications#${app.slug}`}
              className="group border border-border bg-white p-6 transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center bg-accent-subtle transition-colors group-hover:bg-accent">
                  <svg className="h-6 w-6 text-accent transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconMap[app.image]} />
                  </svg>
                </div>
                <span className="text-xs font-bold text-border">0{index + 1}</span>
              </div>
              <h3 className="mb-3 text-base font-bold text-primary transition-colors group-hover:text-accent">{app.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{app.description}</p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.08em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                {viewText}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
