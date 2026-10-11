/**
 * 把 content/landing-translations.json 里的俄/日/韩译文合并回落地页条目。
 *
 * 用法（每个落地页数据文件一行，不动它们原有的 6 个 interface）：
 *   export const materialLandings = applyLandingTranslations("materials", [ ...原数组... ])
 *
 * getLocalized() 是 Record<string, T> 泛型，只按运行时取键，
 * 所以往 title/description/advantages 这些语言记录里注入 ru|ja|ko 键就够了，
 * 不需要把 6 个文件的类型逐个改写。
 */
import translations from "../content/landing-translations.json"
import {
  collectLocalizedUnits,
  fingerprintUnit,
  writeLocaleValue,
  type LocalizedUnit,
} from "./landing-i18n-walk"

export type LandingTranslationUnit = { fp: string; out: string[] }
/** section -> slug -> lang -> 按可译单元下标排列的译文 */
type LandingTranslationStore = Record<string, Record<string, Record<string, LandingTranslationUnit[]>>>

const TARGET_LOCALES = ["ru", "ja", "ko"] as const

const store = translations as unknown as LandingTranslationStore

export function applyLandingTranslations<T extends { slug: string }>(section: string, items: T[]): T[] {
  const bySlug = store[section]
  if (!bySlug) return items

  return items.map((item) => {
    const entry = bySlug[item.slug]
    if (!entry) return item

    const units: LocalizedUnit[] = []
    collectLocalizedUnits(item, [], units)

    const next = structuredClone(item)
    let touched = false

    for (const lang of TARGET_LOCALES) {
      const records = entry[lang]
      if (!records) continue
      records.forEach((rec, i) => {
        const unit = units[i]
        if (!unit || !rec || !Array.isArray(rec.out) || rec.out.length === 0) return
        // 源文被改过：宁可留空回落英文，也不要把旧译文错贴到新句子位置
        if (rec.fp !== fingerprintUnit(unit)) return
        writeLocaleValue(next, unit, lang, rec.out)
        touched = true
      })
    }

    return touched ? next : item
  })
}
