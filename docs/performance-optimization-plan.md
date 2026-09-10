# 华豪密封独立站 · 全站性能优化方案（审查稿）

> 版本 v1.4（终稿）｜ 日期 2026-09-10 ｜ 范围：官网前端全站（7 语言 × 23 类页面路由 + 全部静态资源）  
> 目标：首屏更快、移动端更省流量、构建更稳
>
> **四批已全部完成**
>
> | 批次 | 内容 | 关键结果 | 报告 |
> |---|---|---|---|
> | 第 1 批 | Hero 图片转 WebP + 渐进挂载 ｜ 移除 Noto Serif SC ｜ 死代码清理 | 首屏 CSS gzip 152KB → 17KB；首屏图片 12.4MB → 947KB | `performance-batch1-report.md` |
> | 第 2 批 | `/products`、`/contact` 恢复静态预渲染 ｜ 产品数据剥离 ｜ 全站图片治理 | 静态路由 107 → 121；产品数据客户端归零；`public/` -25MB | `performance-batch2-report.md` |
> | 第 3 批 | `/blog` 静态化 ｜ 首页博客数据按需取数 | 静态路由 121 → 128；首页博客数据 1667KB → 32KB | `performance-batch3-report.md` |
> | 第 4 批 | CI 性能门禁 ｜ 缓存规则（实测后修正）｜ Web Vitals | `npm run perf` 11 项门禁；补 4 条不缓存规则；端到端接入真实性能监控 | `performance-batch4-report.md` |
>
> **总账**：首屏 gzip **488KB → ~288KB（↓41%）**；首屏 CSS **152KB → 17.3KB（↓89%）**；首屏图片 **12.4MB → 947KB（↓92%）**；`public/` **71MB → 26MB（↓63%）**；静态路由 **107 → 128 条**（公开内容页 100% 静态预渲染）；构建产物字体 **932 个/32MB → 124 个/1.6MB**。
>
> **两处重要修正**（本文档下方 §三 的原方案已被实测推翻，保留作记录）：
> 1. §P2-2 原计划给语言页设 `s-maxage=300` —— 实测发现 Next 已给静态页 1 年边缘缓存，改成 300s 是**倒退**，已改为只补 `/`、`/admin/*`、`/api/*` 的不缓存声明。
> 2. §2.2 关于「全站 SSG」的表述在写文档时并不成立（当时 3 个页面是 SSR），现已通过第 2、3 批真正达成。
>
> **唯一未结项**：字体引入迁移到 `next/font` —— 等中文标题字形的视觉验收结论。
>
> **代码已分批提交（本地 3 个 commit，未推送）**：
> `4bf55c7` 首屏资源（第 1 批）→ `45afde6` 页面静态化与数据剥离（第 2+3 批）→ `5b0605a` 门禁/缓存/Web Vitals（第 4 批）。
> 第 2、3 批合并提交的原因：`blog/page.tsx` 与 `NewsSection.tsx` 同时承载两批改动，
> 硬拆会导致中间提交引用了尚不存在的图片或模块、无法构建。详见各批次报告与项目记忆。

---

## 一、结论先行（人话版）

一句话：**代码架构没大问题，钱几乎全花在"资源"上——图片、字体、死文件。**

三个决定性数字：

| # | 事实                               | 数字                                                    | 危害                                                   |
| - | -------------------------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| 1 | 首屏 6 张 Hero 背景图，5 张是 2.5MB 级 PNG | 原始 **12.4 MB**                                        | 首屏图片加载是最大的单点耗时                                       |
| 2 | 中文字体 Noto Serif SC 全量打包          | **404 条 @font-face / 808 个文件引用 / 占首页 gzip CSS 的 89%** | 首屏 CSS 实测 151.8KB(gzip)，其中 135KB 只为中文字体；且 6 种语言完全用不上 |
| 3 | 产品列表页把全部产品数据塞进浏览器                | 客户端 **约 300KB+ JS**                                   | `/products` 首屏 JS 偏重，且包含 7 种语言冗余数据                   |

再补三条容易被忽略的：

| # | 事实                                               | 数字                                      | 危害                        |
| - | ------------------------------------------------ | --------------------------------------- | ------------------------- |
| 4 | **`/products`、`/blog`、`/contact` 三个重要页面没有静态预渲染** | 因 await `searchParams` 退化为每请求 SSR       | TTFB 高一档、Vercel 函数调用增加    |
| 5 | 全站未压缩图片（PNG/JPG）                                 | **41.1 MB / 28 个文件**                    | 同主题 WebP 仅 11.7MB，差 3.5 倍 |
| 6 | 已下线但没删的资源                                        | Hero 死图 **5.5MB** + 死组件 4 个 + 遗留空目录 6 个 | 污染仓库、拖慢构建、增加误改风险          |

**修完的预期**：首屏 CSS(gzip) 从 **151.8KB → ~20KB**，首屏图片传输量降 **90%+**，中文页字体下载降 **80%+**（或归零），`/products` 首屏 JS 降 **~250KB** 并恢复静态预渲染，`public/` 目录瘦身 **~35MB**。

---

## 二、现状基线（实测数据）

以下全部来自本机实测，非估算。

