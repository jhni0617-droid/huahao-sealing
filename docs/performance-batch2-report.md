# 性能优化 · 第 2 批改动报告

> 版本 v1.0 ｜ 日期 2026-09-10
> 依据文档：`docs/performance-optimization-plan.md`（第 2 批 = P1-1 三页面静态化 + P0-3 数据剥离 + P1-2 图片治理）
> 状态：**已执行完毕，构建验证通过，等你验收**

---

## 〇、一句话结果

**`/products` 和 `/contact` 从「每请求 SSR」恢复成静态预渲染**（静态路由 107 → 121 条）；`/products` 不再把 7 种语言的产品数据下载到浏览器（客户端脚本里已彻底没有该模块）；图片资源 **`public/` 从 52MB 降到 27MB**。

| 核心指标 | 本批前 | 本批后 | 变化 |
|---|---|---|---|
| `/products` 渲染方式 | ƒ 每请求 SSR | ✅ **静态预渲染** | 消除 SSR 退化 |
| `/contact` 渲染方式 | ƒ 每请求 SSR | ✅ **静态预渲染** | 消除 SSR 退化 |
| 静态预渲染路由数 | 107 | **121** | +14（7 语言 × 2 页） |
| `/products` 客户端产品数据 | 318 KB raw / 60.7 KB gzip | **0**（仅走服务端） | 归零 |
| `products-content` 分块 | 304 KB | **28 KB** | ↓ 91% |
| `public/` 总体积 | 52 MB | **27 MB** | ↓ 25 MB（↓48%） |
| `public/images/` | 34 MB | **8.8 MB** | ↓ 74% |

> 累计（含第 1 批）：`public/` 从最初的 **71 MB → 27 MB**，降幅 **62%**。

---

## 一、本批做了什么

| 编号 | 任务 | 状态 | 风险 |
|---|---|---|---|
| P1-1 | 让 `/products`、`/contact` 回到静态预渲染 | ✅ 完成 | 🟡 中 |
| P0-3 | `/products` 剥离全语言产品数据 | ✅ 完成 | 🔴 高 |
| P1-2 | 图片资产治理（factory / applications / technical 转 WebP） | ✅ 完成 | 🟢 低 |

**没有做的事**：
- `/blog` 仍为 SSR —— 它的标签筛选由服务端渲染列表，改造面较大、收益相对小，按原计划保留（有 Cloudflare 兜底）。
- Hero 轮播张数仍是 6 张（内容决策，等你定）。
- 第 3、4 批（字体工程化、缓存配置落代码、CI 性能门禁）未动。

---

## 二、改动清单

### 2.1 代码改动（新增 1 个文件，修改 11 个文件）

**① 新增 `lib/products-page-data.ts`** —— 服务端取数模块

导出 `getProductsPageData(locale)`，只返回**当前语言**的分类、全部产品、按分类预分组的产品。这是本次最大的结构性改动：数据从「客户端组件静态 import」改为「服务端取好当 props 传下去」。
文件顶部写了醒目注释：本文件只应被服务端组件引用。

**② `app/[locale]/products/page.tsx`** —— 去掉 searchParams，加 Suspense

```diff
- export default async function ProductsPage({ params, searchParams }) {
-   const { category } = (await searchParams) ?? {}
+ export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
+   const data = getProductsPageData(locale)
    return (
-     <ProductsPageContent initialCategory={category} />
+     <Suspense fallback={<ProductsFallback />}>
+       <ProductsPageContent {...data} />
+     </Suspense>
    )
```
另外加了一个骨架 `ProductsFallback`，避免 Suspense 期间布局跳动。

**③ `app/[locale]/products/products-content.tsx`** —— 剥离数据依赖 + 客户端读参

```diff
- import { getProductsByCategory } from "@/lib/products"
- import { getEnProductsByCategory } from "@/lib/products-en"
- import { productsByLocale, categoriesByLocale, getViProductsByCategory, ... } from "@/lib/translations-products"
+ // 只保留类型与轻量工具；产品数据一律由服务端按语言取好后经 props 传入。
+ import type { ProductsPageData } from "@/lib/products-page-data"
```

同时：
- 组件拆成两层：外层 `ProductsPageContent` 只用 `useSearchParams()` 读 `?category=`，内层 `ProductsDirectory` 接 props。
- 内层用 **`key={initialCategory}` 强制重挂载**来让筛选状态跟随 URL 变化（覆盖浏览器前进/后退），替代了原先「在 effect 里 setState 同步」的写法。
- 修正了一个存量的依赖数组缺项（`useMemo` 缺 `locale`）。

**④ `app/[locale]/contact/page.tsx` + `components/ContactForm.tsx`** —— 同样手法

- 页面：去掉 `searchParams`，把 `<ContactForm />` 包进 `<Suspense>`。
- 表单：`const defaultProduct = searchParams.get("product") ?? defaultProductProp`，props 入口保留备用。

