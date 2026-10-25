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
 *  - 导航项字号 16~17px、左右内边距 12~20px，撑满 header 高度
 *  - 红色指示条在**顶部**（2px，hover / 当前页从左展开）
 *  - 底栏：白底半透明 + 背景模糊（"透明状"），滚动超过 80px 提高不透明度并加 shadow-sm
 *
 * 与紧固件的三处刻意不同：
 *  1. **不加二级下拉** —— 本站导航是扁平 8 项，不做 mega menu。
 *  2. **logo 恒定实体显示** —— 不做「透明 header 换浅色 logo」那套；
 *     logo-huahao.webp 已去掉灰底与顶部残弧，只剩黑字 + 红线，任何状态都是全不透明。
 *  3. **导航允许折两行** —— 俄语/越南语标签更长，一行放不下时自动换行，header 随之长高。
 *
 * ⚠️ 断点一律写成字面量 min-[1180px]:，不要抽成常量拼接 —— Tailwind 按源码字面量扫描生成 CSS，
 * `${X}:h-20` 这种写法不会产出任何规则（实测会让 header 永远停在 64px、导航永远是汉堡）。
 */

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

  // 滚动超过 80px 后提高不透明度并加阴影
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
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-border bg-white/85 shadow-sm" : "border-border/60 bg-white/70"
      }`}
    >
      <div className="flex min-h-16 w-full items-center justify-between px-5 min-[1180px]:min-h-20 min-[1180px]:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo-huahao.webp"
            alt={t("company.name")}
            width={969}
            height={343}
            className="h-10 w-auto object-contain min-[1180px]:h-12"
            priority
          />
        </Link>

        {/* 桌面导航：撑满 header 高度，红色指示条走顶部；放不下时折成两行 */}
        <nav
          className="ml-auto hidden min-h-16 flex-wrap content-stretch justify-end self-stretch min-[1180px]:flex min-[1180px]:min-h-20"
          aria-label="Main navigation"
        >
          {heroNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href) || undefined}
              className={`nav-underline flex items-center whitespace-nowrap px-3 py-3 text-[16px] transition-colors duration-500 min-[1440px]:px-4 min-[1600px]:px-5 min-[1600px]:text-[17px] ${
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
          <Link href="/contact" className="btn-primary flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors">
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
                  className={`block py-2.5 text-[16px] font-medium transition-colors ${
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