### 2.1 静态资源体积

| 目录                 | 体积         | 明细                                                                                        |
| ------------------ | ---------- | ----------------------------------------------------------------------------------------- |
| `public/images`    | **53 MB**  | PNG/JPG 41.1MB（28 个）+ WebP 11.7MB                                                         |
| `public/videos`    | **12 MB**  | 9 个 mp4，最大 `seal-ring-batch.mp4` 2.9MB                                                    |
| `public/downloads` | **6.1 MB** | `Huahao-Seals-Brochure.pdf` 3.1MB、`huahao-product-catalog.pdf` 1.8MB、3 个 M 系列 PDF 各 416KB |
| `public/fonts`     | 0          | 空目录（字体走 npm 包）                                                                            |
| **`public` 合计**    | **71 MB**  |                                                                                           |

**单文件 TOP（全部是 PNG）**

| 文件                                             | 体积     | 是否在用       |
| ---------------------------------------------- | ------ | ---------- |
| `images/hero/hero-industrial-plant.png`        | 3.0 MB | ❌ 未被任何页面引用 |
| `images/hero/hero-vintage-workshop.png`        | 2.6 MB | ✅ 首屏       |
| `images/hero/hero-grinding-sparks.png`         | 2.5 MB | ❌ 未被任何页面引用 |
| `images/hero/hero-graphite-rings-dramatic.png` | 2.5 MB | ✅ 首屏       |
| `images/hero/hero-global-map.png`              | 2.5 MB | ✅ 首屏       |
| `images/hero/hero-cnc-machining-dark.png`      | 2.5 MB | ✅ 首屏       |
| `images/hero/hero-polishing-machine.png`       | 2.3 MB | ✅ 首屏       |



> 对照：同样用于首屏的 `images/实拍/IMG_20260517_193309.webp` 只有 **196KB**。同样内容量，WebP 比 PNG 小 **12 倍**。这就是本方案最大的一块肉。


### 2.2 字体

`app/[locale]/layout.tsx` 里引入了 **16 个 fontsource CSS 入口**：

```
Inter              400/500/600/700        = 4 个字重
Plus Jakarta Sans  500/600/700/800        = 4 个字重
Bebas Neue         400                    = 1 个字重
Playfair Display   500/600/700/500-italic = 4 个字重
Noto Serif SC      500/600/700/900        = 4 个字重   ← 问题所在
```

**Noto Serif SC 是 CJK 字体，fontsource 把它切成 101+ 个子集，每个字重一份：**

| 指标                           | 实测值                                                           |
| ---------------------------- | ------------------------------------------------------------- |
| 单字重子集数                       | 102 个 woff2                                                   |
| 4 个字重 woff2 合计               | **约 19 MB**（`node_modules` 内 38MB 含全字重）                       |
| 进入构建产物 `.next/static/media`  | 932 个文件 / **32 MB**，其中 **808 个是 noto-serif-sc**（占全部字体资源的 87%） |
| 全局 CSS 中的 noto @font-face 声明 | **404 条**（4 个字重 × 101 条子集）                                    |
| 引用字体文件路径                     | **808 处**                                                     |

**三个关键细节：**

1. **6 种语言白付成本。** `app/globals.css` 里 `html.locale-en` 把 `--font-serif-sc` 覆盖成了 Plus Jakarta Sans。也就是说 **en / vi / th / ru / ja / ko 六个语言根本不用 Noto Serif SC**，但那 404 条 @font-face 声明照样出现在每个页面的全局 CSS 里，浏览器照样要解析。
2. **中文页实付成本更高。** zh 页面标题走 `font-serif-sc`，汉字分散在 102 个子集里，一个正常中文页会命中几十个子集，实际下载 **1–3 MB 字体**。
3. 讽刺的是，字体栈里本来就有系统中文衬线兜底：`"Noto Serif SC", "Songti SC", "STSong", "SimSun", serif` —— 去掉 Web 字体，视觉损失有限。


### 2.3 首屏资源实测（首页 /en，从预渲染产物逐个文件称重）

| 类别               | 文件数 | 未压缩          | gzip         | brotli       |
| ---------------- | --- | ------------ | ------------ | ------------ |
| **JS**           | 14  | **832.9 KB** | 267.5 KB     | 228.3 KB     |
| **CSS**          | 6   | **496.9 KB** | 151.8 KB     | 92.0 KB      |
| **HTML**         | 1   | 308.9 KB     | 68.9 KB      | 48.7 KB      |
| **首屏 JS+CSS 合计** | 20  | **1.30 MB**  | **419.3 KB** | **320.3 KB** |

**首页最大的 JS 单文件**：`221 KB`（gzip 68.9KB）、`138 KB`（gzip 37.6KB）、`110 KB`（gzip 38.6KB）、`80 KB`（gzip 36.0KB）。

**CSS 的构成——这是本次最刺眼的发现：**

