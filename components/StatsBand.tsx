import { getLocale } from "next-intl/server"
import { getLocalized } from "@/lib/locale-data"
import { factoryHighlightsByLocale } from "@/lib/translations"

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
 * 概念 A 统计带：白色底、超大展示体数字、细线竖分。
 * 数据（factoryHighlightsByLocale）保持不变。
 */
export default async function StatsBand() {
  const locale = await getLocale()
  const highlights = getLocalized(factoryHighlightsByLocale, locale)
  const caption = getLocalized(captionByLocale, locale)

  return (
    <section className="bg-white">
      <div className="container-wide py-12 md:py-16">
        <div className="en-caption mb-8 flex items-center gap-4 text-[11px] text-muted-light" aria-hidden>
          <span className="h-px w-8 bg-border" />
          {caption}
          <span className="h-px flex-1 bg-border-light" />
        </div>
        <dl className="grid grid-cols-3">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`px-3 text-center sm:px-6 ${i > 0 ? "border-l border-border" : ""}`}
            >
              <dd className="stat-num text-5xl leading-none text-primary sm:text-7xl lg:text-8xl">{h.value}</dd>
              <dt className="mt-4 text-xs font-medium tracking-wide text-muted sm:text-sm">
                {h.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
