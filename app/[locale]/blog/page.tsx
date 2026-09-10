import { Suspense } from "react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import { getBlogListData } from "@/lib/blog-list-data"
import Breadcrumb from "@/components/Breadcrumb"
import PageHead from "@/components/ui/PageHead"
import QuickCTA from "@/components/QuickCTA"
import CTASection from "@/components/CTASection"
import BlogList from "./blog-list"

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

/** 列表骨架，避免 <Suspense> 期间布局跳动 */
function BlogListFallback() {
  return (
    <div className="container-wide">
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-48 animate-pulse bg-white" />
        ))}
      </div>
    </div>
  )
}

/**
 * 注意：这里**不读 searchParams**。
 * 之前 `await searchParams` 取 ?tag= 会让整个路由退化为「每请求 SSR」。
 * 现在标签筛选搬到客户端组件（blog-list.tsx）里用 useSearchParams()，
 * 页面恢复静态预渲染；代价是要用 <Suspense> 包裹该组件。
 */
export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("blog")
  const eyebrow = getLocalized({
    zh: "技术博客",
    en: "Technical Blog",
    vi: "Blog kỹ thuật",
    th: "บล็อกเทคนิค",
    ru: "Технический блог",
    ja: "技術ブログ",
    ko: "기술 블로그",
  }, locale)

  // 服务端按当前语言解析好 title/excerpt，只传当前语言
  const { items, monthLabels } = getBlogListData(locale)

  return (
    <>
      <Breadcrumb items={[{ name: eyebrow, url: "/blog" }]} locale={locale} />

      <PageHead en={eyebrow} title={t("pageTitle")} description={t("pageSubtitle")} />

      <QuickCTA />

      <section className="section-padding-sm industrial-surface">
        <Suspense fallback={<BlogListFallback />}>
          <BlogList items={items} monthLabels={monthLabels} locale={locale} readMore={t("readMore")} />
        </Suspense>
      </section>

      <CTASection />
    </>
  )
}
