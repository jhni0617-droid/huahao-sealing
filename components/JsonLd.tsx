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
  const schema = {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
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
