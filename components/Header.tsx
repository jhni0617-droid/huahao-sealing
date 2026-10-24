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
  ja: { name: "Huahao Sealing", desc: "グラファイトシール · ブッシュ · OEM加工" },
  ko: { name: "Huahao Sealing", desc: "그라파이트 씰 · 부싱 · OEM 가공" },
}

/* 全站统一导航：直达项。
   第一项是「首页」——此前只能靠点 logo 回首页，内页没有任何明确的返回入口。 */
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

  // 首页判断直接用 next-intl 的 pathname（已去掉语言前缀），SSR 与客户端结果一致，
  // 不需要 effect 兜底 —— 旧写法用 useState(true) + effect 修正，会让内页首屏
  // 短暂按「首页透明态」渲染，并且触发 react-hooks/set-state-in-effect。
  const isHome = pathname === "/"

  // 滚动监听
  useEffect(() => {
    // 首页 hero 占满一屏，滚动期间 header 一直压在 hero 图上，
    // 因此阈值取「一屏高度」——在 hero 内保持完全透明 + 白字，
    // 滚出 hero（进入白色内容区）才切换为实底深字，避免白字压白底看不清。
    // 其余页面没有 hero，轻微滚动即切换。
    const onScroll = () => {
      const threshold = isHome ? Math.max(window.innerHeight - 140, 160) : 8
      setScrolled(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

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
            ? "border-b border-border/60 bg-white/70 shadow-sm backdrop-blur-md"
            : "border-b border-border/60 bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between px-6 md:h-[72px] md:px-10 xl:px-[4.5vw]">
        <Link href="/" className="flex shrink-0 items-center gap-3 rounded-[4px]">
          <Image
            src="/images/logo-mark.webp"
            alt={t("company.name")}
            width={320}
            height={199}
            className="h-9 w-auto object-contain md:h-10"
            priority
          />
          {/* 左上角公司名（hero 透明态显示）。
              xl 以下不显示整块：1024~1279px 加上 8 项导航后没有它的位置（俄语会溢出）。
              xl 起显示公司名；副标题更长，留到 2xl 才出现，避免 1280~1535px 被撑爆。 */}
          <div className={`hidden flex-col leading-tight transition-colors xl:flex ${heroTransparent ? "text-white" : "text-primary-dark"}`}>
            <span className="font-serif-sc text-[16px] font-bold tracking-wide">{brand.name}</span>
            <span className="hidden text-[12px] opacity-70 2xl:inline">{brand.desc}</span>
          </div>
        </Link>

        {/* 桌面端：直达导航项，右对齐收在 logo 对称边距处。
            加「首页」后共 8 项。俄语标签明显更长（Применение=101px、Загрузки=71px…），
            实测 1024~1440px 原本就会把询价按钮挤出容器（这是加首页之前就存在的问题，
            加首页又多了约 100px），故整体收紧：lg 间距 gap-2、xl 间距 gap-3，
            导航字号 15px / xl 16px。
            导航项加 .nav-underline：顶部 2px 红线，hover/当前页从左展开，需撑满 header 高度。 */}
        <nav className="ml-auto hidden self-stretch items-stretch gap-2 lg:flex xl:gap-3" aria-label="Main navigation">
          {heroNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href) || undefined}
              className={`nav-underline flex items-center px-1 text-[15px] font-medium transition-colors xl:text-[16px] ${
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
        <div className="ml-2 hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher transparent={heroTransparent} />
          <Link
            href="/contact"
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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
          <LanguageSwitcher transparent={heroTransparent} />
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