**⑤ 图片路径更新（5 个文件）**

`app/[locale]/factory/page.tsx`、`components/FactoryQuality.tsx`、`app/[locale]/blog/page.tsx`、`components/NewsSection.tsx`、`app/[locale]/applications/page.tsx` 里的 `.png` / `.jpg` 引用统一改为 `.webp`，共 32 处。

### 2.2 资源改动

| 目录 | 本批前 | 本批后 | 降幅 |
|---|---|---|---|
| `public/images/factory/` | 20 MB | **1.4 MB** | ↓ 93% |
| `public/images/applications/` | 5.6 MB | **2.7 MB** | ↓ 52% |
| `public/images/technical/` | 4.4 MB | **324 KB** | ↓ 93% |
| **合计** | **30 MB** | **4.4 MB** | **↓ 25.6 MB** |

原图全部备份在 `backup-original-images/{factory,applications,technical}/`。

---

## 三、过程中发现并修复的两个问题（如实说明）

### 3.1 ⚠️ 文件名碰撞导致一张图被覆盖（已修复）

`public/images/factory/` 下原本同时存在 **两张不同的图**：

| 文件 | 尺寸 | 用途 |
|---|---|---|
| `packing-shipment.webp` | 1536×1024 | 「出口木箱包装发货」 |
| `packing-shipment.png` | 1024×1024 | 「木箱包装发货」 |

批量转码时 `packing-shipment.png` 的输出路径正好是 `packing-shipment.webp`，**把原 webp 覆盖了**。后果有两个：
1. 原图内容丢失 —— **已从 git 完整取回**并重新压缩；
2. 代码里 `galleryLabels` 出现重复对象键，TypeScript 直接报错 `TS1117`（`tsc` 拦住了，没进构建）。

**修复方式**：把 PNG 转出的那张改成独立文件名 `packing-wooden-case.webp`，`gallery` 数组与 `galleryLabels` 各自指向正确的图。

> 这两张图现在都保留了，各自的文案也没丢。另外我全目录扫了一遍同类碰撞（`ls | sed | uniq -d`），**只有这一处**。

### 3.2 ⚠️ 4 张待用素材已转为 WebP（需你知悉）

`public/images/technical/` 下 4 张（9 月 9 日生成、目前未接入任何页面）也一并转了 WebP：

```
graphite-seal-ring-application  .png → .webp   1343KB → 114KB
centrifugal-pump-exploded       .png → .webp   1075KB →  78KB
mechanical-seal-exploded        .png → .webp   1040KB →  61KB
gate-valve-exploded             .png → .webp    979KB →  58KB
```

**如果你之后要把它们接到页面上，请用 `.webp` 后缀**（原 PNG 在 `backup-original-images/technical/`）。
若你更希望它们保持 PNG 原样、不进 public，说一声我还原即可。

---

## 四、代码质量校验

| 检查项 | 结果 |
|---|---|
| TypeScript `tsc --noEmit` | ✅ 0 错误（过程中拦下了 3.1 的重复键问题） |
| ESLint（本批改动的 11 个文件） | ✅ **0 错误**；2 个 warning 均为存量（`applications/page.tsx` 的未用 `getLocale`、`factory/page.tsx` 的未用 `num`），与本次改动无关 |
| ESLint 历史遗留问题对比 | 改动前基线已存在同类问题（已用 `git show HEAD:` 逐文件比对确认，未新增） |
| 生产构建 | ✅ `EXIT=0`，140 个静态页全部生成 |

---

## 五、构建实测

```
✓ Compiled successfully in 42s
  Finished TypeScript in 14.5s
✓ Generating static pages using 11 workers (140/140)
EXIT=0
```

### 5.1 关键目标达成核对

| 页面 | 本批前 | 本批后 |
|---|---|---|
| `/en`、`/en/about`、`/en/factory` | ✅ 静态 | ✅ 静态 |
| **`/en/products`** | ❌ 每请求 SSR | ✅ **静态预渲染** |
| **`/en/contact`** | ❌ 每请求 SSR | ✅ **静态预渲染** |
| `/en/blog` | ❌ 每请求 SSR | ❌ 仍为 SSR（本批有意保留） |

预渲染 HTML 产物数量：**105 → 119 个**（正好多出 7 语言 × 2 页）。
静态路由总数：**107 → 121 条**。

### 5.2 `/products` 客户端包剥离验证（三重核对）

1. **分块体积**：`app_[locale]_products_products-content_tsx` 从 **304 KB → 28 KB**
2. **客户端是否还会下载数据模块**：检索 `en/products.html` 里全部 `<script src>`（13 个），**没有任何一个指向 `translations-products`** —— 确认该模块只在服务端使用
3. **数据模块体积**（原本要被客户端下载的量）：

| 模块 | raw | gzip |
|---|---|---|
| `lib/translations-products.ts` | 230 KB | 42.5 KB |
| `lib/products.ts` | 41 KB | 9.3 KB |
| `lib/products-en.ts` | 47 KB | 9.0 KB |
| **合计** | **318 KB** | **60.7 KB** |

