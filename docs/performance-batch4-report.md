# 性能优化 · 第 4 批改动报告（收尾）

> 版本 v1.0 ｜ 日期 2026-09-10
> 依据文档：`docs/performance-optimization-plan.md`（第 4 批 = CI 性能门禁 + 缓存落配置 + Web Vitals）
> 状态：**已执行完毕，构建验证通过，等你验收**

---

## 〇、一句话结果

**性能回归从此有自动守门**（`npm run perf`，11 项预算检查）；**缓存这块推翻了原方案的错误假设**——实测发现按原计划改 `vercel.json` 会把 Vercel 边缘缓存从 1 年砍到 5 分钟，是倒退，因此只补了两处真实缺口；**真实用户性能指标接入完成**，后台首页可直接看 p75。

| 项 | 结果 |
|---|---|
| CI 性能门禁 | ✅ 新增 `scripts/perf-budget.mjs`（11 项检查全绿）+ `npm run perf / verify` |
| 缓存规则 | ✅ 实证后补 `/`、`/admin/*`、`/api/*` 的显式不缓存（**避免了一次会倒退的改动**） |
| Web Vitals | ✅ 端到端接入（表 + 接口 + 上报 + 后台 p75 卡片） |
| 缓存文档 | ✅ 更正 3 处过时/错误表述 |

---

## 一、最重要的一件事：原方案关于缓存的判断是错的

我在审计文档 §P2-2 里写的方案是「在 `vercel.json` 为 7 个语言前缀显式声明 `s-maxage=300`」。**实测后推翻了它。**

### 实测过程

起生产服务器（`next start`）逐个路径量真实响应头，结果：

| 路径 | 源站实际返回 |
|---|---|
| `/en`、`/zh`、`/en/products`、`/en/blog`、`/en/contact`、`/en/factory` | `Cache-Control: s-maxage=31536000` |
| `/en/blog/{slug}`（ISR） | `Cache-Control: s-maxage=86400, stale-while-revalidate=31449600` |
| `/`（307 语言跳转） | **没有任何 Cache-Control** ⚠️ |
| `/admin/inquiries` 等（动态） | `private, no-cache, no-store, max-age=0, must-revalidate` |
| `/_next/image` | `public, max-age=31536000, must-revalidate`（实测 AVIF 比 JPEG 小 31%） |

### 结论：原方案会倒退

Next 已经给静态页设了 **1 年**的 Vercel 边缘缓存（靠部署换 BUILD_ID 失效）。如果我按原方案改成 `s-maxage=300`，Vercel 的边缘缓存效率会**降低约 1000 倍**。

Cloudflare 那一层的 300s 是**另一层**缓存，由 Cloudflare 的 Cache Rule 单独控制（`docs/cloudflare-cache-setup.md` 里已有配置），跟源站的 `s-maxage` 不冲突——那份文档本来就教 Cloudflare「忽略源站 cache-control，用 300s」。

### 真正的缺口只有两处（已修）

1. **`/` 的 307 跳转没有任何缓存头。** 现状安全（Cloudflare 默认不缓存 307，且响应带 `Set-Cookie`），但这依赖默认行为而非显式声明。一旦有人开启泛化的 Cache Everything，就可能缓存这个跳转 —— **所有语言的访客都会被送到第一个访问者的语言**，正是那份文档警告过的事故。已显式声明 `private, no-store, max-age=0`。
2. **`/admin/*`、`/api/*` 没有显式不缓存声明。** 目前靠 Next 对 `force-dynamic` 页自动设置 + 人为遵守「不缓存」约定。已显式声明，作为误配置时的兜底。

> 教训：**配置类改动尤其要先量再改**。这次的实测直接避免了一次性能倒退。

---

## 二、改动清单

### 2.1 新增文件（3 个）

**① `scripts/perf-budget.mjs`** —— 首屏性能预算门禁

构建后运行，超预算即非 0 退出，可直接接 CI。检查 5 类共 11 项：

| 类别 | 检查内容 | 当前预算 |
|---|---|---|
| `page` | 6 个核心页的首屏 JS+CSS gzip；同时校验它们**确实有预渲染 HTML**（防止又退化成 SSR） | 300 KB |
| `image` | `public/images` 下每张图体积（超限才逐条列出，避免 100+ 行流水账） | 350 KB |
| `font` | 构建产物字体文件数与总体积 | 200 个 / 6 MB |
| `public` | `public/` 总体积 | 40 MB |
| `leak` | 扫所有客户端脚本，看是否又混进了 `translations-products`、`blog-data-` 等**已知大数据模块** | 0 |

最后一项是专门防「第 2 批修过的问题复发」——比体积阈值更精准。

**② `app/api/vitals/route.ts`** —— Web Vitals 上报接口

