/**
 * 博客批量翻译脚本（精准版）
 * ============================================================
 * 把 lib/blog-data-1..10.ts 里每篇文章的英文（en）内容，
 * 精准翻译成 vi / th / ru / ja / ko，增量写入
 * content/blog-translations.json（lib/blog-data.ts 会读取它）。
 *
 * 相比早期版本的关键改进：
 *   1. 直接 import 博客数据模块取内容（不再用正则切 TS 源码，避免错切/漏切）
 *   2. 自动发现 lib/blog-data-*.ts，不再硬编码 1..7（原来漏了 8/9/10 三个文件）
 *   3. 长正文自动分块翻译（按 ## / ### 结构切），规避模型截断与"越翻越飘"
 *   4. 内置术语表 + 格式规则，保证五个语种术语一致、markdown 结构不丢
 *   5. 翻译后做结构校验（标题层级数、要点数、长度比），异常自动重试
 *   6. 并发 + 限流 + 断点续跑 + 失败清单 + token 统计与费用估算
 *
 * 性能调优（v2）：
 *   · 标题 + 摘要合并为一次请求（省掉一次 system prompt 重发）
 *   · 分块阈值 3500 → 8000 字符，请求块数减半，输入 token 省约 1/4
 *   · 显式 max_tokens，避免服务端默认上限截断长块
 *   · 落盘节流（每 10 项或 20 秒），避免每项重写 6MB JSON
 *   · 默认并发 4 → 8
 *
 * 用法：
 *   npx tsx scripts/translate-blog.ts --dry-run            # 只看计划，不调 API
 *   npx tsx scripts/translate-blog.ts --limit=1            # 先试翻 1 篇（5 语种）
 *   npx tsx scripts/translate-blog.ts --lang=vi            # 只翻越南语
 *   npx tsx scripts/translate-blog.ts --slug=cnc-machining-upgrade-2020
 *   npx tsx scripts/translate-blog.ts                      # 全量增量翻译
 *   npx tsx scripts/translate-blog.ts --force --lang=th    # 强制重翻泰语
 *   npx tsx scripts/translate-blog.ts --concurrency=12     # 调并发（默认 8）
 *   npx tsx scripts/translate-blog.ts --chunk=4000         # 调分块阈值（默认 8000）
 *
 * 环境变量（默认自动读取项目根目录的 .env.local）：
 *   APIYI_API_KEY / OPENAI_API_KEY   必填，二选一
 *   OPENAI_BASE_URL                  默认 https://api.apiyi.com/v1
 *   OPENAI_MODEL                     默认 gpt-4o-mini
 * ============================================================
 */

import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

// ── 参数解析 ─────────────────────────────────────────────
const args = process.argv.slice(2)
const argOf = (name: string) => args.find((a) => a.startsWith(`--${name}=`))?.split("=").slice(1).join("=")
const dryRun = args.includes("--dry-run")
const force = args.includes("--force")

const ROOT = process.cwd()
const TRANSLATIONS_PATH = path.join(ROOT, "content", "blog-translations.json")
const USAGE_PATH = path.join(ROOT, "content", "blog-translations.usage.json")

const ALL_LANGS = ["vi", "th", "ru", "ja", "ko"] as const
const LANG_NAMES: Record<string, string> = {
  vi: "Vietnamese (Tiếng Việt)",
  th: "Thai (ภาษาไทย)",
  ru: "Russian (Русский)",
  ja: "Japanese (日本語)",
  ko: "Korean (한국어)",
}
const LANG_SCRIPT_NOTE: Record<string, string> = {
  vi: "Use standard Vietnamese with full diacritics (dấu).",
  th: "Use standard Thai script with correct word breaks; no romanization.",
  ru: "Use standard Russian Cyrillic; keep case endings natural.",
  ja: "Use natural Japanese; prefer 常用漢字 + カタカナ for loanwords; use です/ます for body text.",
  ko: "Use natural Korean with standard 맞춤법; use 합니다/습니다 for body text.",
}

