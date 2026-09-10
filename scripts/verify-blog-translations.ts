/**
 * 博客译文校验脚本
 * ============================================================
 * 只读检查 content/blog-translations.json 与 lib/blog-data-*.ts 的一致性，
 * 用于上线前确认「94 篇 × 5 语种」是否翻全、结构是否与原版对齐。
 *
 * 检查项：
 *   1. 覆盖率：每篇文章 × 每个目标语种是否都有 title / excerpt / content
 *   2. 结构一致性：译文的 ## / ### 数量、列表项数量是否与英文原文一致
 *   3. 完整性：译文长度比是否落在合理区间（防截断 / 防注水）
 *   4. 术语抽查：关键术语是否优先命中术语表
 *   5. 孤儿条目：翻译文件里有、但博客数据里已不存在的 slug
 *
 * 用法：
 *   npx tsx scripts/verify-blog-translations.ts            # 汇总报告
 *   npx tsx scripts/verify-blog-translations.ts --verbose  # 逐篇列出问题
 *   npx tsx scripts/verify-blog-translations.ts --json     # 机器可读输出
 *
 * 退出码：0 = 全部通过；1 = 存在缺失或结构问题（可用于 CI）
 * ============================================================
 */

import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

const args = process.argv.slice(2)
const verbose = args.includes("--verbose")
const asJson = args.includes("--json")

const ROOT = process.cwd()
const TRANSLATIONS_PATH = path.join(ROOT, "content", "blog-translations.json")
const LANGS = ["vi", "th", "ru", "ja", "ko"]

// 术语抽查（与 translate-blog.ts 的术语表对应，但这里用「词干」匹配）：
// 俄语等屈折语有格/数变化（углеродный → углеродного，пропитка → пропитки），
// 用完整词形做全等匹配会误报，所以按词干判定。
const SPOT_TERMS: Record<string, string[]> = {
  vi: ["than chì", "đệm kín", "ngâm tẩm"],
  th: ["คาร์บอนกราไฟต์", "ซีล", "อัดซึม"],
  ru: ["графит", "уплотнен", "пропитк"],
  ja: ["グラファイト", "シール", "含浸"],
  ko: ["그라파이트", "씰", "함침"],
}

interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
}

