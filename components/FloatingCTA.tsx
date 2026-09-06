"use client"

import { useEffect, useState } from "react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/lib/constants"
import { trackEvent } from "@/lib/track"
import Icon from "@/components/ui/Icon"

type SideItem = {
  key: string
  label: string
  icon: React.ComponentProps<typeof Icon>["name"]
  color: string
  href?: string
  external?: boolean
}

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const t = useTranslations("common")

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sideItems: SideItem[] = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      icon: "whatsapp",
      color: "bg-[#25D366]",
      href: `https://wa.me/${siteConfig.whatsapp}?text=Hi%20HuaHao%20Sealing%2C%20I%27d%20like%20to%20inquire%20about%20your%20sealing%20products.`,
      external: true,
    },
    {
      key: "facebook",
      label: "Facebook",
      icon: "facebook",
      color: "bg-[#1877F2]",
      href: siteConfig.facebookPage,
      external: true,
    },
    {
      key: "zalo",
      label: "Zalo",
      icon: "zalo",
      color: "bg-[#0180C7]",
      href: `https://zalo.me/${siteConfig.zalo.replace(/\D/g, "")}`,
      external: true,
    },
  ]

  return (
    <>
      {/* Desktop side dock (lgvf-style vertical pill) */}
      <div
        className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col w-[84px] bg-white rounded-2xl shadow-[0_6px_28px_rgba(0,0,0,0.18)] border border-border"
      >
        {sideItems.map((item, i) => (
          <a
            key={item.key}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            title={item.label}
            onClick={item.key === "whatsapp" ? () => trackEvent("whatsapp_click", "side_dock") : undefined}
            className={`flex flex-col items-center gap-1.5 py-4 hover:bg-gray-50 transition-colors ${i > 0 ? "border-t border-border" : ""}`}
          >
            <span className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition-transform hover:scale-110 ${item.color}`}>
              <Icon name={item.icon} className="w-6 h-6" />
            </span>
            <span className="text-[11px] font-semibold text-primary leading-none">{item.label}</span>
          </a>
        ))}

        {/* Hotline with hover phone popup */}
        <div className="group relative border-t border-border">
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            title={t("hotline")}
            onClick={() => trackEvent("phone_click", "side_dock")}
            className="flex flex-col items-center gap-1.5 py-4 hover:bg-gray-50 transition-colors"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-sm transition-transform group-hover:scale-110">
              <Icon name="phone" className="w-6 h-6" />
            </span>
            <span className="text-[11px] font-semibold text-primary leading-none">{t("hotline")}</span>
          </a>
          {/* Phone popup */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden group-hover:flex items-center gap-3 bg-white border border-border rounded-lg shadow-lg px-5 py-3 whitespace-nowrap">
            <Icon name="phone" className="w-5 h-5 text-accent shrink-0" />
            <div>
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="block text-base font-bold text-primary hover:text-accent">
                {siteConfig.phone}
              </a>
              <a href="tel:+8619556167860" className="block text-base font-bold text-primary hover:text-accent">
                +86 19 5561 67860
              </a>
            </div>
            {/* Arrow */}
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[7px] border-l-white" />
          </div>
        </div>

        {/* Online inquiry */}
        <Link
          href="/contact"
          title={t("onlineConsult")}
          className="flex flex-col items-center gap-1.5 py-4 border-t border-border hover:bg-gray-50 transition-colors"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-sm transition-transform hover:scale-110">
            <Icon name="chat" className="w-6 h-6" />
          </span>
          <span className="text-[11px] font-semibold text-primary leading-none">{t("onlineConsult")}</span>
        </Link>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title={t("backToTop")}
          className="flex flex-col items-center gap-1.5 py-4 border-t border-border hover:bg-gray-50 transition-colors rounded-b-2xl w-full cursor-pointer"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-transform hover:scale-110">
            <Icon name="arrow-up" className="w-6 h-6" />
          </span>
          <span className="text-[11px] font-semibold text-primary leading-none">{t("backToTop")}</span>
        </button>
      </div>

      {/* Mobile bottom bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg safe-bottom transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <div className="flex items-stretch">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20HuaHao%20Sealing%2C%20I%27d%20like%20to%20inquire%20about%20your%20sealing%20products.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", "mobile_bar")}
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
