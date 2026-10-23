"use client"

import { useLocale } from "next-intl"
import { getLocalized } from "@/lib/locale-data"
import { CONSENT_OPEN_EVENT } from "@/lib/consent"

const copy: Record<string, string> = {
  zh: "Cookie 设置",
  en: "Cookie settings",
  vi: "Cài đặt cookie",
  th: "การตั้งค่าคุกกี้",
  ru: "Настройки cookie",
  ja: "Cookie 設定",
  ko: "쿠키 설정",
}

/**
 * 页脚的 Cookie 设置入口。
 * GDPR 要求同意可随时撤回、可随时更改，所以必须有一个常驻入口能重新打开横幅。
 */
export default function CookieSettingsButton({ className = "" }: { className?: string }) {
  const locale = useLocale()

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
      className={`text-xs text-gray-500 underline underline-offset-2 transition-colors hover:text-gray-300 ${className}`}
    >
      {getLocalized(copy, locale)}
    </button>
  )
}
