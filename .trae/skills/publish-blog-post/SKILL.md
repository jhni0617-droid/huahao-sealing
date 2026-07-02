---
name: "publish-blog-post"
description: "Publish SEO/GEO-optimized bilingual blog posts for Huahao Sealing. Invoke when user asks to add/write/create a blog post, generate blog content, or publish articles."
---

# Publish Blog Post

This skill handles the complete workflow for adding new blog posts to the Huahao Sealing website. Every new blog post MUST follow these steps to ensure SEO + GEO optimization.

## 1. BlogPost Data Structure

Every blog post is a TypeScript object with this exact shape:

```typescript
{
  slug: "kebab-case-english-slug",           // URL slug, unique, kebab-case English
  title: {
    zh: "中文标题",
    en: "English Title",
  },
  excerpt: {
    zh: "中文摘要（1-2句话，包含SEO关键词）",
    en: "English excerpt (1-2 sentences with SEO keywords)",
  },
  tag: "faq",                                 // One of: process, selection, precision, news, faq, application, maintenance, material
  date: "YYYY-MM-DD",                        // Publication date
  content: {
    zh: `## 核心要点

- 要点1（含SEO关键词）
- 要点2（含具体技术数据）
- 要点3（实际应用建议）
- 要点4（可选）

正文开始...`,

    en: `## Key Takeaways

- Point 1 (with SEO keywords)
- Point 2 (with specific technical data)
- Point 3 (practical application advice)
- Point 4 (optional)

Main content starts here...`,
  },
}
```

## 2. Tag Values (8 categories)

| Tag | 中文 | English |
|-----|------|---------|
| `process` | 加工工艺 | Process |
| `selection` | 材料选型 | Selection |
| `precision` | 精度控制 | Precision |
| `news` | 行业动态 | News |
| `faq` | 技术问答 | FAQ |
| `application` | 应用案例 | Application |
| `maintenance` | 维护保养 | Maintenance |
| `material` | 材料特性 | Material |

## 3. Content Format Rules (CRITICAL)

### 3.1 Must start with "核心要点 / Key Takeaways"

**Chinese content MUST begin with:**
```
## 核心要点

- 要点1
- 要点2
- 要点3
```

**English content MUST begin with:**
```
## Key Takeaways

- Point 1
- Point 2
- Point 3
```

This is rendered as a highlighted card with a gold left border on the blog detail page. The rendering logic in `app/[locale]/blog/[slug]/page.tsx` detects `## 核心要点` or `## Key Takeaways` headings and renders them specially.

### 3.2 Markdown structure

Use these Markdown elements in the body:
- `## ` for H2 section titles
- `### ` for H3 subsection titles
- `- ` for bullet lists
- `1. ` for numbered lists
- `**bold**` for emphasis
- Plain paragraphs separated by blank lines

### 3.3 GEO optimization rules

1. **Key Takeaways must contain real data** - specific numbers, temperature ranges, pressure values, friction coefficients, etc. NOT generic filler.
2. **Embed SEO keywords naturally** - 碳石墨密封环, 石墨轴套, 浸渍石墨, carbon graphite seal, graphite bushing, etc.
3. **Use question-style titles** when appropriate - AI engines prefer answering questions.
4. **Include comparison tables** when discussing material choices - AI engines extract table data.

## 4. File Organization

Blog posts are stored in batch files:

| File | Purpose |
|------|---------|
| `lib/blog-data-1.ts` | Batch 1 (posts 1-10) |
| `lib/blog-data-2.ts` | Batch 2 (posts 11-20) |
| `lib/blog-data-3.ts` | Batch 3 (posts 21-30) |
| `lib/blog-data-N.ts` | Create new batch files as needed (batch 4, 5, ...) |

### Adding a new batch file:

1. Create `lib/blog-data-N.ts` with:
```typescript
export interface BlogPost {
  slug: string
  title: { zh: string; en: string }
  excerpt: { zh: string; en: string }
  tag: string
  date: string
  content: { zh: string; en: string }
}

export const blogPostsBatchN: BlogPost[] = [
  // new posts here
]
```

2. Update `lib/blog-data.ts` to import and spread the new batch:
```typescript
import { blogPostsBatchN } from "./blog-data-N"

export const blogPosts: BlogPost[] = [
  ...blogPostsBatch1,
  ...blogPostsBatch2,
  ...blogPostsBatch3,
  ...blogPostsBatchN,  // new
]
```

### Adding a single post to an existing batch:

Simply append the new post object to the array in the appropriate batch file.

## 5. SEO + GEO Checklist (Automatic)

When a blog post is added correctly, the following SEO/GEO features work **automatically** with zero extra configuration:

| Feature | How it works | File |
|---------|-------------|------|
| **Sitemap** | Auto-discovers all posts via `blogPosts` | `app/sitemap.ts` |
| **Article JSON-LD** | Auto-generates structured data per post | `app/[locale]/blog/[slug]/page.tsx` |
| **Breadcrumb JSON-LD** | Home > Blog > Article | `app/[locale]/blog/[slug]/page.tsx` |
| **OpenGraph + canonical** | Auto-generated from post title/excerpt | `app/[locale]/blog/[slug]/page.tsx` |
| **Key Takeaways card** | Rendered from `## 核心要点` in content | `app/[locale]/blog/[slug]/page.tsx` |
| **Month grouping** | Blog list page auto-groups by YYYY-MM | `app/[locale]/blog/page.tsx` |
| **3-column grid** | Desktop 3 cols, tablet 2, mobile 1 | `app/[locale]/blog/page.tsx` |
| **Prev/Next navigation** | Auto-linked by date order | `app/[locale]/blog/[slug]/page.tsx` |
| **Back to blog button** | Top + bottom of each article | `app/[locale]/blog/[slug]/page.tsx` |

**No manual SEO work needed** — just add the post data object correctly, and everything else is automatic.

## 6. Content Quality Standards

Every blog post must:
1. **Bilingual**: Full content in both Chinese (zh) and English (en)
2. **800-1200 words** per language minimum
3. **Real technical data**: Use actual specifications (temperatures, pressures, friction coefficients, material grades)
4. **Company mention**: Reference "霍邱县华豪密封件有限公司" / "Huahao Sealing Co., Ltd." naturally
5. **SEO keywords**: Include relevant terms naturally in the body (don't stuff)
6. **Key Takeaways**: 3-5 bullet points with specific data at the top of each language version

## 7. Workflow Summary

```
User says "写一篇博客" or "add a blog post"
  ↓
1. Determine topic, date, tag
  ↓
2. Write full bilingual content with Key Takeaways
  ↓
3. Add BlogPost object to appropriate batch file (or create new batch)
  ↓
4. If new batch: update blog-data.ts imports
  ↓
5. Verify: npx tsc --noEmit (TypeScript compiles)
  ↓
6. Done — SEO/GEO/sitemap/JSON-LD all automatic
```
