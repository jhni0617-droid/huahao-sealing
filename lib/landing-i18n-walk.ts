/**
 * 落地页多语言补齐的公共遍历器。
 *
 * 这 6 个落地页数据文件（materials / applications / compare / markets / categories / resources）
 * 当初只做了 zh/en/vi/th，俄日韩整段缺失，于是 /ru/... /ja/... /ko/... 这些 URL
 * 实际吐的是英文正文 —— Google Search Console 把它们判成「重复网页，Google 选的规范网页
 * 与用户指定的不同」正是这个原因。
 *
 * 这里不写死字段名：凡是「一个对象的所有键都是语言码」的节点，就算一个可译单元。
 * 这样新增字段不用改遍历器，纯数字/纯型号的表（properties、specs、grades.code/temp）
 * 也不会被误送去翻译。
 */

export const LOCALE_KEYS = ["zh", "en", "vi", "th", "ru", "ja", "ko"] as const

/** 一个可译单元：一条 localized 记录里以 en（缺失时 zh）为源文的若干段文本 */
export type LocalizedUnit = {
  /** 从条目根到该 localized 记录的路径，数组下标也计入 */
  path: (string | number)[]
  /** 源语文本（已归一成数组，便于数组型字段一次请求搞定） */
  src: string[]
  /** src 原本由 string 还是 string[] 承载，写回时要还原成同样的形状 */
  kind: "s" | "a"
}

function isLocaleKey(k: string): boolean {
  return (LOCALE_KEYS as readonly string[]).includes(k)
}

export function fingerprintUnit(unit: LocalizedUnit): string {
  return unit.src.join("|").slice(0, 48)
}

/** 收集条目里全部可译单元。顺序只取决于对象键序，稳定可复现。 */
export function collectLocalizedUnits(node: unknown, path: (string | number)[], out: LocalizedUnit[]): void {
  if (Array.isArray(node)) {
    node.forEach((child, i) => collectLocalizedUnits(child, [...path, i], out))
    return
  }
  if (!node || typeof node !== "object") return

  const record = node as Record<string, unknown>
  const keys = Object.keys(record)

  if (keys.length > 0 && keys.every(isLocaleKey)) {
    const source = record.en ?? record.zh
    if (typeof source === "string") {
      out.push({ path, src: [source], kind: "s" })
      return
    }
    if (Array.isArray(source) && source.every((s) => typeof s === "string")) {
      out.push({ path, src: source as string[], kind: "a" })
      return
    }
    // 语言键下挂的是对象（如 faq 的 {zh:[{q,a}], en:[{q,a}]}）：逐语言递归，取 en 那一支
    const enBranch = record.en ?? record.zh
    if (enBranch) collectLocalizedUnits(enBranch, [...path, Array.isArray(enBranch) ? 0 : "en"], out)
    return
  }

  for (const k of keys) collectLocalizedUnits(record[k], [...path, k], out)
}

function atPath(root: unknown, path: (string | number)[]): Record<string | number, unknown> | undefined {
  let cur = root as Record<string | number, unknown>
  for (const seg of path) {
    if (cur === undefined || cur === null) return undefined
    cur = cur[seg] as Record<string | number, unknown>
  }
  return cur as Record<string | number, unknown>
}

/** 把某语言的译文写回条目（原地改，调用方负责传副本） */
export function writeLocaleValue(item: unknown, unit: LocalizedUnit, lang: string, out: string[]): void {
  const node = atPath(item, unit.path)
  if (!node || typeof node !== "object") return
  node[lang] = unit.kind === "s" ? (out[0] ?? "") : out
}
