"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { siteConfig } from "@/lib/constants"

interface CTAProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
}

export default function CTASection({ title, subtitle, primaryLabel, primaryHref }: CTAProps) {
  const t = useTranslations("common")

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/[0.06] md:block" aria-hidden />

      <div className="container-wide py-16 md:py-20 relative z-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="en-caption mb-3 flex items-center gap-3 text-xs text-slate-400" aria-hidden>
              <span className="h-[2px] w-8 bg-accent" />
              Get a Quote
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white md:text-4xl">
              {title || t("ctaTitle")}
            </h2>
            <p className="text-gray-400 max-w-2xl leading-relaxed text-base">
              {subtitle || t("ctaSubtitle")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href={primaryHref || "/contact"} className="btn-primary text-base">
              {primaryLabel || t("ctaButton")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              {t("whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
