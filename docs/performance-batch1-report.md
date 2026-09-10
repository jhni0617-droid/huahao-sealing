# 性能优化 · 第 1 批改动报告

> 版本 v1.0 ｜ 日期 2026-09-10
> 依据文档：`docs/performance-optimization-plan.md`（第 1 批 = P0-1 + P0-2 + P1-3）
> 状态：**已执行完毕，构建验证通过，等你验收**

---

## 〇、一句话结果

首屏 **gzip 传输量从 488 KB 降到 285 KB（↓42%）**，其中 **CSS 从 152 KB 砍到 17 KB（↓89%）**；首屏图片从 **12.4 MB 降到 947 KB（↓92%）**，且首屏实际只请求其中 2 张；构建产物体积从 **71 MB 降到 52 MB**。

| 核心指标 | 改动前 | 改动后 | 变化 |
|---|---|---|---|
| 首屏 CSS（gzip） | 151.8 KB | **17.3 KB** | ↓ 89% |
| 首屏 JS+CSS（gzip） | 419.3 KB | **255.8 KB** | ↓ 39% |
| 首屏 JS+CSS+HTML（gzip） | 488.2 KB | **284.6 KB** | ↓ 42% |
| 首屏 Hero 图片 | 12.4 MB | **947 KB**（首屏只请求 2 张 ≈ 380 KB） | ↓ 92% |
| 构建产物字体文件 | 932 个 / 32 MB | **124 个 / 1.9 MB** | ↓ 94% |
| `public/` 目录 | 71 MB | **52 MB** | ↓ 19 MB |

---

## 一、本批做了什么

| 编号 | 任务 | 状态 | 风险 |
|---|---|---|---|
| P0-2 | 剥离中文字体 Noto Serif SC | ✅ 完成 | 🟡 中（中文标题字形会变） |
| P0-1 | Hero 首屏图片转 WebP + 渐进加载 | ✅ 完成 | 🟡 中（需目视确认画质） |
| P1-3 | 死代码与垃圾文件清理 | ✅ 完成 | 🟢 低 |

**没有做的事**（按计划留给后面批次）：Hero 轮播张数未动（属内容决策）、`/products` 数据剥离、三页面 SSR 修复、全站图片治理、缓存配置。

---

## 二、改动清单（逐文件）

### 2.1 代码改动（2 个文件）

**① `app/[locale]/layout.tsx`** — 删除 4 行字体引入

```diff
- import "@fontsource/noto-serif-sc/500.css"
- import "@fontsource/noto-serif-sc/600.css"
- import "@fontsource/noto-serif-sc/700.css"
- import "@fontsource/noto-serif-sc/900.css"
```

同时补了 4 行注释说明「为什么不要加回来」，防止后人误填。
`app/globals.css` 里的字体栈无需改动 —— 本来就有系统中文衬线兜底：
`"Noto Serif SC", "Songti SC", "STSong", "SimSun", serif`

**② `components/HeroSection.tsx`** — 两处改动

1. 5 个幻灯片背景路径 `.png` → `.webp`
2. 新增**渐进挂载**逻辑（约 25 行）：初始只渲染第 0、1 张，之后每切换一张再挂载新的一张；点击圆点跳转时立即挂载目标张。这样首屏只请求 2 张背景图，不再 6 张同时抢带宽。

### 2.2 资源改动

| 动作 | 对象 | 数量 |
|---|---|---|
| 新增（WebP） | `public/images/hero/*.webp` | 5 个 |
| 删除（已转码 PNG，原图留备份） | `public/images/hero/*.png` | 5 个 |
| 删除（无引用 PNG） | `hero-industrial-plant.png`、`hero-grinding-sparks.png` | 2 个 |
| 删除（无引用图片） | 密封环 / 轴套 / 实拍 目录下的孤儿图 | 26 个 |
| 删除（死组件） | `ClientCarousel` `HeroCarousel` `HeroDynamicContent` `HeroParticles` | 4 个 |
| 删除（垃圾文件） | `components/test-write.txt`、`shot-products-tmp.mjs` | 2 个 |
| 删除（空目录） | `app/{about,applications,cases,contact,faq,products}`、`public/fonts`、`-p/` | 8 个 |