| CSS 文件              | 未压缩      | gzip     | 内含 @font-face | 内含 noto 引用 |
| ------------------- | -------- | -------- | ------------- | ---------- |
| `0_vds_makta05.css` | 99.2 KB  | 33.8 KB  | **101 条**     | 202 处      |
| `0h~rq199w7km3.css` | 99.2 KB  | 33.8 KB  | **101 条**     | 202 处      |
| `0u4cvgtxwyxk8.css` | 99.2 KB  | 33.8 KB  | **101 条**     | 202 处      |
| `150yrf-ya9ws0.css` | 99.2 KB  | 33.8 KB  | **101 条**     | 202 处      |
| `0rmqv-v~k1~86.css` | 77.8 KB  | 14.2 KB  | 0             | 0          |
| `041hoq_234bmw.css` | 22.4 KB  | 2.4 KB   | 62 条（其他字体）    | 0          |
| **合计**              | 496.9 KB | 151.8 KB | —             | —          |

> **解读**：4 个 99.2KB 的 CSS 文件 = Noto Serif SC 的 4 个字重（500/600/700/900），每个字重 101 条子集声明。**这 4 个文件合计 397 KB 原始 / 135 KB gzip，占了首页 gzip 后 CSS 的 89%**，而它们的唯一用途就是中文字体。在 en / vi / th / ru / ja / ko 6 种语言下，这份 CSS 下载完、解析完，一行都用不上。

**HTML 的构成（顺带记录，非优先项）：**

| 成分                        | 体积           | 占比             |
| ------------------------- | ------------ | -------------- |
| 内联 RSC/Flight 数据（58 个内联块） | 119.1 KB     | 38.6%          |
| DOM + 内联样式                | 187.8 KB     | 61.4%          |
| **合计**                    | **308.9 KB** | gzip 后 68.9 KB |

> 309KB 的原始 HTML 对手册页偏大，主因是 Tailwind 类名字符串在每个元素上重复出现 + RSC 数据内联。gzip 后 68.9KB 属于可接受范围，**暂时不动**；等第 4 批上了 Web Vitals 监控后，如果真实用户 TTFB/传输明显偏高再回头处理。

### 2.4 客户端 JS

| 指标                      | 实测值                                       |
| ----------------------- | ----------------------------------------- |
| `"use client"` 文件数      | **40 个**                                  |
| 构建产物 JS chunks 合计       | 1.8 MB                                    |
| 最大单个 chunk              | 304 KB / 224 KB / 140 KB / 112 KB / 84 KB |
| 动态导入（`next/dynamic`）使用处 | 仅 **2 处**（且指向已下线组件）                       |

**`/products` 页的客户端包异常大**，构建产物里能看到罪证：

```
.next/server/chunks/ssr/app_[locale]_products_products-content_tsx  → 304 KB
.next/server/chunks/ssr/lib_translations-products_ts                → 276 KB
```

原因：`app/[locale]/products/products-content.tsx` 是 `"use client"`，却直接 import 了：

- `lib/translations-products.ts`（**3026 行 / 232 KB**，含 7 种语言全部产品文案）
- `lib/products.ts`（836 行）
- `lib/products-en.ts`（814 行）

**结果：用户打开产品页，浏览器会把 7 种语言的产品数据全下载一遍，只为显示 1 种语言。**

**翻译下发**：`NextIntlClientProvider` 每页固定下发 10 个 namespace，实测序列化后 **6.3–10.3 KB**（占该语言全部文案的 64–69%），进入每页 RSC payload。


### 2.5 服务端 / 构建

| 项                                    | 实测值                                                        | 评价                         |
| ------------------------------------ | ---------------------------------------------------------- | -------------------------- |
| 预渲染静态路由                              | **107 条**（7 语言 × 14 + admin/sitemap/llms）                  | 好                          |
| ISR 动态路由                             | 19 条（`blog/[slug]`、`products/[slug]` 等，`revalidate=86400`） | 合理                         |
| `blog/[slug]` `generateStaticParams` | 返回 `[]`，纯按需 ISR                                            | 合理（备注：原注释说为避开 Vercel 文件上限） |
| 中间件 `proxy.ts`                       | JWT 校验 + next-intl，匹配**除静态文件外全部路径**                        | 可接受                        |
| `next build` 耗时                      | **20 分钟以上**                                                | ⚠️ 明显偏慢                    |
| 服务端 chunk 最大                         | 2028 KB（主）+ 1628 KB（SSR 公共）                                | 偏胖                         |

#### ⚠️ 意外发现：3 个重要页面悄悄退化成"每次请求都服务端渲染"

对照预渲染清单，**`/products`、`/blog`、`/contact` 三个页面没有出现在静态产物里** —— 它们每个请求都要跑一遍服务端渲染。

**原因**：这三个页面都 await 了 `searchParams`，而 Next.js 的规则是"读取 `searchParams` ⇒ 该路由不能静态化"。

| 页面          | 读了什么参数       | 实际用途                     |
| ----------- | ------------ | ------------------------ |
| `/products` | `?category=` | 传一个初始分类给**已经是客户端组件**的筛选器 |
| `/blog`     | `?tag=`      | 服务端按标签过滤文章列表             |
| `/contact`  | `?product=`  | 预填询价表单的产品名               |

**影响**：

- 这三个页面每次端上缓存失效都要完整 SSR，TTFB 比静态页高一个数量级；
- `docs/cloudflare-cache-setup.md` 里写的"全站是 SSG/ISR 预渲染（每 300s 才重新生成）"这个前提，**对这三个页面不成立**——一旦 Cloudflare 规则失效，用户直接感受到慢；
- 增加 Vercel 函数调用量（成本）。

