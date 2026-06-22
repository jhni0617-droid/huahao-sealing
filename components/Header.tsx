"use client"

import { useState, useEffect } from "react"
import { Link, usePathname } from "@/i18n/routing"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { siteConfig } from "@/lib/constants"
import { getLocalized } from "@/lib/locale-data"

const brandCopy = {
  zh: { name: "华豪密封", desc: "石墨密封件 · 石墨轴套 · OEM加工" },
  en: { name: "Huahao Sealing", desc: "Carbon graphite seals · bushings · OEM machining" },
  vi: { name: "Huahao Sealing", desc: "Phớt graphite · bạc lót · gia công OEM" },
  th: { name: "Huahao Sealing", desc: "ซีลกราไฟต์ · บูช · งาน OEM" },
  ru: { name: "Huahao Sealing", desc: "Графитовые уплотнения · втулки · OEM" },
  ja: { name: "Huahao Sealing", desc: "グラファイトシール · ブッシング · OEM加工" },
  ko: { name: "Huahao Sealing", desc: "그라파이트 씰 · 부싱 · OEM 가공" },
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const t = useTranslations()
  const locale = useLocale()
  const brand = getLocalized(brandCopy, locale)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.applications"), href: "/applications" },
    { label: t("nav.factory"), href: "/factory" },
    { label: t("nav.cases"), href: "/cases" },
    { label: t("nav.faq"), href: "/faq" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-white/95 border-b border-border"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-[76px]">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <Image
            src="/images/logo.webp"
            alt={t("company.name")}
            width={160}
            height={52}
            className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
          <div className="hidden lg:block pl-3 border-l border-border" translate="no">
            <div className="text-[11px] leading-tight text-primary font-bold uppercase tracking-[0.08em] whitespace-nowrap">
              {brand.name}
            </div>
            <div className="text-[11px] leading-tight text-muted mt-0.5 whitespace-nowrap">
              {brand.desc}
            </div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(item.href)
                  ? "text-accent"
                  : "text-muted-dark hover:text-primary hover:bg-gray-50"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
          <div className="w-px h-5 bg-border mx-2" />
          <LanguageSwitcher />
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm ml-1 px-4"
          >
            {t("nav.whatsapp")}
          </a>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu with overlay */}
      {open && (
        <div className="xl:hidden border-t border-border bg-white">
          <div className="container-wide py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-accent bg-accent-subtle"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm justify-center w-full"
                onClick={() => setOpen(false)}
              >
                {t("nav.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
