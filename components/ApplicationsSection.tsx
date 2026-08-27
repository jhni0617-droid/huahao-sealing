import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"
import { applicationsByLocale } from "@/lib/translations"
import Reveal from "@/components/ui/Reveal"
import SectionHead from "@/components/ui/SectionHead"

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
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHead en="Applications" title={t("title")} description={t("description")} />

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((app, index) => (
            <Reveal key={app.slug} delay={index * 80}>
              <Link
                href={`/applications#${app.slug}`}
                className="group relative flex h-full flex-col bg-white p-6 transition-colors duration-300 hover:bg-[#fafafb] md:p-7"
              >
                {/* 良工式大序号 */}
                <span
                  className="stat-num pointer-events-none absolute right-5 top-4 text-5xl text-border-light transition-colors duration-300 group-hover:text-accent/80 lg:text-6xl"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mb-7 flex h-12 w-12 items-center justify-center border border-border bg-background text-muted-dark transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconMap[app.image]} />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary transition-colors group-hover:text-accent">
                  {app.title}
                </h3>
                <p className="line-clamp-4 text-sm leading-relaxed text-muted">{app.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-bold uppercase tracking-[0.14em] text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {viewText}
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
