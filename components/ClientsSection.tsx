"use client"

import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { continentPaths, chinaPosition, generatedCountries } from "@/lib/continent-data"
import { getLocalized } from "@/lib/locale-data"

const countries = generatedCountries
const chinaPos = chinaPosition

const regionsData = {
  zh: [
    { name: "欧洲", color: "#BD7A2C" },
    { name: "亚洲", color: "#3B82F6" },
    { name: "中东及非洲", color: "#059669" },
    { name: "美洲", color: "#EA580C" },
  ],
  en: [
    { name: "Europe", color: "#BD7A2C" },
    { name: "Asia", color: "#3B82F6" },
    { name: "Middle East & Africa", color: "#059669" },
    { name: "Americas", color: "#EA580C" },
  ],
  vi: [
    { name: "Châu Âu", color: "#BD7A2C" },
    { name: "Châu Á", color: "#3B82F6" },
    { name: "Trung Đông & Châu Phi", color: "#059669" },
    { name: "Châu Mỹ", color: "#EA580C" },
  ],
  th: [
    { name: "ยุโรป", color: "#BD7A2C" },
    { name: "เอเชีย", color: "#3B82F6" },
    { name: "ตะวันออกกลางและแอฟริกา", color: "#059669" },
    { name: "อเมริกา", color: "#EA580C" },
  ],
  ru: [
    { name: "Европа", color: "#BD7A2C" },
    { name: "Азия", color: "#3B82F6" },
    { name: "Ближний Восток и Африка", color: "#059669" },
    { name: "Америка", color: "#EA580C" },
  ],
  ja: [
    { name: "ヨーロッパ", color: "#BD7A2C" },
    { name: "アジア", color: "#3B82F6" },
    { name: "中東・アフリカ", color: "#059669" },
    { name: "アメリカ", color: "#EA580C" },
  ],
  ko: [
    { name: "유럽", color: "#BD7A2C" },
    { name: "아시아", color: "#3B82F6" },
    { name: "중동 및 아프리카", color: "#059669" },
    { name: "아메리카", color: "#EA580C" },
  ],
}

const statsData = {
  zh: [
    { value: "15+", label: "出口国家" },
    { value: "1,000+", label: "全球客户" },
    { value: "20+", label: "出口经验（年）" },
    { value: "6", label: "服务大洲" },
  ],
  en: [
    { value: "15+", label: "Export Countries" },
    { value: "1,000+", label: "Global Customers" },
    { value: "20+", label: "Export Experience" },
    { value: "6", label: "Continents Served" },
  ],
  vi: [
    { value: "15+", label: "Quốc gia xuất khẩu" },
    { value: "1,000+", label: "Khách hàng toàn cầu" },
    { value: "20+", label: "Kinh nghiệm xuất khẩu" },
    { value: "6", label: "Châu lục phục vụ" },
  ],
  th: [
    { value: "15+", label: "ประเทศที่ส่งออก" },
    { value: "1,000+", label: "ลูกค้าทั่วโลก" },
    { value: "20+", label: "ประสบการณ์การส่งออก" },
    { value: "6", label: "ทวีปที่ให้บริการ" },
  ],
  ru: [
    { value: "15+", label: "Стран экспорта" },
    { value: "1,000+", label: "Глобальных клиентов" },
    { value: "20+", label: "Опыт экспорта" },
    { value: "6", label: "Континентов" },
  ],
  ja: [
    { value: "15+", label: "輸出国" },
    { value: "1,000+", label: "グローバル顧客" },
    { value: "20+", label: "輸出経験" },
    { value: "6", label: "サービス提供大陸" },
  ],
  ko: [
    { value: "15+", label: "수출 국가" },
    { value: "1,000+", label: "글로벌 고객" },
    { value: "20+", label: "수출 경험" },
    { value: "6", label: "서비스 대륙" },
  ],
}

