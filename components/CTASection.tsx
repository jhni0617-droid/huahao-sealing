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
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
      <div className="absolute right-0 top-0 h-72 w-72 bg-accent/10 blur-[110px] pointer-events-none" />

      <div className="container-wide py-16 md:py-20 relative z-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-4 h-0.5 w-16 bg-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
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
