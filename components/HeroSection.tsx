import { Link } from "@/i18n/routing"
import { getLocale, getTranslations } from "next-intl/server"
import Image from "next/image"
import { getLocalized } from "@/lib/locale-data"

/**
 * 良工式 hero：主标题落在具体能力上——「碳石墨密封件 · 按图定制」，
 * 全屏红色只点「按图定制」一个词；600℃ 实测数据降为白色数据行。
 * 实拍厂区图统一黑白处理。文案分层一次淡入，不再逐层延迟。
 */
const heroUi = {
  zh: {
    tempLabel: "非氧化介质中长期服役温度",
    lead: "碳石墨密封件",
    accent: "按图定制",
    subline: "密封环 · 轴套/轴承 · 三瓣环 ｜ 树脂 / 锑 / 铜浸渍牌号",
  },
  en: {
    tempLabel: "Long-term service temperature in non-oxidizing media",
    lead: "Carbon Graphite Seals",
    accent: "Custom-Machined",
    subline: "Seal rings · bushings & bearings · split rings — resin, antimony & copper impregnated grades",
  },
  vi: {
    tempLabel: "Nhiệt độ phục vụ lâu dài trong môi trường không oxy hóa",
    lead: "Phớt than chì carbon",
    accent: "Gia công theo bản vẽ",
    subline: "Vòng phớt · bạc lót/ổ trục · vòng chia — cấp tẩm nhựa, antimony, đồng",
  },
  th: {
    tempLabel: "อุณหภูมิใช้งานระยะยาวในตัวกลางที่ไม่ออกซิไดซ์",
    lead: "ซีลคาร์บอนกราไฟต์",
    accent: "ผลิตตามแบบ",
    subline: "แหวนซีล · บูช/แบริ่ง · แหวนแยก — เกรดอิมเพรกเนตเรซิน พลวง ทองแดง",
  },
  ru: {
    tempLabel: "Рабочая температура в неокисляющих средах",
    lead: "Углерод-графитовые уплотнения",
    accent: "Обработка по чертежам",
    subline: "Кольца · втулки/подшипники · разрезные кольца — марки с пропиткой смолой, сурьмой, медью",
  },
  ja: {
    tempLabel: "非酸化性媒体中での長期使用温度",
    lead: "カーボングラファイトシール",
    accent: "図面から製作",
    subline: "シールリング・ブッシング/軸受・分割リング — レジン・アンチモン・銅含浸グレード",
  },
  ko: {
    tempLabel: "비산화 분위기에서의 장기 사용 온도",
    lead: "카본 그라파이트 씰",
    accent: "도면 기반 가공",
    subline: "씰 링 · 부싱/베어링 · 분할 링 — 레진·안티모니·구리 함침 등급",
  },
}

export default async function HeroSection() {
  const locale = await getLocale()
  const t = await getTranslations("home.hero")
  const ui = getLocalized(heroUi, locale)

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-hero-bg text-white">
      <Image
        src="/images/实拍/IMG_20260517_192804.webp"
        alt="Huahao Sealing carbon graphite rings on precision scale"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center [filter:grayscale(1)_contrast(1.06)_brightness(0.92)]"
      />
      {/* 左深右浅的可读性遮罩 + 底部收边；压低浓度让照片细节透出来 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e11]/88 via-[#0c0e11]/60 to-[#0c0e11]/25" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />

      <div className="container-wide relative z-10 py-20 md:py-24">
        <div className="max-w-3xl animate-reveal">
          {/* 英文标注层 */}
          <div className="mb-7 inline-flex items-center gap-3">
            <span className="h-8 w-[3px] bg-accent" aria-hidden />
            <span className="en-caption text-xs sm:text-sm text-white/85">
              Carbon Graphite Sealing Components
            </span>
          </div>

          {/* 主标题：具体能力陈述；红色只点「按图定制」一个词 */}
          <h1 className="font-serif-sc mt-8 text-[clamp(2.25rem,5vw,4rem)] font-bold leading-tight text-white">
            {ui.lead}
            <span className="text-accent"> · {ui.accent}</span>
          </h1>

          {/* 600℃ 实测数据行（白色，不再占用红色） */}
          <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-num-serif italic text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-white">
              600℃
            </span>
            <span className="text-sm tracking-wide text-white/70">{ui.tempLabel}</span>
          </p>

          <p className="mt-5 text-base text-slate-400">{ui.subline}</p>

          {/* 唯一 CTA */}
          <div className="mt-10">
            <Link href="/contact" className="btn-primary text-sm group">
              {t("ctaQuote")}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
