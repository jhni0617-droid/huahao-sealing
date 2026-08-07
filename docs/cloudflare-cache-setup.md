# Cloudflare 缓存加速配置（全球打开速度优化）

> 目标：把海外用户访问的 HTML 首字节时间（TTFB）从实测平均 ~1.2s 降到 100–300ms。
> 原理：全站是 SSG/ISR 预渲染（每 300s 才重新生成），**HTML 内容 5 分钟内基本不变**，可以安全地在 Cloudflare 边缘缓存。
> 实测基线（2026-08-07，check-host.net 19 个全球节点）：HTML 当前 `cf-cache-status: DYNAMIC`（Cloudflare 不缓存，每个请求都回源 Vercel）。

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

### ❌ 不要开启 "Cache Everything" 缓存 admin 和 API

`/admin/*`（登录态页面）和 `/api/*`（询价表单、访问统计）是动态内容，**绝不能缓存**。
上面的规则只匹配语言路径，天然排除了它们。如果日后调整规则，务必确认没有覆盖这两个前缀。

---

## 预期效果

| 指标 | 优化前（实测） | 优化后（预期） |
|---|---|---|
| 新加坡 / 东南亚 TTFB | 651ms | 100–250ms |
| 欧洲（德/法/波兰） | 870–1180ms | 150–300ms |
| 美国 | 855ms | 120–250ms |
| 全球平均 | ~1.2s | <300ms |

> 说明：TTFB 只反映 HTML 到达时间。移动端还要下载 JS/CSS（优化后首屏约减少 160KB 传输），
> 整体首屏体验在新加坡等东南亚地区可从 "3–5 秒" 进入 "2 秒内"。

---

## 关联代码改动（2026-08-07 已提交）

- `components/DesktopOnly.tsx`（新增）：`matchMedia("(min-width: 1024px)")` 门控，移动端不渲染 children。
- `components/HeroDynamicContent.tsx`：粒子动画仅桌面端渲染；移除重复的轮播引用。
- `components/HeroSection.tsx`：Hero 轮播用 `DesktopOnly` 包裹 —— 手机不再下载轮播 JS（~134KB）和 18 张轮播图。
