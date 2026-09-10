# 博客多语言翻译报告

**日期**：2026-09-10
**范围**：`lib/blog-data-1..10.ts` 全部 94 篇技术博客的英文正文 → 越南语 / 泰语 / 俄语 / 日语 / 韩语
**产物**：`content/blog-translations.json`（6.3 MB）、`content/blog-translations.usage.json`

---

## 一、问题定位

站点共 7 个语种（`en / zh / vi / th / ru / ja / ko`）。盘点后发现**只有博客正文是缺口**：

| 内容层 | 多语言状态 |
|---|---|
| `messages/*.json`（界面文案） | ✅ 7 语种各 330 条键，完全对齐 |
| `lib/translations-products.ts` / `translations-faq-page.ts` / `translations-app-details.ts` | ✅ 7 语种齐备 |
| `lib/locale-data.ts`（站点名称 / 地址 / 描述） | ✅ 7 语种齐备 |
| **博客正文** `lib/blog-data-*.ts` | ❌ **只有 `zh` + `en`** |

而 `app/[locale]/blog/[slug]/page.tsx` 取正文用的是
`getLocalized(post.content, locale)` → `content[locale] ?? content.en`，
所以 **vi / th / ru / ja / ko 五个语种的博客页面此前全部显示英文原文**。

```ts
// lib/locale-data.ts
export function getLocalized<T>(data: Record<string, T>, locale: string): T {
  return data[locale] ?? data.en ?? data.zh   // ← 缺译文时静默回落到英文
}
```

配套的 `scripts/translate-blog.ts` 虽已存在，但从未跑通（`blog-translations.json` 是空的 `{}`）。

---

## 二、批量脚本重写

原脚本（290 行）有三个硬伤，本次全部修掉：

| # | 原脚本问题 | 影响 | 现在 |
|---|---|---|---|
| 1 | 只扫 `blog-data-1..7` | 漏掉 8/9/10 三批共 23 篇（含全部 3 篇置顶公司新闻） | `readdirSync` 自动发现 `lib/blog-data-*.ts` |
| 2 | 用正则切 TS 源码取正文 | 正文里出现反引号或 `zh:` 字面量就错切 / 漏切 | tsx `import()` 直接加载模块取真实数据 |
| 3 | 无结构校验、无分块 | 长文易被截断，译文质量无兜底 | 见下 |

新版 `scripts/translate-blog.ts`（640 行）新增能力：

- **长正文分块翻译**：按 `## / ###` 结构切块（软上限 3500 字符），规避模型截断与"越翻越飘"
- **译后结构校验**：比对 H2 数 / H3 数 / 列表项数 / 长度比（0.35～4.0 区间），不合格自动重试
- **五语种术语表**：`carbon graphite`、`mechanical seal`、`impregnation`、`sintering`、
  `graphitization`、`lapping` 等强制统一译法；品牌名、材料牌号（M106H/M140K/PTFE/SiC）、
  单位（MPa、W/(m·K)、℃、μm、HRC、Ra）一律保留原文
- **并发 + 限流 + 断点续跑**：并发池（默认 4）、每完成一项立即落盘、失败清单、token 统计
- **自动读 `.env.local`**，默认走 `APIYI_API_KEY` + `gpt-4o-mini`
- 参数：`--dry-run` / `--limit=N` / `--lang=xx` / `--slug=xx` / `--force` / `--concurrency=N`

---

## 三、执行结果

先试翻 1 篇确认质量：五个语种的 H2 / H3 / 列表项数量与英文原文**完全一致**（6 / 7 / 5），
术语命中，句子完整无截断 —— 随后才放全量。

| 指标 | 结果 |
|---|---|
| 文章数 | 94 篇 |
| 目标语种 | 5（vi / th / ru / ja / ko） |
| 翻译单元 | **470**（94 × 5） |
| 成功 / 失败 | **465 / 0**（其中 5 项为试点已完成的增量跳过） |
| 耗时 | 55.6 分钟 |
| Token | 输入 2,735,938 / 输出 1,410,653 |

---

## 四、质量校验

新增只读校验脚本 `scripts/verify-blog-translations.ts`（199 行，退出码 0=通过、1=有问题，可挂 CI），
检查：覆盖率、结构一致性（H2·H3·列表项 vs 英文原文）、长度比（防截断/防注水）、
术语词干抽查、孤儿 slug。

```
=== 博客译文校验 ===
文章总数: 94    语种: vi, th, ru, ja, ko
翻译单元: 470（94 篇 × 5 语言）
完整译文: 470    不完整: 0    缺失: 0
总覆盖率: 100.0%

分语种覆盖：
  vi  ████████████████████  94/94  100%
  th  ████████████████████  94/94  100%
  ru  ████████████████████  94/94  100%
  ja  ████████████████████  94/94  100%
  ko  ████████████████████  94/94  100%

✓ 未发现结构或质量问题。
```

### 端到端实测（生产构建 + 真实请求）

`npm run build` 编译通过、TypeScript 通过、141 个静态页面全部生成；
起生产服务器逐语种实测同一篇文章：

