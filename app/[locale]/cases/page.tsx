import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { getDb, dbAll } from "@/lib/admin/db"
import { getLocalized } from "@/lib/locale-data"
import { generateMeta } from "@/lib/utils"
import { casesByLocale } from "@/lib/translations"
import Breadcrumb from "@/components/Breadcrumb"
import FailureSolutionsSection from "@/components/FailureSolutionsSection"
import CTASection from "@/components/CTASection"
import PageHead from "@/components/ui/PageHead"
import StepStrip from "@/components/ui/StepStrip"

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

const caseImages = [
  "/images/stock/case-chemical-pump.webp",
  "/images/stock/case-marine-pump.webp",
  "/images/stock/case-power-pump.webp",
  "/images/stock/case-food-mixer.webp",
  "/images/stock/case-molten-salt.webp",
  "/images/stock/case-oven.webp",
]

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

  const steps = getLocalized({
    zh: [
      { title: "需求确认", desc: "沟通工况与要求，确认材质、尺寸与技术细节。" },
      { title: "打样试制", desc: "快速打样验证性能与尺寸，确保方案可行。" },
      { title: "批量交付", desc: "严格生产与检验，按期交付，保障稳定供应。" },
    ],
    en: [
      { title: "Requirement review", desc: "Confirm material, dimensions, and technical details of the duty." },
      { title: "Sampling & trial", desc: "Fast prototypes validate performance and dimensions before batch production." },
      { title: "Batch delivery", desc: "Strict production and inspection, on-time delivery, stable supply." },
    ],
    vi: [
      { title: "Xác nhận yêu cầu", desc: "Trao đổi điều kiện, xác nhận vật liệu, kích thước, chi tiết kỹ thuật." },
      { title: "Làm mẫu thử", desc: "Mẫu nhanh kiểm chứng hiệu năng và kích thước trước sản xuất loạt." },
      { title: "Giao hàng loạt", desc: "Sản xuất và kiểm tra nghiêm ngặt, giao đúng hạn, cung ứng ổn định." },
    ],
    th: [
      { title: "ยืนยันความต้องการ", desc: "หารือเงื่อนไขและยืนยันวัสดุ ขนาด รายละเอียดวิศวกรรม" },
      { title: "ผลิตตัวอย่าง", desc: "ทดสอบประสิทธิภาพและขนาดอย่างรวดเร็วก่อนผลิตจำนวนมาก" },
      { title: "ส่งมอบจำนวนมาก", desc: "ผลิตและตรวจสอบอย่างเข้มงวด ส่งมอบตรงเวลา" },
    ],
    ru: [
      { title: "Согласование требований", desc: "Обсуждаем условия, подтверждаем материал, размеры и техдетали." },
      { title: "Опытный образец", desc: "Быстрое прототипирование подтверждает характеристики перед партией." },
      { title: "Партия поставки", desc: "Строгое производство и контроль, поставка точно в срок." },
    ],
    ja: [
      { title: "要件確認", desc: "条件をすり合わせ、材質・寸法・技術詳細を確定。" },
      { title: "試作検証", desc: "短納期で試作し、性能と寸法を検証。" },
      { title: "量産納品", desc: "厳格な生産と検査で、期日どおりに納品。" },
    ],
    ko: [
      { title: "요구 확인", desc: "조건을 협의하고 재료, 치수, 기술 세부사항을 확정." },
      { title: "샘플 시제", desc: "빠른 샘플로 성능과 치수를 검증." },
      { title: "양산 납품", desc: "엄격한 생산과 검사로 기한 내 납품." },
    ],
  }, locale)

  const [featured, ...archive] = cases

  return (
    <>
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/cases" }]} locale={locale} />

      <PageHead en={eyebrow} title={t("pageTitle")} description={t("pageSubtitle")} />

      {featured && (
        /* 置顶案例：左实拍右档案，只用真实字段 */
        <section className="bg-white">
          <div className="grid border-b border-border lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background lg:aspect-auto lg:border-b-0 lg:border-r">
              <Image
                src={caseImages[0]}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
              <div className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">{featured.company}</div>
              <h2 className="mt-3 font-serif-sc text-2xl font-bold leading-tight text-primary md:text-3xl">
                {featured.title}
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  { label: t("conditionLabel"), text: featured.condition },
                  { label: t("diagnosisLabel"), text: featured.diagnosis },
                  { label: t("solutionLabel"), text: featured.solution },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-[88px_1fr] gap-4 border-t border-border pt-4">
                    <div className="text-xs font-semibold text-muted">{row.label}</div>
                    <div className="whitespace-pre-line text-sm leading-relaxed text-muted line-clamp-4">{row.text}</div>
                  </div>
                ))}
                <div className="grid grid-cols-[88px_1fr] gap-4 border-t border-border pt-4">
                  <div className="text-xs font-semibold text-muted">{t("keyResultLabel")}</div>
                  <div className="whitespace-pre-line text-sm font-semibold leading-relaxed text-primary">{featured.result}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {archive.length > 0 && (
        <section className="section-padding-sm industrial-surface">
          <div className="container-wide">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-accent" aria-hidden />
              <span className="en-caption text-sm text-muted">
                {getLocalized({ zh: "更多交付记录", en: "More delivery records" }, locale)}
              </span>
            </div>
            <div className="grid gap-px border border-border bg-border md:grid-cols-2">
              {archive.map((c, i) => (
                <article key={i} className="group flex flex-col bg-white">
                  <div className="relative aspect-[16/7] overflow-hidden border-b border-border bg-background">
                    <Image
                      src={caseImages[(i + 1) % caseImages.length]}
                      alt={c.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{c.company}</div>
                    <h3 className="mt-1.5 font-serif-sc text-lg font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-2">{c.condition}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2">{c.solution}</p>
                    <div className="mt-auto flex items-start gap-2 border-t border-border pt-4 text-xs font-semibold leading-relaxed text-primary">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                      <span className="whitespace-pre-line">{c.result}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {cases.length === 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide text-center text-muted">{t("emptyText")}</div>
        </section>
      )}

      <section className="section-padding-sm industrial-surface">
        <div className="container-wide">
          <StepStrip items={steps} />
        </div>
      </section>

      <FailureSolutionsSection />

      <CTASection />
    </>
  )
}
