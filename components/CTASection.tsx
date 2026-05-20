import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { siteConfig } from "@/lib/constants"

interface CTAProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
}

export default async function CTASection({ title, subtitle, primaryLabel, primaryHref }: CTAProps) {
  const t = await getTranslations("common")

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] bg-accent/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-wide py-16 md:py-20 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {title || t("ctaTitle")}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-base">
          {subtitle || t("ctaSubtitle")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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
    </section>
  )
}
