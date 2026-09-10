import { getTranslations, setRequestLocale } from "next-intl/server"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import { blogPosts, getPostBySlug } from "@/lib/blog-data"
import { siteConfig } from "@/lib/constants"
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd"
import PageHead from "@/components/ui/PageHead"
import CTASection from "@/components/CTASection"
import { Link } from "@/i18n/routing"
import { notFound } from "next/navigation"

// 构建期不预渲染（600+ 篇×7 语言会把部署文件数推到 Vercel 上限），
// 首次访问时静态渲染并缓存一天（ISR）
export async function generateStaticParams() {
  return []
}

export const revalidate = 86400

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug, locale } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const title = getLocalized(post.title, locale)
  const description = getLocalized(post.excerpt, locale)

  const base = generateMeta({
    title,
    description,
    path: `/blog/${slug}`,
    locale,
  })

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article" as const,
      publishedTime: post.date,
      authors: [siteConfig.fullName],
    },
    // canonical 已由 generateMeta 按 path 生成（website + /blog/{slug}），
    // 保留 base.alternates 以携带 hreflang languages
    alternates: base.alternates,
  }
}

/**
 * 定位文章开头的「核心要点 / Key Takeaways」区块。
 *
 * 这段内容在全部 7 个语种版本里都是正文的第一个二级标题，紧随其后是若干条列表项。
 * 因此按「第一个二级标题 + 至少两条列表项」判定，而不是匹配写死的标题文本 ——
 * 这样越南语 / 泰语 / 俄语 / 日语 / 韩语等译文标题无论怎么翻译，都能被正确识别。
 * （旧实现写死了 "## 核心要点" / "## Key Takeaways" 等 4 个标题，
 *   译文标题一改，要点框和 GEO FAQ schema 就会静默失效。）
 */
function findTakeawaysRange(lines: string[]): { headingIdx: number; itemIdxs: number[] } | null {
  const headingIdx = lines.findIndex((l) => l.trim().startsWith("## "))
  if (headingIdx === -1) return null

  const itemIdxs: number[] = []
  for (let i = headingIdx + 1; i < lines.length; i++) {
    const t = lines[i].trim()
    if (t.startsWith("## ") || t.startsWith("### ")) break
    if (t.startsWith("- ") || t.startsWith("* ")) {
      itemIdxs.push(i)
    } else if (t !== "" && itemIdxs.length > 0) {
      break // 列表之后出现正文段落，说明要点区块已结束
    }
  }
  return itemIdxs.length >= 2 ? { headingIdx, itemIdxs } : null
}

function extractTakeaways(content: string): string[] {
  const lines = content.split("\n")
  const range = findTakeawaysRange(lines)
  if (!range) return []
  return range.itemIdxs.map((i) => lines[i].trim().slice(2))
}

/** 「核心要点」小标题按语种展示（译文正文里的标题由翻译结果决定，这里只是 UI 标签） */
const TAKEAWAYS_LABEL: Record<string, string> = {
  zh: "核心要点",
  en: "Key Takeaways",
  vi: "Điểm chính",
  th: "ประเด็นสำคัญ",
  ru: "Ключевые выводы",
  ja: "重要なポイント",
  ko: "주요 내용",
}

