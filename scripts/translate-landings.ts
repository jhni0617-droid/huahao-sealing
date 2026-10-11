/**
 * 落地页俄/日/韩补齐脚本
 * ============================================================
 * 6 个落地页数据文件（materials / applications / compare / markets / categories / resources）
 * 当初只做了 zh/en/vi/th，ru/ja/ko 整段缺失，导致 /ru/... /ja/... /ko/... 这些 URL
 * 实际吐英文正文，被 Google Search Console 报成「重复网页，Google 选的规范网页与用户指定的不同」。
 *
 * 做法：不写死字段名，用 lib/landing-i18n-walk 把「所有键都是语言码」的节点识别成可译单元，
 * 以 en（缺失时 zh）为源文，按 **一个条目 × 一个语种 = 一次请求** 送翻（保住数组结构，
 * 也把 system prompt 的重复开销压到 37×3 次），结果增量写入 content/landing-translations.json，
 * 再由 lib/landing-translations 合并回条目。
 *
 * 用法：
 *   npx tsx scripts/translate-landings.ts --dry-run               # 只列计划与字数，不调 API
 *   npx tsx scripts/translate-landings.ts --limit=1               # 试翻 1 条 × 3 语种（先人工看质量）
 *   npx tsx scripts/translate-landings.ts --section=materials     # 只翻某个版块
 *   npx tsx scripts/translate-landings.ts --lang=ru               # 只翻俄语
 *   npx tsx scripts/translate-landings.ts                         # 全量增量
 *   npx tsx scripts/translate-landings.ts --force --section=markets
 *
 * 环境变量（自动读项目根目录 .env.local）：
 *   APIYI_API_KEY / OPENAI_API_KEY   必填，二选一
 *   OPENAI_BASE_URL                  默认 https://api.apiyi.com/v1
 *   OPENAI_MODEL                     默认 gpt-4o-mini
 * ============================================================
 */

import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { GLOSSARY } from "../lib/translate-glossary"
import {
  collectLocalizedUnits,
  fingerprintUnit,
  type LocalizedUnit,
} from "../lib/landing-i18n-walk"

const args = process.argv.slice(2)
const argOf = (name: string) => args.find((a) => a.startsWith(`--${name}=`))?.split("=").slice(1).join("=")
const dryRun = args.includes("--dry-run")
const force = args.includes("--force")
const limit = Number(argOf("limit") || 0)
const concurrency = Number(argOf("concurrency") || 6)

const ROOT = process.cwd()
const OUT_PATH = path.join(ROOT, "content", "landing-translations.json")
const MAX_OUTPUT_TOKENS = Number(argOf("maxTokens") || 12000)

function loadEnvLocal() {
  const envPath = path.join(ROOT, ".env.local")
  if (!fs.existsSync(envPath)) return
  for (const raw of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const line = raw.trim()
    if (!line || line.startsWith("#")) continue
    const eq = line.indexOf("=")
    if (eq < 0) continue
    const key = line.slice(0, eq).trim()
    let val = line.slice(eq + 1).trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    if (!process.env[key]) process.env[key] = val
  }
}
loadEnvLocal()

const API_KEY = process.env.OPENAI_API_KEY || process.env.APIYI_API_KEY || argOf("key")
const BASE_URL = (process.env.OPENAI_BASE_URL || "https://api.apiyi.com/v1").replace(/\/+$/, "")
const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini"

const TARGET_LANGS = ["ru", "ja", "ko"]
const LANG_NAMES: Record<string, string> = {
  ru: "Russian (Русский)",
  ja: "Japanese (日本語)",
  ko: "Korean (한국어)",
}

type Section = { name: string; module: string; exportName: string }

const SECTIONS: Section[] = [
  { name: "materials", module: "lib/materials-data", exportName: "materialLandings" },
  { name: "applications", module: "lib/industry-landing-data", exportName: "industryLandings" },
  { name: "compare", module: "lib/compare-data", exportName: "comparisons" },
  { name: "markets", module: "lib/markets-data", exportName: "marketLandings" },
  { name: "categories", module: "lib/product-category-data", exportName: "productCategoryLandings" },
  { name: "resources", module: "lib/resources-data", exportName: "resourceLandings" },
]

type ItemUnit = { index: number; src: string[] }
type TranslatedUnit = { index: number; src: string[]; out: string[] }
type Job = { section: string; slug: string; units: LocalizedUnit[] }

function glossaryBlock(lang: string): string {
  const g = GLOSSARY[lang]
  if (!g) return ""
  const lines = Object.entries(g).map(([en, tgt]) => `  - "${en}" → "${tgt}"`)
  return `\nMandatory glossary — use these exact renderings whenever the English term appears:\n${lines.join("\n")}`
}

