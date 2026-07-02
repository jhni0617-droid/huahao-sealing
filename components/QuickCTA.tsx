"use client"

import { useLocale } from "next-intl"
import { Link } from "@/i18n/routing"
import { siteConfig } from "@/lib/constants"
import Icon from "@/components/ui/Icon"
import { getLocalized } from "@/lib/locale-data"

const copy = {
  zh: { title: "有密封问题？", subtitle: "工程师24小时内回复", quote: "获取报价", whatsapp: "WhatsApp" },
  en: { title: "Sealing problem?", subtitle: "Engineers reply within 24h", quote: "Get Quote", whatsapp: "WhatsApp" },
  vi: { title: "Vấn đề phớt?", subtitle: "Kỹ sư trả lời trong 24h", quote: "Báo giá", whatsapp: "WhatsApp" },
  th: { title: "ปัญหาซีล?", subtitle: "วิศวกรตอบภายใน 24 ชม.", quote: "ขอใบเสนอราคา", whatsapp: "WhatsApp" },
  ru: { title: "Проблема с уплотнением?", subtitle: "Инженеры ответят за 24 ч", quote: "Получить КП", whatsapp: "WhatsApp" },
  ja: { title: "シールのお悩み？", subtitle: "エンジニアが24時間以内に回答", quote: "見積もり", whatsapp: "WhatsApp" },
  ko: { title: "씰 문제?", subtitle: "엔지니어가 24시간 내 답변", quote: "견적 받기", whatsapp: "WhatsApp" },
}

export default function QuickCTA() {
  const locale = useLocale()
  const t = getLocalized(copy, locale)

  return (
    <div className="bg-primary border-b border-border">
      <div className="container-wide py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-sm text-slate-300 text-center sm:text-left">
          <span className="font-semibold text-white">{t.title}</span>
          <span className="hidden sm:inline"> · {t.subtitle}</span>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-600 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-md hover:bg-green-700 transition-colors whitespace-nowrap"
          >
            <Icon name="whatsapp" className="w-4 h-4 shrink-0" />
            <span>{t.whatsapp}</span>
          </a>
          <Link
            href="/contact"
            className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-2 flex items-center gap-1.5 whitespace-nowrap"
          >
            <Icon name="mail" className="w-4 h-4 shrink-0" />
            <span>{t.quote}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