function renderContent(content: string, locale: string) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let listItems: string[] = []

  // 预先定位「核心要点」区块，主循环里跳过这些行，由 flushTakeaways 单独渲染成高亮卡片
  const takeawaysRange = findTakeawaysRange(lines)
  const takeawayHeadingIdx = takeawaysRange?.headingIdx ?? -1
  const takeawayItemSet = new Set(takeawaysRange?.itemIdxs ?? [])
  const takeawayItems: string[] = takeawaysRange
    ? takeawaysRange.itemIdxs.map((i) => lines[i].trim().slice(2))
    : []
  let takeawaysRendered = false

  const flushList = (key: string) => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key} className="my-4 space-y-2 pl-6">
          {listItems.map((item, i) => (
            <li key={i} className="text-muted leading-relaxed list-disc" dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
          ))}
        </ul>
      )
      listItems = []
    }
  }

  const flushTakeaways = () => {
    if (takeawaysRendered || takeawayItems.length === 0) return
    takeawaysRendered = true
    elements.push(
      <div key="key-takeaways" id="key-takeaways" className="my-6 p-5 bg-accent-subtle border-l-4 border-accent rounded-r-lg">
        <div className="flex items-center gap-2 mb-3">
          <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-bold text-primary text-sm uppercase tracking-wide">
            {TAKEAWAYS_LABEL[locale] ?? TAKEAWAYS_LABEL.en}
          </span>
        </div>
        <ul className="space-y-2">
          {takeawayItems.map((item, i) => (
            <li key={i} className="text-sm text-primary leading-relaxed flex gap-2">
              <span className="text-accent shrink-0 mt-0.5">▸</span>
              <span dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  lines.forEach((line, idx) => {
    const trimmed = line.trim()

    // 「核心要点」区块：标题行渲染成卡片，条目行已收集，直接跳过
    if (idx === takeawayHeadingIdx) {
      flushList(`list-${idx}`)
      flushTakeaways()
      return
    }
    if (takeawayItemSet.has(idx)) return

    if (trimmed.startsWith("### ")) {
      flushList(`list-${idx}`)
      elements.push(
        <h3 key={idx} className="text-lg font-bold text-primary mt-6 mb-3" dangerouslySetInnerHTML={{ __html: parseInline(trimmed.slice(4)) }} />
      )
    } else if (trimmed.startsWith("## ")) {
      flushList(`list-${idx}`)
      elements.push(
        <h2 key={idx} className="text-xl font-bold text-primary mt-8 mb-4 pb-2 border-b border-border" dangerouslySetInnerHTML={{ __html: parseInline(trimmed.slice(3)) }} />
      )
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      listItems.push(trimmed.slice(2))
    } else if (trimmed === "") {
      flushList(`list-${idx}`)
    } else if (/^\d+\.\s/.test(trimmed)) {
      flushList(`list-${idx}`)
      const text = trimmed.replace(/^\d+\.\s/, "")
      elements.push(
        <p key={idx} className="my-3 text-muted leading-relaxed flex gap-3">
          <span className="font-bold text-accent shrink-0">{trimmed.match(/^\d+/)?.[0]}.</span>
          <span dangerouslySetInnerHTML={{ __html: parseInline(text) }} />
        </p>
      )
    } else {
      flushList(`list-${idx}`)
      elements.push(
        <p key={idx} className="my-4 text-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }} />
      )
    }
  })
  flushTakeaways()
  flushList("list-final")

  return elements
}

function parseInline(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>')
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const t = await getTranslations("blog")

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

  const title = getLocalized(post.title, locale)
  const excerpt = getLocalized(post.excerpt, locale)
  const content = getLocalized(post.content, locale)

  // GEO：基于文章“核心要点”生成 FAQ schema（内容真实，非编造）
  const blogContent = (post.content as Record<string, string | undefined>)[locale] ?? post.content.en
  const takeaways = extractTakeaways(blogContent)
  const faqQuestions = [
    {
      q: locale === "zh" ? `「${post.title.zh}」的核心要点有哪些？` : `What are the key takeaways of "${post.title.en}"?`,
      a: takeaways.slice(0, 3).join(" ") || excerpt,
    },
    {
      q: locale === "zh" ? `什么是${post.title.zh}？` : `What is "${post.title.en}"?`,
      a: excerpt,
    },
  ]

  const currentIdx = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIdx > 0 ? blogPosts[currentIdx - 1] : null
  const nextPost = currentIdx < blogPosts.length - 1 ? blogPosts[currentIdx + 1] : null

  return (
    <>
      <ArticleJsonLd
        title={title}
        description={excerpt}
        slug={slug}
        date={post.date}
        locale={locale}
      />
      <FaqJsonLd questions={faqQuestions} />
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: getLocalized({ zh: "首页", en: "Home" }, locale), url: "" },
          { name: getLocalized({ zh: "技术博客", en: "Technical Blog" }, locale), url: "/blog" },
          { name: title, url: `/blog/${slug}` },
        ]}
      />
      <PageHead en={tagLabels[post.tag as keyof typeof tagLabels] || post.tag} title={title} description={excerpt} />

      <article className="section-padding industrial-surface">
        <div className="container-wide max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {getLocalized({ zh: "返回博客列表", en: "Back to Blog" }, locale)}
          </Link>
          <div className="flex items-center gap-3 mb-8 text-sm">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-accent bg-accent-subtle px-3 py-1 rounded-full">
              {tagLabels[post.tag as keyof typeof tagLabels] || post.tag}
            </span>
            <time className="text-muted">{post.date}</time>
          </div>

          <div className="prose prose-lg max-w-none">
            {renderContent(content, locale)}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-bold text-primary mb-4">{getLocalized({ zh: "继续阅读", en: "Continue Reading" }, locale)}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {prevPost && (
                <Link href={`/blog/${prevPost.slug}`} className="card-static bg-white p-5 group hover:shadow-lg transition-shadow">
                  <div className="text-xs text-muted mb-1">{getLocalized({ zh: "← 上一篇", en: "← Previous" }, locale)}</div>
                  <div className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">{getLocalized(prevPost.title, locale)}</div>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="card-static bg-white p-5 group hover:shadow-lg transition-shadow md:text-right">
                  <div className="text-xs text-muted mb-1">{getLocalized({ zh: "下一篇 →", en: "Next →" }, locale)}</div>
                  <div className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">{getLocalized(nextPost.title, locale)}</div>
                </Link>
              )}
            </div>
          </div>

          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {getLocalized({ zh: "返回博客列表", en: "Back to Blog" }, locale)}
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  )
}
