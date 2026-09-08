"use client"

import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { continentPaths, chinaPosition, generatedCountries } from "@/lib/continent-data"
import { getLocalized } from "@/lib/locale-data"
import SectionRail, { HomeSection } from "@/components/home/SectionRail"

const railLabel = {
  zh: "全球客户", en: "Global Clients", vi: "Khách hàng toàn cầu", th: "ลูกค้าทั่วโลก", ru: "Глобальные клиенты", ja: "グローバル顧客", ko: "글로벌 고객",
}

const countries = generatedCountries
const chinaPos = chinaPosition

/* 概念 A 配色：灰阶分层 + 唯一红色 HQ */
const ACCENT = "#E60012"
const regionColor = (region: string) =>
  region === "欧洲" ? "#d4d8dd" : region === "亚洲" ? "#a6acb4" : region === "中东及非洲" ? "#71767e" : "#4b5158"

const regionsData = {
  zh: [
    { name: "欧洲", color: "#d4d8dd" },
    { name: "亚洲", color: "#a6acb4" },
    { name: "中东及非洲", color: "#71767e" },
    { name: "美洲", color: "#4b5158" },
  ],
  en: [
    { name: "Europe", color: "#d4d8dd" },
    { name: "Asia", color: "#a6acb4" },
    { name: "Middle East & Africa", color: "#71767e" },
    { name: "Americas", color: "#4b5158" },
  ],
  vi: [
    { name: "Châu Âu", color: "#d4d8dd" },
    { name: "Châu Á", color: "#a6acb4" },
    { name: "Trung Đông & Châu Phi", color: "#71767e" },
    { name: "Châu Mỹ", color: "#4b5158" },
  ],
  th: [
    { name: "ยุโรป", color: "#d4d8dd" },
    { name: "เอเชีย", color: "#a6acb4" },
    { name: "ตะวันออกกลางและแอฟริกา", color: "#71767e" },
    { name: "อเมริกา", color: "#4b5158" },
  ],
  ru: [
    { name: "Европа", color: "#d4d8dd" },
    { name: "Азия", color: "#a6acb4" },
    { name: "Ближний Восток и Африка", color: "#71767e" },
    { name: "Америка", color: "#4b5158" },
  ],
  ja: [
    { name: "ヨーロッパ", color: "#d4d8dd" },
    { name: "アジア", color: "#a6acb4" },
    { name: "中東・アフリカ", color: "#71767e" },
    { name: "アメリカ", color: "#4b5158" },
  ],
  ko: [
    { name: "유럽", color: "#d4d8dd" },
    { name: "아시아", color: "#a6acb4" },
    { name: "중동 및 아프리카", color: "#71767e" },
    { name: "아메리카", color: "#4b5158" },
  ],
}


