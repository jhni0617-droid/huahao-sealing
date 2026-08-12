---
name: "blog-optimization"
description: "Audit and optimize the Huahao Sealing multilingual technical blog (Next.js 16 App Router + next-intl). Invoke when user asks to improve blog SEO, UX, performance, content architecture, or before adding new blog features."
---

# Huahao Sealing 博客优化 Skill

针对霍邱县华豪密封件有限公司外贸独立站（Next.js 16 App Router + next-intl 多语言）的技术博客模块做审计与优化。

## 项目背景（必读）

- 域名：https://huahaoindustrial.com
- 技术栈：Next.js 16 + TypeScript + Tailwind v4 + next-intl
- 多语言：en（默认）/ zh / vi / th / ru / ja / ko，`localePrefix: "always"`
- 博客数据：`lib/blog-data-{1..6}.ts` 共 6 个 batch 文件硬编码 TS 模块，约 870KB，61 篇文章，每篇 `content` 字段含 zh+en 完整 markdown
- 博客页面：
  - `app/[locale]/blog/page.tsx` — 列表页，按年月分组
  - `app/[locale]/blog/[slug]/page.tsx` — 详情页，自实现 markdown 渲染
- 关键依赖：`@/i18n/routing` 提供 `Link`/`redirect`/`usePathname`/`useRouter`，**禁止**在 `[locale]` 路由下使用 `next/link` 或 `next/navigation` 的 `redirect`（会丢 locale 前缀，已被修复过一次）

## 何时调用

- 用户要求"优化博客""博客 SEO""博客性能""博客体验"
- 用户要在博客上加新功能（搜索、TOC、阅读时间、相关文章、RSS、封面图等）
- 用户要重构 blog-data 数据层
- 用户反馈博客跳转回英语 / 博客 404 / 博客索引错乱

## 已知问题清单（按优先级）

### P0 — 已修复，禁止回退

- **i18n 跳转丢 locale**：`blog/page.tsx`、`blog/[slug]/page.tsx`、`download/page.tsx` 曾用 `next/link` 和 `next/navigation` 的 `redirect`，导致点击博客链接跳回英语。修复后必须使用 `@/i18n/routing` 的 `Link`/`redirect`。审查时若再看到 `from "next/link"` 出现在 `[locale]` 路由下的客户端/服务端组件，立即报警。
- **zh.json 缺 `productDetail.graphiteParamsCategory`**：已补齐。新增 i18n key 时必须同步 7 份 messages 文件。

### P1 — 数据层结构性问题（建议优先处理）

1. **文章顺序错乱**
   - 现状：`blogPosts = [...batch1, ...batch2, ...batch6]`，batch1 是 6 月升序，batch6 是 5 月升序，整体既非升序也非降序。
   - 影响：
     - `blog/[slug]/page.tsx` 的 `prevPost`/`nextPost` 按 `blogPosts` 数组下标取，"下一篇"可能跳到日期更早的文章。
     - `blog/page.tsx` 列表页年月分组内文章未排序，5 月组展示顺序是 5/29→5/30→5/31（升序），与"最新在前"直觉相反。
   - 修复方向：在 `lib/blog-data.ts` 导出 `blogPostsSorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))`，列表页和上下篇都基于它。

2. **blog-data 6 个 TS 文件 870KB 硬编码**
   - 现状：每篇文章 zh+en 完整 markdown 内联在 TS 模板字符串里，单文件 120-170KB，IDE 卡顿、git diff 噪音大、内容与代码耦合。
   - 修复方向（按改造成本从低到高）：
     - 短期：拆成 `content/blog/<slug>.zh.md` + `content/blog/<slug>.en.md`，元数据放 `content/blog/index.json`，构建时通过 `fs.readdir` 动态加载。
     - 长期：迁到 Turso 数据库（项目已有 `lib/admin/db.ts`），通过 admin 后台管理文章。
   - 注意：迁移后必须保留 `BlogPost`/`BlogPostMeta` 接口签名，避免下游组件改坏。

3. **`generateStaticParams` 只生成 slug，不含 locale**
   - 现状：`app/[locale]/blog/[slug]/page.tsx` 的 `generateStaticParams` 只返回 `{ slug }`，依赖 next-intl 自动展开 locale。
   - 风险：next-intl 升级或 `localePrefix` 变更时可能预渲染不完整。
   - 修复方向：显式返回 `{ locale, slug }` 笛卡尔积，与 `app/[locale]/products/[slug]/page.tsx` 风格一致（参考该文件）。

### P2 — SEO 与结构化数据

4. **FAQ JsonLd 非本地化**
   - 现状：`blog/[slug]/page.tsx` 的 `faqQuestions` 只生成 zh 或 en 两种语言版本，vi/th/ru/ja/ko 用户看到的 FAQ schema 是英文或中文。
   - 影响：非中英市场的 GEO/SEO 收益打折。
   - 修复方向：用 `getTranslations` 或 `getLocalized` 为每篇文章的 FAQ 问题补齐 7 语言；或从 `post.content[locale]` 提取本地化的 takeaways 作为 answer。

5. **ArticleJsonLd 缺字段**
   - 现状：`ArticleJsonLd` 组件传入 title/description/slug/date/locale，但缺 `image`、`author` URL、`publisher` logo、`mainEntityOfPage`。
   - 修复方向：补 og-banner 或文章封面图作为 `image`，`publisher` 用站点 logo，`mainEntityOfPage` 用当前 locale 的 canonical URL。

6. **sitemap 日期类型不一致**
   - 现状：`app/sitemap.ts` 静态路由用字符串 `"2026-06-01"`，blog 路由用 `new Date(p.date)`。
   - 修复方向：统一为 `new Date(p.date).toISOString()` 或统一字符串，避免 Next.js sitemap 类型告警。

