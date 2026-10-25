"use client"

import { useState, useEffect } from "react"
import { Link, usePathname } from "@/i18n/routing"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import Icon from "@/components/ui/Icon"
import { getLocalized } from "@/lib/locale-data"

/*
 * 导航样式一比一复刻「紧固件」站 Header：
 *  - header 高 80px（≥1180px），左右内边距 40px；移动端 64px / 20px
 *  - 导航项撑满 header 高度，字号 16px、左右内边距 20px
 *  - 红色指示条在**顶部**（.header__nav>ul>li>a:before：2px、left:50% width:0 → hover/.on 时 left:0 width:100%）
 *  - 底栏：白底、border-b；滚动超过 80px 加 shadow-sm
 *
 * 与紧固件的两处刻意不同：
 *  1. **不加二级下拉** —— 本站导航是扁平 8 项，不做 mega menu。
 *  2. **logo 不透明** —— 不做 hero 顶部「透明 header + 浅色 logo」切换，
 *     header 常驻实底白，logo 固定用彩色版 logo-mark.webp。
 *
 * ⚠️ 断点一律写成字面量 min-[1180px]:，不要抽成常量拼接 —— Tailwind 按源码字面量扫描生成 CSS，
 * `${X}:h-20` 这种写法不会产出任何规则（实测会让 header 永远停在 64px、导航永远是汉堡）。
 * ⚠️ 1180~1599px 导航字号/内边距逐级收紧（15px→16px、12px→16px→20px）：俄语标签
 * （Применение=101px、Загрузки=71px…）在 1440px 按紧固件的 16px/20px 排版会把 header 撑出
 * 24px 横向溢出，实测确认过。1600px 起才完全对齐紧固件。
 */

const brandCopy = {
  zh: { name: "华豪密封", desc: "石墨密封件 · 石墨轴套 · OEM加工" },
  en: { name: "Huahao Sealing", desc: "Carbon graphite seals · bushings · OEM machining" },
  vi: { name: "Huahao Sealing", desc: "Phớt graphite · bạc lót · gia công OEM" },
  th: { name: "Huahao Sealing", desc: "ซีลกราไฟต์ · บูช · งาน OEM" },
  ru: { name: "Huahao Sealing", desc: "Графитовые уплотнения · втулки · OEM" },
  ja: { name: "Huahao Sealing", desc: "グラファイトシール · ブッシュ · OEM加工" },
  ko: { name: "Huahao Sealing", desc: "그라파이트 씰 · 부싱 · OEM 가공" },
}

/* 全站统一导航：直达项（扁平结构，无二级）。
   第一项是「首页」——此前只能靠点 logo 回首页，内页没有明确的返回入口。 */
const heroNavLabels = {
  "/": { zh: "首页", en: "Home", vi: "Trang chủ", th: "หน้าแรก", ru: "Главная", ja: "ホーム", ko: "홈" },
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

  // 滚动超过 80px 后加阴影（复刻紧固件：80px 前无阴影，80px 后 shadow-sm）
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const heroNav = Object.entries(heroNavLabels).map(([href, labels]) => ({
    href,
    label: getLocalized(labels, locale),
  }))

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-colors duration-300 ${
        scrolled ? "border-border shadow-sm" : "border-border/60"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between px-5 min-[1180px]:h-20 min-[1180px]:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 rounded-[4px] min-[1180px]:gap-3">
          <Image
            src="/images/logo-mark.webp"
            alt={t("company.name")}
            width={320}
            height={199}
            className="h-9 w-auto object-contain md:h-10"
            priority
          />
          {/* 左上角公司名。xl 以下不显示整块：1180~1279px 加上 8 项导航后没有它的位置（俄语会溢出）。 */}
          <div className="hidden flex-col leading-tight text-primary-dark min-[1440px]:flex">
            <span className="font-serif-sc text-[13px] font-bold tracking-wide min-[1440px]:text-[15px]">{brand.name}</span>
            <span className="hidden text-[11px] opacity-70 2xl:inline">{brand.desc}</span>
          </div>
        </Link>

        {/* 桌面导航：撑满 header 高度，红色指示条走顶部 */}
        <nav className="ml-auto hidden self-stretch items-stretch min-[1180px]:flex" aria-label="Main navigation">
          {heroNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href) || undefined}
              className={`nav-underline flex items-center whitespace-nowrap px-3 text-[15px] transition-colors duration-500 min-[1440px]:px-4 min-[1600px]:px-5 min-[1600px]:text-[16px] ${
                isActive(item.href) ? "text-accent" : "text-muted-dark hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 右侧语言切换与询价按钮 */}
        <div className="ml-3 hidden items-center gap-3 min-[1180px]:flex">
          <LanguageSwitcher transparent={false} />
          <Link href="/contact" className="btn-primary flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-colors">
            <Icon name="mail" className="h-4 w-4" />
            {t("nav.quote")}
          </Link>
        </div>

        {/* 移动端按钮 */}
        <div className="flex items-center gap-2 min-[1180px]:hidden">
          <LanguageSwitcher transparent={false} />
          <button
            className="rounded-lg p-2 text-primary-dark transition-colors hover:bg-gray-100"
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

      {/* 移动端抽屉：每项 border-b 分隔（复刻紧固件） */}
      {open && (
        <div className="border-t border-border bg-white min-[1180px]:hidden">
          <div className="px-5 py-4">
            {heroNav.map((item) => (
              <div key={item.href} className="border-b border-border-light py-1 last:border-b-0">
                <Link
                  href={item.href}
                  className={`block py-2.5 text-[15px] font-medium transition-colors ${
                    isActive(item.href) ? "text-accent" : "text-muted-dark hover:text-accent"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-4 flex items-center justify-center gap-1.5 text-sm"
              onClick={() => setOpen(false)}
            >
              <Icon name="mail" className="h-4 w-4" />
              {t("nav.quote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
