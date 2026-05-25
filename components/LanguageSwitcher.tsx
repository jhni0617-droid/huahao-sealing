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

  if (code === "zh") {
    return (
      <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#de2910" />
        <polygon points="4,2 4.7,4.1 6.9,4.1 5.1,5.4 5.8,7.5 4,6.2 2.2,7.5 2.9,5.4 1.1,4.1 3.3,4.1" fill="#ffde00" />
        <circle cx="8.8" cy="2.7" r="0.8" fill="#ffde00" />
        <circle cx="10.4" cy="4.5" r="0.8" fill="#ffde00" />
        <circle cx="10.2" cy="7" r="0.8" fill="#ffde00" />
        <circle cx="8.2" cy="8.7" r="0.8" fill="#ffde00" />
      </svg>
    )
  }

  if (code === "en") {
    return (
      <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#b22234" />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} y={1.23 + i * 2.46} width="24" height="1.23" fill="#fff" />
        ))}
        <rect width="10.5" height="8.6" fill="#3c3b6e" />
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 6 }).map((__, col) => (
            <circle key={`${row}-${col}`} cx={1 + col * 1.6} cy={0.9 + row * 1.55} r="0.22" fill="#fff" />
          ))
        )}
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
      <path d="M0 0h24v16H0z" fill="#fff" />
      <path d="M0 0h24v3.2H0zm0 6.4h24v3.2H0zm0 6.4h24V16H0z" fill="#000" />
      <circle cx="12" cy="8" r="3.2" fill="#cd2e3a" />
      <path d="M12 4.8a3.2 3.2 0 0 1 0 6.4 1.6 1.6 0 0 0 0-3.2 1.6 1.6 0 0 1 0-3.2z" fill="#0047a0" />
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
