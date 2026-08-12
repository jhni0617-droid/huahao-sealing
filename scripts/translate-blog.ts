/**
 * 博客多语言翻译脚本
 *
 * 功能：
 *   读取 lib/blog-data-*.ts 中所有文章的 zh + en 内容，
 *   调用 OpenAI API 翻译成越南语(vi)和泰语(th)，
 *   增量写入 content/blog-translations.json。
 *
 * 用法：
 *   $env:OPENAI_API_KEY="sk-..."           # PowerShell
 *   npx tsx scripts/translate-blog.ts                  # 翻译所有缺失的 vi+th
 *   npx tsx scripts/translate-blog.ts --lang=vi        # 只翻译 vi
 *   npx tsx scripts/translate-blog.ts --slug=xxx       # 只翻译指定文章
 *   npx tsx scripts/translate-blog.ts --limit=5        # 只翻译前 5 篇
 *   npx tsx scripts/translate-blog.ts --dry-run        # 只打印计划，不调用 API
 *
 * 环境变量：
 *   OPENAI_API_KEY        必填
 *   OPENAI_MODEL          可选，默认 gpt-4o-mini
 *   OPENAI_BASE_URL       可选，默认 https://api.openai.com/v1（兼容代理/中转）
 *
 * 注意：
 *   - 增量翻译：已存在于 JSON 的 slug+lang 不会重复翻译
 *   - 串行调用 + 失败重试，避免 API 限流
 *   - 翻译失败的单篇会跳过并打印错误，不影响其他文章
 */

import fs from "node:fs"
import path from "node:path"

// ── 配置 ─────────────────────────────────────────────
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini"
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1"
const TRANSLATIONS_PATH = path.join(process.cwd(), "content", "blog-translations.json")
const TARGET_LANGS = ["vi", "th"] as const
const LANG_NAMES: Record<string, string> = {
  vi: "Vietnamese",
  th: "Thai",
}
const MAX_RETRIES = 3
const RETRY_DELAY_MS = 2000

// ── 参数解析 ─────────────────────────────────────────
const args = process.argv.slice(2)
const argLang = args.find((a) => a.startsWith("--lang="))?.split("=")[1]
const argSlug = args.find((a) => a.startsWith("--slug="))?.split("=")[1]
const argLimit = args.find((a) => a.startsWith("--limit="))?.split("=")[1]
const dryRun = args.includes("--dry-run")

const targetLangs = argLang ? [argLang] : (TARGET_LANGS as readonly string[])
const limit = argLimit ? parseInt(argLimit, 10) : 0

// ── 提取文章数据 ─────────────────────────────────────
// 直接用正则从 blog-data-*.ts 提取，避免 TS 模块加载复杂性
interface PostData {
  slug: string
  titleZh: string
  titleEn: string
  excerptZh: string
  excerptEn: string
  contentZh: string
  contentEn: string
}

function extractPosts(): PostData[] {
  const posts: PostData[] = []
  for (let i = 1; i <= 6; i++) {
    const filePath = path.join(process.cwd(), "lib", `blog-data-${i}.ts`)
    const content = fs.readFileSync(filePath, "utf8")

    // 匹配每篇 post 对象（从 `{` 开始到 `},` 或 `}` 结束）
    // 用 slug 作为锚点切分
    const slugRegex = /slug:\s*["']([^"']+)["']/g
    const slugPositions: { idx: number; slug: string }[] = []
    let m: RegExpExecArray | null
    while ((m = slugRegex.exec(content))) {
      slugPositions.push({ idx: m.index, slug: m[1] })
    }

    for (let s = 0; s < slugPositions.length; s++) {
      const start = slugPositions[s].idx
      const end = s + 1 < slugPositions.length ? slugPositions[s + 1].idx : content.length
      const block = content.slice(start, end)

      const slug = slugPositions[s].slug
      // 提取 title 的 zh / en（普通字符串）
      const titleZh = block.match(/title:\s*\{[^}]*zh:\s*["']([^"']*)["']/)?.[1] || ""
      const titleEn = block.match(/title:\s*\{[^}]*en:\s*["']([^"']*)["']/)?.[1] || ""

      // 提取 excerpt 的 zh / en
      const excerptZh = block.match(/excerpt:\s*\{[^}]*zh:\s*["']([^"']*)["']/)?.[1] || ""
      const excerptEn = block.match(/excerpt:\s*\{[^}]*en:\s*["']([^"']*)["']/)?.[1] || ""

      // 提取 content 的 zh / en（模板字符串，用反引号）
      // 匹配 content: { zh: `...`, en: `...` }
      const contentMatch = block.match(/content:\s*\{([\s\S]*?)\n\s*\}/)
      if (!contentMatch) {
        console.warn(`[warn] ${slug}: content 块未匹配，跳过`)
        continue
      }
      const contentBlock = contentMatch[1]
      const contentZh = contentBlock.match(/zh:\s*`([\s\S]*?)`/)?.[1] || ""
      const contentEn = contentBlock.match(/en:\s*`([\s\S]*?)`/)?.[1] || ""

      if (!titleEn || !contentEn) {
        console.warn(`[warn] ${slug}: 英文字段缺失，跳过`)
        continue
      }

      posts.push({ slug, titleZh, titleEn, excerptZh, excerptEn, contentZh, contentEn })
    }
  }
  return posts
}

