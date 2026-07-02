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
    name: cfg.fullName,
    alternateName: cfg.name,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.jpg`,
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
    name: cfg.fullName,
    alternateName: cfg.name,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.jpg`,
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

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
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
  const url = locale === "zh"
    ? `${baseUrl}/blog/${slug}`
    : `${baseUrl}/${locale}/blog/${slug}`

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
        url: `${baseUrl}/images/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
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