function buildSystemPrompt(lang: string): string {
  const name = LANG_NAMES[lang]
  return `You are translating structured content for the website of an industrial carbon graphite mechanical-seal manufacturer (Huahao Sealing, Lu'an, Anhui, China). Target language: ${name}.

You will receive a JSON object. Each key is a numeric segment id; each value is an ARRAY of English source segments.

Hard rules:
1. Return ONLY one JSON object with EXACTLY the same keys, each mapped to an array of the SAME LENGTH, in the SAME ORDER. Never merge, split, drop, or reorder segments.
2. Translate each segment into natural, technically fluent ${name} written for procurement engineers. No transliteration of whole sentences, no English leftovers except where rule 3 applies.
3. Keep verbatim: numbers, numeric ranges, units (°C, MPa, m/s, mm, g/cm³, HV), model and series codes (e.g. M106, 104, 527, 1527), standards bodies (DNV, ISO, API), chemical formulas and material abbreviations (SiC, WC, PTFE, Al2O3), URLs, image/file names, and any segment that contains no letters at all.
4. Keep the same register and length as the source. Do not add marketing fluff, notes, or explanations.
5. Every output string must be non-empty.
6. Output raw JSON only — no code fences, no commentary before or after.${glossaryBlock(lang)}`
}

const usageTotal = { prompt: 0, completion: 0, calls: 0 }

