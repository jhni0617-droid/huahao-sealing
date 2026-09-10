# Cloudflare 缓存加速配置（全球打开速度优化）

> **更新记录（2026-09-10）**：本文档有几处表述已不准确，已更正。要点：
> 1. ~~「全站是 SSG/ISR 预渲染」~~ —— 写本文档时**并不成立**：`/products`、`/blog`、`/contact`
>    因 `await searchParams` 退化成了「每请求 SSR」。经 2026-09-10 的性能优化后这三个页面已恢复静态预渲染，
>    **现在这个前提才真正成立**。详见 `docs/performance-batch2-report.md`、`docs/performance-batch3-report.md`。
> 2. 原文「移动端首屏约减少 160KB 传输」已过时，实测降幅大得多，见文末「实测数据」。
> 3. 源站响应头已**实测**（不是推测），见下一节。
> 4. `vercel.json` 已补上根路径与后台的显式不缓存规则 —— 根路径的语言跳转不再依赖 Cloudflare 的默认行为兜底。

> 目标：把海外用户访问的 HTML 首字节时间（TTFB）从实测平均 ~1.2s 降到 100–300ms。
> 原理：全站是 SSG/ISR 预渲染（每 300s 才重新生成），**HTML 内容 5 分钟内基本不变**，可以安全地在 Cloudflare 边缘缓存。
> 实测基线（2026-08-07，check-host.net 19 个全球节点）：HTML 当前 `cf-cache-status: DYNAMIC`（Cloudflare 不缓存，每个请求都回源 Vercel）。

---

## 源站实际发出的缓存头（2026-09-10 实测）

用 `next start` 起生产服务器后逐个路径实测：

| 路径 | 类型 | 源站 `Cache-Control` | 说明 |
|---|---|---|---|
| `/en`、`/zh` | 静态 | `s-maxage=31536000` | **Vercel 边缘缓存 1 年**，靠部署换 BUILD_ID 失效 |
| `/en/products`、`/en/blog`、`/en/contact`、`/en/factory` | 静态 | `s-maxage=31536000` | 同上（其中三个是 2026-09-10 才恢复静态的） |
| `/en/blog/{slug}` | 按需 ISR | `s-maxage=86400, stale-while-revalidate=31449600` | 符合 ISR 语义 |
| `/` | 307 跳转 | **原本没有任何 Cache-Control** | ⚠️ 风险点，已修 |
| `/admin/login` | 静态 | `s-maxage=31536000` | 该页对所有访客相同，缓存无害 |
| `/admin/inquiries` 等 | 动态 | `private, no-cache, no-store, max-age=0, must-revalidate` | Next 对 `force-dynamic` 页自动设置 |
| `/_next/image?url=...` | 图片优化 | `public, max-age=31536000, must-revalidate` | 实测 AVIF 输出比 JPEG 小 31% |

**两个重要推论：**

1. **不要在 `vercel.json` 里给语言页设 `s-maxage=300`。** 源站已经给了 1 年，Vercel 靠部署自动失效；
   改成 300s 反而会把 Vercel 自身的边缘缓存效率降低约 1000 倍，是纯粹的倒退。
   Cloudflare 那一层的 300s 是**另一层**缓存，用 Cloudflare 的 Cache Rule 单独控制即可。
2. **`/` 的 307 跳转原本没有任何缓存头。** Cloudflare 默认不缓存 307（且响应带 `Set-Cookie`），
   所以现状安全 —— 但这依赖「默认行为」而非显式声明。一旦有人开启泛化的 Cache Everything，
   就可能缓存这个跳转，导致**所有语言访客都被送到第一个访问者的语言**。
   已在 `vercel.json` 对 `/` 显式声明 `private, no-store, max-age=0`，堵掉这个隐患。

## `vercel.json` 已声明的不缓存规则（2026-09-10 新增）

```
/                 → private, no-store, max-age=0
/admin            → private, no-store, max-age=0
/admin/:path*     → private, no-store, max-age=0
/api/:path*       → private, no-store, max-age=0
```

这些是**防御性声明**：即使日后有人误加「Cache Everything」规则，后台与询盘接口也不会被缓存。

---

## 前提确认

- 域名 `huahaoindustrial.com` 的 DNS 已托管在 Cloudflare（免费版即可），橙色云朵（代理）开启。
- 页面是预渲染静态 HTML：响应头含 `x-nextjs-prerender: 1`、`x-vercel-cache: HIT`、`x-nextjs-stale-time: 300` —— 即内容最多 5 分钟变化一次。

---

## 配置一：缓存全部语言页面 HTML（关键操作）

路径：Cloudflare Dashboard → 你的域名 → **Caching → Cache Rules → Create rule**

```
Rule name:        huahao-html-cache
When incoming requests match:
  Hostname equals huahaoindustrial.com
  AND
  URI Path starts with:
    /en    /zh    /vi    /th    /ru    /ja    /ko
Then:
  Cache Eligibility: Eligible for cache
  Edge TTL:          Ignore cache-control header and use this TTL → 5 minutes (300s)
  Browser TTL:       Respect existing headers（或 5 minutes）
```

要点：