| 语种 | HTTP | 要点卡片 | 正文 H2 数 | 页面标题 |
|---|---|---|---|---|
| en | 200 | ✅ | 6 | Carbon Graphite Seal Ring Basics: Structure, Principles and Applications |
| zh | 200 | ✅ | 6 | 碳石墨密封环基础知识：结构、原理与应用 |
| vi | 200 | ✅ | 6 | Những Điều Cơ Bản Về Vòng Đệm Than Chì Carbon: Cấu Trúc, Nguyên Lý và Ứng Dụng |
| th | 200 | ✅ | 6 | พื้นฐานแหวนซีลคาร์บอนกราไฟต์: โครงสร้าง หลักการ และการใช้งาน |
| ru | 200 | ✅ | 6 | Основы уплотнительных колец из углеродного графита: структура, принципы и применение |
| ja | 200 | ✅ | 6 | カーボングラファイトシールリングの基本：構造、原理および用途 |
| ko | 200 | ✅ | 6 | 카본 그라파이트 씰 링 기초: 구조, 원리 및 적용 분야 |

博客列表页（`/ru/blog`、`/ja/blog`、`/vi/blog`）也已确认展示译文标题。

---

## 五、顺带修复：一个会让翻译"白翻"的隐性 bug

`app/[locale]/blog/[slug]/page.tsx` 里把「核心要点」的标题**写死**成了固定字符串：

```ts
// 修复前
const takeawayHeaders = ["## 核心要点", "## Key Takeaways", "## Điều chính", "## ประเด็นหลัก"]
```

译文标题一旦变化就匹配不上 —— 而模型实际产出的是
`## Những điểm chính cần lưu ý`（vi）、`## Основные выводы`（ru）、
`## 重要なポイント`（ja）、`## 주요 내용 요약`（ko）、`## ประเด็นสำคัญ`（th）。
后果是 **要点高亮卡片不渲染、GEO 的 FAQ 结构化数据拿不到要点（静默降级成摘要）**。
另外这个列表还漏了 `## Key Points` —— 有 5 篇文章用的正是这个标题，**连英文版都失效**。

**修复方式（语言无关）**：新增 `findTakeawaysRange(lines)`，按
「正文第一个二级标题 + 紧随其后至少 2 条列表项」定位要点区块 ——
已核实全部 94 篇的中/英首标题都是要点区，因此判定稳定可靠。
同时把卡片标签抽成 `TAKEAWAYS_LABEL` 按语种本地化（原来固定显示"核心要点 / Key Takeaways"）。

端到端实测确认：修复前 vi/th/ru/ja/ko 的要点卡片数为 0，修复后**全部 7 个语种均为 1**。

---

## 六、常用命令

```bash
npm run translate:blog:check     # dry-run，只看待翻清单，不调 API
npm run translate:blog           # 全量增量翻译（已完成的自动跳过，可断点续跑）
npm run translate:blog:verify    # 校验覆盖率与结构一致性
```

单独控制：

```bash
npx tsx scripts/translate-blog.ts --limit=1              # 先试翻 1 篇
npx tsx scripts/translate-blog.ts --lang=vi              # 只翻越南语
npx tsx scripts/translate-blog.ts --slug=xxx --force     # 强制重翻某篇
npx tsx scripts/verify-blog-translations.ts --verbose    # 逐条列出问题
```

**新增文章后**：往 `lib/blog-data-*.ts` 加完 `zh` + `en`，直接跑 `npm run translate:blog` 即可
（增量逻辑只翻缺的），再跑 `translate:blog:verify` 确认。

---

## 七、遗留缺口（待决策）

站内还有 **26 处内联 `getLocalized({ zh, en }, locale)`**（去重后 25 条英文串），
只有中/英两语，vi / th / ru / ja / ko 用户看到的是**英文界面标签**：

| 文件 | 处数 |
|---|---|
| `app/[locale]/blog/[slug]/page.tsx` | 7 |
| `app/[locale]/factory/page.tsx` | 7 |
| `app/[locale]/applications/page.tsx` | 5 |
| `app/[locale]/materials/page.tsx` | 3 |
| `app/[locale]/contact/page.tsx` | 2 |
| `app/[locale]/cases/page.tsx` | 1 |
| `app/[locale]/resources/page.tsx` | 1 |

典型文案：`Back to Blog`、`Book a visit`、`Continue Reading`、`Grade Data`、
`Selection Logic`、`← Previous`、`Visit our factory or verify via video call`。

建议后续统一迁移到 `messages/*.json`（与现有 330 条键的体系合并），或直接补齐 7 语种。
量很小，半小时内可做完。

---

## 八、备注

- `content/blog-translations.usage.json` 记录了模型、时间、任务数、token 用量，便于核对成本。
- 6.3 MB 的译文 JSON 由 `lib/blog-data.ts` 静态 import，而它只被 `app/sitemap.ts` 与
  `app/[locale]/blog/[slug]/page.tsx` 引用，**两者都是服务端**；
  客户端仍走 `lib/blog-list-data.ts` 的「服务端解析当前语言 → 传 props」通道，
  译文不会进入客户端包，不影响首屏性能。
- 本次未提交任何 git 改动。