**修复思路（成本很低）**：

- `/products`：分类筛选本来就在客户端做（`products-content.tsx`），改成用 `useSearchParams()` 在客户端读 `category`，页面即可恢复静态；
- `/contact`：`?product=` 同理，在 `ContactForm` 里客户端读取；
- `/blog`：标签过滤目前是服务端渲染列表，改动稍大。可以接受 SSR（有 Cloudflare 兜底），也可以把过滤搬到客户端。

> 这条是本次审计里"性价比最高"的一项：**改 2 个文件的取参位置，换回 3 个核心页面的静态化。**

**博客数据链路**：`lib/blog-data.ts` 汇总 10 个分片（合计 **约 1.6 MB** 源码），被 `sitemap.ts`、`blog/page.tsx`、`blog/[slug]/page.tsx`、**以及首页的 `NewsSection`** 引用。

- 首屏首页会因此把整个博客库拉进服务端渲染链路，冷启动渲染变慢；
- 因为是服务端组件，**不会**下发到浏览器（这点没踩坑）；
- 但 `NewsSection` 只需要 3 条置顶新闻，为此加载 1.6MB 数据 + 遍历全量 → 构建/冷启动成本无谓。

### 2.6 配置层缺口

| 缺失项                  | 现状                        | 影响                                                         |
| -------------------- | ------------------------- | ---------------------------------------------------------- |
| `next/font`          | 未使用，改用 fontsource CSS     | 无法自动子集化/自托管优化，是 404 条 @font-face 的根因                       |
| `images.deviceSizes` | 最大仅 **1280**              | 1920 宽屏下 Hero 会被放大，略糊（性能好但画质有损）                            |
| `images.imageSizes`  | 未配置                       | 小图走默认值，可能产生多余尺寸变体                                          |
| HTML 缓存头             | `vercel.json` **未配置**     | 依赖人工在 Cloudflare 配（`docs/cloudflare-cache-setup.md`），有失效风险 |
| bundle 分析            | 无 `@next/bundle-analyzer` | 看不到包体构成，只能事后靠猜                                             |
| 性能门禁                 | 无 Lighthouse / CI 检查      | 性能回归无人拦                                                    |
| 图片源头压缩               | 无构建期流程                    | 全靠开发者自觉，已失控（41MB PNG）                                      |

### 2.7 死代码 / 死资源（可安全清理）

| 类型          | 清单                                                                                                    | 体积         |
| ----------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| 未被任何页面引用的组件 | `components/ClientCarousel.tsx`、`HeroCarousel.tsx`、`HeroDynamicContent.tsx`、`HeroParticles.tsx`       | —          |
| 未被引用的图片     | `images/hero/hero-industrial-plant.png`、`hero-grinding-sparks.png`                                    | **5.5 MB** |
| 临时产物        | `out/imagegen-test-edit.png`、`out/imagegen-test-generate.png`                                         | 1.8 MB     |
| 遗留空目录       | `app/about`、`app/applications`、`app/cases`、`app/contact`、`app/faq`、`app/products`（均为空目录，无 `page.tsx`） | —          |
| 空目录         | `public/fonts`                                                                                        | —          |

> 补充：`components/test-write.txt`、根目录 `shot-products-tmp.mjs`、`-p/` 目录也建议复核。

---

## 三、问题清单与修复方案

风险等级：🔴 高（改完需重点回归）｜🟡 中（需目视确认）｜🟢 低（安全）

---


### P0-1 ｜首屏 Hero 图片：12.4MB PNG → 目标 < 600KB

**等级**：🟡 中 ｜ **收益**：⭐⭐⭐⭐⭐（首屏最大单点）｜ **工作量**：0.5 天

**现象**：`components/HeroSection.tsx` 用 `slides.map()` 渲染 6 张 `fill` 背景图，全部 `absolute inset-0` 铺满 100svh 视口。

**为什么 6 张会同时下载**：Next.js 的懒加载只对"视口外"的图片生效。这 6 张全都在视口内（靠 opacity 切换），所以浏览器认为**全部可见**，**6 张一起请求**。`priority={idx === 0}` 只影响 preload 优先级，不影响其余 5 张的加载。

**实测代价**：5 张 PNG = 12.4MB 源文件，每次图片优化器冷启动都要拉一遍原图 → 出图慢、Vercel 图片优化计费高。

**修复方案（三步，按性价比排序）**

1. **源头转 WebP/AVIF**（最高性价比，先做这个）
   - 把 5 张 Hero PNG 转成 WebP（quality 82），预期单张 2.5MB → 150–250KB。
   - 参考已验证的对照组：同类内容的 WebP 是 196KB。
   - 转完删除原 PNG，同步改 `HeroSection.tsx` 里的路径。
   - **预期：12.4MB → 约 1.0MB（降 92%）**

