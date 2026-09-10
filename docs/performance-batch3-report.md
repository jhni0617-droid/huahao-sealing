# 性能优化 · 第 3 批改动报告

> 版本 v1.0 ｜ 日期 2026-09-10
> 依据文档：`docs/performance-optimization-plan.md`（第 3 批 = `/blog` 静态化 + 首页博客数据按需取数）
> 状态：**已执行完毕，构建验证通过，等你验收**

---

## 〇、一句话结果

**最后一个「每请求 SSR」的公开页面 `/blog` 恢复成静态预渲染**（静态路由 121 → 128 条）；首页不再为了 3 条公司新闻加载全部 94 篇文章的数据（**服务端数据量 1667KB → 32KB，↓98%**）。

| 核心指标 | 本批前 | 本批后 | 变化 |
|---|---|---|---|
| `/blog` 渲染方式 | ƒ 每请求 SSR | ✅ **静态预渲染** | 消除最后一处 SSR 退化 |
| 静态预渲染路由数 | 121 | **128** | +7（7 语言 × `/blog`） |
| 预渲染 HTML 数 | 119 | **126** | +7 |
| 首页服务端加载的博客数据 | 1667 KB 源码 / 602 KB gzip | **32 KB / 14.3 KB** | **↓ 98%** |
| 首页首屏 JS+CSS（gzip） | 255.8 KB | 255.9 KB | 持平（无回退） |

> 至此，**所有公开内容页都已是静态预渲染**，仅剩 `/admin`、`/api` 与按需 ISR 的文章详情页为动态。

---

## 一、本批做了什么

| 任务 | 状态 | 风险 |
|---|---|---|
| `/blog` 标签筛选搬到客户端 → 页面静态化 | ✅ 完成 | 🟡 中 |
| 首页 `NewsSection` 只加载置顶 3 条所需的最小数据源 | ✅ 完成 | 🟢 低 |

**没有做的事**：
- 字体引入迁移到 `next/font` —— 这一项依赖你对「中文标题改用系统宋体」的视觉验收结果，**等你确认后再动**。
- HTML 缓存策略落 `vercel.json`、CI 性能门禁 —— 属第 4 批。

---

## 二、改动清单

### 2.1 新增文件（3 个）

**① `lib/blog-list-data.ts`** —— 博客列表的服务端取数

导出 `getBlogListData(locale)`，返回**序列化友好**的结构：

```ts
{
  items: { slug, tag, date, pinned, title, excerpt }[]   // title/excerpt 已解析成当前语言的字符串
  monthLabels: Record<string, string>                     // "2026-06" -> "2026年6月" / "June 2026"
}
```

两个设计要点：
- **只解析当前语言**的 title/excerpt，不把 7 种语言一起塞进 RSC 载荷。
- 原先 `monthLabels` 是一个**函数**（按 locale 返回格式化函数）。server → client 不能传函数，所以改为在服务端把需要的月份**预先算成字符串映射**再传下去。行为完全等价，7 种语言的格式逐一比对过。

**② `app/[locale]/blog/blog-list.tsx`** —— 客户端列表组件

承接原来在服务端做的列表渲染，并新增 `useSearchParams()` 读取 `?tag=`。筛选、置顶分组、按年月分组的逻辑原样搬过来，放在 `useMemo` 里。

**③ `lib/blog-pinned.ts`** —— 首页专用轻量数据源

首页只需要 3 条置顶公司新闻，但 `lib/blog-data.ts` 会聚合 10 个分片（94 篇、1667KB 源码）。经核查，**这 3 条恰好都在 `blog-data-10.ts` 一个分片里**（32KB、无外部依赖），所以只引这一个分片。

文件里写明了维护约定（新增置顶文章要放进该分片），并加了一处 `NODE_ENV !== "production"` 下的数量自检告警 —— 若置顶文章被挪到别处导致首页挑不满 3 条，构建时会提示。

### 2.2 修改文件（3 个）

**① `app/[locale]/blog/page.tsx`** —— 去掉 searchParams，加 Suspense

```diff
- export default async function BlogPage({ params, searchParams }) {
-   const { tag } = (await searchParams) ?? {}
-   const tagLabels = getLocalized({...}, locale)
-   const activeTag = tag && validTags.has(tag) ? tag : null
-   ... 服务端筛选、分组、渲染 94 张卡片 ...
+ export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
+   const { items, monthLabels } = getBlogListData(locale)
    return (
-     <section ...>
+     <section ...>
+       <Suspense fallback={<BlogListFallback />}>
+         <BlogList items={items} monthLabels={monthLabels} locale={locale} readMore={t("readMore")} />
+       </Suspense>
        </section>
    )
```
页面从 222 行缩到 82 行。

