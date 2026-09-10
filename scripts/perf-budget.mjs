#!/usr/bin/env node
/**
 * 首屏性能预算门禁 —— 构建后运行，超预算即以非 0 退出码失败（可直接用于 CI）。
 *
 * 用法：
 *   node scripts/perf-budget.mjs            # 检查
 *   node scripts/perf-budget.mjs --json     # 输出 JSON（供 CI 采集）
 *
 * 前置：先跑过一次 `next build`（需要 .next/server/app 下的预渲染 HTML）。
 *
 * 检查项：
 *   1. 核心页首屏 JS+CSS 的 gzip 体积
 *   2. public/images 下单张图片体积（防止再出现 2.5MB 的 PNG）
 *   3. 构建产物字体文件数与体积
 *   4. public/ 总体积
 *   5. 泄露扫描：客户端脚本里是否又混进了已知的大数据模块
 *
 * 预算值改 BUDGETS 即可。加白名单用 ALLOWLIST。
 */
import fs from 'fs'
import path from 'path'
import zlib from 'zlib'

// ────────────────────────────────────────────────
// 预算配置（单位：KB。gzip 后体积）
// ────────────────────────────────────────────────
const BUDGETS = {
  /** 单页首屏 JS+CSS 的 gzip 上限 */
  pageJsCssGzip: 300,
  /**
   * 单张图片体积上限。
   * 依据：站内最大的图片请求宽度是 deviceSizes 上限 1280（应用领域页 sizes 最大 1024），
   * 源图控制在 1600 宽 / 350KB 已有充足余量。超过此值说明又混进了未压缩的大图。
   */
  imageFile: 350,
  /** 构建产物字体文件数量上限 */
  fontFileCount: 200,
  /** 构建产物字体总体积上限 */
  fontTotalSize: 6 * 1024, // 6MB
  /** public/ 总体积上限 */
  publicTotalSize: 40 * 1024, // 40MB
}

/** 白名单：这些路径的体积检查跳过（glob 后缀匹配） */
const ALLOWLIST = {
  images: [
    // Open Graph 分享图，部分平台对 JPG 兼容性更好，且只被爬虫抓取
    'og-banner.jpg',
    // 页面占位符，不是真实文件
    'xxx.jpg',
  ],
  /** 允许出现在客户端脚本里的大数据模块（正常应为空） */
  clientDataModules: [],
}

/** 需要检查的核心页（相对 .next/server/app 的 HTML 路径） */
const KEY_PAGES = [
  'en.html',
  'zh.html',
  'en/products.html',
  'en/blog.html',
  'en/contact.html',
  'en/factory.html',
]

// ────────────────────────────────────────────────
const ROOT = process.cwd()
const APP_DIR = path.join(ROOT, '.next', 'server', 'app')
const STATIC_DIR = path.join(ROOT, '.next', 'static')
const JSON_OUT = process.argv.includes('--json')

const kb = (n) => n / 1024
const results = []
let failed = 0

function record(ok, category, detail, actual, budget) {
  results.push({ ok, category, detail, actualKB: actual === undefined ? undefined : +actual.toFixed(1), budgetKB: budget })
  if (!ok) failed++
}