2. **改成"先首图、后预热"**
   - 首图保留 `priority`；其余 5 张改为**首图加载完成后**再挂载（用 `useEffect` + `requestIdleCallback` 或状态门控）。
   - 保底方案：把非首图设为 `loading="lazy"` 并给容器加 `content-visibility`，但不如主动门控干净。
   - **预期：LCP 不再被 5 张非首图拖累。**

3. **收敛轮播张数**
   - 6 张轮播、每张 5.8 秒 → 一轮 35 秒，转化价值有限。
   - 建议砍到 **3 张**（匠心传承 / CNC 精密制造 / 全检出厂）或降为 4 张，其余做成下方图片墙。
   - **预期：再省一半首屏图片。**

**验收**：Chrome DevTools → Network 过滤 Img，刷新首页，图片传输总量应 **< 600KB**。

---

### P0-2 ｜中文字体：去掉 Noto Serif SC Web 字体（或子集化）

**等级**：🟡 中 ｜ **收益**：⭐⭐⭐⭐⭐ ｜ **工作量**：0.5–1 天

**现象**：4 个字重的 Noto Serif SC 全量子集（404 条 @font-face、808 个文件引用）被打进全局 CSS，在**全部 7 种语言**的页面上解析。

**为什么必须改**：
- 6 种语言完全不用它，纯浪费（CSS 解析 + 声明体积）；
- zh 页面实际下载 1–3MB 字体，在东南亚/海外网络下非常痛；
- 构建产物 32MB 全是字体，是 `next build` 慢的直接原因之一。

**修复方案（二选一，推荐 A）**

| 方案 | 做法 | 收益 | 代价 |
|---|---|---|---|
| **A. 直接移除 Noto Serif SC Web 字体** | 删掉 4 行 `@fontsource/noto-serif-sc/*.css` 引入，保留现有字体栈里的 `"Songti SC", "STSong", "SimSun", serif` 系统兜底 | 字体下载 **归零**，CSS 瘦身 ~400KB，构建产物 -32MB | 中文标题在部分设备上从"思源宋体"变成系统宋体，字形略有差异 |
| **B. 子集化 + 降字重** | 用 `next/font/local` + 自建子集（只保留站内实际用到的汉字，通常 <1500 字），字重砍到 1–2 个 | 中文页字体从 1–3MB 降到 **80–150KB** | 需要写子集脚本；新增词条时要重新生成子集，有维护成本 |

**建议**：先做 A（十分钟见效、零维护），视觉若不能接受再上 B。

**同时清理**：`public/fonts` 空目录。

**验收**：Network 过滤 Font，zh 首页字体请求数应 **= 0**（方案 A）。

---

### P0-3 ｜`/products` 页客户端 JS：剥离全语言产品数据

**等级**：🔴 高（改动面较大）｜ **收益**：⭐⭐⭐⭐ ｜ **工作量**：1 天

**现象**：`products-content.tsx` 为 `"use client"`，却静态 import 了 `translations-products.ts`（232KB / 7 语言）+ `products.ts` + `products-en.ts`。

**修复方案**

1. **把数据留在服务端**：在 `app/[locale]/products/page.tsx`（服务端）里按 `locale` 取好当前语言的产品数组 + 分类列表，作为 props 传给客户端组件。
2. `products-content.tsx` 只保留 `useState`（分类筛选、搜索关键字）和 `useMemo`（本地过滤），不再 import 任何 `lib/*data*`。
3. 类型仍可从 `@/lib/products` 用 `import type` 引入（类型在编译期擦除，不进包体）。

**关键细节**：搜索过滤逻辑要确认在"已下发的当前语言数据"上运行，不要退化回全语言取数。

**预期**：`/products` 首屏 JS **-250KB 左右**，服务端 chunk 从 304KB + 276KB 降至接近框架基线。

**风险**：筛选/搜索逻辑回归，需逐语言点一遍。

---

### P1-1 ｜让 `/products`、`/contact`、`/blog` 回到静态预渲染

**等级**：🟡 中 ｜ **收益**：⭐⭐⭐⭐（TTFB + 成本）｜ **工作量**：0.5 天

**现象**：这三个页面因为 await 了 `searchParams`，被迫每请求 SSR（详见 §2.5）。

**修复方案（按难度递增）**

| 页面 | 做法 | 难度 |
|---|---|---|
| `/products` | 把 `?category=` 的读取从服务端搬到客户端：`products-content.tsx` 里用 `useSearchParams()` 拿初始分类。筛选逻辑本来就在客户端，改动很小。 | 🟢 低 |
| `/contact` | `?product=` 同理，在 `ContactForm` 内部用 `useSearchParams()` 读，服务端不再 await `searchParams`。 | 🟢 低 |
| `/blog` | 标签过滤目前由服务端渲染列表。可接受现状（Cloudflare 兜底），或把过滤搬到客户端（改动较大，收益相对小）。 | 🟡 中 |

**注意**：改用 `useSearchParams()` 的组件需要包一层 `<Suspense>`（否则构建期会报 CSR bailout）。同时 `generateStaticParams` / `setRequestLocale` 的逻辑保持不变。

**预期**：`/products`、`/contact` 恢复静态预渲染 → 端上缓存命中时 **TTFB 从 SSR 级降到静态级**，Vercel 函数调用大幅减少，且 `docs/cloudflare-cache-setup.md` 里"全站预渲染"的前提重新成立。

