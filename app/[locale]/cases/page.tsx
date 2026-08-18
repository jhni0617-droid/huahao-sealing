import { getLocale, getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import CTASection from "@/components/CTASection"
import FailureSolutionsSection from "@/components/FailureSolutionsSection"
import { generateMeta } from "@/lib/utils"
import { casesByLocale } from "@/lib/translations"
import { getDb, dbAll } from "@/lib/admin/db"
import { getLocalized } from "@/lib/locale-data"
import PageHero from "@/components/PageHero"
import Breadcrumb from "@/components/Breadcrumb"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "cases" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/cases",
    locale,
  })
}

interface CaseRow {
  title: string
  company: string
  condition: string
  diagnosis: string
  solution: string
  result: string
}

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("cases")
  const eyebrow = getLocalized({
    zh: "工程案例",
    en: "Engineering proof",
    vi: "Bằng chứng kỹ thuật",
    th: "หลักฐานทางวิศวกรรม",
    ru: "Инженерные доказательства",
    ja: "技術実績",
    ko: "엔지니어링 사례",
  }, locale)
  const fallback = getLocalized(casesByLocale, locale)
  let cases: CaseRow[]

  if (locale !== "zh") {
    cases = fallback
  } else {
    try {
      const db = await getDb()
      const rows = await dbAll("SELECT title, company, condition, diagnosis, solution, result FROM cases WHERE published = 1 ORDER BY created_at DESC", []) as CaseRow[]
      cases = rows.length > 0 ? rows : fallback
    } catch {
      cases = fallback
    }
  }

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        primaryLabel={t("ctaButton")}
        stats={[
          { value: "6x", label: t("metricLife") },
          { value: "80%", label: t("metricCost") },
          { value: "720h", label: t("metricRuntime") },
        ]}
      />
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/cases" }]} locale={locale} />

      <section className="section-padding industrial-surface">
        <div className="container-wide space-y-6 sm:space-y-10">
          {cases.map((c, i) => (
            <div key={i} className="card-static bg-white p-4 sm:p-6 md:p-8">
              <div className="mb-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-accent">{c.company}</div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-4 sm:mb-6">{c.title}</h2>

              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
                    <span className="text-accent">{t("conditionLabel")}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-muted leading-relaxed whitespace-pre-line line-clamp-4 sm:line-clamp-none">{c.condition}</div>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
                    <span className="text-red-500">{t("diagnosisLabel")}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-muted leading-relaxed whitespace-pre-line line-clamp-4 sm:line-clamp-none">{c.diagnosis}</div>
                </div>
                <div className="sm:col-span-2 md:col-span-1">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
                    <span className="text-green-600">{t("solutionLabel")}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-muted leading-relaxed whitespace-pre-line line-clamp-4 sm:line-clamp-none">{c.solution}</div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 bg-green-50 border border-green-200 p-3 sm:p-4">
                <div className="text-[10px] sm:text-xs text-muted mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {t("keyResultLabel")}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-green-700 whitespace-pre-line">{c.result}</div>
              </div>

              {/* Metric badges */}
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
                {c.result.match(/\d+(?:[.-]\d+)?\s*x?/g)?.slice(0, 3).map((num, mi) => {
                  const labels = [t("metricLife"), t("metricCost"), t("metricRuntime")]
                  return (
                    <div key={mi} className="inline-flex items-center gap-1 sm:gap-1.5 bg-white border border-green-200 px-2 sm:px-3 py-1 sm:py-1.5">
                      <span className="text-[10px] sm:text-xs font-bold text-green-700">{num.trim()}{["倍", "%", "x"][mi] || ""}</span>
                      <span className="text-[9px] sm:text-[10px] text-muted">{labels[mi % 3]}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {cases.length === 0 && (
            <div className="text-center py-16 text-muted">{t("emptyText")}</div>
          )}
        </div>
      </section>

      <FailureSolutionsSection />

      <CTASection />
    </>
  )
}
