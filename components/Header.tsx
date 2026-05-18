"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function Header() {
  const [open, setOpen] = useState(false)
  const t = useTranslations()

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.applications"), href: "/applications" },
    { label: t("nav.cases"), href: "/cases" },
    { label: t("nav.faq"), href: "/faq" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.jpg"
            alt={t("company.name")}
            width={160}
            height={52}
            className="h-12 w-auto object-contain"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg text-primary">{t("company.name")}</span>
            <span className="text-xs text-muted">{t("company.tagline")}</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <a
            href={`https://wa.me/8615055335103`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm ml-2"
          >
            {t("nav.whatsapp")}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container-wide py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-gray-700 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/8615055335103`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm justify-center mt-2"
            >
               {t("nav.whatsapp")}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
