"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { siteConfig } from "@/lib/constants"
import { trackEvent } from "@/lib/track"
import Icon from "@/components/ui/Icon"

/**
 * 首页收尾 CTA（概念 A 07 号位）：白底细线带 + 红色胶囊按钮 + 直连联系方式。
 * 与内页共用的 CTASection（深色）分开，只改版式，文案与转化行为不变。
 */
export default function HomeCTA() {
  const t = useTranslations("common")

  return (
    <section className="border-t border-border bg-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="en-caption mb-3 flex items-center gap-3 text-xs text-muted" aria-hidden>
              <span className="h-[2px] w-8 bg-accent" />
              Get a Quote
            </div>
            <h2 className="font-serif-sc text-3xl font-bold text-primary md:text-4xl">
              {t("ctaTitle")}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {t("ctaSubtitle")}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted-dark">
              <a href={`tel:${siteConfig.phone.replace(/-/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                </svg>
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Icon name="mail" className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/contact" className="btn-primary text-base">
              {t("ctaButton")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", "cta_section")}
              className="btn-secondary"
            >
              {t("whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