清理后再扫一遍，`public/images` 里**已无早期孤儿**，只剩下面 4 张有意保留的待用素材。

### 2.3 单独说明：孤儿图片的清理与一次误删回滚

清理时按「代码中零引用」判定，共 29 张。脚本执行时**排除条件失效**（清单存的是文件名，而过滤用的是路径），把 4 张 `images/technical/*.png` 一并删了。

- **已全部恢复**，`git status` 对这 4 个文件无任何差异，字节级一致；
- 这 4 张的修改时间是 **2026-09-09**（本批开工前一天），判断是**你有意为新页面准备的素材**，因此最终保留未动。

> 保留清单（共 4.5 MB，仍是 PNG）：`centrifugal-pump-exploded.png`、`gate-valve-exploded.png`、`graphite-seal-ring-application.png`、`mechanical-seal-exploded.png`（均在 `images/technical/`）。
> **建议**：这 4 张若确定要用，转成 WebP 可从 4.5MB 压到约 400KB。等你确认用途后我在第 2 批一起处理。

---

## 三、体积变化（实测）

### 3.1 静态资源

| 目录 | 改动前 | 改动后 | 变化 |
|---|---|---|---|
| `public/images/hero/` | 18 MB | **768 KB** | ↓ 96% |
| `public/images/密封环/` | 1.2 MB | 344 KB | ↓ 71% |
| `public/images/轴套/` | 384 KB | 160 KB | ↓ 58% |
| `public/images/实拍/` | 1.3 MB | 364 KB | ↓ 72% |
| `public/images/` 合计 | 53 MB | **34 MB** | ↓ 36% |
| `public/` 合计 | **71 MB** | **52 MB** | **↓ 19 MB** |

### 3.2 首屏 Hero 图片

| 文件 | 改动前 | 改动后 | 降幅 |
|---|---|---|---|
| hero-vintage-workshop | 2.59 MB | 179 KB | 93% |
| hero-cnc-machining-dark | 2.42 MB | 130 KB | 95% |
| hero-graphite-rings-dramatic | 2.49 MB | 144 KB | 94% |
| hero-polishing-machine | 2.29 MB | 113 KB | 95% |
| hero-global-map | 2.47 MB | 185 KB | 93% |
| IMG_20260517_193309（原有 webp） | 196 KB | 196 KB | — |
| **合计** | **12.4 MB** | **947 KB** | **↓ 92%** |

再加上渐进挂载，**首屏实际只请求前 2 张 ≈ 380 KB**（原来 6 张全下）。

### 3.3 字体（独立核验，与构建产物互相印证）

直接统计 `node_modules` 里 fontsource 的 CSS 声明条数，不依赖构建：

| 指标 | 改动前 | 改动后 | 变化 |
|---|---|---|---|
| `@font-face` 声明条数 | **466 条** | **62 条** | ↓ 87% |
| 字体文件引用处数 | **932 处** | **124 处** | ↓ 87% |
| 字体声明占用的 CSS 文本 | ~439 KB | ~26 KB | ↓ 94% |
| 具体来源 | Noto Serif SC 404 条 + 其他 62 条 | 仅其他 62 条 | Noto 全部移除 |

> **交叉印证**：改动前构建产物 `.next/static/media` 里恰好是 **932 个文件、其中 808 个是 noto-serif-sc** —— 与上表「932 处引用」完全吻合，说明这条独立统计口径可靠。
> 构建后实测：`.next/static/media` 从 **932 个文件 / 32 MB** 降到 **124 个文件 / 1.9 MB**，与上表的 124 处引用**数字完全对上**。

对应的首屏 CSS 变化：原本 4 个 99.2KB 的 CSS 文件（各含 101 条 Noto 声明，合计 397KB 原始 / 135KB gzip）不再产生。**实测首屏 CSS 从 gzip 151.8KB 降到 17.3KB，比预估的 20KB 还好一点。**

