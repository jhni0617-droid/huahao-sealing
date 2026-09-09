"use client"

import { useState, useEffect } from "react"
import { Link, usePathname } from "@/i18n/routing"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import Icon from "@/components/ui/Icon"
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

/* 全站统一导航：六个直达项 */
const heroNavLabels = {
  "/products": { zh: "产品", en: "Products", vi: "Sản phẩm", th: "สินค้า", ru: "Продукция", ja: "製品", ko: "제품" },
  "/applications": { zh: "应用领域", en: "Applications", vi: "Ứng dụng", th: "การใช้งาน", ru: "Применение", ja: "用途", ko: "응용 분야" },
  "/factory": { zh: "工厂与质量", en: "Factory & Quality", vi: "Nhà máy & Chất lượng", th: "โรงงาน & คุณภาพ", ru: "Завод и качество", ja: "工場と品質", ko: "공장 & 품질" },
  "/cases": { zh: "案例", en: "Cases", vi: "Dự án", th: "กรณีศึกษา", ru: "Кейсы", ja: "導入事例", ko: "사례" },
  "/blog": { zh: "博客", en: "Blog", vi: "Blog", th: "บล็อก", ru: "Блог", ja: "ブログ", ko: "블로그" },
  "/download": { zh: "资料下载", en: "Downloads", vi: "Tài liệu", th: "ดาวน์โหลด", ru: "Загрузки", ja: "資料ダウンロード", ko: "자료실" },
  "/contact": { zh: "联系我们", en: "Contact", vi: "Liên hệ", th: "ติดต่อเรา", ru: "Контакты", ja: "お問い合わせ", ko: "문의하기" },
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  // 判断是否在首页（用于 hero 顶部透明白字导航）
  const isHome = /^\/[a-z]{2}(\/)?$/.test(pathname)
  // hero 顶部透明态：首页 + 未滚动
  const heroTransparent = isHome && !scrolled

  const heroNav = Object.entries(heroNavLabels).map(([href, labels]) => ({
    href,
    label: getLocalized(labels, locale),
  }))

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        heroTransparent
          ? "border-b border-transparent bg-transparent"
          : scrolled
            ? "border-b border-border bg-white/95 shadow-sm backdrop-blur"
            : "border-b border-border/60 bg-white/95 backdrop-blur"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between px-6 md:h-[72px] md:px-10 xl:px-[4.5vw]">
        <Link href="/" className="flex shrink-0 items-center gap-3 rounded-[4px]">
          <Image
            src="/images/logo.webp"
            alt={t("company.name")}
            width={160}
            height={52}
            className="h-9 w-auto object-contain md:h-10"
            priority
          />
          {/* 左上角公司名（hero 透明态显示） */}
          <div className={`hidden flex-col leading-tight transition-colors md:flex ${heroTransparent ? "text-white" : "text-primary-dark"}`}>
            <span className="font-serif-sc text-[15px] font-bold tracking-wide">{brand.name}</span>
            <span className="text-[11px] opacity-70">{brand.desc}</span>
          </div>
        </Link>

        {/* 桌面端：六个直达导航项，右对齐收在 logo 对称边距处 */}
        <nav className="ml-auto hidden items-center gap-5 lg:flex xl:gap-9" aria-label="Main navigation">
          {heroNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium transition-colors xl:text-base ${
                heroTransparent
                  ? isActive(item.href)
                    ? "text-white"
                    : "text-white/85 hover:text-white"
                  : isActive(item.href)
                    ? "text-accent"
                    : "text-muted-dark hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 右侧语言切换与询价按钮（桌面端） */}
        <div className="ml-3 hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              heroTransparent
                ? "bg-white/15 text-white backdrop-blur hover:bg-white/25 ring-1 ring-white/30"
                : "btn-primary"
            }`}
          >
            <Icon name="mail" className="h-4 w-4" />
            {t("nav.quote")}
          </Link>
        </div>

        {/* 移动端按钮 */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            className={`rounded-lg p-2 transition-colors ${heroTransparent ? "text-white hover:bg-white/10" : "text-primary-dark hover:bg-gray-100"}`}
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
          <div className="px-6 py-4">
            <div className="flex flex-col">
              {heroNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 text-[15px] font-medium transition-colors ${
                    isActive(item.href) ? "text-accent" : "text-muted-dark hover:text-accent"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3 border-t border-border pt-4">
              <Link
                href="/contact"
                className="btn-primary flex flex-1 items-center justify-center gap-1.5 text-sm"
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