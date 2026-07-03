"use client"

import { useState, useEffect } from "react"
import { Link, usePathname } from "@/i18n/routing"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import Icon from "@/components/ui/Icon"
import { getLocalized } from "@/lib/locale-data"
import type { IconName } from "@/components/ui/Icon"

const brandCopy = {
  zh: { name: "华豪密封", desc: "石墨密封件 · 石墨轴套 · OEM加工" },
  en: { name: "Huahao Sealing", desc: "Carbon graphite seals · bushings · OEM machining" },
  vi: { name: "Huahao Sealing", desc: "Phớt graphite · bạc lót · gia công OEM" },
  th: { name: "Huahao Sealing", desc: "ซีลกราไฟต์ · บูช · งาน OEM" },
  ru: { name: "Huahao Sealing", desc: "Графитовые уплотнения · втулки · OEM" },
  ja: { name: "Huahao Sealing", desc: "グラファイトシール · ブッシング · OEM加工" },
  ko: { name: "Huahao Sealing", desc: "그라파이트 씰 · 부싱 · OEM 가공" },
}

type DropdownItem = {
  label: string
  href: string
  icon: IconName
}

type DropdownGroup = {
  title: string
  items: DropdownItem[]
}

type NavItem = {
  label: string
  href: string
  hasDropdown: boolean
  dropdownGroups?: DropdownGroup[]
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpandedItems, setMobileExpandedItems] = useState<Set<string>>(new Set())
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(".dropdown-container")) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const navItems: NavItem[] = [
    {
      label: t("nav.home"),
      href: "/",
      hasDropdown: false,
    },
    {
      label: t("nav.products"),
      href: "/products",
      hasDropdown: true,
      dropdownGroups: [
        {
          title: t("nav.productMenu.groupProducts"),
          items: [
            { label: t("nav.productMenu.raw"), href: "/products", icon: "box" },
            { label: t("nav.productMenu.sealRings"), href: "/products", icon: "seal" },
            { label: t("nav.productMenu.bushings"), href: "/products", icon: "gear" },
            { label: t("nav.productMenu.splitRings"), href: "/products", icon: "droplet" },
            { label: t("nav.productMenu.custom"), href: "/contact", icon: "sparkles" },
          ],
        },
        {
          title: t("nav.productMenu.groupSolutions"),
          items: [
            { label: t("nav.productMenu.solutions"), href: "/applications", icon: "layers" },
            { label: t("nav.productMenu.ev"), href: "/applications", icon: "bolt" },
            { label: t("nav.productMenu.semiconductor"), href: "/applications", icon: "atom" },
            { label: t("nav.productMenu.chemical"), href: "/applications", icon: "flask" },
            { label: t("nav.productMenu.metallurgy"), href: "/applications", icon: "fire" },
          ],
        },
      ],
    },
    {
      label: t("nav.cases"),
      href: "/cases",
      hasDropdown: true,
      dropdownGroups: [
        {
          title: t("nav.casesMenu.groupFactory"),
          items: [
            { label: t("nav.casesMenu.factory"), href: "/factory", icon: "factory" },
            { label: t("nav.casesMenu.workshop"), href: "/factory", icon: "gear" },
            { label: t("nav.casesMenu.quality"), href: "/factory", icon: "microscope" },
            { label: t("nav.casesMenu.process"), href: "/factory", icon: "layers" },
            { label: t("nav.casesMenu.capacity"), href: "/factory", icon: "clock" },
            { label: t("nav.casesMenu.certificates"), href: "/factory", icon: "certificate" },
          ],
        },
        {
          title: t("nav.casesMenu.groupCases"),
          items: [
            { label: t("nav.casesMenu.sealCases"), href: "/cases", icon: "seal" },
            { label: t("nav.casesMenu.semiconductorCases"), href: "/cases", icon: "atom" },
            { label: t("nav.casesMenu.moldCases"), href: "/cases", icon: "fire" },
            { label: t("nav.casesMenu.exportCases"), href: "/cases", icon: "ship" },
            { label: t("nav.casesMenu.customCases"), href: "/cases", icon: "clipboard" },
          ],
        },
      ],
    },
    {
      label: t("nav.blog"),
      href: "/blog",
      hasDropdown: true,
      dropdownGroups: [
        {
          title: t("nav.blogMenu.groupBlog"),
          items: [
            { label: t("nav.blogMenu.articles"), href: "/blog", icon: "news" },
            { label: t("nav.blogMenu.process"), href: "/blog", icon: "gear" },
            { label: t("nav.blogMenu.selection"), href: "/blog", icon: "check" },
            { label: t("nav.blogMenu.precision"), href: "/blog", icon: "ruler" },
            { label: t("nav.blogMenu.news"), href: "/blog", icon: "eye" },
          ],
        },
        {
          title: t("nav.blogMenu.groupFaq"),
          items: [
            { label: t("nav.blogMenu.faq"), href: "/faq", icon: "question" },
            { label: t("nav.blogMenu.faqLeak"), href: "/faq", icon: "droplet" },
            { label: t("nav.blogMenu.faqTolerance"), href: "/faq", icon: "ruler" },
            { label: t("nav.blogMenu.faqMaterial"), href: "/faq", icon: "seal" },
            { label: t("nav.blogMenu.faqSample"), href: "/faq", icon: "eye" },
          ],
        },
      ],
    },
    {
      label: t("nav.about"),
      href: "/about",
      hasDropdown: true,
      dropdownGroups: [
        {
          title: t("nav.aboutMenu.groupAbout"),
          items: [
            { label: t("nav.aboutMenu.intro"), href: "/about", icon: "building" },
            { label: t("nav.aboutMenu.factory"), href: "/about", icon: "factory" },
            { label: t("nav.aboutMenu.process"), href: "/about", icon: "check" },
            { label: t("nav.aboutMenu.certifications"), href: "/about", icon: "certificate" },
          ],
        },
      ],
    },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const getDropdownCols = (item: NavItem) => {
    return item.dropdownGroups?.length || 1
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-white/95 border-b border-border"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-14 md:h-[64px]">
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/images/logo.webp"
            alt={t("company.name")}
            width={160}
            height={52}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* 桌面端导航 */}
        <nav className="hidden lg:flex items-center flex-1 justify-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <div key={item.href} className="dropdown-container relative">
              {item.hasDropdown ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveDropdown(activeDropdown === item.href ? null : item.href)
                  }}
                  className={`relative flex items-center px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive(item.href)
                      ? "text-accent"
                      : "text-muted-dark hover:text-primary hover:bg-gray-50"
                  } cursor-pointer`}
                >
                  {item.label}
                  <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.href ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`relative flex items-center px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive(item.href)
                      ? "text-accent"
                      : "text-muted-dark hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.label}
                </Link>
              )}

              {item.hasDropdown && activeDropdown === item.href && (
                <div
                  className={`absolute top-full left-0 mt-1 bg-white border border-border rounded-lg shadow-xl py-3 z-50 ${
                    getDropdownCols(item) <= 1
                      ? "w-52"
                      : getDropdownCols(item) === 2
                      ? "w-[440px] grid grid-cols-2 gap-0"
                      : "w-[620px] grid grid-cols-3 gap-0"
                  }`}
                >
                  <div className={`col-span-full flex items-center gap-2 px-4 pb-2 mb-1 border-b border-border-light`}>
                    <span className="text-sm font-bold text-primary">{item.label}</span>
                  </div>

                  {item.dropdownGroups?.map((group, gi) => (
                    <div key={gi} className="px-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 mb-0.5">
                        <span className="w-1 h-3 bg-accent rounded-full" />
                        <span className="text-xs font-bold text-muted-dark uppercase tracking-wide">{group.title}</span>
                      </div>
                      <div className="space-y-0.5">
                        {group.items.map((sub, si) => (
                          <Link
                            key={`${gi}-${si}`}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group/item flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors"
                          >
                            <div className={`flex-shrink-0 w-7 h-7 rounded flex items-center justify-center transition-colors ${
                              isActive(sub.href)
                                ? "bg-accent text-white"
                                : "bg-gray-50 text-muted group-hover/item:bg-accent-subtle group-hover/item:text-accent"
                            }`}>
                              <Icon name={sub.icon} className="h-3.5 w-3.5" />
                            </div>
                            <span className={`text-sm transition-colors ${
                              isActive(sub.href)
                                ? "text-accent font-semibold"
                                : "text-gray-700 group-hover/item:text-primary"
                            }`}>
                              {sub.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 右侧快捷入口和询价按钮 */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <Link href="/contact" className="flex items-center gap-1 text-sm text-muted-dark hover:text-accent transition-colors">
              <Icon name="clipboard" className="h-4 w-4" />
              {t("nav.shortcuts.upload")}
            </Link>
            <LanguageSwitcher />
          </div>

          <Link
            href="/contact"
            className="btn-primary text-sm px-5 flex items-center gap-1.5 ml-2"
          >
            <Icon name="mail" className="h-4 w-4" />
            {t("nav.quote")}
          </Link>
        </div>

        {/* 移动端按钮 */}
        <div className="flex items-center gap-2 lg:hidden">
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

      {/* 移动端菜单 */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-wide py-4 max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <button
                      onClick={() => {
                        setMobileExpandedItems((prev) => {
                          const next = new Set(prev)
                          if (next.has(item.href)) {
                            next.delete(item.href)
                          } else {
                            next.add(item.href)
                          }
                          return next
                        })
                      }}
                      className={`flex items-center justify-between w-full py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-accent bg-accent-subtle"
                          : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-4 w-4 text-muted transition-transform duration-200 ${
                          mobileExpandedItems.has(item.href) ? "rotate-90" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-accent bg-accent-subtle"
                          : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.label}</span>
                    </Link>
                  )}
                  {item.hasDropdown && item.dropdownGroups && mobileExpandedItems.has(item.href) && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-3">
                      {item.dropdownGroups.map((group, gi) => (
                        <div key={gi}>
                          <div className="text-xs font-bold text-muted-dark uppercase tracking-wide px-3 py-1.5">
                            {group.title}
                          </div>
                          {group.items.map((sub, si) => (
                            <Link
                              key={`mobile-${gi}-${si}`}
                              href={sub.href}
                              className="flex items-center gap-2 py-2 px-3 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              <Icon name={sub.icon} className="h-4 w-4 text-muted" />
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border space-y-2">
              <Link href="/contact" className="flex-1 text-center py-2 text-sm text-accent border border-accent rounded-lg flex items-center justify-center gap-1.5">
                <Icon name="clipboard" className="h-4 w-4" />
                {t("nav.shortcuts.upload")}
              </Link>
              <Link
                href="/contact"
                className="btn-primary text-sm justify-center w-full flex items-center gap-1.5"
                onClick={() => setOpen(false)}
              >
                <Icon name="mail" className="h-4 w-4" />
                {t("nav.quote")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
