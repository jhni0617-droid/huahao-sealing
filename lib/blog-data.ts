import { blogPostsBatch1 } from "./blog-data-1"
import { blogPostsBatch2 } from "./blog-data-2"
import { blogPostsBatch3 } from "./blog-data-3"
import { blogPostsBatch4 } from "./blog-data-4"
import { blogPostsBatch5 } from "./blog-data-5"
import { blogPostsBatch6 } from "./blog-data-6"

export interface BlogPost {
  slug: string
  title: { zh: string; en: string }
  excerpt: { zh: string; en: string }
  tag: string
  date: string
  content: { zh: string; en: string }
}

export interface BlogPostMeta {
  slug: string
  title: { zh: string; en: string }
  excerpt: { zh: string; en: string }
  tag: string
  date: string
}

export const blogPosts: BlogPost[] = [
  ...blogPostsBatch1,
  ...blogPostsBatch2,
  ...blogPostsBatch3,
  ...blogPostsBatch4,
  ...blogPostsBatch5,
  ...blogPostsBatch6,
]

export const blogPostsMeta: BlogPostMeta[] = blogPosts.map(({ content, ...meta }) => meta)

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}