const targetLangs = argOf("lang") ? [argOf("lang")!] : [...ALL_LANGS]
const argSlug = argOf("slug")
const limit = argOf("limit") ? parseInt(argOf("limit")!, 10) : 0
const CONCURRENCY = argOf("concurrency") ? parseInt(argOf("concurrency")!, 10) : 8
const MAX_RETRIES = 3
// 单次请求正文软上限（字符）。
// 之所以从 3500 提到 8000：实测 470 个正文单元平均 6338 字符，
// 3500 会切成 1086 块（2.31 块/单元），每块都要重发一遍完整 system prompt
// （约 850 tokens），导致 63% 的输入 token 是重复的 system。
// 提到 8000 后块数降到约 540（1.15 块/单元），输入 token 直接省掉约四分之一。
const CHUNK_SOFT_LIMIT = argOf("chunk") ? parseInt(argOf("chunk")!, 10) : 8000
// 显式声明输出上限，避免服务端默认上限（常见 4096）把长块截断。
// 8000 字符的英文块译成中日韩泰约需 3500~5000 tokens，16384 有充足余量。
const MAX_OUTPUT_TOKENS = argOf("maxTokens") ? parseInt(argOf("maxTokens")!, 10) : 16384
// 落盘节流：每完成 N 项写一次盘（原实现每项都全量重写 6MB JSON，470 项 ≈ 2.9GB 磁盘写入）
const PERSIST_EVERY = 10
const PERSIST_INTERVAL_MS = 20_000

// ── 读取 .env.local（免去手动 export）─────────────────────
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

// ── 术语表：保证五语种术语统一 ────────────────────────────
const GLOSSARY: Record<string, Record<string, string>> = {
  vi: {
    "carbon graphite": "than chì carbon",
    "seal ring": "vòng đệm",
    "mechanical seal": "đệm kín cơ khí",
    bushing: "bạc lót",
    "split ring": "vòng phân đoạn",
    impregnation: "ngâm tẩm",
    "resin impregnation": "ngâm tẩm nhựa",
    "metal impregnation": "ngâm tẩm kim loại",
    "vacuum impregnation": "ngâm tẩm chân không",
    molding: "tạo hình",
    sintering: "thiêu kết",
    graphitization: "graphit hóa",
    "CNC machining": "gia công CNC",
    "turning": "tiện",
    "lapping": "mài rà",
    "thermal conductivity": "độ dẫn nhiệt",
    "wear resistance": "khả năng chống mài mòn",
    "self-lubricating": "tự bôi trơn",
    "chemical pump": "bơm hóa chất",
    "process pump": "bơm quy trình",
    "pressure": "áp suất",
    "tolerance": "dung sai",
    "batch-to-batch consistency": "độ ổn định giữa các lô",
    "quality control": "kiểm soát chất lượng",
    "incoming inspection": "kiểm tra đầu vào",
    "first article inspection": "kiểm tra chi tiết đầu tiên",
  },
  th: {
    "carbon graphite": "คาร์บอนกราไฟต์",
    "seal ring": "แหวนซีล",
    "mechanical seal": "ซีลกล",
    bushing: "บุชชิ่ง",
    "split ring": "แหวนแยก",
    impregnation: "การอัดซึม",
    "resin impregnation": "การอัดซึมด้วยเรซิน",
    "metal impregnation": "การอัดซึมด้วยโลหะ",
    "vacuum impregnation": "การอัดซึมแบบสุญญากาศ",
    molding: "การขึ้นรูป",
    sintering: "การซินเตอร์",
    graphitization: "การทำให้เป็นแกรไฟต์",
    "CNC machining": "การกลึง CNC",
    turning: "การกลึง",
    lapping: "การขัดละเอียด",
    "thermal conductivity": "การนำความร้อน",
    "wear resistance": "ความต้านทานการสึกหรอ",
    "self-lubricating": "หล่อลื่นตัวเอง",
    "chemical pump": "ปั๊มเคมี",
    "process pump": "ปั๊มอุตสาหกรรม",
    pressure: "ความดัน",
    tolerance: "พิกัดความเผื่อ",
    "batch-to-batch consistency": "ความสม่ำเสมอระหว่างล็อต",
    "quality control": "การควบคุมคุณภาพ",
    "incoming inspection": "การตรวจรับวัตถุดิบ",
    "first article inspection": "การตรวจชิ้นงานแรก",
  },
  ru: {
    "carbon graphite": "углеродный графит",
    "seal ring": "уплотнительное кольцо",
    "mechanical seal": "торцевое уплотнение",
    bushing: "втулка",
    "split ring": "разрезное кольцо",
    impregnation: "пропитка",
    "resin impregnation": "пропитка смолой",
    "metal impregnation": "металлическая пропитка",
    "vacuum impregnation": "вакуумная пропитка",
    molding: "формование",
    sintering: "спекание",
    graphitization: "графитизация",
    "CNC machining": "обработка на ЧПУ",
    turning: "токарная обработка",
    lapping: "притирка",
    "thermal conductivity": "теплопроводность",
    "wear resistance": "износостойкость",
    "self-lubricating": "самосмазывающийся",
    "chemical pump": "химический насос",
    "process pump": "технологический насос",
    pressure: "давление",
    tolerance: "допуск",
    "batch-to-batch consistency": "стабильность от партии к партии",
    "quality control": "контроль качества",
    "incoming inspection": "входной контроль",
    "first article inspection": "контроль первой детали",
  },
  ja: {
    "carbon graphite": "カーボングラファイト",
    "seal ring": "シールリング",
    "mechanical seal": "メカニカルシール",
    bushing: "ブッシュ",
    "split ring": "分割リング",
    impregnation: "含浸",
    "resin impregnation": "樹脂含浸",
    "metal impregnation": "金属含浸",
    "vacuum impregnation": "真空含浸",
    molding: "成形",
    sintering: "焼結",
    graphitization: "黒鉛化",
    "CNC machining": "CNC加工",
    turning: "旋削",
    lapping: "ラッピング",
    "thermal conductivity": "熱伝導率",
    "wear resistance": "耐摩耗性",
    "self-lubricating": "自己潤滑性",
    "chemical pump": "化学ポンプ",
    "process pump": "プロセスポンプ",
    pressure: "圧力",
    tolerance: "公差",
    "batch-to-batch consistency": "ロット間の安定性",
    "quality control": "品質管理",
    "incoming inspection": "受入検査",
    "first article inspection": "初品検査",
  },
  ko: {
    "carbon graphite": "카본 그라파이트",
    "seal ring": "씰 링",
    "mechanical seal": "메커니컬 씰",
    bushing: "부싱",
    "split ring": "분할 링",
    impregnation: "함침",
    "resin impregnation": "수지 함침",
    "metal impregnation": "금속 함침",
    "vacuum impregnation": "진공 함침",
    molding: "성형",
    sintering: "소결",
    graphitization: "흑연화",
    "CNC machining": "CNC 가공",
    turning: "선삭",
    lapping: "래핑",
    "thermal conductivity": "열전도율",
    "wear resistance": "내마모성",
    "self-lubricating": "자기 윤활성",
    "chemical pump": "화학 펌프",
    "process pump": "공정 펌프",
    pressure: "압력",
    tolerance: "공차",
    "batch-to-batch consistency": "로트 간 일관성",
    "quality control": "품질 관리",
    "incoming inspection": "수입 검사",
    "first article inspection": "초도품 검사",
  },
}

