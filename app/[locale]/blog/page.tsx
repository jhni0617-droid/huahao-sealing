import { getLocale, getTranslations, setRequestLocale } from "next-intl/server"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import { blogPostsMeta } from "@/lib/blog-data"
import Breadcrumb from "@/components/Breadcrumb"
import PageHero from "@/components/PageHero"
import QuickCTA from "@/components/QuickCTA"
import CTASection from "@/components/CTASection"
import { Link } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "blog" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/blog",
    locale,
  })
}

export default async function BlogPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams?: Promise<{ tag?: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("blog")
  const { tag } = (await searchParams) ?? {}
  const eyebrow = getLocalized({
    zh: "技术博客",
    en: "Technical Blog",
    vi: "Blog kỹ thuật",
    th: "บล็อกเทคนิค",
    ru: "Технический блог",
    ja: "技術ブログ",
    ko: "기술 블로그",
  }, locale)

  const tagLabels = getLocalized(
    {
      zh: { process: "加工工艺", selection: "材料选型", precision: "精度控制", news: "行业动态", faq: "技术问答", application: "应用案例", maintenance: "维护保养", material: "材料特性" },
      en: { process: "Process", selection: "Selection", precision: "Precision", news: "News", faq: "FAQ", application: "Application", maintenance: "Maintenance", material: "Material" },
      vi: { process: "Công nghệ", selection: "Chọn vật liệu", precision: "Chính xác", news: "Tin tức", faq: "FAQ", application: "Ứng dụng", maintenance: "Bảo trì", material: "Vật liệu" },
      th: { process: "กระบวนการ", selection: "เลือกวัสดุ", precision: "ความแม่นยำ", news: "ข่าวสาร", faq: "FAQ", application: "การประยุกต์", maintenance: "บำรุงรักษา", material: "วัสดุ" },
      ru: { process: "Процессы", selection: "Выбор", precision: "Точность", news: "Новости", faq: "FAQ", application: "Применение", maintenance: "Обслуживание", material: "Материал" },
      ja: { process: "加工技術", selection: "材料選択", precision: "精密", news: "ニュース", faq: "FAQ", application: "応用", maintenance: "メンテナンス", material: "材料" },
      ko: { process: "공정", selection: "재료 선택", precision: "정밀", news: "뉴스", faq: "FAQ", application: "응용", maintenance: "유지보수", material: "재료" },
    },
    locale
  )

  const validTags = new Set(Object.keys(tagLabels))
  const activeTag = tag && validTags.has(tag) ? tag : null

  // 按年月分组
  const grouped: Record<string, typeof blogPostsMeta> = {}
  const listedPosts = activeTag ? blogPostsMeta.filter((post) => post.tag === activeTag) : blogPostsMeta
  for (const post of listedPosts) {
    const ym = post.date.slice(0, 7) // "2026-06"
    if (!grouped[ym]) grouped[ym] = []
    grouped[ym].push(post)
  }
  const months = Object.keys(grouped).sort((a, b) => b.localeCompare(a))

  const monthLabels = getLocalized(
    {
      zh: (ym: string) => `${ym.slice(0, 4)}年${parseInt(ym.slice(5, 7))}月`,
      en: (ym: string) => {
        const names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return `${names[parseInt(ym.slice(5, 7)) - 1]} ${ym.slice(0, 4)}`
      },
      vi: (ym: string) => `Tháng ${parseInt(ym.slice(5, 7))} ${ym.slice(0, 4)}`,
      th: (ym: string) => `เดือน ${parseInt(ym.slice(5, 7))} ${ym.slice(0, 4)}`,
      ru: (ym: string) => `${ym.slice(0, 4)} г. ${parseInt(ym.slice(5, 7))} мес.`,
      ja: (ym: string) => `${ym.slice(0, 4)}年${parseInt(ym.slice(5, 7))}月`,
      ko: (ym: string) => `${ym.slice(0, 4)}년 ${parseInt(ym.slice(5, 7))}월`,
    },
    locale
  )

  const filterCopy = getLocalized(
    {
      zh: { filter: "当前筛选", clear: "清除筛选" },
      en: { filter: "Filtered by", clear: "Clear filter" },
      vi: { filter: "Đang lọc", clear: "Xóa bộ lọc" },
      th: { filter: "กำลังกรอง", clear: "ล้างตัวกรอง" },
      ru: { filter: "Фильтр", clear: "Сбросить фильтр" },
      ja: { filter: "絞り込み", clear: "フィルタを解除" },
      ko: { filter: "필터", clear: "필터 해제" },
    },
    locale
  )

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />
      <Breadcrumb items={[{ name: eyebrow, url: "/blog" }]} locale={locale} />
      <QuickCTA />

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          {activeTag && (
            <div className="mb-10 flex flex-wrap items-center gap-3 border border-border bg-white px-4 py-3">
              <span className="text-sm text-muted">{filterCopy.filter}</span>
              <span className="border border-accent/30 bg-accent/5 px-2.5 py-1 text-xs font-bold text-accent">
                {tagLabels[activeTag as keyof typeof tagLabels] || activeTag}
              </span>
              <Link href="/blog" className="ml-auto text-xs font-semibold text-accent hover:underline">
                {filterCopy.clear}
              </Link>
            </div>
          )}
          {months.map((ym) => (
            <div key={ym} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-primary">{monthLabels(ym)}</h2>
                <span className="text-sm text-muted">({grouped[ym].length} {getLocalized({ zh: "篇", en: "posts" }, locale)})</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {grouped[ym].map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="card-static bg-white p-3 sm:p-4 lg:p-5 block group hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-accent">
                        {tagLabels[post.tag as keyof typeof tagLabels] || post.tag}
                      </span>
                      <span className="text-[10px] text-muted">{post.date.slice(5)}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-snug line-clamp-2">{getLocalized(post.title, locale)}</h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2 sm:line-clamp-3">{getLocalized(post.excerpt, locale)}</p>
                    <div className="mt-2 sm:mt-3 flex items-center gap-1 text-xs font-semibold text-accent">
                      {t("readMore")}
                      <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
