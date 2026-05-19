import { getLocale, getTranslations } from "next-intl/server"
import CTASection from "@/components/CTASection"
import FailureSolutionsSection from "@/components/FailureSolutionsSection"
import ROIMetric from "@/components/ui/ROIMetric"
import { generateMeta } from "@/lib/utils"
import { casesByLocale } from "@/lib/translations"
import { getDb } from "@/lib/admin/db"
import { getLocalized } from "@/lib/locale-data"

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations("cases")
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

export default async function CasesPage() {
  const locale = await getLocale()
  const t = await getTranslations("cases")
  const fallback = getLocalized(casesByLocale, locale)
  let cases: CaseRow[]

  if (locale !== "zh") {
    cases = fallback
  } else {
    try {
      const db = getDb()
      const rows = db
        .prepare("SELECT title, company, condition, diagnosis, solution, result FROM cases WHERE published = 1 ORDER BY created_at DESC")
        .all() as CaseRow[]
      cases = rows.length > 0 ? rows : fallback
    } catch {
      cases = fallback
    }
  }

  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("pageTitle")}</h1>
          <div className="w-14 h-0.5 bg-accent rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl leading-relaxed">{t("pageSubtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-10">
          {cases.map((c, i) => (
            <div key={i} className="card p-6 md:p-8">
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">{c.company}</div>
              <h2 className="text-xl font-bold text-primary mb-6">{c.title}</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
                    <span className="text-accent">{t("conditionLabel")}</span>
                  </h3>
                  <div className="text-sm text-muted leading-relaxed whitespace-pre-line">{c.condition}</div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
                    <span className="text-red-500">{t("diagnosisLabel")}</span>
                  </h3>
                  <div className="text-sm text-muted leading-relaxed whitespace-pre-line">{c.diagnosis}</div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
                    <span className="text-green-600">{t("solutionLabel")}</span>
                  </h3>
                  <div className="text-sm text-muted leading-relaxed whitespace-pre-line">{c.solution}</div>
                </div>
              </div>

              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="text-xs text-muted mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {t("keyResultLabel")}
                </div>
                <div className="text-sm font-semibold text-green-700 whitespace-pre-line">{c.result}</div>
              </div>

              {/* Metric badges */}
              <div className="mt-4 flex flex-wrap gap-3">
                {c.result.match(/\d+(?:[.-]\d+)?\s*x?/g)?.slice(0, 3).map((num, mi) => {
                  const labels = [t("metricLife"), t("metricCost"), t("metricRuntime")]
                  return (
                    <div key={mi} className="inline-flex items-center gap-1.5 bg-white border border-green-200 rounded-xl px-3 py-1.5">
                      <span className="text-xs font-bold text-green-700">{num.trim()}{["倍", "%", "x"][mi] || ""}</span>
                      <span className="text-[10px] text-muted">{labels[mi % 3]}</span>
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

        <div className="container-wide text-center mt-16">
          <h2 className="text-2xl font-bold text-primary mb-4">{t("ctaTitle")}</h2>
          <p className="text-muted mb-6 max-w-xl mx-auto">{t("ctaSubtitle")}</p>
          <a href="/contact" className="btn-primary">{t("ctaButton")}</a>
        </div>
      </section>

      <FailureSolutionsSection />

      <CTASection />
    </>
  )
}
