"use client"

import { useState } from "react"
import { continentPaths, chinaPosition, generatedCountries } from "@/lib/continent-data"

const countries = generatedCountries

const regions = [
  { name: "欧洲", color: "#BD7A2C" },
  { name: "亚洲", color: "#3B82F6" },
  { name: "中东及非洲", color: "#059669" },
  { name: "美洲", color: "#EA580C" },
]

// China HQ position (for connection lines)
const chinaPos = chinaPosition

export default function ClientsSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1B2838 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-accent font-bold text-sm tracking-widest">全球布局</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            产品出口全球 <span className="text-accent">15+</span> 国家
          </h2>
          <p className="text-muted leading-relaxed">
            客户遍布六大洲，产品远销欧洲、亚洲、美洲和中东
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden mb-10 max-w-4xl mx-auto">
          {[
            { value: "15+", label: "出口国家" },
            { value: "1,000+", label: "全球客户" },
            { value: "20+", label: "出口经验（年）" },
            { value: "6", label: "服务大洲" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 p-5 md:p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{s.value}</div>
              <div className="text-xs md:text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Premium World Map Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-lg bg-gradient-to-br from-[#0B1628] via-[#111D35] to-[#0B1628]">
            {/* Subtle grid */}
            <svg viewBox="0 0 1000 500" className="w-full h-auto block" aria-label="世界地图">
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

              {/* Lat/lng grid lines */}
              <g opacity={0.08}>
                {[80, 160, 240, 320, 400].map((y) => (
                  <line key={`lat-${y}`} x1={30} y1={y} x2={970} y2={y} stroke="#fff" strokeWidth={0.5} strokeDasharray="4,4" />
                ))}
                {[150, 300, 450, 600, 750, 900].map((x) => (
                  <line key={`lng-${x}`} x1={x} y1={20} x2={x} y2={480} stroke="#fff" strokeWidth={0.5} strokeDasharray="4,4" />
                ))}
              </g>

              {/* Continent shapes — auto-generated from Natural Earth data */}
              <g opacity={0.3}>
                {Object.entries(continentPaths).map(([code, d]) => (
                  <path key={code} d={d} fill="#2A3A55" stroke="#94A3B8" strokeWidth={1.5} strokeLinejoin="round" />
                ))}
              </g>

              {/* Connection lines from China to each country */}
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

              {/* China HQ dot */}
              <circle cx={chinaPos.x} cy={chinaPos.y} r={50} fill="url(#chinaGlow)" />
              <circle cx={chinaPos.x} cy={chinaPos.y} r={6} fill="#BD7A2C" opacity={0.3} />
              <circle cx={chinaPos.x} cy={chinaPos.y} r={4} fill="#BD7A2C" style={{ filter: "url(#glow)" }} />
              <text x={chinaPos.x} y={chinaPos.y - 12} textAnchor="middle" fill="#BD7A2C" fontSize="9" fontWeight="700" className="select-none">
                华豪密封
              </text>

              {/* Country dots */}
              {countries.map((c) => (
                <g key={c.name}>
                  {/* Outer glow */}
                  <circle cx={c.x} cy={c.y} r={hovered === c.name ? 22 : 18} fill={`url(#glow-${c.name})`} className="transition-all duration-500" />

                  {/* Pulse ring */}
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

                  {/* Core dot with glow */}
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

                  {/* Label tooltip */}
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

            {/* Region legend */}
            <div className="flex flex-wrap justify-center gap-4 gap-y-2 px-4 pb-4 pt-2">
              {regions.map((r) => (
                <div key={r.name} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: r.color }} />
                  <span className="text-[11px] text-gray-400">{r.name}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gray-600" />
                <span className="text-[11px] text-gray-500">持续拓展中</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#BD7A2C]" />
                <span className="text-[11px] text-gray-400 font-medium">华豪密封 · 总部</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
