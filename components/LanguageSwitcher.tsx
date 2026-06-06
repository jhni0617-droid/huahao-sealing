"use client"

import { usePathname, useRouter } from "@/i18n/routing"
import { useLocale } from "next-intl"
import { useEffect, useRef, useState, useTransition } from "react"

const locales = [
  { code: "zh", label: "中文" },
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "th", label: "ไทย" },
  { code: "ru", label: "Русский" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
]

function FlagIcon({ code }: { code: string }) {
  const common = "h-4 w-6 overflow-hidden shadow-sm ring-1 ring-black/10"
  const star = "12,1.8 12.8,4.7 15.8,4.7 13.4,6.5 14.3,9.4 12,7.6 9.7,9.4 10.6,6.5 8.2,4.7 11.2,4.7"

  if (code === "zh") {
    return (
      <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#de2910" />
        <polygon points="4,2 4.75,4.25 7.1,4.25 5.2,5.65 5.95,7.9 4,6.5 2.05,7.9 2.8,5.65 0.9,4.25 3.25,4.25" fill="#ffde00" />
        <g fill="#ffde00" transform="scale(.34)">
          <polygon points={star} transform="translate(14 -1) rotate(22 12 8)" />
          <polygon points={star} transform="translate(19 4) rotate(45 12 8)" />
          <polygon points={star} transform="translate(19 11) rotate(68 12 8)" />
          <polygon points={star} transform="translate(14 16) rotate(20 12 8)" />
        </g>
      </svg>
    )
  }

  if (code === "en") {
    return (
      <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#012169" />
        <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3.2" />
        <path d="M0 0l24 16M24 0L0 16" stroke="#c8102e" strokeWidth="1.7" />
        <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5.2" />
        <path d="M12 0v16M0 8h24" stroke="#c8102e" strokeWidth="3.1" />
      </svg>
    )
  }

  if (code === "vi") {
    return (
      <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#da251d" />
        <polygon points="12,3.2 13.2,6.5 16.8,6.5 13.9,8.6 15,12 12,9.9 9,12 10.1,8.6 7.2,6.5 10.8,6.5" fill="#ff0" />
      </svg>
    )
  }

  if (code === "th") {
    return (
      <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#a51931" />
        <rect y="2" width="24" height="2" fill="#f4f5f8" />
        <rect y="4" width="24" height="8" fill="#2d2a4a" />
        <rect y="12" width="24" height="2" fill="#f4f5f8" />
      </svg>
    )
  }

  if (code === "ru") {
    return (
      <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#fff" />
        <rect y="5.33" width="24" height="5.34" fill="#0039a6" />
        <rect y="10.67" width="24" height="5.33" fill="#d52b1e" />
      </svg>
    )
  }

  if (code === "ja") {
    return (
      <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#fff" />
        <circle cx="12" cy="8" r="4" fill="#bc002d" />
      </svg>
    )
  }

  return (
    <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#fff" />
      <g transform="translate(12 8)">
        <path d="M0-3.4a3.4 3.4 0 0 1 0 6.8 1.7 1.7 0 0 1 0-3.4 1.7 1.7 0 0 0 0-3.4z" fill="#0047a0" transform="rotate(33)" />
        <path d="M0-3.4a3.4 3.4 0 0 0 0 6.8 1.7 1.7 0 0 0 0-3.4 1.7 1.7 0 0 1 0-3.4z" fill="#cd2e3a" transform="rotate(33)" />
      </g>
      <g stroke="#111" strokeWidth="0.75">
        <path d="M4.2 2.6l3.7 2.2M4.9 1.5l3.7 2.2M3.5 3.7l3.7 2.2" />
        <path d="M16.1 11.2l3.7 2.2M15.4 12.3l3.7 2.2M16.8 10.1l3.7 2.2" />
        <path d="M16.2 4.8l3.6-2.1M15.4 3.7l1.4-.8M18.4 2l1.4-.8M16.9 5.9l1.4-.8M19.9 4.2l1.4-.8" />
        <path d="M4.2 13.4l3.6-2.1M3.5 12.3l3.6-2.1M4.9 14.5l1.4-.8M7.9 12.8l1.4-.8" />
      </g>
    </svg>
  )
}

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const current = locales.find((item) => item.code === locale) || locales[0]

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    return () => document.removeEventListener("mousedown", handlePointerDown)
  }, [])

  const handleChange = (nextLocale: string) => {
    setOpen(false)
    if (nextLocale === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <div ref={wrapperRef} className="relative" translate="no">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        disabled={isPending}
        className="inline-flex h-9 items-center gap-2 border border-border bg-white px-2.5 text-sm font-medium text-primary transition-colors hover:border-accent/50 focus:outline-none focus-visible:border-accent disabled:opacity-60"
        aria-label="选择语言 / Select language"
        aria-expanded={open}
      >
        <FlagIcon code={current.code} />
        <span className="hidden sm:inline">{current.label}</span>
        <svg className={`h-3.5 w-3.5 text-muted transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden border border-border bg-white shadow-xl">
          {locales.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => handleChange(item.code)}
              className={`flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm transition-colors ${
                item.code === locale
                  ? "bg-accent-subtle text-accent"
                  : "text-primary hover:bg-gray-50"
              }`}
            >
              <FlagIcon code={item.code} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
