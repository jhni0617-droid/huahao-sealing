"use client"

import { useLocale } from "next-intl"
import Script from "next/script"

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

export default function AnalyticsScripts() {
  const locale = useLocale()

  if (!CLARITY_ID) return null

  return (
    <>
      {/* Microsoft Clarity — heatmaps, session recordings */}
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
