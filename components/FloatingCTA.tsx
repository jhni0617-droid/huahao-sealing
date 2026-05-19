"use client"

import { useEffect, useState } from "react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/lib/constants"
import Icon from "@/components/ui/Icon"

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const t = useTranslations("common")

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop floating buttons */}
      <div
        className={`hidden md:flex fixed bottom-8 right-8 z-50 flex-col gap-3 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <Link
          href="/contact"
          className="flex items-center gap-2.5 bg-accent text-white px-5 py-3 rounded-xl shadow-lg font-semibold text-sm hover:bg-accent-hover transition-all hover:shadow-xl hover:-translate-y-0.5"
        >
          <Icon name="mail" className="w-4 h-4" />
          {t("ctaButton")}
        </Link>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg font-semibold text-sm hover:bg-green-700 transition-all hover:shadow-xl hover:-translate-y-0.5"
        >
          <Icon name="whatsapp" className="w-4 h-4" />
          {t("whatsapp")}
        </a>
      </div>

      {/* Mobile bottom bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-2xl safe-bottom transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <div className="flex items-stretch">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20HuaHao%20Sealing%2C%20I%27d%20like%20to%20inquire%20about%20your%20sealing%20products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-green-600 text-white font-semibold text-sm"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            {t("whatsapp")}
          </a>
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-white font-semibold text-sm"
          >
            <Icon name="mail" className="w-4 h-4" />
            {t("ctaButton")}
          </Link>
        </div>
      </div>
    </>
  )
}