export default function ClientsSection() {
  const [hovered, setHovered] = useState<string | null>(null)
  const locale = useLocale()
  const t = useTranslations("home.clients")
  const regions = getLocalized(regionsData, locale)
  const stats = getLocalized(statsData, locale)

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="badge-accent justify-center mx-auto mb-4">
            {t("tag")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            {t("title")}
            <span className="text-accent">15+</span> {t("titleSuffix")}
          </h2>
          <p className="text-muted leading-relaxed text-base">
            {t("description")}
          </p>
        </div>

        {/* Stats row — premium card style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="card p-5 md:p-6 text-center hover:translate-y-0">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{s.value}</div>
              <div className="text-xs md:text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Premium World Map Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-lg bg-gradient-to-br from-[#0B1628] via-[#111D35] to-[#0B1628]">
            <svg viewBox="0 0 1000 500" className="w-full h-auto block" aria-label={getLocalized({ zh: "世界地图", en: "World Map", vi: "Bản đồ thế giới", th: "แผนที่โลก", ru: "Карта мира", ja: "世界地図", ko: "세계 지도" }, locale)}>
              <defs>
                <radialGradient id="chinaGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#BD7A2C" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#BD7A2C" stopOpacity="0" />
                </radialGradient>
                {countries.map((c) => (
                  <radialGradient key={`glow-${c.name}`} id={`glow-${c.name}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={c.region === "欧洲" ? "#BD7A2C" : c.region === "亚洲" ? "#3B82F6" : c.region === "中东及非洲" ? "#059669" : "#EA580C"} stopOpacity={hovered === c.name ? "0.35" : "0.15"} />
                    <stop offset="100%" stopColor={c.region === "欧洲" ? "#BD7A2C" : c.region === "亚洲" ? "#3B82F6" : c.region === "中东及非洲" ? "#059669" : "#EA580C"} stopOpacity="0" />
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

              <g opacity={0.3}>
                {Object.entries(continentPaths).map(([code, d]) => (
                  <path key={code} d={d} fill="#2A3A55" stroke="#94A3B8" strokeWidth={1.5} strokeLinejoin="round" />
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
                      stroke={c.region === "欧洲" ? "#BD7A2C" : c.region === "亚洲" ? "#3B82F6" : c.region === "中东及非洲" ? "#059669" : "#EA580C"}
                      strokeWidth={0.8}
                      strokeDasharray="3,4"
                    />
                  )
                })}
              </g>

              <circle cx={chinaPos.x} cy={chinaPos.y} r={50} fill="url(#chinaGlow)" />
              <circle cx={chinaPos.x} cy={chinaPos.y} r={6} fill="#BD7A2C" opacity={0.3} />
              <circle cx={chinaPos.x} cy={chinaPos.y} r={4} fill="#BD7A2C" style={{ filter: "url(#glow)" }} />
              <text x={chinaPos.x} y={chinaPos.y - 12} textAnchor="middle" fill="#BD7A2C" fontSize="9" fontWeight="700" className="select-none">
                {getLocalized({ zh: "华豪密封", en: "Huahao Sealing", vi: "Huahao Sealing", th: "Huahao Sealing", ru: "Huahao Sealing", ja: "華豪シール", ko: "Huahao Sealing" }, locale)}
              </text>

              {countries.map((c) => (
                <g key={c.name}>
                  <circle cx={c.x} cy={c.y} r={hovered === c.name ? 22 : 18} fill={`url(#glow-${c.name})`} className="transition-all duration-500" />
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={hovered === c.name ? 10 : 7}
                    fill="none"
                    stroke={c.region === "欧洲" ? "#BD7A2C" : c.region === "亚洲" ? "#3B82F6" : c.region === "中东及非洲" ? "#059669" : "#EA580C"}
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
                    fill={c.region === "欧洲" ? "#BD7A2C" : c.region === "亚洲" ? "#3B82F6" : c.region === "中东及非洲" ? "#059669" : "#EA580C"}
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

            <div className="flex flex-wrap justify-center gap-4 gap-y-2 px-4 pb-4 pt-2">
              {regions.map((r) => (
                <div key={r.name} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: r.color }} />
                  <span className="text-[11px] text-gray-400">{r.name}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gray-600" />
                <span className="text-[11px] text-gray-500">{t("expanding")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#BD7A2C]" />
                <span className="text-[11px] text-gray-400 font-medium">{t("hq")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
