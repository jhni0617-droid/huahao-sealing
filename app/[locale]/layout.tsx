import { NextIntlClientProvider } from "next-intl"
import { routing } from "@/i18n/routing"
import LayoutShell from "@/components/LayoutShell"
import { OrganizationJsonLd } from "@/components/JsonLd"
import { notFound } from "next/navigation"
import { siteConfig } from "@/lib/constants"
import zh from "../../messages/zh.json"
import en from "../../messages/en.json"
import vi from "../../messages/vi.json"
import th from "../../messages/th.json"
import ru from "../../messages/ru.json"
import ja from "../../messages/ja.json"
import ko from "../../messages/ko.json"

const allMessages = { zh, en, vi, th, ru, ja, ko } as const

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

  const messages = allMessages[locale as keyof typeof allMessages] ?? zh

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <OrganizationJsonLd locale={locale} />
      <LayoutShell>{children}</LayoutShell>
    </NextIntlClientProvider>
  )
}