function glossaryBlock(lang: string): string {
  const g = GLOSSARY[lang]
  if (!g) return ""
  const lines = Object.entries(g).map(([en, tgt]) => `  - "${en}" → "${tgt}"`)
  return `\nMandatory glossary (use these exact renderings whenever the English term appears):\n${lines.join("\n")}`
}

// ── 文章提取（直接 import，最可靠）─────────────────────────
interface PostData {
  slug: string
  title: string
  excerpt: string
  content: string
}

async function extractPosts(): Promise<PostData[]> {
  const files = fs
    .readdirSync(path.join(ROOT, "lib"))
    .filter((f) => /^blog-data-\d+\.ts$/.test(f))
    .sort((a, b) => parseInt(a.match(/(\d+)/)![1], 10) - parseInt(b.match(/(\d+)/)![1], 10))

  const posts: PostData[] = []
  for (const f of files) {
    const mod = await import(pathToFileURL(path.join(ROOT, "lib", f)).href)
    const batch = Object.values(mod).find(Array.isArray) as any[] | undefined
    if (!batch) {
      console.warn(`[warn] ${f}: 未找到导出的数组，跳过`)
      continue
    }
    for (const p of batch) {
      if (!p?.slug || !p?.content?.en) {
        console.warn(`[warn] ${f}: ${p?.slug ?? "?"} 缺少英文内容，跳过`)
        continue
      }
      posts.push({
        slug: p.slug,
        title: p.title?.en ?? "",
        excerpt: p.excerpt?.en ?? "",
        content: p.content.en,
      })
    }
    console.log(`  ${f.padEnd(18)} ${String(batch.length).padStart(3)} 篇`)
  }
  return posts
}