7. **博客详情页 canonical 用 path 拼 locale**
   - 现状：`generateMeta` 的 canonical 是 `${cfg.website}/${locale}${path}`，对默认 `en` 也带 `/en` 前缀。这与 `localePrefix: "always"` 一致，符合预期。
   - 注意：若未来改 `localePrefix: "as-needed"`，canonical 逻辑需同步调整，否则 en 页面 canonical 会指向 `/en/...` 造成自我重定向。

### P3 — 用户体验缺失

8. **无目录 TOC**
   - 现状：详情页 markdown 自渲染，文章普遍有 `## 一、` `## 二、` 多级标题，但右侧无侧边 TOC，长文阅读体验差。
   - 修复方向：渲染时收集 `## ` 标题生成 anchor，桌面端右侧 sticky TOC，移动端折叠。

9. **无阅读时间估算**
   - 现状：列表卡和详情页都没有 reading time。
   - 修复方向：详情页 hero 区显示 `${minutes} min read`，按 `content[locale].length / 字符速率` 计算（中文 ~500 字/分钟，英文 ~200 词/分钟）。

10. **无相关文章推荐**
    - 现状：详情页底部只有"上一篇/下一篇"（且顺序错乱见 P1.1）。
    - 修复方向：基于 `tag` 字段推荐同 tag 的 3 篇文章，避开当前文章和上下篇。

11. **无 tag 筛选 / 搜索**
    - 现状：列表页只按年月分组，61 篇文章无 tag 过滤、无关键词搜索。
    - 修复方向：列表页顶部加 tag chip 横滑栏，点击筛选；搜索可先用客户端 fuzzy filter（61 篇规模无需 Algolia）。

12. **无博客封面图**
    - 现状：列表卡片纯文字，详情页 hero 也无图。
    - 修复方向：为每篇文章生成或指定一张封面图（可用 SDXL 按 tag 主题生成），列表卡片加 `<Image>` 顶部，详情页 PageHero 用封面图。

### P4 — 性能

13. **blog-data 全量打包进客户端**
    - 现状：`blogPostsMeta` 在列表页服务端用，但 `blogPosts`（含完整 content）在 `app/sitemap.ts` 和详情页都 import，整包约 870KB 进入 server bundle。
    - 影响：server 构建体积大，冷启动慢。
    - 修复方向：拆分 `blogPostsMeta`（仅元数据，列表页用）和 `blogPosts`（完整内容，仅详情页用），确保详情页 `dynamicParams`/流式渲染不阻塞。当前 `blogPostsMeta` 已通过解构剥离 content，确认列表页只 import `blogPostsMeta` 即可。

14. **markdown 渲染用 `dangerouslySetInnerHTML`**
    - 现状：`renderContent` + `parseInline` 自实现 markdown，用正则替换 `**bold**`，输出通过 `dangerouslySetInnerHTML` 注入。
    - 风险：内容是内部维护的，XSS 风险低；但 markdown 语法支持有限（无表格、无代码块、无图片）。
    - 修复方向：若内容迁移到 MDX 或引入 `react-markdown` + `rehype-raw`，可去掉手写渲染器并支持更丰富语法。短期不动也可。

## 审计 Checklist

接到"优化博客"类请求时，按以下顺序逐项核对：

1. **i18n 完整性**
   - `grep -r "from \"next/link\"" app/[locale]/ components/` → 命中即报警
   - `grep -r "redirect.*next/navigation" app/[locale]/` → 命中即报警
   - `node -e "对比 7 份 messages/*.json 的 key 集合"` → 缺失即补齐

2. **数据层**
   - 检查 `blogPosts` 顺序是否按日期倒序（`scripts/__check_blog.mjs` 思路）
   - 检查 `prevPost`/`nextPost` 是否基于排序列表
   - 检查 `generateStaticParams` 是否含 locale

3. **SEO**
   - 用 [Meta Pixel Helper] + [Schema Validator] 验证详情页 ArticleJsonLd / FaqJsonLd
   - 检查 sitemap 输出日期类型一致
   - 检查 canonical 与 hreflang 在 7 语言下完整

4. **UX**
   - 长文是否有 TOC
   - 是否有阅读时间
   - 是否有相关文章
   - 是否有 tag 筛选/搜索

5. **性能**
   - `next build` 后检查 `blog/[slug]` 路由的 First Load JS
   - 确认 `blogPosts`（含 content）未被列表页无意 import

## 改动准则

- 改 `blog-data-*` 后必须跑 `node -e` 校验文章数（应为 61，或更新后确认数量）和日期分布。
- 改 `messages/*.json` 后必须跑 key diff 脚本确保 7 语言 key 一致。
- 改博客组件后必须 `npx tsc --noEmit` 通过。
- 改 i18n 路由相关代码后必须本地切 7 语言点进博客详情页验证 URL 保留 locale 前缀。
- 不要在 `[locale]` 路由下引入 `next/link` 或 `next/navigation` 的 `redirect`/`useRouter`/`usePathname`，统一用 `@/i18n/routing`。

## 参考文件

- `app/[locale]/blog/page.tsx`
- `app/[locale]/blog/[slug]/page.tsx`
- `lib/blog-data.ts` / `lib/blog-data-{1..6}.ts`
- `lib/utils.ts` — `generateMeta`
- `app/sitemap.ts`
- `i18n/routing.ts`
- `proxy.ts` — next-intl middleware
- `components/JsonLd.tsx` — ArticleJsonLd / FaqJsonLd / BreadcrumbJsonLd