async function callApi(system: string, user: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.2,
      max_tokens: MAX_OUTPUT_TOKENS,
    }),
    signal: AbortSignal.timeout(300_000),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`)
  const data = await res.json()
  const u = data.usage
  if (u) {
    usageTotal.prompt += u.prompt_tokens ?? 0
    usageTotal.completion += u.completion_tokens ?? 0
  }
  usageTotal.calls += 1
  const text = data.choices?.[0]?.message?.content?.trim()
  if (!text) throw new Error("API 返回空内容")
  return text.replace(/^```[a-z]*\n?/i, "").replace(/\n?```$/, "").trim()
}

function parseLooseJson(s: string): Record<string, unknown> {
  try {
    return JSON.parse(s)
  } catch {
    const start = s.indexOf("{")
    const end = s.lastIndexOf("}")
    if (start >= 0 && end > start) {
      try {
        return JSON.parse(s.slice(start, end + 1))
      } catch {
        /* fall through */
      }
    }
    throw new Error("无法解析返回的 JSON")
  }
}

/** 结构校验：键齐、数组长度齐、每项非空 */
function validate(jobUnits: ItemUnit[], parsed: Record<string, unknown>): string | null {
  for (const unit of jobUnits) {
    const key = String(unit.index)
    if (!(key in parsed)) return `缺少键 ${key}`
    const got = parsed[key]
    if (!Array.isArray(got)) return `键 ${key} 不是数组`
    if (got.length !== unit.src.length) return `键 ${key} 数组长度 ${got.length} ≠ 源 ${unit.src.length}`
    for (const [i, v] of got.entries()) {
      if (typeof v !== "string" || !v.trim()) return `键 ${key}[${i}] 为空`
    }
  }
  return null
}

async function translateJob(job: Job, lang: string): Promise<TranslatedUnit[]> {
  const jobUnits: ItemUnit[] = job.units.map((u, i) => ({ index: i, src: u.src }))
  const payload = JSON.stringify(Object.fromEntries(jobUnits.map((u) => [String(u.index), u.src])))
  const system = buildSystemPrompt(lang)

  let lastErr = "unknown"
  for (let attempt = 1; attempt <= 2; attempt++) {
    const raw = await callApi(system, payload)
    const parsed = parseLooseJson(raw)
    const err = validate(jobUnits, parsed)
    if (!err) {
      return jobUnits.map((u) => ({ index: u.index, src: u.src, out: (parsed[String(u.index)] as unknown[]).map(String) }))
    }
    lastErr = err
    if (attempt === 1) await new Promise((r) => setTimeout(r, 2000))
  }
  throw new Error(`结构校验未通过（${lastErr}）`)
}

type Store = Record<string, Record<string, Record<string, { fp: string; out: string[] }[]>>>

function loadStore(): Store {
  if (!fs.existsSync(OUT_PATH)) return {}
  try {
    return JSON.parse(fs.readFileSync(OUT_PATH, "utf8")) as Store
  } catch {
    return {}
  }
}

let saveTimer: NodeJS.Timeout | null = null
function scheduleSave(store: Store) {
  if (saveTimer) return
  saveTimer = setTimeout(() => {
    saveTimer = null
    fs.writeFileSync(OUT_PATH, JSON.stringify(store, null, 0))
  }, 5000)
}

async function pool<T>(items: T[], size: number, worker: (item: T) => Promise<void>) {
  let cursor = 0
  const runners = Array.from({ length: Math.min(size, items.length) }, async () => {
    while (cursor < items.length) {
      const idx = cursor++
      await worker(items[idx])
    }
  })
  await Promise.all(runners)
}

async function main() {
  const wantedLangs = (argOf("lang") || TARGET_LANGS.join(",")).split(",").filter(Boolean)
  const wantedSections = (argOf("section") || SECTIONS.map((s) => s.name).join(",")).split(",").filter(Boolean)

  const jobs: Job[] = []
  for (const section of SECTIONS) {
    if (!wantedSections.includes(section.name)) continue
    const modPath = path.resolve(ROOT, section.module) + ".ts"
    const mod = (await import(pathToFileURL(modPath).href)) as Record<string, unknown>
    const items = mod[section.exportName] as { slug: string }[]
    if (!Array.isArray(items)) throw new Error(`${section.name}: 找不到导出 ${section.exportName}`)
    for (const item of items) {
      const units: LocalizedUnit[] = []
      collectLocalizedUnits(item, [], units)
      if (units.length > 0) jobs.push({ section: section.name, slug: item.slug, units })
    }
  }

  const store = loadStore()
  const work: { job: Job; lang: string }[] = []
  let chars = 0
  for (const job of jobs) {
    chars += job.units.reduce((a, u) => a + u.src.join("").length, 0)
    for (const lang of wantedLangs) {
      const done = store[job.section]?.[job.slug]?.[lang]
      const fresh =
        Array.isArray(done) &&
        done.length === job.units.length &&
        done.every((rec, i) => rec.fp === fingerprintUnit(job.units[i]))
      if (force || !fresh) work.push({ job, lang })
    }
  }

  console.log(`条目 ${jobs.length} 个，可译单元合计 ${jobs.reduce((a, j) => a + j.units.length, 0)} 个，源文 ${chars} 字符`)
  console.log(`目标语种 ${wantedLangs.join(", ")}；待翻译请求 ${work.length} 次（一个条目×一个语种=1 次）`)
  if (limit > 0) console.log(`--limit=${limit}：只跑前 ${limit} 个条目`)

  if (dryRun) {
    console.log("\n[dry-run] 前 12 个条目：")
    for (const job of jobs.slice(0, 12)) {
      console.log(`  ${job.section}/${job.slug}  单元 ${job.units.length}  字符 ${job.units.reduce((a, u) => a + u.src.join("").length, 0)}`)
    }
    console.log("\n[dry-run] 未调用 API。")
    return
  }

  if (!API_KEY) {
    console.error("\n缺少 APIYI_API_KEY / OPENAI_API_KEY，请写入 .env.local 或用 --key= 传入。")
    process.exit(1)
  }

  const capped = limit > 0 ? work.slice(0, limit * wantedLangs.length) : work
  const failures: string[] = []
  let ok = 0

  await pool(capped, concurrency, async ({ job, lang }) => {
    const label = `${job.section}/${job.slug}[${lang}]`
    try {
      const result = await translateJob(job, lang)
      const recs = result.map((r, i) => ({ fp: fingerprintUnit(job.units[i]), out: r.out }))
      store[job.section] ??= {}
      store[job.section][job.slug] ??= {}
      store[job.section][job.slug][lang] = recs
      scheduleSave(store)
      ok++
      console.log(`  ✓ ${label}  单元 ${recs.length}`)
    } catch (e) {
      failures.push(`${label}: ${(e as Error).message}`)
      console.log(`  ✗ ${label}: ${(e as Error).message}`)
    }
  })

  if (saveTimer) clearTimeout(saveTimer)
  fs.writeFileSync(OUT_PATH, JSON.stringify(store, null, 0))

  const estIn = usageTotal.prompt / 1e6 * 0.15
  const estOut = usageTotal.completion / 1e6 * 0.6
  console.log(`\n完成 ${ok} / ${capped.length}，失败 ${failures.length}`)
  console.log(`API 调用 ${usageTotal.calls} 次；tokens in ${usageTotal.prompt} / out ${usageTotal.completion}`)
  console.log(`按 gpt-4o-mini 牌价估算 ≈ $${(estIn + estOut).toFixed(3)}`)
  console.log(`已写入 ${path.relative(ROOT, OUT_PATH)}`)
  if (failures.length) {
    console.log("\n失败清单：")
    for (const f of failures.slice(0, 30)) console.log("  " + f)
  }
}

main().catch((e) => {
  console.error("脚本异常：", e)
  process.exit(1)
})
