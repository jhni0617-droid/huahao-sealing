import { getLocale } from "next-intl/server"
import { getLocalized } from "@/lib/locale-data"
import { factoryHighlightsByLocale } from "@/lib/translations"
import CountUp from "@/components/ui/CountUp"

const captionByLocale = {
  zh: "数说华豪",
  en: "Huahao in Numbers",
  vi: "Huahao trong con số",
  th: "Huahao ในตัวเลข",
  ru: "Huahao в цифрах",
  ja: "数字で見るHuahao",
  ko: "숫자로 보는 Huahao",
}

/**
 * 良工式白色统计带：大号展示字体数字 + 虚线分隔。
 * 数字滚动由 CountUp 驱动，进入视口触发一次。
 */
export default async function StatsBand() {
  const locale = await getLocale()
  const highlights = getLocalized(factoryHighlightsByLocale, locale)
  const caption = getLocalized(captionByLocale, locale)

  return (
    <section className="border-b border-border-light bg-white">
      <div className="container-wide py-10 md:py-14">
        <div className="en-caption mb-8 text-center text-xs text-muted-light" aria-hidden>
          {caption}
        </div>
        <dl className="grid grid-cols-3">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`px-3 text-center sm:px-6 ${
                i > 0 ? "border-l border-dashed border-border" : ""
              }`}
            >
              <dd className="stat-num text-5xl text-primary sm:text-6xl lg:text-7xl">
                <CountUp value={h.value} />
              </dd>
              <dt className="mt-3 text-xs font-medium tracking-wide text-muted sm:text-sm">
                {h.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
