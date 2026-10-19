# hhseal.cn/en · PageSpeed Insights 报告解读

> 报告来源：https://pagespeed.web.dev/analysis/https-hhseal-cn/4ob6y95uas
> 生成时间：2026-10-19 22:23（GMT+8） · Lighthouse 13.5.0 · 测试条件：Moto G 模拟 + 低速 4G 节流
> 分析网址：https://hhseal.cn/en（英文本地化首页）

## 一、得分总览

| 类目 | 手机 | 桌面 |
|---|---|---|
| 性能 | **71** | 81 |
| 无障碍 | **69** | 96 |
| 最佳做法 | 96 | 100 |
| SEO | **82** | 100 |

## 二、核心指标

| 指标 | 手机 | 桌面 | 参考线（好） |
|---|---|---|---|
| FCP 首次内容绘制 | 2.5 s | 0.4 s | < 1.8 s |
| LCP 最大内容绘制 | **4.1 s** | 1.3 s | < 2.5 s |
| TBT 总阻塞时间 | 260 ms | 190 ms | < 200 ms |
| CLS 累积布局偏移 | 0 | 0.021 | < 0.1 |
| SI 速度指数 | 7.1 s | 6.1 s | — |

CrUX 真实用户数据：样本不足，暂无字段数据。

## 三、手机端修改建议（按收益排序）

### 1. LCP 4.1s —— 最大瓶颈在「资源加载延迟」2,610ms（占 63%）
LCP 拆解：TTFB 10ms → 资源加载延迟 **2,610ms** → 资源加载 420ms → 元素渲染 570ms。
对应建议「发现 LCP 请求」：LCP 图片没有被 HTML 源码直接发现（延迟加载或 JS 注入）。
**动作**：Hero 主图去掉 `loading="lazy"`，加 `<link rel="preload" as="image">` + `fetchpriority="high"`，确保首屏 HTML 里直接有 `<img>`。

### 2. JS 主线程过重（预计收益最大）
- 最大限度地减少主线程工作：**4.8s**（Script Evaluation 2,279ms 占大头）
- 缩短 JavaScript 执行用时：**2.3s** —— 元凶是 `chunks/0m_p1bxtorv5i.js`（执行 3,004ms / 2,268ms）
- 减少未使用的 JavaScript：预计节省 **49 KiB**（0m_p1bxtorv5i.js 占 27.3KiB + 0c7h~x4_chf35.js 占 22.1KiB）
- 应避免长时间运行的主线程任务：6 项（最长 4,513ms）
**动作**：拆/延迟该 chunk（大概率是整体打包的首页 JS）；非首屏组件改动态 import。

### 3. 渲染阻塞 CSS —— 预计缩短 150ms
- `chunks/0j7zt77kd49db.css` 15.5 KiB（阻塞 600ms）
- `chunks/041hoq_234bmw.css` 3.1 KiB（阻塞 150ms）
**动作**：按路由拆 CSS，首屏关键 CSS 内联，其余异步加载。

### 4. 图片传送 —— 预计节省 35 KiB
- Workshop Overview 图：源文件 768×768，实际显示 401×401 → 换小尺寸源图或调 `sizes`
- Huahao Sealing 图：提高压缩因子
**动作**：next/image 的 `sizes` 按真实显示宽度填；源图不要用 768×768 大图。

### 5. 旧版 JavaScript polyfill —— 预计节省 14 KiB
`0m_p1bxtorv5i.js` 含 `Array.prototype.at / flat / flatMap` 等 Baseline 转译。
**动作**：构建目标调 ES2017+，去掉旧浏览器 polyfill（B2B 采购商浏览器足够新）。

### 6. 第三方脚本 —— GTM 162 KiB
Google Tag Manager（AW-183… 转化跟踪）阻塞主线程。
**动作**：GTM 改 `next/script` 的 `afterInteractive`/`lazyOnload`，或用 Partytown 之类 worker 方案。

### 7. DOM 与动画
- DOM 668 个元素、最大深度 13 层、body 下 54 个子级 —— 偏大，影响样式计算
- 未合成动画 1 处：hero 区 `text-shadow` 动画（`.hero-accent-glow`）→ 改 transform/opacity 动画

## 四、手机端无障碍 / SEO / 最佳做法扣分点

| 类目 | 问题 | 说明 |
|---|---|---|
| SEO | 文档不含 `<title>` 元素 / 缺少 meta 描述 | ⚠️ 疑似误报：Next.js SSR 的 title 在 `<head>`，Lighthouse headless 可能抓到流式渲染前的 HTML，**需人工复核** |
| SEO | `<html>` 缺 `[lang]` 属性 | 同上，需人工复核（next-intl 应输出 lang） |
| 无障碍 | 文档缺少主要位置标记（`<main>` 等） | 页面结构补 landmark |
| 最佳做法 | 控制台有浏览器错误日志 | 打开页面看 console，消掉报错 |
| 信任与安全 | 无 CSP / 无 HSTS / 无 COOP / 无 XFO / 无 Trusted Types | Vercel 部署加响应头（`vercel.json` headers 可配） |
| 待手动检查 | 11 项（键盘焦点、ARIA、结构化数据等） | Lighthouse 无法自动判定，需人工走查 |

## 五、桌面端差异（81 分）

桌面主要问题集中在 **Facebook Pixel**：
- 使用高效的缓存生命周期：预计节省 **233 KiB**（connect.facebook.net 缓存仅 20 分钟）
- 减少未使用的 JavaScript：预计节省 **167 KiB**（Facebook 83.5 + GTM 58.4）
- 长时间任务 4 项均由 Facebook config / fbevents.js 触发
- 布局偏移 0.001：导航栏与 Inter 字体网络加载导致
- 旧版 JavaScript：26 KiB（同 mobile 的 polyfill 问题）

## 六、建议修复顺序

| 优先级 | 动作 | 预期收益 |
|---|---|---|
| P0 | Hero 图 preload + fetchpriority + 去 lazy | LCP 4.1s → 2.5s 内 |
| P0 | 拆分/延迟 `0m_p1bxtorv5i.js` chunk | TBT、主线程时间大幅下降 |
| P1 | CSS 按路由拆 + 首屏关键 CSS 内联 | 省 150ms 阻塞 |
| P1 | 图片源图尺寸/sizes 修正 | 省 35–156 KiB |
| P1 | GTM/Pixel 延迟加载 + 缓存策略 | 省 233–400 KiB、减少长任务 |
| P2 | 补 landmark / CSP / HSTS 等响应头 | 无障碍、最佳做法分数 |
| P2 | 复核 title/lang/meta（疑似误报） | SEO 82 → 100 |

---

*附：原始 Lighthouse 数据已存 `scripts/psi_report.json`（mobile/desktop 全量 audit），提取脚本 `scripts/psi_read.mjs` 可重复运行。*
