import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import Breadcrumb from "@/components/Breadcrumb"
import CTASection from "@/components/CTASection"
import PageHead from "@/components/ui/PageHead"
import StepStrip from "@/components/ui/StepStrip"
import Icon from "@/components/ui/Icon"

const copy = {
  zh: {
    eyebrow: "资料下载",
    title: "技术资料下载",
    description: "产品目录、宣传册、检测报告与报关参考资料，全部可在线查看与下载；其他牌号报告可按需提供。",
    imageAlt: "产品目录、宣传册与石墨密封环图纸",
    listTitle: "全部文件",
    fallbackDesc: "技术资料，点击在线查看或下载",
    steps: [
      { title: "在线查看", desc: "点击文件直接在浏览器打开，无需留资。" },
      { title: "按需定制", desc: "需要其他牌号报告或 3D 图形，提交需求即可。" },
      { title: "工程师支持", desc: "选型疑问可直接附图纸提交，当天回复。" },
    ],
  },
  en: {
    eyebrow: "Downloads",
    title: "Technical Downloads",
    description: "Product catalog, brochure, test reports, and customs reference — all viewable and downloadable online. Reports for other grades available on request.",
    imageAlt: "Product catalog, brochure, and graphite seal ring drawing",
    listTitle: "All files",
    fallbackDesc: "Technical document — click to view or download",
    steps: [
      { title: "View online", desc: "Click any file to open it in the browser, no sign-up required." },
      { title: "On request", desc: "Need another grade report or 3D files? Submit a request." },
      { title: "Engineering support", desc: "Send your drawing with selection questions — same-day reply." },
    ],
  },
}

// 文件夹 public/downloads 即数据源：新文件放入后自动出现在本页；
// 已知文件在此配置中英文标题，未配置的文件回退为文件名 + 通用描述。
// hiddenFiles：不在页面上架的文件（仍保留在文件夹中，可直链访问）。
const hiddenFiles = new Set(["huahao-technical-manual.pdf", "huahao-drawing-template.pdf"])

const fileMeta: Record<string, { zh: { title: string; desc: string }; en: { title: string; desc: string } }> = {
  "huahao-product-catalog.pdf": { zh: { title: "产品目录", desc: "密封环、轴套、分瓣环与非标件全系列型号" }, en: { title: "Product Catalog", desc: "Full range of seal rings, bushings, split rings, and custom parts" } },
  "Huahao-Seals-Brochure.pdf": { zh: { title: "公司宣传册", desc: "工厂能力、工艺流程与质量体系概览" }, en: { title: "Company Brochure", desc: "Factory capability, process, and quality system overview" } },
  "M106D.pdf": { zh: { title: "M106D 检测报告", desc: "第三方实测：密度 2.20 g/cm³、抗压 190 MPa" }, en: { title: "M106D Test Report", desc: "Third-party tested: density 2.20 g/cm³, 190 MPa compressive" } },
  "M120K.pdf": { zh: { title: "M120K 检测报告", desc: "材料性能第三方检测数据" }, en: { title: "M120K Test Report", desc: "Third-party material performance data" } },
  "M140K.pdf": { zh: { title: "M140K 检测报告", desc: "材料性能第三方检测数据" }, en: { title: "M140K Test Report", desc: "Third-party material performance data" } },
  "Huahao-Export-Declaration.docx": { zh: { title: "出口报关申报要素参考", desc: "毛坯料 HS 编码、申报品名与申报要素" }, en: { title: "Export Declaration Reference", desc: "HS codes, product names, and declaration elements for blanks" } },
}

const fileOrder = [
  "huahao-product-catalog.pdf",
  "Huahao-Seals-Brochure.pdf",
  "M106D.pdf",
  "M120K.pdf",
  "M140K.pdf",
  "Huahao-Export-Declaration.docx",
]

type DownloadItem = {
  file: string
  size: string
  zh: { title: string; desc: string }
  en: { title: string; desc: string }
}

// 列出 public/downloads 全部文件；目录不可读时回退到已知清单（不含大小）
function listDownloads(): DownloadItem[] {
  const dir = path.join(process.cwd(), "public", "downloads")
  let names: string[] = []
  try {
    names = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isFile() && !e.name.startsWith(".") && !hiddenFiles.has(e.name))
      .map((e) => e.name)
  } catch {
    names = fileOrder.filter((f) => fileMeta[f])
  }
  const known = names.filter((n) => fileMeta[n])
  const unknown = names.filter((n) => !fileMeta[n]).sort()
  return [...known.sort((a, b) => fileOrder.indexOf(a) - fileOrder.indexOf(b)), ...unknown].map((file) => {
    let size = ""
    try {
      const bytes = fs.statSync(path.join(dir, file)).size
      size = bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`
    } catch {}
    const meta = fileMeta[file]
    if (meta) return { file, size, ...meta }
    const title = file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ")
    return {
      file,
      size,
      zh: { title, desc: copy.zh.fallbackDesc },
      en: { title, desc: copy.en.fallbackDesc },
    }
  })
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "download" })
  return generateMeta({
    title: t("pageTitle"),
    description: copy[locale as keyof typeof copy]?.description ?? copy.en.description,
    path: "/download",
    locale,
  })
}

export default async function DownloadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("download")
  const c = getLocalized(copy, locale)

  const listed = listDownloads()

  return (
    <>
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/download" }]} locale={locale} />

      <PageHead en={c.eyebrow} title={c.title} description={c.description} />

      <section className="bg-white">
        <div className="container-wide py-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative aspect-[16/9] overflow-hidden border border-border bg-background">
              <Image
                src="/images/stock/downloads-desk.webp"
                alt={c.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[3px] w-10 bg-accent" aria-hidden />
                <span className="en-caption text-sm text-muted">{c.listTitle}</span>
              </div>
              <div className="border-t border-border">
                {listed.map((item) => {
                  const text = getLocalized({ zh: item.zh, en: item.en }, locale)
                  return (
                    <a
                      key={item.file}
                      href={`/downloads/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 border-b border-border py-4"
                    >
                      <span className="shrink-0 border border-border px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-muted">
                        {item.file.split(".").pop()}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-bold text-primary transition-colors group-hover:text-accent">
                          {text.title}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-muted">{text.desc}</span>
                      </span>
                      <span className="hidden shrink-0 font-mono text-xs text-muted sm:block">{item.size}</span>
                      <Icon name="download" className="h-4 w-4 shrink-0 text-muted-light transition-colors group-hover:text-accent" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm industrial-surface">
        <div className="container-wide">
          <StepStrip items={getLocalized({ zh: copy.zh.steps, en: copy.en.steps }, locale)} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