**风险**：🟡 筛选/预填功能回归，需逐语言验证。

---

### P1-2 ｜图片资产整体治理：41MB → 目标 < 12MB

**等级**：🟡 中 ｜ **收益**：⭐⭐⭐⭐ ｜ **工作量**：1 天

**现象**：`public/images` 里 **41.1MB 是 PNG/JPG**（28 个文件），WebP 只有 11.7MB。`next/image` 虽然会在请求时转 AVIF/WebP，但**源文件越大，优化器冷启动越慢、计费越高**，而且任何绕过 `next/image` 的地方（CSS 背景、`<img>`、OG 图）都会直接暴露原始体积。

**修复方案**

1. **批量转码**：对 `images/factory/`（20MB）、`images/hero/`（18MB）、`images/applications/`（5.6MB）、`images/technical/`（4.4MB）里的 PNG/JPG 统一转 WebP（质量 80–85），保留尺寸。
   - 预期：`images/` 从 53MB 降到 **12–15MB**。
2. **删除死图**：`hero-industrial-plant.png`、`hero-grinding-sparks.png` = **-5.5MB**。
3. **建立源头规范**（防复发）：
   - 新增图片一律 WebP；Hero/大图宽度不超过 1920，长边压到 1920 以内；
   - 加一个 npm script（如 `npm run images:check`）扫描 `public/images` 中 >300KB 的文件并在 CI 报错。
4. **`next.config.ts` 调优**：
   - `deviceSizes` 补上 `1536, 1920`（当前最大 1280，宽屏 Hero 会被放大变糊）；
   - 补 `imageSizes` 明确小图档位。

**风险**：🟢 转码需逐张目视确认画质（尤其工厂实拍和纹理细节）。建议保留 `backup-original-images/` 备份后再删原图。

---

### P1-3 ｜死代码与遗留物清理

**等级**：🟢 低 ｜ **收益**：⭐⭐⭐ ｜ **工作量**：0.5 小时

| 动作 | 对象 |
|---|---|
| 删除未被引用的组件 | `ClientCarousel.tsx`、`HeroCarousel.tsx`、`HeroDynamicContent.tsx`、`HeroParticles.tsx` |
| 删除未引用图片 | `hero-industrial-plant.png`、`hero-grinding-sparks.png`（5.5MB） |
| 删除空目录 | `app/{about,applications,cases,contact,faq,products}`、`public/fonts` |
| 复核后清理 | `out/imagegen-test-*.png`（1.8MB）、`components/test-write.txt`、`shot-products-tmp.mjs`、根目录 `-p/` |

> 注意：`HeroCarousel.tsx` 里有 18 张轴套/密封环图片的引用清单。删除前确认这些图是否在别处（产品页/案例页）已重新引用，避免视觉丢失。

---

### P1-4 ｜首页博客数据链路：按需取置顶 3 条

**等级**：🟢 低 ｜ **收益**：⭐⭐⭐（构建/冷启动）｜ **工作量**：1 小时

**现象**：`NewsSection`（首页）`import { blogPostsMeta } from "@/lib/blog-data"` → 拉入 10 个分片共约 1.6MB 数据，实际只用 3 条置顶。

**修复方案**

在 `lib/blog-data.ts` 里**新增**一个只含置顶新闻的轻量导出（标题/摘要/日期/slug/tag），例如 `pinnedBlogPostsMeta`，`NewsSection` 改用它。

**注意**：不要改动 `blogPostsMeta` 本身——`blog/page.tsx` 需要全量。只是给首页开一条小路。

---

### P2-1 ｜字体引入方式工程化（若采用 P0-2 方案 B 时需要）

**等级**：🟡 中 ｜ **收益**：⭐⭐⭐ ｜ **工作量**：1 天

把 fontsource 的 `@import` 方式迁移到 `next/font`（`next/font/google` 或 `next/font/local`）：

- 好处：自动子集化、自动 `font-display`、自动 `preload`、消除 CSS 里的字体声明块；
- 顺带解决"6 种语言解析 404 条 noto 声明"的浪费；
- 需要按语言动态注入字体变量（`html.locale-en` 那套逻辑要迁移）。

**这一步可以和 P0-2 合并判断**：如果方案 A 已满足视觉要求，本项可降级为"以后再优化"。

---

### P2-2 ｜HTML 缓存策略落到配置

**等级**：🟡 中 ｜ **收益**：⭐⭐⭐（TTFB）｜ **工作量**：0.5 小时

**现状**：`vercel.json` 只配了 `/images`、`/_next/static`、`/fonts` 的长缓存，**HTML 缓存完全依赖人工在 Cloudflare 后台配**（见 `docs/cloudflare-cache-setup.md`）。这是"配置在系统之外"的典型风险：换域名、重建 Zone、同事误删规则都会静默失效。

**修复方案**

1. 在 `vercel.json` 的 `headers` 里为 7 个语言前缀显式声明缓存语义（与 Cloudflare 规则对齐）：
   - `Cache-Control: public, s-maxage=300, stale-while-revalidate=86400`
   - `CDN-Cache-Control` 单独控制边缘，`Vary: Accept-Language` 或保持按路径分片