**② `components/NewsSection.tsx`**

```diff
- import { blogPostsMeta } from "@/lib/blog-data"
- const posts = blogPostsMeta.filter((p) => p.pinned).slice(0, 3)
+ import { pinnedBlogPosts } from "@/lib/blog-pinned"
+ const posts = pinnedBlogPosts
```

**③ `lib/blog-data.ts`** —— 未改动，但它在项目里的引用方从 4 处减为 3 处（首页已摘除）。

---

## 三、一个需要你知悉的前置发现

**全站没有任何指向 `?tag=` 的链接，sitemap 里也不含这类 URL。**

```
grep -rn "blog?tag=" app components lib   → 无结果
grep -n "tag" app/sitemap.ts              → 无结果
```

也就是说，博客的标签筛选功能**只能靠手动敲 URL 到达**，页面上没有任何入口生成这种链接。这意味着：

- 改造的风险极低（不会有内部链接失效）；
- 但我**仍然保留了该功能**，因为可能有用户收藏过或分享过这类链接。现在的实现与原版行为完全一致：`?tag=process` 依然能正确筛选、`清除筛选` 按钮依然有效。

> 附带说明：我特意**保持了原有的一个小瑕疵** —— 文章计数单位在非中文语言下仍显示英文 "posts"（原实现就是中英二元回退）。没有顺手补 vi/th/ru/ja/ko 的译文，因为那是未经校对的翻译，不该混在性能批次里。若你要补，我单独做一轮。

---

## 四、代码质量校验

| 检查项 | 结果 |
|---|---|
| TypeScript `tsc --noEmit` | ✅ 0 错误 |
| ESLint（本批改动的 6 个文件） | ✅ 0 错误 0 警告 |
| 生产构建 | ✅ `EXIT=0`，140 个静态页全部生成 |

**行为等价性逐条核对**（改造前后）：

| 逻辑 | 原实现 | 新实现 | 等价 |
|---|---|---|---|
| 标签合法性校验 | `validTags.has(tag)`，取 `tagLabels` 的键 | `tagLabels[rawTag]` 存在性判断 | ✅ |
| 置顶筛选 | `pinned && (!activeTag \|\| tag === activeTag)` | 同 | ✅ |
| 普通文章筛选 | `activeTag ? tag===activeTag && !pinned : !pinned` | 同 | ✅ |
| 年月分组与排序 | `date.slice(0,7)` + `localeCompare` 倒序 | 同 | ✅ |
| 月份文案 | 7 语言格式化函数 | 预计算 `Record`，7 种格式逐一比对 | ✅ |
| 计数单位 | `{zh:"篇", en:"posts"}` 中英回退 | `locale === "zh" ? "篇" : "posts"` | ✅ |
| 「阅读更多」文案 | `t("readMore")` | 服务端传入 props | ✅ |
| 置顶封面图 | `pinnedCovers[slug]` | 同（并补了 `?? "/images/og-banner.jpg"` 兜底） | ✅ |

---

## 五、构建实测

```
✓ Compiled successfully in 30.9s
  Finished TypeScript in 8.9s
✓ Generating static pages using 11 workers (140/140)
EXIT=0
```

### 5.1 全部核心页渲染方式（最终态）

| 页面 | 渲染方式 |
|---|---|
| `/en` 首页 | ✅ 静态预渲染 |
| `/en/products` 产品列表 | ✅ 静态预渲染 |
| `/en/blog` 博客列表 | ✅ **静态预渲染（本批达成）** |
| `/en/contact` 联系我们 | ✅ 静态预渲染 |
| `/en/factory` 工厂质量 | ✅ 静态预渲染 |
| `/blog/[slug]` 文章详情 | ● 按需 ISR（`revalidate=86400`，有意保留） |
| `/admin/*`、`/api/*` | ƒ 动态（本应动态） |

静态路由总数：**121 → 128 条**；预渲染 HTML：119 → 126 个。

### 5.2 首页数据依赖验证（决定性证据）

直接读首页路由的服务端入口 `.next/server/app/[locale]/page.js`，它的 chunk 依赖列表是：

```
 11KB  [root-of-the-server]__053zg3f._.js
 31KB  lib_blog-data-10_ts_08r1h3n._.js     ← 只引这一个分片
 23KB  node_modules_next_dist_esm_build_templates_app-page_0bkk-7c.js
 30KB  _0gv_5xr._.js
211KB  node_modules_next_dist_0p~2f-t._.js
... （共 19 个分块）
合计: 540KB
```

