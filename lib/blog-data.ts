import { blogPostsBatch1 } from "./blog-data-1"
import { blogPostsBatch2 } from "./blog-data-2"
import { blogPostsBatch3 } from "./blog-data-3"
import { blogPostsBatch4 } from "./blog-data-4"
import { blogPostsBatch5 } from "./blog-data-5"
import { blogPostsBatch6 } from "./blog-data-6"
import { blogPostsBatch7 } from "./blog-data-7"

export interface BlogPost {
  slug: string
  title: { zh: string; en: string; vi?: string; th?: string }
  excerpt: { zh: string; en: string; vi?: string; th?: string }
  tag: string
  date: string
  content: { zh: string; en: string; vi?: string; th?: string }
}

export interface BlogPostMeta {
  slug: string
  title: { zh: string; en: string; vi?: string; th?: string }
  excerpt: { zh: string; en: string; vi?: string; th?: string }
  tag: string
  date: string
}

// 翻译结果 JSON（由 scripts/translate-blog.ts 增量生成）
// 结构：{ [slug]: { vi?: {title,excerpt,content}, th?: {...} } }
import blogTranslations from "../content/blog-translations.json"

export const blogPosts: BlogPost[] = [
  ...blogPostsBatch1,
  ...blogPostsBatch2,
  ...blogPostsBatch3,
  ...blogPostsBatch4,
  ...blogPostsBatch5,
  ...blogPostsBatch6,
  ...blogPostsBatch7,
].map((post) => {
  const t = (blogTranslations as Record<string, any>)[post.slug]
  if (!t) return post
  return {
    ...post,
    title: { ...post.title, vi: t.vi?.title, th: t.th?.title },
    excerpt: { ...post.excerpt, vi: t.vi?.excerpt, th: t.th?.excerpt },
    content: { ...post.content, vi: t.vi?.content, th: t.th?.content },
  }
})

export const blogPostsMeta: BlogPostMeta[] = blogPosts.map(({ content, ...meta }) => meta)

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}
