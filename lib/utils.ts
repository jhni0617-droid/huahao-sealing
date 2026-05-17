import { siteConfig } from "./constants"

export function generateMeta({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path?: string
}) {
  const fullTitle = `${title} | ${siteConfig.name}`
  const url = path ? `${siteConfig.website}${path}` : siteConfig.website

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
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
