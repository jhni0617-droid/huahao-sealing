import Image from "next/image"
import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"
import { casesByLocale } from "@/lib/translations"
import Icon from "@/components/ui/Icon"
import Reveal from "@/components/ui/Reveal"
import SectionRail, { HomeSection } from "@/components/home/SectionRail"

const railLabel = {
  zh: "出口案例", en: "Case Studies", vi: "Case study", th: "กรณีศึกษา", ru: "Кейсы", ja: "導入事例", ko: "적용 사례",
}

/* 案例卡配图按 cases 数组固定顺序一一对应;Pexels 免署名可商用,来源见 docs/image-credits-stock.md */
const caseImages = [
  { src: "/images/stock/case-oven.webp", alt: "Industrial furnace interior at a high-temperature material plant" },
  { src: "/images/stock/case-molten-salt.webp", alt: "Concentrated solar thermal power installation" },
  { src: "/images/stock/case-food-mixer.webp", alt: "Confectionery production equipment in a food factory" },
  { src: "/images/stock/case-chemical-pump.webp", alt: "Process towers at a chemical plant" },
  { src: "/images/stock/case-marine-pump.webp", alt: "Vessel under repair in a shipyard dry dock" },
  { src: "/images/stock/case-power-pump.webp", alt: "Large turbine machinery inside a power plant" },
]

export default async function CasesSection() {
  const locale = await getLocale()
  const t = await getTranslations("home.casesSection")
  const items = getLocalized(casesByLocale, locale)

  return (
    <HomeSection className="bg-white">
      <SectionRail locale={locale} index="06" label={getLocalized(railLabel, locale)} en="Case Studies" href="/cases" />

      <div className="min-w-0">
        <Reveal>
          <h2 className="max-w-3xl font-serif-sc text-3xl font-bold leading-tight text-primary md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{t("description")}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {items.map((c, i) => (
            <Reveal key={i} delay={(i % 3) * 90} className="h-full">
            <div className="card-static group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-muted-light">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-background">
                <Image
                  src={caseImages[i]?.src ?? caseImages[0].src}
                  alt={caseImages[i]?.alt ?? c.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="border-b border-border bg-white p-4 sm:p-5 lg:p-6">
                <div className="en-caption mb-2 text-xs text-accent">{c.company}</div>
                <h3 className="text-base font-bold text-primary line-clamp-2 transition-colors group-hover:text-accent sm:text-lg">{c.title}</h3>
              </div>
              <div className="flex flex-1 flex-col bg-white p-4 sm:p-5 lg:p-6">
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3 sm:mb-5 flex-1">{c.condition}</p>
              </div>
              <div className="mt-auto border-t border-border bg-background p-4 sm:p-5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon name="check" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" />
                  <span className="en-caption text-[11px] font-medium text-muted">
                    {t("resultLabel")}
                  </span>
                </div>
                <div className="border-l-2 border-accent pl-3 text-xs sm:text-sm font-semibold text-primary leading-relaxed">{c.result}</div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 lg:mt-12">
          <Link href="/cases" className="btn-secondary">
            {t("viewAll")}
          </Link>
        </Reveal>
      </div>
    </HomeSection>
  )
}