---

## 四、代码质量校验

| 检查项 | 结果 |
|---|---|
| TypeScript `tsc --noEmit` | ✅ 0 错误 |
| ESLint（本次改动的 2 个文件） | ✅ 0 错误 0 警告 |
| ESLint（全仓库） | ⚠️ 133 个问题（93 错误 / 40 警告），**全部为既有问题**，集中在 `scripts/`、`lib/ip-geolocation.ts` 等未改动文件，本次未新增 |
| 生产构建 | ✅ 完整跑通，`EXIT=0`，140 个静态页全部生成，无报错（详见第五节） |

> 过程中 ESLint 抓到我自己引入的一个真实反模式（`useEffect` 内同步 `setState` → 级联渲染），已重构为「在定时器回调与点击回调里更新状态」，现在干净。

---

## 五、构建实测（本轮验证）

构建已**完整跑通**：`✓ Compiled successfully in 39.3s` → `✓ Generating static pages (140/140)` → `EXIT=0`，无报错。

### 5.1 首页首屏资源（gzip，逐文件实测）

| 类别 | 改动前 | 改动后 | 变化 |
|---|---|---|---|
| **CSS** | 496.9 KB raw / **151.8 KB gzip** / 92.0 KB br | 104.3 KB raw / **17.3 KB gzip** / 14.0 KB br | **↓ 89%** |
| **JS** | 832.9 KB raw / **267.5 KB gzip** / 228.3 KB br | 771.4 KB raw / **238.5 KB gzip** / 206.1 KB br | ↓ 11% |
| **HTML** | 308.9 KB raw / **68.9 KB gzip** | 189.7 KB raw / **28.8 KB gzip** | ↓ 58% |
| **首屏 JS+CSS** | 1.30 MB raw / **419.3 KB gzip** | 875.8 KB raw / **255.8 KB gzip** | **↓ 39%** |
| **首屏 JS+CSS+HTML** | 1.61 MB raw / **488.2 KB gzip** | 1.07 MB raw / **284.6 KB gzip** | **↓ 42%** |

CSS 文件数从 **6 个降到 2 个**（原来 4 个各 99.2KB 的字体 CSS 全部消失）。

### 5.2 构建产物

| 指标 | 改动前 | 改动后 | 变化 |
|---|---|---|---|
| `.next/static/media` 文件数 | 932 | **124** | ↓ 87% |
| 其中 noto-serif-sc | 808 | **0** | 归零 |
| `.next/static/media` 体积 | 32 MB | **1.9 MB** | **↓ 94%** |

### 5.3 渐进挂载已在服务端生效（HTML 层核对）

在新构建的 `en.html` 里检索首屏图片路径，**只出现 `hero-vintage-workshop` 与 `IMG_20260517_193309` 两张**。也就是说其余 4 张幻灯片在服务端就不渲染、浏览器首屏也不会请求——这正是渐进挂载的预期行为，不是"没生效"。

> 说明：HTML 从 309KB 降到 190KB 主要来自「服务端只渲染 2 个 Hero 图层（原 6 个）」及其连带的 RSC 载荷减少。HTML 不是本批的主要优化目标，这个降幅属于附带收益。

### 5.4 顺带复核：三个页面的 SSR 退化仍然存在

| 页面 | 构建产物类型 |
|---|---|
| `/en`、`/en/about`、`/en/factory`、`/en/faq` | ● SSG 已预渲染 |
| `/en/products` | ƒ **Dynamic（每请求 SSR）** |
| `/en/blog` | ƒ **Dynamic（每请求 SSR）** |
| `/en/contact` | ƒ **Dynamic（每请求 SSR）** |

与审计文档 §2.5 的判断一致，等第 2 批修。

---

## 六、需要你现在验证的 3 件事

由于有两处属于「必须眼见为实」，请你在本地跑一下 `npm run dev`（端口 3005）确认：

1. **中文标题字形**
   打开 `/zh` 首页与 `/zh/factory`，看标题是否从「思源宋体」变成系统宋体。
   —— 若不能接受，我改用方案 B（子集化，只保留站内实际用到的汉字），中文页字体仍可控制在 100KB 左右。