### 5.3 各页首屏资源（gzip，逐文件实测）

| 页面 | 首屏 JS | 首屏 CSS | JS+CSS | HTML | 首屏图片源文件 |
|---|---|---|---|---|---|
| `/en` 首页 | 238.5 KB | 17.3 KB | **255.8 KB** | 28.8 KB | 1.78 MB（全 WebP） |
| `/en/products` | 239.6 KB | 17.3 KB | **256.9 KB** | 24.5 KB | 0.04 MB |
| `/en/contact` | 232.2 KB | 17.3 KB | **249.5 KB** | 17.5 KB | 0.23 MB |
| `/en/factory` | 229.8 KB | 17.3 KB | **247.2 KB** | 22.9 KB | 1.81 MB（全 WebP） |

> 首页下方图片源文件：本批前 **8.02 MB（其中 6.73MB 是 PNG）→ 本批后 1.78 MB**，全部为 WebP。

### 5.4 构建产物字体（第 1 批成果保持）

`.next/static/media` 仍是 **124 个文件 / 1.9 MB**（原本 932 个 / 32 MB），无回退。

---

## 六、需要你验证的事项

### 必须目视验证

1. **`/products` 页（重点）**
   - 各语言都要点：打开 `/zh/products`、`/en/products`
   - 分类筛选：点分类横向筛选条，确认列表跟着变
   - 搜索框：输入关键词（如 `108`、`石墨`），确认过滤正常
   - 带参直达：`/zh/products?category=seal-rings`，确认加载后自动选中该分类
   - 锚点直达：`/zh/products#seal-rings`，确认同样生效
   - 浏览器**前进/后退**：切几次分类再后退，确认筛选状态正确回退
2. **`/contact` 页**
   - 正常提交一次询盘（或至少走完表单校验），确认提交成功
   - 带参直达：`/zh/contact?product=碳石墨密封环`，提交后确认后台收到的记录里带上了这个产品名
3. **图片画质**（factory / applications 两处共 20 张）
   - `/factory` 页的车间轮播、`/applications` 页的行业图片
   - 重点看是否偏糊、有没有色带
   - 原图均在 `backup-original-images/`，可回滚重压

### 快速自查命令（可选）

```bash
curl -sI https://huahaoindustrial.com/zh/products | grep -i x-nextjs-prerender
# 期望出现 x-nextjs-prerender: 1（说明是静态预渲染，不再是每请求 SSR）
```

---

## 七、回滚方式

| 方式 | 说明 |
|---|---|
| Git（推荐） | `git checkout -- .` 回到 `18cf7ef`（第 1、2 批改动都在工作区，未提交） |
| 图片原图 | `backup-original-images/factory/`、`applications/`、`technical/`、`hero-png-source/` |
| 删除项备份 | `.workbuddy/removed-backup/`（死组件、垃圾文件、孤儿图） |

> 注意：`.workbuddy/` 不在 git 里，属本地备份，别清理。第 1、2 批的改动**都还没提交**，要不要我提交由你定。

---

## 八、下一批建议

| 顺序 | 任务 | 价值 | 风险 |
|---|---|---|---|
| 1 | **`/blog` 也恢复静态预渲染** | 补齐最后一个 SSR 退化页 | 🟡 中 |
| 2 | 首页博客数据链路按需取数（`NewsSection` 只取 3 条置顶） | 构建/冷启动更快 | 🟢 低 |
| 3 | 字体引入迁移到 `next/font`（可选，取决于中文字形验收结果） | 进一步规范 + 去掉字体声明块 | 🟡 中 |
| 4 | HTML 缓存策略落到 `vercel.json` | TTFB 有代码保障，不再依赖人工配 Cloudflare | 🔴 高 |
| 5 | 接入 bundle 分析 + CI 性能门禁 + Web Vitals | 防复发 | 🟢 低 |

**建议顺序**：先做 1、2（同属「剩余 SSR 与构建优化」，风险可控），再单独做 4（缓存配置改错会导致多语言串台，要单独发版观测）。

要开第 3 批请回一句；只想做其中某一项，说编号即可。

---

## 附：本批新增的可复用能力

`nextjs-perf-audit` 技能（`~/.workbuddy/skills/nextjs-perf-audit/`）在本批补充了两条实战经验：

- `convert-images.mjs` 支持对**已存在但压缩不足的 .webp 原地重压缩**（factory 里 4 个 1.5MB 的 webp 就是这么处理的：→ 94–135KB）
- 脚本修正了 Windows 下 `sharp` 持有文件句柄导致的写入/删除失败（改为先读 Buffer 再编码）
- `SKILL.md` 陷阱清单新增：**同名不同扩展名碰撞检测**、**`useSearchParams` 必须配 `<Suspense>`**、**prop 变化重置 state 用 `key` 而非 effect**
