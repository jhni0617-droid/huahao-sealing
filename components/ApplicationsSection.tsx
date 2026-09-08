import Image from "next/image"
import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"
import { applicationsByLocale } from "@/lib/translations"
import Reveal from "@/components/ui/Reveal"
import SectionRail, { HomeSection } from "@/components/home/SectionRail"

const railLabel = {
  zh: "应用行业", en: "Applications", vi: "Lĩnh vực ứng dụng", th: "อุตสาหกรรมแอปพลิเคชัน", ru: "Отрасли применения", ja: "適用業界", ko: "적용 산업",
}

/* 行业瓷砖配图:Pexels 免署名可商用,来源记录见 docs/image-credits-stock.md */
const tileImages: Record<string, { src: string; alt: string }> = {
  "pump-industry": { src: "/images/stock/industry-pump.webp", alt: "Industrial pump piping and rotating equipment" },
  "marine-industry": { src: "/images/stock/industry-marine.webp", alt: "Container ship being loaded at a port terminal" },
  "chemical-processing": { src: "/images/stock/industry-chemical.webp", alt: "Distillation towers of a chemical plant" },
  "power-energy": { src: "/images/stock/industry-power.webp", alt: "Cooling towers of a power station" },
  "food-pharma": { src: "/images/stock/industry-food.webp", alt: "Workers on a food processing line" },
  "mining-metallurgy": { src: "/images/stock/industry-mining.webp", alt: "Mining truck working in an open pit" },
  "oil-gas": { src: "/images/stock/industry-oil.webp", alt: "Oil refinery process towers" },
  "general-sealing": { src: "/images/stock/industry-general.webp", alt: "Industrial pipelines and valves" },
}

export default async function ApplicationsSection() {
  const locale = await getLocale()
  const t = await getTranslations("home.applicationsSection")
  const items = getLocalized(applicationsByLocale, locale)
  const viewText = getLocalized({
    zh: "查看应用",
    en: "View application",
    vi: "Xem ứng dụng",
    th: "ดูการใช้งาน",
    ru: "Смотреть применение",
    ja: "用途を見る",
    ko: "응용 보기",
  }, locale)

  return (
    <HomeSection className="bg-background">
      <SectionRail locale={locale} index="05" label={getLocalized(railLabel, locale)} en="Applications" href="/applications" />

      <div className="min-w-0">
        <Reveal>
          <h2 className="max-w-3xl font-serif-sc text-3xl font-bold leading-tight text-primary md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{t("description")}</p>
        </Reveal>

        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {items.map((app, index) => (
            <Reveal key={app.slug} delay={index * 80} className="h-full">
              <Link
                href={`/applications#${app.slug}`}
                className="group relative flex h-full flex-col bg-white transition-colors duration-300 hover:bg-[#fafafb]"
              >
                {/* 照片:灰阶 → 悬停彩色,与产品卡一致 */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-background">
                  <Image
                    src={tileImages[app.slug]?.src ?? "/images/stock/industry-general.webp"}
                    alt={tileImages[app.slug]?.alt ?? app.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span
                    className="stat-num pointer-events-none absolute right-3 top-2 text-4xl leading-none text-white/85 transition-colors duration-300 group-hover:text-white lg:text-5xl"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="mb-3 text-lg font-bold text-primary transition-colors group-hover:text-accent">
                    {app.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{app.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-bold uppercase tracking-[0.14em] text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {viewText}
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </HomeSection>
  )
}
