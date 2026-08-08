"use client"

import { useEffect, useRef } from "react"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import Script from "next/script"

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export default function AnalyticsScripts() {
  const locale = useLocale()
  const pathname = usePathname()
  const prevPath = useRef(pathname)

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

  if (!CLARITY_ID && !META_PIXEL_ID) return null

  return (
    <>
      {/* Meta Pixel — advertising conversion tracking */}
      {META_PIXEL_ID && (
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
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
      )}

      {/* Microsoft Clarity — heatmaps, session recordings */}
      {CLARITY_ID && (
        <Script
          id="clarity-init"
          strategy="afterInteractive"
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
      <Script
        id="analytics-locale"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.__analyticsLocale = "${locale}";`,
        }}
      />
    </>
  )
}
