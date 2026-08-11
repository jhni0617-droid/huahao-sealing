import { getTranslations, getLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { siteConfig } from "@/lib/constants"
import { factoryHighlightsByLocale } from "@/lib/translations"
import { getLocalized, getLocalizedSiteConfig } from "@/lib/locale-data"
import Icon from "@/components/ui/Icon"

export default async function Footer() {
  const t = await getTranslations()
  const locale = await getLocale()
  const localizedCfg = getLocalizedSiteConfig(locale)
  const cfg = { ...siteConfig, ...localizedCfg }
  const highlights = getLocalized(factoryHighlightsByLocale, locale)

  return (
    <footer className="bg-primary text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">{cfg.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{cfg.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">{t("nav.products")}</Link></li>
              <li><Link href="/applications" className="text-gray-400 hover:text-white transition-colors">{t("nav.applications")}</Link></li>
              <li><Link href="/factory" className="text-gray-400 hover:text-white transition-colors">{t("nav.factory")}</Link></li>
              <li><Link href="/cases" className="text-gray-400 hover:text-white transition-colors">{t("nav.cases")}</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">{t("nav.faq")}</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">{t("footer.productSeries")}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products#seal-rings" className="text-gray-400 hover:text-white transition-colors">{t("footer.sealRings")}</Link></li>
              <li><Link href="/products#carbon-graphite-sleeves" className="text-gray-400 hover:text-white transition-colors">{t("footer.bushings")}</Link></li>
              <li><Link href="/products#three-part-rings" className="text-gray-400 hover:text-white transition-colors">{t("footer.splitRings")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">{t("footer.contact")}</h4>
            <div className="text-sm text-gray-400 space-y-3">
              <div className="flex items-start gap-2.5">
                <Icon name="mail" className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <span>{cfg.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Icon name="phone" className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <span>{cfg.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Icon name="map-pin" className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <span>{cfg.address}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              <a
                href={cfg.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 text-accent text-sm font-semibold rounded-[10px] hover:bg-accent hover:text-white transition-all"
              >
                <Icon name="facebook" className="w-4 h-4" />
                Facebook
              </a>
              <a
                href={`https://zalo.me/${cfg.zalo.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 text-accent text-sm font-semibold rounded-[10px] hover:bg-accent hover:text-white transition-all"
              >
                Zalo
              </a>
              <a
                href={`https://wa.me/${cfg.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 text-accent text-sm font-semibold rounded-[10px] hover:bg-accent hover:text-white transition-all"
              >
                <Icon name="whatsapp" className="w-4 h-4" />
                {t("common.whatsapp")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="text-2xl font-bold text-accent">{h.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{h.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {cfg.fullName}. {t("footer.copyright")}.
          </p>
        </div>
      </div>
    </footer>
  )
}