// ── 分块：按 markdown 二级/三级标题切，控制单块长度 ────────
interface Chunk {
  heading: string
  body: string
}

function splitContent(md: string): Chunk[] {
  const lines = md.split("\n")
  const chunks: Chunk[] = []
  let heading = ""
  let buf: string[] = []

  const flush = () => {
    const body = buf.join("\n").trim()
    if (body || heading) chunks.push({ heading, body })
    buf = []
  }

  for (const line of lines) {
    const isH2 = /^##\s+/.test(line)
    if (isH2 && buf.length) {
      flush()
      heading = line.replace(/^##\s+/, "").trim()
      buf = [line]
      continue
    }
    if (/^###\s+/.test(line) && buf.length > 0 && buf.join("\n").length > CHUNK_SOFT_LIMIT) {
      flush()
      heading = ""
      buf = [line]
      continue
    }
    buf.push(line)
    // 段落过多时也强制切块
    if (buf.join("\n").length > CHUNK_SOFT_LIMIT * 2) {
      flush()
      heading = ""
    }
  }
  flush()

  // 合并过小的块，避免请求碎片化
  const merged: Chunk[] = []
  for (const c of chunks) {
    const prev = merged[merged.length - 1]
    if (prev && prev.body.length + c.body.length < CHUNK_SOFT_LIMIT) {
      prev.body += "\n\n" + c.body
    } else {
      merged.push({ ...c })
    }
  }
  return merged.filter((c) => c.body.trim())
}

// ── 结构指纹：用于翻译后的一致性校验 ──────────────────────
function structureFingerprint(md: string) {
  return {
    h2: (md.match(/^##\s+/gm) || []).length,
    h3: (md.match(/^###\s+/gm) || []).length,
    bullets: (md.match(/^\s*[-*]\s+/gm) || []).length,
    bold: (md.match(/\*\*[^*]+\*\*/g) || []).length,
    chars: md.length,
  }
}

function structureOk(src: string, out: string): { ok: boolean; reason?: string } {
  const a = structureFingerprint(src)
  const b = structureFingerprint(out)
  if (b.h2 !== a.h2) return { ok: false, reason: `H2 数量 ${b.h2} ≠ 原文 ${a.h2}` }
  if (b.h3 !== a.h3) return { ok: false, reason: `H3 数量 ${b.h3} ≠ 原文 ${a.h3}` }
  if (a.bullets >= 3 && b.bullets < Math.floor(a.bullets * 0.8))
    return { ok: false, reason: `列表项 ${b.bullets} 明显少于原文 ${a.bullets}` }
  if (a.chars > 400 && b.chars < a.chars * 0.35)
    return { ok: false, reason: `译文过短（${b.chars} vs ${a.chars} 字符），疑似截断` }
  if (a.chars > 400 && b.chars > a.chars * 4)
    return { ok: false, reason: `译文异常膨胀（${b.chars} vs ${a.chars} 字符），疑似注水` }
  return { ok: true }
}

// ── API 调用 ─────────────────────────────────────────────
interface Usage {
  prompt: number
  completion: number
}
const usageTotal: Usage = { prompt: 0, completion: 0 }

type Kind = "title" | "excerpt" | "content" | "meta"

function buildSystemPrompt(lang: string, kind: Kind): string {
  const target = LANG_NAMES[lang]
  const kindNote =
    kind === "title"
      ? "This is a blog article TITLE: keep it concise and idiomatic, no trailing period."
      : kind === "excerpt"
        ? "This is a blog article SUMMARY: keep it to one fluent paragraph of similar length."
        : kind === "meta"
          ? "You will receive a blog article's TITLE and SUMMARY. Translate BOTH.\nReturn STRICT JSON only — no code fence, no commentary:\n{\"title\": \"<translated title>\", \"excerpt\": \"<translated summary>\"}"
          : "This is the MARKDOWN BODY of a blog article: a faithful, fully natural translation of every sentence, no summarizing, no skipping."

  return `You are a senior technical translator for Huahao Sealing (霍邱县华豪密封件有限公司), a Chinese manufacturer of carbon graphite sealing components (seal rings, bushings/bearings, split rings) serving pumps, marine equipment, chemical processing and general industry.

Translate from ENGLISH into ${target}.

${kindNote}

Hard rules:
1. Preserve the markdown structure EXACTLY: every "##" and "###" heading, every "- " bullet, every "**bold**" run, every numbered item and every blank-line paragraph break must survive one-to-one. Do not merge, split, reorder or drop sections.
2. Never translate these — keep them verbatim: "Huahao Sealing", "Huahao Carbon Graphite Sealing Co., Ltd.", "Huahao", material grades (M106H, M120K, M154H, PTFE, SiC, etc.), units and symbols (MPa, W/(m·K), ℃, μm, HRC, Ra, mm, rpm, μm/m·K), and any file/URL.
3. Place names: keep Chinese place names accurate — 六安市 Lu'an, 霍邱县 Huoqiu County, 龙潭镇 Longtan Town, 安徽省 Anhui, 合肥 Hefei.
4. Translate every sentence completely. Never summarize, never add commentary, never omit a clause.
5. Write natural, publication-quality ${target} — idiomatic phrasing over word-for-word. B2B industrial tone: precise, credible, not promotional.
6. Output ONLY the translated text. No preamble, no explanation, no surrounding quotes, no code fences.${glossaryBlock(lang)}
${LANG_SCRIPT_NOTE[lang]}`
}

async function callApi(system: string, user: string, lang: string, kind: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.25,
      max_tokens: MAX_OUTPUT_TOKENS,
    }),
    signal: AbortSignal.timeout(300_000),
  })

  if (!res.ok) {
    const t = await res.text()
    throw new Error(`HTTP ${res.status}: ${t.slice(0, 200)}`)
  }
  const data = await res.json()
  const u = data.usage
  if (u) {
    usageTotal.prompt += u.prompt_tokens ?? 0
    usageTotal.completion += u.completion_tokens ?? 0
  }
  const text = data.choices?.[0]?.message?.content?.trim()
  if (!text) throw new Error("API 返回空内容")
  return text.replace(/^```[a-z]*\n?/i, "").replace(/\n?```$/, "").trim()
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

async function translateOnce(text: string, lang: string, kind: Kind): Promise<string> {
  return callApi(buildSystemPrompt(lang, kind), text, lang, kind)
}

/** 带重试 + 结构校验的翻译 */
async function translateStrict(text: string, lang: string, kind: Kind): Promise<string> {
  let lastErr: Error | null = null
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const out = await translateOnce(text, lang, kind)
      if (kind !== "content") return out
      const check = structureOk(text, out)
      if (check.ok) return out
      lastErr = new Error(`结构校验未通过：${check.reason}`)
      console.warn(`    ! ${kind}/${lang} ${check.reason}，重试 ${attempt}/${MAX_RETRIES}`)
    } catch (e) {
      lastErr = e as Error
      console.warn(`    ! ${kind}/${lang} ${(e as Error).message.slice(0, 120)}，重试 ${attempt}/${MAX_RETRIES}`)
    }
    if (attempt < MAX_RETRIES) await sleep(1500 * attempt)
  }
  throw lastErr ?? new Error("未知错误")
}

