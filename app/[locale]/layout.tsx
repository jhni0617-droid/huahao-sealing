import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { routing } from "@/i18n/routing"
import LayoutShell from "@/components/LayoutShell"
import { OrganizationJsonLd } from "@/components/JsonLd"
import { notFound } from "next/navigation"
import { siteConfig } from "@/lib/constants"

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const locales = routing.locales

  const alternates = {
    canonical: locale === "zh" ? siteConfig.website : `${siteConfig.website}/${locale}`,
    languages: Object.fromEntries(
      locales.map((l) => [l === "zh" ? "x-default" : l, l === "zh" ? siteConfig.website : `${siteConfig.website}/${l}`])
    ),
  }

  return { alternates }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) notFound()

  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <OrganizationJsonLd locale={locale} />
      <LayoutShell>{children}</LayoutShell>
    </NextIntlClientProvider>
  )
}
