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

/**
 * 博客列表页整体静态预渲染：BlogList 是服务端组件，
 * 全部文章的 <a href> 都在交付的 HTML 里，Googlebot 无需执行 JS 就能顺链接发现文章页。
 * 若将来要做标签筛选，请建成真实路由（如 /blog/tag/[tag]）并放进 sitemap，
 * 不要退回「客户端 useSearchParams + <Suspense>」—— 那会让列表对爬虫变成空壳。
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
        <BlogList items={items} monthLabels={monthLabels} locale={locale} readMore={t("readMore")} />
      </section>

      <CTASection />
    </>
  )
}