// ── OpenAI API 调用 ──────────────────────────────────
async function translateText(
  text: string,
  targetLang: string,
  type: "title" | "excerpt" | "content",
): Promise<string> {
  // 系统提示：保持 markdown 格式、技术术语准确、不翻译品牌名
  const systemPrompt = `You are a professional technical translator for an industrial sealing products B2B website (Huahao Sealing — carbon graphite seal rings, bushings, split rings).

Task: Translate the given ${type === "content" ? "markdown article body" : type} from English to ${LANG_NAMES[targetLang]}.

Rules:
- Preserve all markdown formatting exactly: ## headings, ### subheadings, - bullet lists, **bold**, numbered lists, line breaks.
- Do NOT translate brand names: "Huahao Sealing", "Huahao Carbon Graphite Sealing Co., Ltd."
- Keep technical units as-is: MPa, W/(m·K), ℃, μm, HRC, Ra, mm, etc.
- Keep material grades as-is: M106H, M120K, PTFE, SiC, etc.
- Translate industry terms accurately (e.g., "mechanical seal" → proper ${LANG_NAMES[targetLang]} term).
- Output ONLY the translated text, no explanations, no preamble, no quotes around it.
- For ${LANG_NAMES[targetLang]}, use natural fluent phrasing, not word-for-word translation.`

  const res = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: text },
      ],
      temperature: 0.3,
    }),
  })

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`OpenAI API ${res.status}: ${errText.slice(0, 200)}`)
  }

  const data = await res.json()
  const translated = data.choices?.[0]?.message?.content?.trim()
  if (!translated) throw new Error("API 返回空内容")
  return translated
}

async function translateWithRetry(
  text: string,
  targetLang: string,
  type: "title" | "excerpt" | "content",
): Promise<string> {
  let lastErr: Error | null = null
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await translateText(text, targetLang, type)
    } catch (e) {
      lastErr = e as Error
      console.warn(`  [retry ${attempt}/${MAX_RETRIES}] ${type} 失败: ${(e as Error).message.slice(0, 100)}`)
      if (attempt < MAX_RETRIES) await sleep(RETRY_DELAY_MS * attempt)
    }
  }
  throw lastErr
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

// ── 主流程 ───────────────────────────────────────────
async function main() {
  if (!dryRun && !OPENAI_API_KEY) {
    console.error("错误：未设置 OPENAI_API_KEY 环境变量")
    console.error("PowerShell:  $env:OPENAI_API_KEY=\"sk-...\"")
    console.error("CMD:         set OPENAI_API_KEY=sk-...")
    process.exit(1)
  }

  console.log(`\n=== 博客翻译脚本 ===`)
  console.log(`模型: ${OPENAI_MODEL}`)
  console.log(`目标语言: ${targetLangs.join(", ")}`)
  console.log(`API: ${OPENAI_BASE_URL}`)
  if (argSlug) console.log(`指定文章: ${argSlug}`)
  if (limit) console.log(`数量上限: ${limit}`)
  if (dryRun) console.log(`模式: dry-run（不调用 API）`)
  console.log()

  // 1. 提取所有文章
  const allPosts = extractPosts()
  console.log(`共提取 ${allPosts.length} 篇文章`)

  let posts = allPosts
  if (argSlug) posts = posts.filter((p) => p.slug === argSlug)
  if (limit) posts = posts.slice(0, limit)

  // 2. 读取已有翻译
  let translations: Record<string, any> = {}
  if (fs.existsSync(TRANSLATIONS_PATH)) {
    translations = JSON.parse(fs.readFileSync(TRANSLATIONS_PATH, "utf8"))
  }
  console.log(`已有翻译: ${Object.keys(translations).length} 篇\n`)

  // 3. 计算待翻译任务
  const tasks: { post: PostData; lang: string }[] = []
  for (const post of posts) {
    for (const lang of targetLangs) {
      const existing = translations[post.slug]?.[lang]
      if (existing?.title && existing?.excerpt && existing?.content) {
        continue // 已有完整翻译，跳过
      }
      tasks.push({ post, lang })
    }
  }

  console.log(`待翻译任务: ${tasks.length} 项（${tasks.length / targetLangs.length | 0} 篇 × ${targetLangs.length} 语言）\n`)

  if (tasks.length === 0) {
    console.log("无可翻译任务，全部已完成。")
    return
  }

  if (dryRun) {
    console.log("dry-run 模式，待翻译列表：")
    for (const t of tasks) console.log(`  ${t.post.slug} → ${t.lang}`)
    return
  }

  // 4. 串行翻译
  let success = 0
  let failed = 0
  for (let i = 0; i < tasks.length; i++) {
    const { post, lang } = tasks[i]
    const progress = `[${i + 1}/${tasks.length}]`
    console.log(`${progress} ${post.slug} → ${lang}`)

    try {
      // 翻译三个字段
      const title = await translateWithRetry(post.titleEn, lang, "title")
      process.stdout.write(`  ✓ title`)
      const excerpt = await translateWithRetry(post.excerptEn, lang, "excerpt")
      process.stdout.write(` ✓ excerpt`)
      const content = await translateWithRetry(post.contentEn, lang, "content")
      console.log(` ✓ content (${content.length} chars)`)

      // 写入 translations 对象
      if (!translations[post.slug]) translations[post.slug] = {}
      translations[post.slug][lang] = { title, excerpt, content }

      // 每篇完成后立即写回文件（防中断丢失）
      fs.writeFileSync(TRANSLATIONS_PATH, JSON.stringify(translations, null, 2) + "\n", "utf8")
      success++

      // 请求间隔，避免限流
      await sleep(500)
    } catch (e) {
      console.error(`  ✗ 失败: ${(e as Error).message}`)
      failed++
    }
  }

  console.log(`\n=== 完成 ===`)
  console.log(`成功: ${success}`)
  console.log(`失败: ${failed}`)
  console.log(`输出: ${TRANSLATIONS_PATH}`)
  console.log(`当前翻译总数: ${Object.keys(translations).length} 篇`)
}

main().catch((e) => {
  console.error("致命错误:", e)
  process.exit(1)
})
