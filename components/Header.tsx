"use client"

import { useState, useEffect } from "react"
import { Link, usePathname } from "@/i18n/routing"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import Icon from "@/components/ui/Icon"
import { getLocalized } from "@/lib/locale-data"
import { siteConfig } from "@/lib/constants"
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

/* mega-panel 左侧栏目介绍（良工式 sub_txt） */
const menuIntroByLocale: Record<string, { zh: string; en: string; vi: string; th: string; ru: string; ja: string; ko: string }> = {
  "/products": {
    zh: "主营碳石墨密封环、石墨轴套/轴承、碳石墨三瓣环，支持按图纸与样品定制加工。",
    en: "Carbon graphite seal rings, bushings & bearings, and segmented split rings — custom machined from drawing or sample.",
    vi: "Vòng phớt, bạc lót/ổ trục và vòng chia than chì carbon — gia công theo bản vẽ hoặc mẫu.",
    th: "แหวนซีล บูช/แบริ่ง และแหวนแบ่งคาร์บอนกราไฟต์ ผลิตตามแบบหรือตัวอย่าง",
    ru: "Углерод-графитовые кольца, втулки и сегментные кольца — изготовление по чертежу или образцу.",
    ja: "カーボングラファイトシールリング、ブッシング/軸受、分割リング。図面・サンプルによるカスタム加工対応。",
    ko: "카본 그라파이트 씰 링, 부싱/베어링, 분할 링 — 도면 및 샘플 기반 맞춤 가공.",
  },
  "/cases": {
    zh: "工厂实拍、生产设备与品控流程，以及各行业的密封应用案例。",
    en: "Factory tour, production equipment and QC process, plus sealing case studies across industries.",
    vi: "Tham quan nhà máy, thiết bị sản xuất, quy trình QC và các case study ứng dụng.",
    th: "ชมโรงงาน อุปกรณ์การผลิต กระบวนการ QC และกรณีศึกษาการใช้งานซีล",
    ru: "Завод, оборудование и контроль качества, а также кейсы применения уплотнений.",
    ja: "工場見学、生産設備、品質管理プロセス、および各業界のシール適用事例。",
    ko: "공장 투어, 생산 설비, 품질 관리 프로세스 및 산업별 씰링 적용 사례.",
  },
  "/blog": {
    zh: "技术文章、材料选型指南与常见问题解答。",
    en: "Technical articles, material selection guides and FAQ.",
    vi: "Bài viết kỹ thuật, hướng dẫn chọn vật liệu và FAQ.",
    th: "บทความเทคนิค คู่มือเลือกวัสดุ และคำถามที่พบบ่อย",
    ru: "Технические статьи, руководства по выбору материала и FAQ.",
    ja: "技術記事、材料選定ガイド、よくある質問。",
    ko: "기술 문서, 소재 선정 가이드 및 FAQ.",
  },
  "/compare": {
    zh: "材料对比、技术参数与行业应用参考资料。",
    en: "Material comparisons, technical specs and application references.",
    vi: "So sánh vật liệu, thông số kỹ thuật và tài liệu ứng dụng.",
    th: "เปรียบเทียบวัสดุ ข้อมูลทางเทคนิค และเอกสารการใช้งาน",
    ru: "Сравнение материалов, технические параметры и справочные материалы.",
    ja: "材料比較、技術パラメータ、応用リファレンス。",
    ko: "소재 비교, 기술 매개변수 및 응용 자료.",
  },
  "/about": {
    zh: "公司简介、工厂实力与认证资质。",
    en: "Company profile, factory strength and certifications.",
    vi: "Giới thiệu công ty, năng lực nhà máy và chứng nhận.",
    th: "ข้อมูลบริษัท ความสามารถโรงงาน และใบรับรอง",
    ru: "О компании, производственные мощности и сертификаты.",
    ja: "会社概要、工場の強み、認証資格。",
    ko: "회사 소개, 공장 역량 및 인증.",
  },
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
      label: getLocalized({ zh: "技术资源下载", en: "Resources", vi: "Tài nguyên", th: "แหล่งข้อมูล", ru: "Ресурсы", ja: "リソース", ko: "리소스" }, locale),
      href: "/compare",
      hasDropdown: true,
      dropdownGroups: [
        {
          title: getLocalized({ zh: "技术资源", en: "Resources", vi: "Tài nguyên", th: "แหล่งข้อมูล", ru: "Ресурсы", ja: "リソース", ko: "리소스" }, locale),
          items: [
            { label: getLocalized({ zh: "材料对比", en: "Material Compare", vi: "So sánh vật liệu", th: "เปรียบเทียบวัสดุ", ru: "Сравнение материалов", ja: "材料比較", ko: "재료 비교" }, locale), href: "/compare", icon: "layers" },
            { label: getLocalized({ zh: "技术参数", en: "Technical Specs", vi: "Thông số kỹ thuật", th: "ข้อมูลทางเทคนิค", ru: "Технические параметры", ja: "技術パラメータ", ko: "기술 매개변수" }, locale), href: "/technical-params", icon: "ruler" },
            { label: getLocalized({ zh: "行业应用", en: "Applications", vi: "Ứng dụng", th: "การใช้งาน", ru: "Применения", ja: "応用", ko: "적용 분야" }, locale), href: "/applications", icon: "factory" },
          ],
        },
        {
          title: getLocalized({ zh: "资料下载", en: "Downloads", vi: "Tải xuống", th: "ดาวน์โหลด", ru: "Скачать", ja: "資料ダウンロード", ko: "자료 다운로드" }, locale),
          items: [
            { label: getLocalized({ zh: "宣传册", en: "Company Brochure", vi: "Tài liệu giới thiệu", th: "โบรชัวร์บริษัท", ru: "Брошюра компании", ja: "会社パンフレット", ko: "회사 브로슈어" }, locale), href: "/downloads/Huahao-Seals-Brochure.pdf", icon: "download" },
            { label: getLocalized({ zh: "产品目录", en: "Product Catalog", vi: "Danh mục sản phẩm", th: "แคตตาล็อกสินค้า", ru: "Каталог продукции", ja: "製品カタログ", ko: "제품 카탈로그" }, locale), href: "/downloads/huahao-product-catalog.pdf", icon: "download" },
            { label: getLocalized({ zh: "出口资料", en: "Export Documents", vi: "Tài liệu xuất khẩu", th: "เอกสารการส่งออก", ru: "Экспортные документы", ja: "輸出書類", ko: "수출 서류" }, locale), href: "/downloads/Huahao-Export-Declaration.docx", icon: "download" },
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-white"
      }`}
    >
      {/* 顶部信息条（良工式：深色细条 + 联系方式） */}
      <div className="hidden bg-primary text-white/65 md:block">
        <div className="container-wide flex h-9 items-center justify-between text-xs">
          <span className="en-caption text-[11px]">Huahao Sealing · Carbon Graphite Components</span>
          <div className="flex items-center gap-6">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Icon name="mail" className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/-/g, "")}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
              </svg>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className="container-wide relative flex items-center justify-between h-14 border-b border-border md:h-[64px]"
        onMouseLeave={() => setActiveDropdown(null)}
      >
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
                  onMouseEnter={() => setActiveDropdown(item.href)}
                  className={`relative flex items-center px-3.5 py-2 text-[15px] font-semibold transition-colors whitespace-nowrap ${
                    isActive(item.href) || activeDropdown === item.href
                      ? "text-accent"
                      : "text-muted-dark hover:text-accent"
                  } cursor-pointer`}
                >
                  {item.label}
                  <span className={`absolute inset-x-3.5 bottom-0 h-[2px] bg-accent transition-transform duration-200 ${activeDropdown === item.href ? "scale-x-100" : "scale-x-0"}`} aria-hidden />
                  <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.href ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`relative flex items-center px-3.5 py-2 text-[15px] font-semibold transition-colors whitespace-nowrap ${
                    isActive(item.href)
                      ? "text-accent"
                      : "text-muted-dark hover:text-accent"
                  }`}
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.label}
                  {isActive(item.href) && <span className="absolute inset-x-3.5 bottom-0 h-[2px] bg-accent" aria-hidden />}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* 良工式整幅 mega-panel：左侧栏目介绍 + 右侧带箭头分类列表 */}
        {navItems.map((item) => {
          if (!item.hasDropdown || activeDropdown !== item.href || !item.dropdownGroups) return null
          const intro = getLocalized(menuIntroByLocale[item.href] ?? { zh: "", en: "", vi: "", th: "", ru: "", ja: "", ko: "" }, locale)
          return (
            <div
              key={`mega-${item.href}`}
              className="dropdown-container absolute inset-x-0 top-full z-50 hidden border border-t-0 border-border bg-white shadow-[0_24px_48px_rgba(23,25,29,0.14)] lg:block"
            >
              <div className="grid grid-cols-[300px_1fr]">
                <div className="border-r border-border bg-background p-7">
                  <div className="text-lg font-bold text-primary">{item.label}</div>
                  <div className="mt-1 h-[2px] w-8 bg-accent" aria-hidden />
                  <p className="mt-4 text-xs leading-relaxed text-muted">{intro}</p>
                  <Link
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent"
                  >
                    View All
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="p-5">
                  {item.dropdownGroups.map((group, gi) => (
                    <div key={gi} className={gi > 0 ? "mt-3 border-t border-border-light pt-3" : ""}>
                      {item.dropdownGroups && item.dropdownGroups.length > 1 && (
                        <div className="en-caption px-3 pb-1.5 text-[11px] text-muted-light">{group.title}</div>
                      )}
                      <ul>
                        {group.items.map((sub, si) => {
                          const item = (
                            <>
                              <span className="flex items-center gap-2.5 text-sm text-muted-dark transition-colors group-hover/sub:text-accent">
                                <Icon name={sub.icon} className="h-4 w-4 shrink-0 text-muted-light transition-colors group-hover/sub:text-accent" />
                                {sub.label}
                              </span>
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-border text-muted-light transition-all group-hover/sub:border-accent group-hover/sub:bg-accent group-hover/sub:text-white">
                                <svg className="h-3 w-3 transition-transform group-hover/sub:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </>
                          )
                          return (
                            <li key={`${gi}-${si}`}>
                              {sub.href.startsWith("/downloads/") ? (
                                <a
                                  href={sub.href}
                                  download
                                  onClick={() => setActiveDropdown(null)}
                                  className="group/sub flex items-center justify-between gap-3 px-3 py-2 transition-colors hover:bg-accent-subtle"
                                >
                                  {item}
                                </a>
                              ) : (
                                <Link
                                  href={sub.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group/sub flex items-center justify-between gap-3 px-3 py-2 transition-colors hover:bg-accent-subtle"
                                >
                                  {item}
                                </Link>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}

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
                          {group.items.map((sub, si) => {
                            const mobileItem = (
                              <>
                                <Icon name={sub.icon} className="h-4 w-4 text-muted" />
                                {sub.label}
                              </>
                            )
                            return sub.href.startsWith("/downloads/") ? (
                              <a
                                key={`mobile-${gi}-${si}`}
                                href={sub.href}
                                download
                                className="flex items-center gap-2 py-2 px-3 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                                onClick={() => setOpen(false)}
                              >
                                {mobileItem}
                              </a>
                            ) : (
                              <Link
                                key={`mobile-${gi}-${si}`}
                                href={sub.href}
                                className="flex items-center gap-2 py-2 px-3 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                                onClick={() => setOpen(false)}
                              >
                                {mobileItem}
                              </Link>
                            )
                          })}
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