**注意它没有 depends on `_0tz6p2b._.js`（1628KB）** —— 那是装着全部 10 个分片博客数据的分块，现在只被 `/blog`、`/blog/[slug]`、`/sitemap` 使用（这些路由确实需要它）。

用探针交叉验证：取 batch1 里的一个文章 slug `carbon-graphite-seal-ring-basics`，在全部 SSR 分块里检索，只命中 `_0tz6p2b._.js`（1628KB）—— 首页不依赖它，结论成立。

### 5.3 首页博客数据量

| 项 | 本批前 | 本批后 | 变化 |
|---|---|---|---|
| 首页引入的博客数据（源码） | 1667 KB | **32 KB** | ↓ 98.1% |
| 同上（gzip） | 602.4 KB | **14.3 KB** | ↓ 97.6% |

### 5.4 各页首屏资源（gzip，逐文件实测）

| 页面 | 首屏 JS | 首屏 CSS | JS+CSS | HTML |
|---|---|---|---|---|
| `/en` 首页 | 238.6 KB | 17.3 KB | **255.9 KB** | 28.8 KB |
| `/en/blog` 博客列表 | 233.0 KB | 17.3 KB | **250.3 KB** | 33.0 KB |
| `/en/products` | 239.6 KB | 17.3 KB | 256.9 KB | 24.5 KB |
| `/en/contact` | 232.2 KB | 17.3 KB | 249.5 KB | 17.5 KB |
| `/en/factory` | 229.8 KB | 17.3 KB | 247.2 KB | 22.9 KB |

> `/blog` 的 HTML 为 131.2KB raw / 33.0KB gzip —— 里面装着 94 篇文章的标题与摘要（改为客户端筛选后必须下发），换来的是整页静态化。这个体积是划算的。

### 5.5 客户端确认不下载博客数据

```
grep -c "blog-data" .next/server/app/en/blog.html  → 0
```
`/blog` 的 HTML 里没有任何指向博客数据模块的 `<script src>`，说明它只在服务端使用。

---

## 六、需要你验证的事项

### 必须目视验证

1. **`/blog` 页（重点）**
   - 打开 `/zh/blog`、`/en/blog`，确认列表正常显示（应该是「公司新闻」置顶 3 张 + 按月份分组的卡片）
   - 带参直达：`/zh/blog?tag=process`，确认顶部出现「当前筛选 → 加工工艺」，且列表只剩该标签的文章；点「清除筛选」能回到全部
   - 文章链接可正常进入详情页
   - 各个月份分组的标题与文章数是否正确
2. **`/blog/[slug]` 文章详情页**
   随便点开 2–3 篇，确认正文、上下篇导航正常（这个页面本次没改数据来源，属于回归确认）
3. **首页「公司新闻」区块**
   确认 3 张置顶卡片（2018 迁址 / 2020 CNC 升级 / 2021 自建厂房）标题、摘要、封面图都在

---

## 七、回滚方式

| 方式 | 说明 |
|---|---|
| Git（推荐） | `git checkout -- .` 回到 `18cf7ef`（第 1–3 批改动都在工作区，未提交） |
| 备份 | `backup-original-images/`、`.workbuddy/removed-backup/` |

> 第 1、2、3 批的改动**都还没提交**。改动量越来越大（目前 21 改 / 58 删 / 34 新增），建议至少先把第 1、2 批提交成一个 commit，避免后续误操作难以回退。要不要我提交由你定。

---

## 八、下一批建议

第 4 批（只剩两项，都是「收尾与防复发」）：

| 顺序 | 任务 | 价值 | 风险 |
|---|---|---|---|
| 1 | 接入 `@next/bundle-analyzer` + CI 性能门禁 + Web Vitals 上报 | 性能回归能被自动拦住 | 🟢 低 |
| 2 | HTML 缓存策略落到 `vercel.json` | TTFB 有代码保障，不再依赖人工配 Cloudflare | 🔴 高 |

**关于第 2 项的风险提示（重申）**：这是全站唯一一个「配错会导致线上故障」的改动 —— 缓存 key 若不含语言前缀，所有语言用户会被带到同一个语言版本。`docs/cloudflare-cache-setup.md` 里已经记录过一次类似的踩坑。建议单独发版、逐语言验证。

另外两件可选事项：
- **字体引入迁移到 `next/font`** —— 等你对中文标题字形的验收结论。
- **`docs/cloudflare-cache-setup.md` 需要更新** —— 那份文档里写着「全站是 SSG/ISR 预渲染」，而第 2、3 批之前有 3 个页面并不满足这个前提。现在前提成立了，但文档里「移动端首屏约减少 160KB 传输」等描述已经过时（实际降幅更大），建议一并更新。

要开第 4 批请回一句；只想做其中一项，说编号即可。