// ── 1. 页面首屏 JS+CSS ──────────────────────────
function checkPages() {
  if (!fs.existsSync(APP_DIR)) {
    record(false, 'precondition', '.next/server/app 不存在，请先执行 next build', undefined, undefined)
    return
  }
  for (const rel of KEY_PAGES) {
    const file = path.join(APP_DIR, rel)
    if (!fs.existsSync(file)) {
      record(false, 'page', `${rel} 没有预渲染 HTML（该页面可能退化成了动态 SSR）`, undefined, BUDGETS.pageJsCssGzip)
      continue
    }
    const html = fs.readFileSync(file, 'utf8')
    const assets = [
      ...new Set([
        ...[...html.matchAll(/<script[^>]+src="([^"]+\.js)"/g)].map((m) => m[1]),
        ...[...html.matchAll(/<link[^>]+href="([^"]+\.css)"/g)].map((m) => m[1]),
      ]),
    ]
    let total = 0
    let missing = 0
    for (const url of assets) {
      const p = path.join(STATIC_DIR, decodeURIComponent(url.replace(/^\/_next\/static\//, '')))
      if (!fs.existsSync(p)) { missing++; continue }
      total += zlib.gzipSync(fs.readFileSync(p), { level: 9 }).length
    }
    const ok = kb(total) <= BUDGETS.pageJsCssGzip && missing === 0
    record(ok, 'page', rel + (missing ? `（${missing} 个资源文件缺失）` : ''), kb(total), BUDGETS.pageJsCssGzip)
  }
}

// ── 2. 图片单文件体积 ──────────────────────────
function walk(dir, filter, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, filter, out)
    else if (filter(p)) out.push(p)
  }
  return out
}

function checkImages() {
  const dir = path.join(ROOT, 'public', 'images')
  const files = walk(dir, (p) => /\.(png|jpe?g|webp|avif|gif|svg)$/i.test(p))
  let checked = 0
  let over = 0
  let largest = { file: '', size: 0 }
  for (const f of files) {
    const base = path.basename(f)
    if (ALLOWLIST.images.includes(base)) continue
    checked++
    const size = fs.statSync(f).size
    if (size > largest.size) largest = { file: path.relative(ROOT, f), size }
    if (kb(size) > BUDGETS.imageFile) {
      over++
      // 只在超限时逐条列出，避免 100+ 行流水账淹没 CI 日志
      record(false, 'image', path.relative(ROOT, f), kb(size), BUDGETS.imageFile)
    }
  }
  if (over === 0) {
    record(true, 'image', `${checked} 张图片全部在限内（最大：${largest.file} ${kb(largest.size).toFixed(1)}KB）`, kb(largest.size), BUDGETS.imageFile)
  }
}

// ── 3. 字体产物 ────────────────────────────────
function checkFonts() {
  const dir = path.join(STATIC_DIR, 'media')
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  let total = 0
  for (const f of files) total += fs.statSync(path.join(dir, f)).size
  record(files.length <= BUDGETS.fontFileCount, 'font', `.next/static/media 文件数：${files.length}`, files.length, BUDGETS.fontFileCount)
  record(kb(total) <= BUDGETS.fontTotalSize, 'font', '.next/static/media 总体积', kb(total), BUDGETS.fontTotalSize)
}

// ── 4. public 总体积 ───────────────────────────
function dirSize(dir) {
  let total = 0
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    total += e.isDirectory() ? dirSize(p) : fs.statSync(p).size
  }
  return total
}

function checkPublic() {
  const dir = path.join(ROOT, 'public')
  if (!fs.existsSync(dir)) return
  const total = dirSize(dir)
  record(kb(total) <= BUDGETS.publicTotalSize, 'public', 'public/ 总体积', kb(total), BUDGETS.publicTotalSize)
}

// ── 5. 泄露扫描：大数据模块是否又进了客户端 ────────
function checkClientDataLeak() {
  if (!fs.existsSync(APP_DIR)) return
  const known = [
    'translations-products',
    'translations-faq-page',
    'blog-data-',
    'industry-landing-data',
    'materials-data',
  ].filter((m) => !ALLOWLIST.clientDataModules.includes(m))

  const htmls = walk(APP_DIR, (p) => p.endsWith('.html'))
  const hits = new Map()
  for (const f of htmls) {
    const html = fs.readFileSync(f, 'utf8')
    const scripts = [...html.matchAll(/<script[^>]+src="([^"]+\.js)"/g)].map((m) => m[1])
    for (const url of scripts) {
      const p = path.join(STATIC_DIR, decodeURIComponent(url.replace(/^\/_next\/static\//, '')))
      if (!fs.existsSync(p)) continue
      const src = fs.readFileSync(p, 'utf8')
      for (const mod of known) {
        if (src.includes(mod)) hits.set(mod, (hits.get(mod) ?? 0) + 1)
      }
    }
  }
  if (hits.size === 0) {
    record(true, 'leak', '客户端脚本里未发现已知大数据模块', 0, 0)
  } else {
    for (const [mod, n] of hits) {
      record(false, 'leak', `客户端脚本里出现了 ${mod}（命中 ${n} 个分块）—— 数据可能又被打进了浏览器包`, n, 0)
    }
  }
}

// ── 执行 ───────────────────────────────────────
checkPages()
checkImages()
checkFonts()
checkPublic()
checkClientDataLeak()

if (JSON_OUT) {
  console.log(JSON.stringify({ failed, results }, null, 2))
} else {
  const pad = (s, n) => String(s).padEnd(n)
  const fmt = (v) => (v === undefined ? '—' : v.toFixed(1))

  console.log('首屏性能预算门禁')
  console.log('─'.repeat(96))
  for (const r of results) {
    const mark = r.ok ? '✓' : '✗'
    const actual = r.budgetKB ? `${fmt(r.actualKB)}/${r.budgetKB}KB` : `${fmt(r.actualKB)}`
    console.log(`${mark} ${pad(r.category, 12)} ${pad(r.detail, 62)} ${actual}`)
  }
  console.log('─'.repeat(96))
  const total = results.length
  if (failed === 0) {
    console.log(`✓ 全部通过（${total} 项）`)
  } else {
    console.log(`✗ ${failed}/${total} 项超预算或有异常，详见上方标 ✗ 的行`)
  }
}

process.exit(failed === 0 ? 0 : 1)