export default function ClientsSection() {
  const [hovered, setHovered] = useState<string | null>(null)
  const locale = useLocale()
  const t = useTranslations("home.clients")
  const regions = getLocalized(regionsData, locale)

  return (
    <HomeSection className="bg-white">
      <SectionRail locale={locale} index="04" label={getLocalized(railLabel, locale)} en="Global Clients" href="/markets" />

      <div className="min-w-0">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-8 bg-accent" aria-hidden />
            <span className="en-caption text-xs text-muted">{t("tag")}</span>
          </div>
          <h2 className="font-serif-sc text-3xl font-bold leading-tight text-primary md:text-4xl">
            {t("title")}
            <span className="text-accent">10+</span> {t("titleSuffix")}
          </h2>
          <p className="mt-4 text-muted leading-relaxed text-base">
            {t("description")}
          </p>
        </div>

        {/* World map card — 出口数字已由页首统计带与 03 工厂区块承载，这里不再重复 */}
        <div className="relative mt-10">
          <div className="relative overflow-hidden border border-border bg-[#14171c]">
            <svg viewBox="0 0 1000 500" className="w-full h-auto block" aria-label={getLocalized({ zh: "世界地图", en: "World Map", vi: "Bản đồ thế giới", th: "แผนที่โลก", ru: "Карта мира", ja: "世界地図", ko: "세계 지도" }, locale)}>
              <defs>
                <radialGradient id="chinaGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={ACCENT} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
                </radialGradient>
                {countries.map((c) => (
                  <radialGradient key={`glow-${c.name}`} id={`glow-${c.name}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={regionColor(c.region)} stopOpacity={hovered === c.name ? "0.35" : "0.15"} />
                    <stop offset="100%" stopColor={regionColor(c.region)} stopOpacity="0" />
                  </radialGradient>
                ))}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g opacity={0.08}>
                {[80, 160, 240, 320, 400].map((y) => (
                  <line key={`lat-${y}`} x1={30} y1={y} x2={970} y2={y} stroke="#fff" strokeWidth={0.5} strokeDasharray="4,4" />
                ))}
                {[150, 300, 450, 600, 750, 900].map((x) => (
                  <line key={`lng-${x}`} x1={x} y1={20} x2={x} y2={480} stroke="#fff" strokeWidth={0.5} strokeDasharray="4,4" />
                ))}
              </g>

              <g opacity={0.5}>
                {Object.entries(continentPaths).map(([code, d]) => (
                  <path key={code} d={d} fill="#2b2f36" stroke="#4a505a" strokeWidth={1.5} strokeLinejoin="round" />
                ))}
              </g>

              <g opacity={hovered ? 0.12 : 0.05}>
                {countries.map((c) => {
                  const midX = (chinaPos.x + c.x) / 2
                  const midY = Math.min(chinaPos.y, c.y) - 40
                  return (
                    <path
                      key={`line-${c.name}`}
                      d={`M${chinaPos.x},${chinaPos.y} Q${midX},${midY} ${c.x},${c.y}`}
                      fill="none"
                      stroke={regionColor(c.region)}
                      strokeWidth={0.8}
                      strokeDasharray="3,4"
                    />
                  )
                })}
              </g>

              <circle cx={chinaPos.x} cy={chinaPos.y} r={50} fill="url(#chinaGlow)" />
              <circle cx={chinaPos.x} cy={chinaPos.y} r={6} fill={ACCENT} opacity={0.3} />
              <circle cx={chinaPos.x} cy={chinaPos.y} r={4} fill={ACCENT} style={{ filter: "url(#glow)" }} />
              <text x={chinaPos.x} y={chinaPos.y - 12} textAnchor="middle" fill={ACCENT} fontSize="9" fontWeight="700" className="select-none">
                {getLocalized({ zh: "华豪密封", en: "Huahao Sealing", vi: "Huahao Sealing", th: "Huahao Sealing", ru: "Huahao Sealing", ja: "Huahao Sealing", ko: "Huahao Sealing" }, locale)}
              </text>

              {countries.map((c) => (
                <g key={c.name}>
                  <circle cx={c.x} cy={c.y} r={hovered === c.name ? 22 : 18} fill={`url(#glow-${c.name})`} className="transition-all duration-500" />
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={hovered === c.name ? 10 : 7}
                    fill="none"
                    stroke={regionColor(c.region)}
                    strokeWidth={0.5}
                    opacity={hovered === c.name ? 0.8 : 0.3}
                    className="transition-all duration-500"
                  >
                    {!hovered && (
                      <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
                    )}
                  </circle>
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={3.5}
                    fill={regionColor(c.region)}
                    className="cursor-pointer"
                    style={{ filter: hovered === c.name ? "brightness(1.4)" : "none" }}
                    onMouseEnter={() => setHovered(c.name)}
                    onMouseLeave={() => setHovered(null)}
                  />
                  {hovered === c.name && (
                    <g>
                      <rect x={c.x - 20} y={c.y - 24} width={40} height={16} rx={4} fill="#1B2838" opacity={0.9} />
                      <text x={c.x} y={c.y - 13} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">
                        {c.name}
                      </text>
                    </g>
                  )}
                </g>
              ))}
            </svg>

            <div className="flex flex-wrap justify-center gap-4 gap-y-2 border-t border-white/[0.08] px-4 pb-4 pt-3">
              {regions.map((r) => (
                <div key={r.name} className="flex items-center gap-1.5">
                  <div className="h-2 w-2" style={{ backgroundColor: r.color }} />
                  <span className="text-[11px] text-gray-400">{r.name}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 bg-gray-600" />
                <span className="text-[11px] text-gray-500">{t("expanding")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2" style={{ backgroundColor: ACCENT }} />
                <span className="text-[11px] font-medium text-gray-400">{t("hq")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}