2. **必须排除** `/admin/*` 和 `/api/*`（登录态与动态数据，绝不能缓存）。
3. 在文档里补一句"验证命令"，方便每次发布后 30 秒自查。

**风险**：🔴 高。HTML 缓存一旦配错，最典型的故障是**所有语言用户被带到同一个语言版本**（`docs/cloudflare-cache-setup.md` 已经踩过这个坑并写了警告）。改完必须逐语言访问验证。

---

### P2-3 ｜可观测性与性能门禁

**等级**：🟢 低 ｜ **收益**：⭐⭐⭐（长期）｜ **工作量**：1 天

| 动作 | 说明 |
|---|---|
| 接入 `@next/bundle-analyzer` | `npm run analyze` 一眼看到包体构成，避免再出现"232KB 数据进客户端"这种隐形膨胀 |
| 加 CI 性能门禁 | 对 5 个核心页（`/`、`/products`、`/factory`、`/contact`、`/blog`）跑 Lighthouse，设预算：LCP < 2.5s、首屏 JS < 250KB、图片总量 < 1MB |
| 资源体积守卫 | `public/images` 单文件 >300KB 即 CI 失败 |
| 真实用户监控 | 已有 Meta Pixel / Clarity，建议补一条 Web Vitals 上报（`useReportWebVitals`），拿到真实 LCP/CLS/INP |

---

## 四、分批次执行计划

| 批次 | 内容 | 预计收益 | 工作量 | 风险 | 状态 |
|---|---|---|---|---|---|
| **第 1 批** | P0-1 Hero 图片转 WebP + 首图门控 ｜ P0-2 移除 Noto Serif SC ｜ P1-3 死代码清理 | 首屏 CSS -89%、首屏图片 -92%、仓库 -19MB | 1 天 | 🟡 中 | ✅ **已完成** |
| **第 2 批** | P1-1 三页面恢复静态预渲染 ｜ P0-3 `/products` 数据剥离 ｜ P1-2 全站图片治理 | 静态路由 +14、产品数据客户端归零、`public/` -25MB | 2 天 | 🔴 高 | ✅ **已完成** |
| **第 3 批** | `/blog` 静态化 ｜ P1-4 首页博客按需取数 | 静态路由 +7、首页数据 -98% | 1 天 | 🟡 中 | ✅ **已完成** |
| **第 4 批（收尾）** | P2-3 分析工具 + CI 门禁 + Web Vitals ｜ P2-2 HTML 缓存落配置 | 防回归、TTFB 有代码保障 | 1 天 | 🔴 高（缓存项） | ⏳ 待确认 |
| **可选** | P2-1 字体引入迁移到 `next/font` | 去掉字体声明块、规范引入方式 | 1 天 | 🟡 中 | ⏸ 等字形验收 |

**建议**：第 1 批先单独发版、单独观测 24–48 小时，确认无视觉回归后再开第 2 批。不要一次性全上——出问题不好定位。

---

## 五、预期收益汇总

| 指标 | 现状（实测） | 第 1 批后 | 第 1+2 批后 |
|---|---|---|---|
| 首屏 CSS（gzip） | **151.8 KB**（其中 135 KB 是字体声明） | ~20 KB | ~20 KB |
| 首屏 JS（gzip） | 267.5 KB | ~267 KB | ~215 KB |
| 首屏 JS+CSS（gzip） | **419.3 KB** | ~285 KB | ~235 KB |
| 首屏图片传输量 | ~12.4 MB | ~1.0 MB | ~0.5 MB |
| 中文页字体下载 | 1–3 MB | 0 | 0（或 0.1MB） |
| `/products` 首屏 JS | ~300KB+ | 不变 | **-250KB** |
| `/products` 渲染方式 | 每请求 SSR | 每请求 SSR | **静态预渲染** |
| `public/images` | 53 MB | 47 MB | **~13 MB** |
| `public/` 合计 | 71 MB | 65 MB | **~31 MB** |
| 构建产物字体部分 | 32 MB | **~2–4 MB** | ~2–4 MB |
| `next build` 耗时 | 20 分钟+ | 预期明显下降 | 进一步下降 |
| 端上缓存命中 TTFB | 静态页 100–300ms / 三个页面 SSR 级 | 同 | **全部静态级** |

> 说明：TTFB 这一项在 `docs/cloudflare-cache-setup.md` 里已经做过一轮优化（配置正确时可达 100–300ms）。本方案的增量价值集中在**首屏资源传输**与**消除三个页面的 SSR 退化**，也就是用户真正能感知的"打开快不快"。

---

## 六、风险与回归清单

改动前请知悉以下风险点，改完按清单逐项验证。

### 高风险项 🔴

| 风险 | 触发场景 | 验证动作 |
|---|---|---|
| 多语言串台 | P2-2 改了 HTML 缓存头且配错 | **逐语言**访问 `/en` `/zh` `/vi` `/th` `/ru` `/ja` `/ko`，确认内容与语言一致 |
| `/products` 筛选失效 | P0-3 数据改传 props + P1-1 改客户端读参 | 7 种语言各点一遍分类筛选、搜索框、以及带 `?category=` 的直达链接 |
| `/contact` 预填失效 | P1-1 改客户端读参 | 用 `?product=xxx` 直达，确认表单产品名已预填 |
| admin 后台被缓存 | P2-2 规则覆盖了 `/admin` | 登录后台，改一条产品，刷新确认立即生效 |

