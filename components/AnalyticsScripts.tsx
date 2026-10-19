"use client"

import { useEffect, useRef } from "react"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import Script from "next/script"

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

export default function AnalyticsScripts() {
  const locale = useLocale()
  const pathname = usePathname()
  const prevPath = useRef(pathname)

  // 环境变量缺失告警（防止部署后因漏配 Vercel env 导致追踪全无）
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return
    const missing: string[] = []
    if (!META_PIXEL_ID) missing.push("NEXT_PUBLIC_META_PIXEL_ID")
    if (!GOOGLE_ADS_ID) missing.push("NEXT_PUBLIC_GOOGLE_ADS_ID")
    if (!CLARITY_ID) missing.push("NEXT_PUBLIC_CLARITY_ID (optional)")
    if (missing.length > 0) {
      console.warn(
        "[AnalyticsScripts] 以下追踪环境变量未配置，dev/preview 下追踪不会工作。" +
          "生产部署前请在 Vercel Dashboard → Environment Variables 中设置：\n  - " +
          missing.join("\n  - "),
      )
    }
  }, [])

  // SPA 路由切换不会重新加载 Pixel 脚本，这里在路径变化时补发 PageView
  useEffect(() => {
    if (!META_PIXEL_ID) return
    if (prevPath.current === pathname) return
    prevPath.current = pathname
    const w = window as unknown as { fbq?: (...args: unknown[]) => void }
    if (typeof w.fbq === "function") {
      w.fbq("track", "PageView")
    }
  }, [pathname])

  const nothingConfigured = !CLARITY_ID && !META_PIXEL_ID && !GOOGLE_ADS_ID

  // 全部使用 lazyOnload：营销/分析脚本在浏览器空闲后加载，不与首屏 LCP 图片抢带宽。
  // PSI 实测：afterInteractive 会在 <head> 里 preload GTM（162 KiB），
  // 在 4G 下把 hero 图的资源加载延迟拉到 2.6s。B2B 询价站可接受秒级转化延迟。
  return (
    <>
      {/* Google Ads (gtag.js) — conversion tracking */}
      {GOOGLE_ADS_ID && (
        <>
          <Script
            id="google-ads-init"
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          />
          <Script
            id="google-ads-config"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `,
            }}
          />
        </>
      )}

      {/* Meta Pixel — advertising conversion tracking
         主脚本在 JS 环境加载后注入 fbq 并触发第一次 PageView。
         <noscript> fallback 为关闭 JS 的浏览器或脚本提前中断场景保留上报通道，
         通过 1x1 图片直接访问 Meta /tr 端点携带 PageView 事件，防止 LPV 丢失。 */}
      {META_PIXEL_ID && (
        <>
          <Script
            id="meta-pixel-init"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s){
                  if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)
                }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Microsoft Clarity — heatmaps, session recordings */}
      {CLARITY_ID && (
        <Script
          id="clarity-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `,
          }}
        />
      )}

      {/* Record locale for analytics filtering */}
      {!nothingConfigured && (
        <Script
          id="analytics-locale"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.__analyticsLocale = "${locale}";`,
          }}
        />
      )}
    </>
  )
}
