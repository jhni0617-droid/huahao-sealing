"use client"

import { useState } from "react"
import { failureSolutions } from "@/lib/constants"
import { Link } from "@/i18n/routing"

const industryColors: Record<string, string> = {
  "化工泵": "bg-blue-50 text-blue-700 border-blue-200",
  "污水泵": "bg-teal-50 text-teal-700 border-teal-200",
  "渣浆泵": "bg-orange-50 text-orange-700 border-orange-200",
  "矿山设备": "bg-stone-50 text-stone-700 border-stone-200",
  "离心泵": "bg-cyan-50 text-cyan-700 border-cyan-200",
  "清水泵": "bg-sky-50 text-sky-700 border-sky-200",
  "油泵": "bg-amber-50 text-amber-700 border-amber-200",
  "化工反应釜": "bg-red-50 text-red-700 border-red-200",
  "酸洗设备": "bg-rose-50 text-rose-700 border-rose-200",
  "电镀线": "bg-violet-50 text-violet-700 border-violet-200",
  "制药设备": "bg-green-50 text-green-700 border-green-200",
  "高速泵": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "压缩机": "bg-purple-50 text-purple-700 border-purple-200",
  "搅拌器": "bg-pink-50 text-pink-700 border-pink-200",
  "蒸汽系统": "bg-warmGray-50 text-warmGray-700 border-warmGray-200",
  "大型水泵": "bg-blue-50 text-blue-700 border-blue-200",
  "船用设备": "bg-teal-50 text-teal-700 border-teal-200",
  "造纸设备": "bg-yellow-50 text-yellow-700 border-yellow-200",
}

function getIndustryStyle(ind: string): string {
  return industryColors[ind] || "bg-gray-50 text-gray-700 border-gray-200"
}

export default function FailureSolutionsSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-bold text-sm tracking-widest">工程解决方案</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            常见密封故障 — 我们的解决方案
          </h2>
          <p className="text-muted leading-relaxed">
            数十年现场经验积累，针对每一种常见故障模式，我们都有成熟可靠的解决方案。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {failureSolutions.map((item) => {
            const isOpen = openId === item.id

            return (
              <div
                key={item.id}
                className={`bg-white border rounded-lg overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-accent/30 shadow-md" : "border-border hover:border-accent/20 hover:shadow-sm"
                }`}
              >
                {/* Header — always visible */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-primary text-lg">{item.failure}</h3>
                    <p className="text-sm text-muted mt-0.5 line-clamp-1">{item.cause}</p>
                  </div>

                  {/* Indicator */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-muted hidden sm:inline">
                      {isOpen ? "收起详情" : "查看方案"}
                    </span>
                    <svg
                      className={`w-5 h-5 text-accent transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="border-t border-border">
                    <div className="p-5 md:p-6 space-y-5">
                      {/* Two-column: Symptoms + Industries */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Symptoms */}
                        <div className="bg-amber-50/50 border border-amber-100 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <span className="text-xs font-bold text-amber-700 tracking-wider">具体表现</span>
                          </div>
                          <p className="text-sm text-amber-900 leading-relaxed">{item.symptoms}</p>
                        </div>

                        {/* Industries */}
                        <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="text-xs font-bold text-blue-700 tracking-wider">常见设备</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.industries.map((ind) => (
                              <span
                                key={ind}
                                className={`px-2.5 py-1 rounded text-xs font-medium border ${getIndustryStyle(ind)}`}
                              >
                                {ind}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Solution + Benefit */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <div className="text-xs font-bold text-primary tracking-wider mb-1.5">华豪解决方案</div>
                          <p className="text-sm leading-relaxed text-primary/80">{item.solution}</p>
                        </div>
                        <div className="bg-green-50 border border-green-100 p-4 rounded-lg flex flex-col justify-center">
                          <div className="text-xs font-bold text-green-700 tracking-wider mb-1.5">实际效果</div>
                          <p className="text-base font-bold text-green-700">{item.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" className="btn-primary">
            获取定制方案
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