/** 宽松 JSON 解析：容忍模型偶发加上的代码围栏或前后缀说明 */
function parseLooseJson(s: string): any {
  const cleaned = s
    .replace(/^\s*```(?:json)?\s*/i, "")
    .replace(/\s*```\s*$/, "")
    .trim()
  try {
    return JSON.parse(cleaned)
  } catch {
    const m = cleaned.match(/\{[\s\S]*\}/)
    if (m) {
      try {
        return JSON.parse(m[0])
      } catch {
        return null
      }
    }
    return null
  }
}

/**
 * 标题 + 摘要合并为一次请求。
 *
 * 原实现是两次独立调用（translateStrict title / excerpt），每次都要重发一遍
 * 约 850 tokens 的 system prompt。合并后 470 篇 × 1 次省下约 470 次请求，
 * 即约 40 万输入 tokens。JSON 解析失败时自动回退到分开翻译，不牺牲可靠性。
 */
async function translateMeta(
  title: string,
  excerpt: string,
  lang: string
): Promise<{ title: string; excerpt: string }> {
  const user = `TITLE:\n${title}\n\nSUMMARY:\n${excerpt}`
  try {
    const out = await callApi(buildSystemPrompt(lang, "meta"), user, lang, "meta")
    const parsed = parseLooseJson(out)
    if (parsed && typeof parsed.title === "string" && typeof parsed.excerpt === "string" && parsed.title.trim() && parsed.excerpt.trim()) {
      return { title: parsed.title.trim(), excerpt: parsed.excerpt.trim() }
    }
    console.warn(`    · meta JSON 解析失败，回退为分开翻译`)
  } catch (e) {
    console.warn(`    · meta 合并翻译失败（${(e as Error).message.slice(0, 80)}），回退为分开翻译`)
  }
  const [t, x] = await Promise.all([
    translateStrict(title, lang, "title"),
    translateStrict(excerpt, lang, "excerpt"),
  ])
  return { title: t, excerpt: x }
}

