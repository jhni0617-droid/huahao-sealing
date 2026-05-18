"use client"

import { usePathname, useRouter } from "@/i18n/routing"
import { useLocale } from "next-intl"
import { useTransition } from "react"

const locales = [
  { code: "zh", label: "中文" },
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "th", label: "ไทย" },
  { code: "ru", label: "Русский" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
]

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      disabled={isPending}
      className="bg-transparent border border-border rounded px-2 py-1 text-sm cursor-pointer focus:outline-none focus:border-accent"
      aria-label="选择语言 / Select language"
    >
      {locales.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  )
}