function fingerprint(md: string) {
  return {
    h2: (md.match(/^##\s+/gm) || []).length,
    h3: (md.match(/^###\s+/gm) || []).length,
    bullets: (md.match(/^\s*[-*]\s+/gm) || []).length,
    chars: md.length,
  }
}

async function loadPosts(): Promise<Post[]> {
  const dir = path.join(ROOT, "lib")
  const files = fs
    .readdirSync(dir)
    .filter((f) => /^blog-data-\d+\.ts$/.test(f))
    .sort((a, b) => parseInt(a.match(/(\d+)/)![1], 10) - parseInt(b.match(/(\d+)/)![1], 10))

  const posts: Post[] = []
  for (const f of files) {
    const mod = await import(pathToFileURL(path.join(dir, f)).href)
    const batch = Object.values(mod).find(Array.isArray) as any[] | undefined
    if (!batch) continue
    for (const p of batch) {
      if (!p?.slug || !p?.content?.en) continue
      posts.push({
        slug: p.slug,
        title: p.title?.en ?? "",
        excerpt: p.excerpt?.en ?? "",
        content: p.content.en,
      })
    }
  }
  return posts
}

interface Issue {
  slug: string
  lang: string
  kind: string
  detail: string
}

async function main() {
  if (!fs.existsSync(TRANSLATIONS_PATH)) {
    console.error(`未找到翻译文件：${TRANSLATIONS_PATH}`)
    process.exit(1)
  }
  const translations: Record<string, any> = JSON.parse(fs.readFileSync(TRANSLATIONS_PATH, "utf8"))
  const posts = await loadPosts()

  const issues: Issue[] = []
  let cells = 0
  let complete = 0
  let partial = 0

  const perLang: Record<string, { total: number; done: number }> = {}
  for (const l of LANGS) perLang[l] = { total: 0, done: 0 }

  for (const post of posts) {
    const src = fingerprint(post.content)
    for (const lang of LANGS) {
      cells++
      perLang[lang].total++
      const t = translations[post.slug]?.[lang]
      const missing: string[] = []
      if (!t?.title) missing.push("title")
      if (!t?.excerpt) missing.push("excerpt")
      if (!t?.content) missing.push("content")

      if (missing.length) {
        if (missing.length === 3) {
          // 整条缺失，计入覆盖率但不逐条刷屏
        } else {
          partial++
        }
        perLang[lang].done += missing.length === 3 ? 0 : 1 - missing.length / 3
        continue
      }

      complete++
      perLang[lang].done++

      // 结构一致性
      const out = fingerprint(t.content)
      if (out.h2 !== src.h2) issues.push({ slug: post.slug, lang, kind: "H2 数量不符", detail: `${out.h2} ≠ 原文 ${src.h2}` })
      if (out.h3 !== src.h3) issues.push({ slug: post.slug, lang, kind: "H3 数量不符", detail: `${out.h3} ≠ 原文 ${src.h3}` })
      if (src.bullets >= 3 && out.bullets < Math.floor(src.bullets * 0.8))
        issues.push({ slug: post.slug, lang, kind: "列表项偏少", detail: `${out.bullets} vs 原文 ${src.bullets}` })

      // 长度合理性
      if (src.chars > 400) {
        const ratio = out.chars / src.chars
        if (ratio < 0.35) issues.push({ slug: post.slug, lang, kind: "疑似截断", detail: `长度比 ${(ratio * 100).toFixed(0)}%` })
        if (ratio > 4) issues.push({ slug: post.slug, lang, kind: "疑似注水", detail: `长度比 ${(ratio * 100).toFixed(0)}%` })
      }

      // 术语抽查（正文里至少命中一个关键术语词干）
      const haystack = t.content.toLowerCase()
      const hits = SPOT_TERMS[lang].filter((term) => haystack.includes(term.toLowerCase()))
      if (hits.length === 0)
        issues.push({ slug: post.slug, lang, kind: "术语未命中", detail: `期望出现：${SPOT_TERMS[lang].join(" / ")}` })
    }
  }

  // 孤儿条目
  const postSlugs = new Set(posts.map((p) => p.slug))
  const orphans = Object.keys(translations).filter((s) => !postSlugs.has(s))

  // ── 输出 ──
  if (asJson) {
    console.log(JSON.stringify({ cells, complete, partial, issues, orphans, perLang }, null, 2))
  } else {
    console.log(`\n=== 博客译文校验 ===`)
    console.log(`文章总数: ${posts.length}    语种: ${LANGS.join(", ")}`)
    console.log(`翻译单元: ${cells}（${posts.length} 篇 × ${LANGS.length} 语言）`)
    console.log(`完整译文: ${complete}    不完整: ${partial}    缺失: ${cells - complete - partial}`)
    console.log(`总覆盖率: ${((complete / cells) * 100).toFixed(1)}%\n`)

    console.log("分语种覆盖：")
    for (const l of LANGS) {
      const { total, done } = perLang[l]
      const pct = ((done / total) * 100).toFixed(0)
      const bar = "█".repeat(Math.round(done / total * 20)).padEnd(20, "░")
      console.log(`  ${l}  ${bar}  ${done}/${total}  ${pct}%`)
    }

    if (orphans.length) {
      console.log(`\n孤儿条目（${orphans.length} 个，博客数据中已不存在）：`)
      for (const s of orphans.slice(0, 20)) console.log(`  - ${s}`)
    }

    if (issues.length) {
      console.log(`\n结构/质量告警 ${issues.length} 条：`)
      const shown = verbose ? issues : issues.slice(0, 30)
      for (const i of shown) console.log(`  [${i.lang}] ${i.slug}: ${i.kind} — ${i.detail}`)
      if (!verbose && issues.length > 30) console.log(`  ... 其余 ${issues.length - 30} 条（加 --verbose 查看全部）`)
    } else {
      console.log(`\n✓ 未发现结构或质量问题。`)
    }
  }

  process.exit(complete === cells && issues.length === 0 ? 0 : 1)
}

main().catch((e) => {
  console.error("致命错误:", e)
  process.exit(1)
})
