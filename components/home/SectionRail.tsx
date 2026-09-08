import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"

/**
 * 首页概念 A（瑞士工业风）专属的区块左栏：红色大序号 + 宋体短标题 + 英文标注 + 查看更多。
 * 仅首页使用；内页保持 SectionHead 体系不受影响。
 * 同步组件：locale 由调用方传入（server 端 getLocale()，client 端 useLocale()）。
 */

const moreLabel = {
  zh: "查看更多",
  en: "View more",
  vi: "Xem thêm",
  th: "ดูเพิ่มเติม",
  ru: "Подробнее",
  ja: "もっと見る",
  ko: "더 보기",
}

type SectionRailProps = {
  locale: string
  index: string
  label: string
  en: string
  href?: string
  dark?: boolean
}

export default function SectionRail({ locale, index, label, en, href, dark = false }: SectionRailProps) {
  const more = getLocalized(moreLabel, locale)
  return (
    <div className={`flex items-start gap-4 lg:sticky lg:top-28 lg:block ${dark ? "text-white" : ""}`}>
      <span className="stat-num text-3xl leading-none text-accent lg:text-4xl" aria-hidden>
        {index}
      </span>
      <div className="lg:mt-4">
        <h2 className="font-serif-sc text-xl font-bold leading-snug lg:text-2xl">{label}</h2>
        <div className={`en-caption mt-1.5 text-[10px] lg:text-[11px] ${dark ? "text-white/40" : "text-muted-light"}`}>
          {en}
        </div>
        {href && (
          <Link
            href={href}
            className={`group mt-4 hidden items-center gap-1.5 text-xs font-medium tracking-wide lg:inline-flex ${
              dark ? "text-white/60 hover:text-white" : "text-muted hover:text-accent"
            }`}
          >
            {more}
            <svg
              className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

/** 首页区块统一骨架：细线分隔 + 左栏栅格 */
export function HomeSection({
  children,
  className = "",
  bordered = true,
}: {
  children: React.ReactNode
  className?: string
  bordered?: boolean
}) {
  return (
    <section className={`${bordered ? "border-t border-border" : ""} ${className}`}>
      <div className="container-wide grid gap-10 py-16 md:py-24 lg:grid-cols-[200px_1fr] lg:gap-14">
        {children}
      </div>
    </section>
  )
}