| 项 | 值 | 说明 |
|---|---|---|
| Edge TTL | **300s（5 分钟）** | 与站点 ISR revalidate 一致，用户永远看不到过期内容 |
| 匹配路径 | 7 个语言前缀 | 不要匹配 `/`（它是 307 重定向，见下方说明） |
| 忽略 cache-control | 是 | 源站返回 `max-age=0, must-revalidate`，必须忽略才能缓存 |

### 验证生效

保存规则后，用任意在线测速工具（如 check-host.net）或本地 curl：

```bash
curl -sI https://huahaoindustrial.com/en | grep -i cf-cache-status
# 期望输出: cf-cache-status: HIT   （之前是 DYNAMIC）
```

---

## 配置二（可选）：静态资源兜底缓存

`/images/*`、`/_next/static/*`、`/fonts/*` 源站已返回 `Cache-Control: public, max-age=31536000, immutable`，Cloudflare 默认就会缓存，**无需额外配置**。若确认未命中，可加一条 Cache Rule：

```
When incoming requests match:
  URI Path starts with:  /images/  /_next/static/  /fonts/
Then:
  Cache Eligibility: Eligible for cache
  Edge TTL:          30 days
```

---

## 不建议做的事（重要）

### ❌ 不要对根路径 `/` 做 301 重定向到 `/en`

根路径现在返回 307 + `Set-Cookie: NEXT_LOCALE=...`，会把用户带到其语言版本（英文访客去 `/en`，泰文访客去 `/th`）。

- 如果改成 301，Cloudflare 和浏览器会**永久缓存**这个跳转（缓存 key 默认不含 cookie），
  导致所有语言的用户都被跳转到第一个访问者的语言 —— 多语言站的大 bug。
- 307 本身在 Vercel 边缘处理、不回源，代价仅一次 RTT（~100–200ms），保持现状。
- **2026-09-10 已加固**：`vercel.json` 对 `/` 显式声明 `private, no-store, max-age=0`，
  即使日后有人误加缓存规则也不会缓存这个跳转。（注意：这只管住源站响应头，
  Cloudflare 侧仍不要对 `/` 建任何 Cache Rule。）

### ❌ 不要开启 "Cache Everything" 缓存 admin 和 API

`/admin/*`（登录态页面）和 `/api/*`（询价表单、访问统计）是动态内容，**绝不能缓存**。
上面的规则只匹配语言路径，天然排除了它们。如果日后调整规则，务必确认没有覆盖这两个前缀。

**2026-09-10 已加固**：`vercel.json` 里对 `/admin`、`/admin/:path*`、`/api/:path*` 显式声明了
`private, no-store, max-age=0`，作为误配置时的兜底。

---

## 实测数据（2026-09-10 更新）

原文预计「首屏约减少 160KB 传输」，实际经三轮优化后降幅远大于此：

| 指标 | 优化前（2026-09-10 前实测） | 现在（实测） | 变化 |
|---|---|---|---|
| 首屏 CSS（gzip） | 151.8 KB | **17.3 KB** | ↓ 89% |
| 首屏 JS+CSS（gzip） | 419.3 KB | **255.9 KB** | ↓ 39% |
| 首屏 JS+CSS+HTML（gzip） | 488.2 KB | **284.6 KB** | ↓ 42% |
| 首页首屏图片（源文件） | 12.4 MB（5 张 PNG） | **947 KB**（全 WebP，且首屏只请求 2 张） | ↓ 92% |
| `public/` 目录 | 71 MB | **26 MB** | ↓ 63% |
| 静态预渲染路由 | 107 条 | **128 条** | +21 |
| 构建产物字体 | 932 个文件 / 32 MB | **124 个 / 1.6 MB** | ↓ 94% |

> 也就是说移动端首屏要下载的传输量降了约 **40%**（不是 160KB 那个量级）。
> 详细改动清单见 `docs/performance-batch1-report.md` ~ `batch3-report.md`。

---

## 关联代码改动

### 2026-08-07（首轮）
- `components/DesktopOnly.tsx`：`matchMedia("(min-width: 1024px)")` 门控，移动端不渲染 children。

### 2026-09-10（性能优化第 1–4 批）
- `app/[locale]/layout.tsx`：移除 `@fontsource/noto-serif-sc` 引入（首屏 CSS 从 152KB 降到 17KB gzip）；
  接入 `components/WebVitalsReporter.tsx`。
- `components/HeroSection.tsx`：首屏背景图转 WebP + 渐进挂载（初始只渲染 2 张）。
- `app/[locale]/products/page.tsx`、`app/[locale]/blog/page.tsx`、`app/[locale]/contact/page.tsx`：
  去掉 `await searchParams`（这是它们退化成 SSR 的根因），恢复静态预渲染。
- `lib/products-page-data.ts`、`lib/blog-list-data.ts`、`lib/blog-pinned.ts`（新增）：服务端取数，
  避免把 7 种语言的数据打包进客户端。
- `vercel.json`：补上 `/`、`/admin/*`、`/api/*` 的显式不缓存规则。
- `scripts/perf-budget.mjs`（新增）：构建后校验首屏预算，`npm run perf` 可跑，可接入 CI。
- 清理：删除 4 个已下线组件、7 张大图、26 张孤儿图、8 个空目录，`public/` 瘦身 45MB。