/** 长正文：分块翻译再拼接 */
async function translateContent(md: string, lang: string): Promise<string> {
  const chunks = splitContent(md)

  // 单块即可覆盖 → 直接整篇翻译，上下文最完整、质量最好
  if (chunks.length <= 1 || md.length <= CHUNK_SOFT_LIMIT) {
    return translateStrict(md, lang, "content")
  }

  const out: string[] = []
  for (let i = 0; i < chunks.length; i++) {
    const c = chunks[i]
    const part = await translateStrict(c.body, lang, "content")
    out.push(part.trim())
    if (i < chunks.length - 1) await sleep(300)
  }
  return out.join("\n\n")
}

// ── 并发池 ───────────────────────────────────────────────
async function pool<T>(items: T[], size: number, worker: (item: T, idx: number) => Promise<void>) {
  let cursor = 0
  const runners = Array.from({ length: Math.min(size, items.length) }, async () => {
    while (true) {
      const idx = cursor++
      if (idx >= items.length) return
      await worker(items[idx], idx)
    }
  })
  await Promise.all(runners)
}

// ── 主流程 ───────────────────────────────────────────────
async function main() {
  const t0 = Date.now()

  console.log(`\n=== 博客批量翻译（精准版）===`)
  console.log(`模型:     ${MODEL}`)
  console.log(`接口:     ${BASE_URL}`)
  console.log(`目标语言: ${targetLangs.join(", ")}`)
  console.log(`并发:     ${CONCURRENCY}`)
  console.log(`分块阈值: ${CHUNK_SOFT_LIMIT} 字符    输出上限: ${MAX_OUTPUT_TOKENS} tokens`)
  console.log(`落盘策略: 每 ${PERSIST_EVERY} 项或 ${PERSIST_INTERVAL_MS / 1000} 秒`)
  if (argSlug) console.log(`指定文章: ${argSlug}`)
  if (limit) console.log(`数量上限: ${limit}`)
  if (force) console.log(`模式:     强制重翻（忽略已有译文）`)
  if (dryRun) console.log(`模式:     dry-run（不调用 API）`)
  console.log()

  if (!dryRun && !API_KEY) {
    console.error("错误：未找到 API Key。请在 .env.local 配置 APIYI_API_KEY 或 OPENAI_API_KEY。")
    process.exit(1)
  }

  // 1) 提取全部文章
  console.log("扫描 lib/blog-data-*.ts ...")
  let posts = await extractPosts()
  console.log(`共 ${posts.length} 篇文章，正文合计 ${posts.reduce((n, p) => n + p.content.length, 0).toLocaleString()} 字符\n`)

  if (argSlug) {
    posts = posts.filter((p) => p.slug === argSlug)
    if (!posts.length) {
      console.error(`未找到 slug=${argSlug}`)
      process.exit(1)
    }
  }
  if (limit) posts = posts.slice(0, limit)

  // 2) 读取已有译文
  let translations: Record<string, any> = {}
  if (fs.existsSync(TRANSLATIONS_PATH)) {
    try {
      translations = JSON.parse(fs.readFileSync(TRANSLATIONS_PATH, "utf8"))
    } catch {
      console.warn("警告：blog-translations.json 解析失败，本次将视作空文件重建")
    }
  }

  // 3) 计算任务
  type Task = { post: PostData; lang: string }
  const tasks: Task[] = []
  for (const post of posts) {
    for (const lang of targetLangs) {
      if (!ALL_LANGS.includes(lang as any)) {
        console.warn(`[warn] 不支持的目标语言: ${lang}（可选 ${ALL_LANGS.join("/")}）`)
        continue
      }
      const existing = translations[post.slug]?.[lang]
      const complete = existing?.title && existing?.excerpt && existing?.content
      if (complete && !force) continue
      tasks.push({ post, lang })
    }
  }

  const estChars = tasks.reduce((n, t) => n + t.post.content.length + t.post.title.length + t.post.excerpt.length, 0)
  console.log(`待翻译任务: ${tasks.length} 项（${posts.length} 篇 × ${targetLangs.length} 语言，已完成的自动跳过）`)
  console.log(`待译字符量: 约 ${estChars.toLocaleString()} 字符\n`)

  if (!tasks.length) {
    console.log("✓ 没有待翻译内容，全部已完成。")
    return
  }

  if (dryRun) {
    console.log("dry-run 待翻译清单：")
    for (const t of tasks.slice(0, 40)) console.log(`  ${t.post.slug}  →  ${t.lang}`)
    if (tasks.length > 40) console.log(`  ... 其余 ${tasks.length - 40} 项`)
    console.log("\n去掉 --dry-run 即可开始实际翻译。")
    return
  }

  // 4) 并发翻译
  let done = 0
  let ok = 0
  let failed = 0
  const failures: { slug: string; lang: string; error: string }[] = []

  // 落盘节流：原实现每完成一项就把整份 6MB JSON 序列化重写一次，
  // 470 项累计约 2.9GB 磁盘写入 + 大量重复的 JSON.stringify。
  // 现在改为「每 PERSIST_EVERY 项或每 PERSIST_INTERVAL_MS 毫秒」落一次，
  // 断点续跑能力保留（最坏情况只回退 20 秒的进度）。
  let sinceLastPersist = 0
  let lastPersistAt = Date.now()

  const persist = () => {
    fs.mkdirSync(path.dirname(TRANSLATIONS_PATH), { recursive: true })
    fs.writeFileSync(TRANSLATIONS_PATH, JSON.stringify(translations, null, 2) + "\n", "utf8")
    sinceLastPersist = 0
    lastPersistAt = Date.now()
  }

  const touch = () => {
    sinceLastPersist++
    if (sinceLastPersist >= PERSIST_EVERY || Date.now() - lastPersistAt >= PERSIST_INTERVAL_MS) persist()
  }

  console.log("开始翻译 ...\n")

  await pool(tasks, CONCURRENCY, async (task) => {
    const { post, lang } = task
    const label = `${post.slug} → ${lang}`
    try {
      // 标题 + 摘要合并为一次请求（省掉一次 system prompt 重发）
      const { title, excerpt } = await translateMeta(post.title, post.excerpt, lang)
      const content = await translateContent(post.content, lang)

      if (!translations[post.slug]) translations[post.slug] = {}
      translations[post.slug][lang] = { title, excerpt, content }

      // 节流落盘，支持断点续跑
      touch()

      ok++
      done++
      console.log(`  ✓ [${done}/${tasks.length}] ${label}  (${content.length} 字符)`)
    } catch (e) {
      failed++
      done++
      const msg = (e as Error).message
      failures.push({ slug: post.slug, lang, error: msg })
      console.error(`  ✗ [${done}/${tasks.length}] ${label}  ${msg.slice(0, 160)}`)
    }
  })

  // 5) 汇总
  persist()

  const usageOut = {
    model: MODEL,
    ranAt: new Date().toISOString(),
    tasks: tasks.length,
    success: ok,
    failed,
    promptTokens: usageTotal.prompt,
    completionTokens: usageTotal.completion,
    totalTokens: usageTotal.prompt + usageTotal.completion,
  }
  fs.writeFileSync(USAGE_PATH, JSON.stringify(usageOut, null, 2) + "\n", "utf8")

  const coveredLangs = new Set<string>()
  for (const v of Object.values(translations) as any[]) for (const k of Object.keys(v)) coveredLangs.add(k)

  console.log(`\n=== 完成 ===`)
  console.log(`成功: ${ok}   失败: ${failed}   用时: ${((Date.now() - t0) / 1000 / 60).toFixed(1)} 分钟`)
  console.log(`已覆盖: ${Object.keys(translations).length} 篇文章 × [${[...coveredLangs].sort().join(", ")}]`)
  console.log(`Token:  输入 ${usageTotal.prompt.toLocaleString()} / 输出 ${usageTotal.completion.toLocaleString()}`)
  console.log(`输出:   ${TRANSLATIONS_PATH}`)
  console.log(`统计:   ${USAGE_PATH}`)

  if (failures.length) {
    console.log(`\n失败清单（重跑本脚本会自动补翻）：`)
    for (const f of failures) console.log(`  - ${f.slug} [${f.lang}] ${f.error.slice(0, 120)}`)
  }
}

main().catch((e) => {
  console.error("致命错误:", e)
  process.exit(1)
})
