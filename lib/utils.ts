import { siteConfig, enSiteConfig } from "./constants"

export function generateMeta({
  title,
  description,
  path,
  locale,
}: {
  title: string
  description: string
  path?: string
  locale?: string
}) {
  const cfg = locale && locale !== "zh" ? enSiteConfig : siteConfig
  const fullTitle = `${title} | ${cfg.name}`
  const url = path ? `${cfg.website}${path}` : cfg.website

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: cfg.name,
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
    },
    alternates: { canonical: url },
  }
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}