指标白名单（LCP/CLS/INP/FCP/TTFB/FID）+ 数值上下界校验（超范围当脏数据丢弃，避免污染 p75）。失败时**仍然返回 200**，因为性能上报绝不能影响用户浏览。

**③ `components/WebVitalsReporter.tsx`** —— 客户端上报

用 `useReportWebVitals`，通过 `navigator.sendBeacon` 上报（页面卸载时也能发出）。CLS/INP 是「生命周期内持续累积」的指标，早发会拿到未收敛的值，所以 beacon 是正确选择。按 viewport 宽度粗分 mobile/tablet/desktop，便于在后台区分端型。

### 2.2 修改文件（4 个）

**① `vercel.json`** —— 新增 4 条不缓存规则（见上）

**② `lib/admin/db.ts`** —— 新增 `web_vitals` 表

**两处 schema 都加了**（本地 better-sqlite3 版 + Turso/libSQL 版），因为项目两套都维护。同时加了 `(metric, created_at)` 联合索引。

**③ `app/admin/page.tsx`** —— 后台首页新增「真实用户性能（近 7 天 p75）」区块

用「排序 + OFFSET」算精确 p75（SQLite 没有 percentile 函数）；时间下界在 JS 里算好当参数传，避免依赖 SQLite 日期函数（Turso 兼容性更稳）。按 Google 的 Core Web Vitals 阈值标注「良好 / 需改进 / 较差」。

**样本少于 20 条时显示提示而不是数字** —— p75 需要几十条样本才稳定，样本不足时给假数字比不给更糟，会误导决策。

**④ `package.json`** —— 新增脚本

```
npm run typecheck   # tsc --noEmit
npm run perf        # 性能预算门禁（需先 build）
npm run perf:json   # 同上，JSON 输出供 CI 采集
npm run verify      # typecheck + lint + build + perf 一条龙
```

**⑤ `app/[locale]/layout.tsx`** —— 挂载 `<WebVitalsReporter />`

### 2.3 文档更正（`docs/cloudflare-cache-setup.md`）

| 原文 | 更正 |
|---|---|
| 「全站是 SSG/ISR 预渲染」 | 写那份文档时**并不成立**（3 个页面是 SSR）；经第 2、3 批优化后现在才真正成立 |
| 「移动端首屏约减少 160KB 传输」 | 实测降幅约 **40%**（gzip 488KB → 285KB），远大于 160KB |
| 关联改动里提到 `HeroDynamicContent.tsx` | 该组件已在第 1 批作为死代码删除 |

另新增两节：「源站实际发出的缓存头（实测）」与「`vercel.json` 已声明的不缓存规则」。

---

## 三、代码质量校验

| 检查项 | 结果 |
|---|---|
| TypeScript `tsc --noEmit` | ✅ 0 错误 |
| ESLint（本批改动的 7 个文件） | ✅ 0 错误 0 警告 |
| ESLint 技术债对比 | `app/admin/page.tsx` 的 `no-explicit-any` 报错数：基线 23 → 现在 **23**（先写了 2 处 `as any`，已改成精确类型，**未新增技术债**） |
| 生产构建 | ✅ `EXIT=0`，141 个页面全部生成 |
| 性能预算门禁 | ✅ 11 项全绿 |

---

## 四、构建与门禁实测

```
✓ Compiled successfully in 29.4s
  Finished TypeScript in 8.2s
✓ Generating static pages using 11 workers (141/141)
```

```
首屏性能预算门禁
────────────────────────────────────────────────────────────────────────────────
✓ page         en.html                                              259.6/300KB
✓ page         zh.html                                              259.6/300KB
✓ page         en/products.html                                     260.6/300KB
✓ page         en/blog.html                                         254.0/300KB
✓ page         en/contact.html                                      253.3/300KB
✓ page         en/factory.html                                      250.9/300KB
✓ image        92 张图片全部在限内（最大：applications/mining-metallurgy.webp 323.7KB） 323.7/350KB
✓ font         .next/static/media 文件数：124                          124.0/200KB
✓ font         .next/static/media 总体积                              1651.3/6144KB
✓ public       public/ 总体积                                         26276.4/40960KB
✓ leak         客户端脚本里未发现已知大数据模块                             0.0
────────────────────────────────────────────────────────────────────────────────
✓ 全部通过（11 项）
```

### 需要如实说明的一处代价

**首屏 JS+CSS 从 255.9KB 涨到 259.6KB（+3.7KB gzip）。**

这是接入 Web Vitals 上报（`next/web-vitals` 库 + 上报组件）的成本。我认为这笔交换值得：
- 构建期门禁只能守「打包体积」，守不住「真机上变慢」（主线程阻塞、图片尺寸算错、第三方脚本拖慢）；
- 3.7KB 占当前首屏的 1.4%，而它能换来真实设备上的 LCP/CLS/INP 数据。

