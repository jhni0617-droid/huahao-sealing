import { NextIntlClientProvider } from "next-intl"
import { routing } from "@/i18n/routing"
import LayoutShell from "@/components/LayoutShell"
import { notFound } from "next/navigation"

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) notFound()

  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch {
    messages = (await import(`../../messages/zh.json`)).default
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LayoutShell>{children}</LayoutShell>
    </NextIntlClientProvider>
  )
}
