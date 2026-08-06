import { siteConfig } from "@/lib/constants"
import { getLocalizedProductCategory, getLocalizedSiteConfig } from "@/lib/locale-data"

const baseUrl = "https://huahaoindustrial.com"

interface JsonLdProps {
  locale?: string
  type?: "Organization" | "Product" | "FAQ" | "BreadcrumbList"
  data?: Record<string, unknown>
}

export function OrganizationJsonLd({ locale = "zh" }: { locale?: string }) {
  const cfg = { ...siteConfig, ...getLocalizedSiteConfig(locale) }

  // Organization schema (for the company in general)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: cfg.fullName,
    alternateName: cfg.name,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.webp`,
    email: cfg.email,
    telephone: cfg.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: cfg.address,
      addressCountry: "CN",
    },
    sameAs: [
      `https://wa.me/${cfg.whatsapp}`,
    ],
    description: cfg.description,
  }

  // LocalBusiness schema (for local search visibility)
  const localBizSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${baseUrl}/#localbusiness`,
    name: cfg.fullName,
    alternateName: cfg.name,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.webp`,
    email: cfg.email,
    telephone: cfg.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: cfg.address,
      addressCountry: "CN",
    },
    description: cfg.description,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" },
    ],
    areaServed: "Worldwide",
    sameAs: [`https://wa.me/${cfg.whatsapp}`],
  }

  // WebSite schema (for site-level search / GEO signals)
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: cfg.name,
    alternateName: cfg.fullName,
    description: cfg.description,
    inLanguage: ["en", "zh", "vi", "th", "ru", "ja", "ko"],
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: cfg.fullName,
      logo: `${baseUrl}/images/logo.webp`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  )
}

export function ProductJsonLd({
  name,
  model,
  description,
  image,
  category,
  locale = "zh",
}: {
  name: string
  model: string
  description: string
  image?: string
  category: string
  locale?: string
}) {
  const cfg = { ...siteConfig, ...getLocalizedSiteConfig(locale) }
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    model,
    description,
    image: image ? `${baseUrl}${image}` : undefined,
    category: getLocalizedProductCategory(category, locale),
    manufacturer: {
      "@type": "Organization",
      name: cfg.fullName,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FaqJsonLd({
  questions,
}: {
  questions: { q: string; a: string }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbJsonLd({ items, locale = "en" }: { items: { name: string; url: string }[]; locale?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    // localePrefix: "always" —— URL 统一带语言前缀，item.url 为不含前缀的路径（如 /products，首页传 ""）
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${baseUrl}/${locale}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  date,
  author,
  locale = "zh",
}: {
  title: string
  description: string
  slug: string
  date: string
  author?: string
  locale?: string
}) {
  const cfg = { ...siteConfig, ...getLocalizedSiteConfig(locale) }
  // localePrefix: "always" —— 所有语言（含默认 en 与 zh）都带前缀：/{locale}/blog/{slug}
  const url = `${baseUrl}/${locale}/blog/${slug}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: author || cfg.fullName,
    },
    publisher: {
      "@type": "Organization",
      name: cfg.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    // GEO：speakable 让 AI/语音助手可直接摘取文章“核心要点”
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#key-takeaways"],
    },
    url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
