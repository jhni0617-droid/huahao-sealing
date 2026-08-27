import { productsByLocale } from "@/lib/translations-products"
import { siteConfig, enSiteConfig } from "@/lib/constants"

/**
 * llms.txt（GEO）：面向 AI / 生成式引擎的站点摘要与关键链接清单。
 * 规范见 https://llmstxt.org —— H1 标题 + blockquote 摘要 + 分区链接。
 * 从产品数据自动生成，与站内内容保持同步；纯静态输出。
 */
export const dynamic = "force-static"

export function GET() {
  const base = siteConfig.website
  const cfg = enSiteConfig
  const products = productsByLocale.en ?? []

  const lines: string[] = [
    "# Huahao Sealing — Carbon Graphite Sealing Components Manufacturer",
    "",
    `> ${cfg.name} (${cfg.fullName}) is a Chinese manufacturer of carbon graphite sealing components: mechanical seal faces (seal rings), self-lubricating graphite bushings and bearings, and segmented split rings. Over 20 years of manufacturing experience, 1,000+ customers served, exporting to 10+ countries across Europe, Asia, the Americas and the Middle East. Custom OEM machining from drawings or samples; resin, antimony, copper and lead-impregnated carbon graphite grades; ISO 9001 certified with DNV marine-type approvals. Typical applications: centrifugal / chemical / seawater pumps, marine shaft seals, chemical processing and general rotating equipment.`,
    "",
    "## Products",
    ...products.map(
      (p) =>
        `- [${p.name} (${p.model})](${base}/en/products/${p.slug}): ${p.shortDesc}`
    ),
    "",
    "## Key Pages",
    `- [All Products](${base}/en/products): full carbon graphite product catalog by category.`,
    `- [Applications](${base}/en/applications): industry sealing solutions — pumps, marine, chemical & pharma, power & energy, food & pharma machinery, metallurgy & mining, oil & gas, general industry.`,
    `- [Material Comparison](${base}/en/compare): carbon graphite grades vs. mating materials, properties and selection guidance.`,
    `- [Technical Parameters](${base}/en/technical-params): grade data sheets — density, hardness, flexural strength, temperature limits.`,
    `- [Case Studies](${base}/en/cases): real-world sealing problems and measured results.`,
    `- [Factory & Quality](${base}/en/factory): CNC machining, materials lab, 100% dimensional inspection.`,
    `- [FAQ](${base}/en/faq): leakage, tolerances, materials, sampling and ordering questions answered.`,
    `- [Technical Blog](${base}/en/blog): seal selection, machining precision and maintenance guides.`,
    `- [About](${base}/en/about): company profile and certifications.`,
    `- [Contact / RFQ](${base}/en/contact): send a drawing for a quote.`,
    "",
    "## Contact",
    `- Email: ${cfg.email}`,
    `- Phone / WhatsApp: ${cfg.phone}`,
    `- Address: ${cfg.address}`,
    `- Website: ${base}`,
    "",
    "Languages: en, zh, vi, th, ru, ja, ko (URL pattern: " + base + "/{locale}/...).",
  ]

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
