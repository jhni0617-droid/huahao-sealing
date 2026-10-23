"use client"

import { useEffect, useRef, useState } from "react"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import Script from "next/script"
import {
  CONSENT_CHANGE_EVENT,
  getVisitorCountry,
  readConsent,
  needsConsentFor,
  type ConsentRecord,
} from "@/lib/consent"

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

/** 同意闸门：undefined = 还在判定；对象 = 已确定（true 才允许写对应类型的 Cookie） */
type Gate = { analytics: boolean; ads: boolean }

export default function AnalyticsScripts() {
  const locale = useLocale()
  const pathname = usePathname()
  const prevPath = useRef(pathname)
  const [gate, setGate] = useState<Gate | undefined>(undefined)

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

  /**
   * 初始闸门判定（三选一）：
   * 1. 用户已选过 → 按保存的选择
   * 2. 未选 + 不在 EEA/UK/CH → 直接放行（GDPR 不适用，不为非欧访客牺牲转化）
   * 3. 未选 + 在管辖区 → 一律关闭，等 CookieConsent 里的用户选择
   */
  useEffect(() => {
    // 放进 async 上下文：localStorage 只能在客户端读，必须等 hydration 之后再定闸门，
    // 否则 SSR 与首帧渲染出的 script 标签会不一致。判定完成前 gate 为 undefined，
    // 意味着 Meta Pixel / Clarity 都不加载（安全默认）。
    let cancelled = false
    const decide = async () => {
      const saved = readConsent()
      if (cancelled) return
      if (saved) {
        setGate({ analytics: saved.analytics, ads: saved.ads })
        return
      }
      const country = await getVisitorCountry()
      if (cancelled) return
      const needsConsent = needsConsentFor(country)
      setGate({ analytics: !needsConsent, ads: !needsConsent })
    }
    void decide()
    return () => {
      cancelled = true
    }
  }, [])

  // 用户在横幅里改选 → 同步闸门
  useEffect(() => {
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentRecord>).detail
      if (!detail) return
      setGate({ analytics: Boolean(detail.analytics), ads: Boolean(detail.ads) })
    }
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange)
  }, [])

  /**
   * Google Consent Mode v2：把闸门状态同步给 gtag。
   * 默认态在下面的内联脚本里已经写成 denied，这里只负责在用户做出选择后 update。
   * 即便 gtag.js 尚未加载完，push 进 dataLayer 也会被库读取时补上。
   */
  useEffect(() => {
    if (!GOOGLE_ADS_ID || !gate) return
    const w = window as unknown as {
      dataLayer?: unknown[]
      gtag?: (...args: unknown[]) => void
    }
    w.dataLayer = w.dataLayer || []
    if (typeof w.gtag !== "function") {
      w.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments)
      }
    }
    w.gtag("consent", "update", {
      ad_storage: gate.ads ? "granted" : "denied",
      ad_user_data: gate.ads ? "granted" : "denied",
      ad_personalization: gate.ads ? "granted" : "denied",
      analytics_storage: gate.analytics ? "granted" : "denied",
    })
  }, [gate])

  // SPA 路由切换不会重新加载 Pixel 脚本，这里在路径变化时补发 PageView
  useEffect(() => {
    if (!META_PIXEL_ID || !gate?.ads) return
    if (prevPath.current === pathname) return
    prevPath.current = pathname
    const w = window as unknown as { fbq?: (...args: unknown[]) => void }
    if (typeof w.fbq === "function") {
      w.fbq("track", "PageView")
    }
  }, [pathname, gate?.ads])

  const nothingConfigured = !CLARITY_ID && !META_PIXEL_ID && !GOOGLE_ADS_ID

  // 全部使用 lazyOnload：营销/分析脚本在浏览器空闲后加载，不与首屏 LCP 图片抢带宽。
  // PSI 实测：afterInteractive 会在 <head> 里 preload GTM（162 KiB），
  // 在 4G 下把 hero 图的资源加载延迟拉到 2.6s。B2B 询价站可接受秒级转化延迟。
  return (
    <>
      {/* Google Ads (gtag.js) — conversion tracking
          库照常加载，但 Consent Mode 默认全部 denied：用户同意前不写广告 Cookie。 */}
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
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: 'denied',
                  wait_for_update: 500
                });
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `,
            }}
          />
        </>
      )}

      {/* Meta Pixel — advertising conversion tracking
         Meta 不认 Consent Mode，只能由我们决定是否 init：未同意广告类就完全不加载。
         同意后：主脚本在 JS 环境加载后注入 fbq 并触发第一次 PageView。
         <noscript> fallback 为关闭 JS 的浏览器或脚本提前中断场景保留上报通道，
         通过 1x1 图片直接访问 Meta /tr 端点携带 PageView 事件，防止 LPV 丢失。 */}
      {META_PIXEL_ID && gate?.ads && (
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

      {/* Microsoft Clarity — heatmaps, session recordings（分析类，需 analytics 同意） */}
      {CLARITY_ID && gate?.analytics && (
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