2. **Hero 首屏画质**
   首页首屏 6 张轮播逐张看一遍，重点看是否偏糊、是否有色带。
   —— 原图已备份在 `backup-original-images/hero-png-source/`，随时可回滚重压（提高 quality 到 90 即可）。

3. **Hero 渐进加载行为**
   在首屏停留 40 秒，确认 6 张轮播切换时**不出现空白或半透明未加载**；再点几个圆点跳转试试。

---

## 七、回滚方式

本批改动**全部可回滚**，三重保险：

| 方式 | 命令 / 位置 |
|---|---|
| Git（推荐） | `git checkout -- .` 回到 `18cf7ef` |
| 资源备份 | `backup-original-images/hero-png-source/`（5 张原 PNG） |
| 删除项备份 | `.workbuddy/removed-backup/`（组件、垃圾文件、孤儿图） |

> 注意：`.workbuddy/` 目录不在 git 里，属于本地备份，别清理它。

---

## 八、下一批建议

第 2 批（原计划）内容与优先级建议：

| 顺序 | 任务 | 价值 | 风险 |
|---|---|---|---|
| 1 | **三页面恢复静态预渲染**（`/products` `/blog` `/contact`） | TTFB + Vercel 成本，性价比最高 | 🟡 中 |
| 2 | `/products` 剥离全语言产品数据 | 首屏 JS -250KB | 🔴 高 |
| 3 | **`images/factory`（20MB）转 WebP** | 首页图片再省 ~6.7MB | 🟢 低 |
| 4 | `images/applications`（5.6MB）转 WebP | 再省 ~4MB | 🟢 低 |
| 5 | `images/technical` 那 4 张待用插画转 WebP | 4.5MB → ~400KB | 🟢 低 |

### 本轮顺带发现的新问题（建议并入第 2 批）

清理后再跑一次首屏资源实测，首页**下方（非首屏）图片里仍有 6.73MB 是 PNG**：

```
首屏图片源文件体积: webp=1.29MB  png=6.73MB
  /images/factory/workshop-overview.png      1.9MB
  /images/factory/cnc-turning-graphite.png   1.7MB
  /images/factory/factory-aerial-2021.png    1.9MB
  /images/factory/company-plaque-2018.png    1.5MB
  ...
```

也就是说 Hero 修好了之后，**图片这块的重心已经转移到 `/images/factory/`（20MB 全是 PNG）**。这些图在首页「工厂与质量」区块和 `/factory` 页出现，滚动到时才会加载，但它们同样是滚动体验的瓶颈，且原图越大、Vercel 图片优化器冷启动越慢。

**建议**：第 2 批把 `images/factory/` 一并转 WebP（20MB → 约 1.5MB），和上面第 3 项合并做。

要开第 2 批请回一句「开第 2 批」；若想先调整顺序或只做其中一项，直接说编号即可。

---

## 九、可复用的测量脚本

本轮的测量脚本已固化成技能 `nextjs-perf-audit`，以后任何 Next.js 站点都能直接复用：

| 脚本 | 作用 |
|---|---|
| `measure-page.mjs` | 逐文件实测某页首屏 JS/CSS/HTML 的 raw·gzip·brotli 体积，并列出首屏图片及其源文件体积 |
| `font-audit.mjs` | 统计字体 `@font-face` 条数、文件引用数、CSS 文本体积，并与构建产物自动对账 |
| `find-orphans.mjs` | 扫描 `public/` 下零引用的孤儿资源，**按修改时间区分「疑似待用素材」和「可删旧文件」** |
| `convert-images.mjs` | PNG/JPG 批量转 WebP（默认 dry-run，`--write` 才执行，自动备份原图） |
| `hero-progressive-mount.tsx` | 轮播大图渐进挂载的参考实现（含本次踩到的 `setState` 反模式规避写法） |

存放位置：`~/.workbuddy/skills/nextjs-perf-audit/`