若你认为不划算，把 `app/[locale]/layout.tsx` 里的 `<WebVitalsReporter />` 去掉即可，其余改动不受影响。

---

## 五、Web Vitals 的测试结果（含一处无法验证的说明）

### 已验证 ✅

| 测试 | 结果 |
|---|---|
| 合法上报（LCP，含小数） | 返回 200 |
| CLS 小数（0.0423） | 返回 200 |
| 非法指标名（`HACK`） | 返回 **400** |
| 超出合理范围的数值（99999999） | 返回 **400** |
| 数据库不可达时的行为 | 捕获异常、记日志（`[vitals] error: fetch failed`）、**仍返回 200** —— 符合「性能上报不能影响用户浏览」的设计 |

### 无法在本机验证 ❌

**数据是否真正落库，我没能验证。** 原因是这台机器连不上 Turso：

```
huahao-admin-jhni0617-droid.aws-ap-northeast-1.turso.io:443  → 连接超时（DNS 解析正常）
```

项目实际连的是 Turso 云数据库（`.env.local` 里有 `TURSO_DB_URL`），而该域名从当前网络 443 端口不可达（GitHub 等其他站点正常可达，说明是这台机器/这段网络到 AWS 东京的路由问题，不是普遍断网）。实测一次上报耗时 **10.7 秒**，正好是 10 秒连接超时。

**顺带一个好消息**：这意味着我的接口测试**没有往生产库写入任何测试数据**，不需要清理（我原本准备了一个清理脚本，确认后删掉了）。

**建议你这样验证落库**：部署后在浏览器打开站点的任意页面，停留 10 秒以上，然后在后台首页看「真实用户性能」区块 —— 如果样本数在增长，就说明链路通了。或直接在 Turso 控制台查：

```sql
SELECT metric, COUNT(*) AS n FROM web_vitals GROUP BY metric;
```

> 接口结构与 `/api/event`（生产环境已在正常写库）完全一致，所以逻辑上没问题，但我不能声称「已验证落库」。

---

## 六、需要你验证的事项

1. **部署后确认 Web Vitals 链路**（见上，重点）
2. **部署后确认缓存规则生效**：
   ```bash
   curl -sI https://huahaoindustrial.com/ | grep -i cache-control
   # 期望: cache-control: private, no-store, max-age=0
   curl -sI https://huahaoindustrial.com/zh/products | grep -i x-nextjs-prerender
   # 期望: x-nextjs-prerender: 1
   ```
3. **后台首页**：确认新增的「真实用户性能」区块正常显示（样本不足时应显示提示而非数字）
4. 前三批的验收项若还没做，建议一并看：中文标题字形、Hero 画质、`/products` 筛选与前进后退、`/blog` 的 `?tag=` 筛选

---

## 七、回滚方式

| 方式 | 说明 |
|---|---|
| Git | `git checkout -- .` 回到 `18cf7ef`（**四批改动全部还在工作区，未提交**） |
| 单项回滚 | 去掉 `<WebVitalsReporter />` 即撤销 Web Vitals（其余不受影响）；`vercel.json`、`package.json` 可直接 checkout |

> ⚠️ 提醒：四批改动累计已到 **20 改 / 58 删 / 37 新增**，全部未提交。这个体量一旦误操作很难回退。**强烈建议现在至少分段提交一次**（建议拆成 4 个 commit 对应 4 批）。要不要我提交由你定。

---

## 八、四批总账

| 指标 | 优化前 | 现在 | 变化 |
|---|---|---|---|
| 首屏 CSS（gzip） | 151.8 KB | **17.3 KB** | ↓ 89% |
| 首屏 JS+CSS（gzip） | 419.3 KB | **259.6 KB** | ↓ 38% |
| 首屏 JS+CSS+HTML（gzip） | 488.2 KB | ~288 KB | ↓ 41% |
| 首页首屏图片（源文件） | 12.4 MB（5 张 PNG） | **947 KB**（WebP，首屏只请求 2 张） | ↓ 92% |
| `public/` 总体积 | 71 MB | **26 MB** | ↓ 63% |
| 静态预渲染路由 | 107 条 | **128 条** | +21 |
| 构建产物字体 | 932 个 / 32 MB | **124 个 / 1.6 MB** | ↓ 94% |
| 每请求 SSR 的公开页 | 3 个（`/products` `/blog` `/contact`） | **0 个** | 全部静态化 |
| 客户端违规加载的数据模块 | 3 个（产品/博客/首页博客数据） | **0 个** | 有门禁守住 |

**剩余可选项**（都不急）：
- 字体引入迁移到 `next/font` —— 等你对中文标题字形的验收结论
- `/blog` 标签筛选改为独立路径路由（SEO 收益，但会改变 URL 结构，需你确认）
- 后台补一个 Web Vitals 的趋势图与按页面/端型的下钻（当前只有 p75 汇总卡片）