### 中风险项 🟡

| 风险 | 触发场景 | 验证动作 |
|---|---|---|
| 图片画质下降 | P0-1 / P1-2 WebP 转码质量过低 | 逐张对比原图，重点看工厂实拍、石墨纹理、文字标牌 |
| 中文标题字形变化 | P0-2 移除 Noto Serif SC | macOS / Windows / 安卓各看一遍中文标题 |
| Hero 轮播张数变更影响文案 | P0-1 第 3 步 | 确认被删的幻灯片文案在页面其他位置仍有承载 |
| 首图门控导致轮播卡顿 | P0-1 第 2 步 | 首屏停留 40 秒，确认后续图切换不出现空白 |
| `useSearchParams` 构建报错 | P1-1 | 本地跑一次 `next build`，确认三个页面重新出现在预渲染清单里 |

### 必须回归的核心路径

1. 首页 → 首屏加载 → 轮播切换 → 各区块滚动揭示动画
2. `/products` → 分类筛选 → 搜索 → 进详情页
3. `/contact` → 询价表单填写 → 附件上传 → 提交成功
4. `/blog` → 按标签筛选 → 进文章 → 上一篇/下一篇
5. 后台 `/admin` → 登录 → 产品增删改 → 询盘列表
6. 7 种语言的 Header / Footer / 语言切换器
7. `sitemap.xml`、`llms.txt` 可访问
8. 移动端（<1024px）：Hero 不渲染轮播与粒子，布局正常

---

## 七、验收指标

| 指标 | 现状（实测） | 目标 | 测量方式 |
|---|---|---|---|
| LCP（移动 4G） | 待测 | < 2.5s | Lighthouse 移动端模拟 |
| CLS | 待测 | < 0.1 | Lighthouse |
| 首屏 JS+CSS（gzip） | **419.3 KB** | < 250 KB | DevTools Network（禁用缓存）+ gzip |
| 首屏 CSS（gzip） | **151.8 KB** | < 25 KB | 同上 |
| 首屏图片总量 | ~12.4 MB | < 600 KB | DevTools Network → Img |
| 字体请求数（zh） | 多个子集 | 0（或 ≤2） | DevTools Network → Font |
| `/products` 渲染方式 | 每请求 SSR | 静态预渲染 | 检查响应头 `x-nextjs-prerender: 1` |
| 单文件 >300KB 的图片 | 7 个 | 0 | 脚本扫描 |
| `public/` 总体积 | **71 MB** | < 35 MB | `du -sh public` |
| Lighthouse Performance | 待测 | ≥ 85（首页/产品页） | CI 或本地 |

> 建议先把"待测"三项用 Lighthouse 记一份基线，改完再对比，否则无法证明改善幅度。

---

## 八、待你确认的决策点

审阅时请重点拍板下面 5 件事：

1. **Hero 轮播保留几张？** 建议 3 张（现 6 张）。如果业务上 6 张文案都重要，我改成"3 张轮播 + 3 张图片墙"。
2. **中文字体走方案 A（直接去掉 Web 字体）还是方案 B（子集化）？** 建议先 A，看视觉能不能接受。
3. **三个页面的 SSR 退化要不要一起修？** 这是本次审计性价比最高的一项（改 2 个文件的取参位置），但会动到 `/products` 和 `/contact`，属于核心转化路径。建议放在第 2 批。
4. **`public/downloads` 里 3.1MB 的宣传册 PDF 要不要一起压缩？** 它是下载资源、不影响首屏，但影响用户下载体验。可选项。
5. **执行节奏**：分批（推荐，每批单独发版观测）还是一次性全做？

确认后我按批次开工，每批给你一份"改动清单 + 验证结果"。

---

## 附录：本次审计用到的测量方法

| 数据 | 来源 |
|---|---|
| 静态资源体积 | `du -sh public/*`、逐文件 `du -h` |
| 首屏 JS/CSS 清单与体积 | 解析 `.next/server/app/en.html` 里的 `<script src>` / `<link href>`，逐个映射到 `.next/static/` 下的真实文件大小 |
| gzip / brotli 体积 | Node `zlib.gzipSync(level 9)` / `zlib.brotliCompressSync(quality 11)` 对每个文件实测 |
| HTML 成分拆分 | 正则剥离 `<script>` 块，分别统计内联 JS 与 DOM 字节数 |
| @font-face 计数 | 对构建出的 CSS 文件做 `@font-face` / `noto-serif-sc` 字面统计 |
| 预渲染清单 | `.next/prerender-manifest.json` 的 `routes` / `dynamicRoutes` |
| 客户端包体 | `.next/server/chunks/ssr/` 下的分块大小 |
| 字体文件规模 | `node_modules/@fontsource/noto-serif-sc/files/` 计数与 `du` |

> 测量脚本保留在 `.workbuddy/perf/` 下（`analyze.mjs`、`gzip.mjs`、`html.mjs`），可复现。
