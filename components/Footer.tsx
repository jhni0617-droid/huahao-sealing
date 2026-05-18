"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { siteConfig, factoryHighlights } from "@/lib/constants"

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-primary text-white">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-gray-300 hover:text-white">{t("nav.products")}</Link></li>
              <li><Link href="/applications" className="text-gray-300 hover:text-white">{t("nav.applications")}</Link></li>
              <li><Link href="/cases" className="text-gray-300 hover:text-white">{t("nav.cases")}</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white">{t("nav.faq")}</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">{t("nav.about")}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.productSeries")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products#seal-rings" className="text-gray-300 hover:text-white">{t("footer.sealRings")}</Link></li>
              <li><Link href="/products#carbon-graphite-sleeves" className="text-gray-300 hover:text-white">{t("footer.bushings")}</Link></li>
              <li><Link href="/products#three-part-rings" className="text-gray-300 hover:text-white">{t("footer.splitRings")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>{t("footer.email")}: {siteConfig.email}</p>
              <p>{t("footer.phone")}: {siteConfig.phone}</p>
              <p>{t("footer.address")}: {siteConfig.address}</p>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-accent text-white text-sm font-semibold rounded"
            >
              {t("common.whatsapp")}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {factoryHighlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="text-2xl font-bold text-accent">{h.value}</div>
                <div className="text-xs text-gray-400">{h.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. {t("footer.copyright")}.
          </p>
        </div>
      </div>
    </footer>
  )
}
