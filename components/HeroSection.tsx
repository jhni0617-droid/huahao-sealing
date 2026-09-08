import { Link } from "@/i18n/routing"
import { getLocale, getTranslations } from "next-intl/server"
import Image from "next/image"
import { getLocalized } from "@/lib/locale-data"

/**
 * 1:1 复刻定稿首屏：全屏黑白 CNC 车间实拍压底，
 * 左侧宋体大标题「碳石墨密封件 · 按图定制」红色只点一个词，
 * 600°C 用衬线斜体大字 + 竖线注释 + 通栏细线，收在红色胶囊 CTA。
 */
const heroUi = {
  zh: {
    tempLabel: "非氧化介质中长期服役温度",
    lead: "碳石墨密封件",
    accent: "按图定制",
    subline: "密封环 · 轴套/轴承 · 三瓣环 ｜ 树脂/锑/铜浸渍牌号",
    cta: "提交图纸询价",
  },
  en: {
    tempLabel: "Long-term service temperature in non-oxidizing media",
    lead: "Carbon Graphite Seals",
    accent: "Custom-Machined",
    subline: "Seal rings · bushings & bearings · split rings — resin, antimony & copper impregnated grades",
    cta: "Send Your Drawing for a Quote",
  },
  vi: {
    tempLabel: "Nhiệt độ phục vụ lâu dài trong môi trường không oxy hóa",
    lead: "Phớt than chì carbon",
    accent: "Gia công theo bản vẽ",
    subline: "Vòng phớt · bạc lót/ổ trục · vòng chia — cấp tẩm nhựa, antimony, đồng",
    cta: "Gửi bản vẽ để báo giá",
  },
  th: {
    tempLabel: "อุณหภูมิใช้งานระยะยาวในตัวกลางที่ไม่ออกซิไดซ์",
    lead: "ซีลคาร์บอนกราไฟต์",
    accent: "ผลิตตามแบบ",
    subline: "แหวนซีล · บูช/แบริ่ง · แหวนแยก — เกรดอิมเพรกเนตเรซิน พลวง ทองแดง",
    cta: "ส่งแบบรับใบเสนอราคา",
  },
  ru: {
    tempLabel: "Рабочая температура в неокисляющих средах",
    lead: "Углерод-графитовые уплотнения",
    accent: "Обработка по чертежам",
    subline: "Кольца · втулки/подшипники · разрезные кольца — марки с пропиткой смолой, сурьмой, медью",
    cta: "Отправить чертёж на расчёт",
  },
  ja: {
    tempLabel: "非酸化性媒体中での長期使用温度",
    lead: "カーボングラファイトシール",
    accent: "図面から製作",
    subline: "シールリング・ブッシング/軸受・分割リング — レジン・アンチモン・銅含浸グレード",
    cta: "図面を送って見積もり",
  },
  ko: {
    tempLabel: "비산화 분위기에서의 장기 사용 온도",
    lead: "카본 그라파이트 씰",
    accent: "도면 기반 가공",
    subline: "씰 링 · 부싱/베어링 · 분할 링 — 레진·안티모니·구리 함침 등급",
    cta: "도면 보내고 견적 받기",
  },
}

export default async function HeroSection() {
  const locale = await getLocale()
  const t = await getTranslations("home.hero")
  const ui = getLocalized(heroUi, locale)

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-hero-bg text-white">
      <Image
        src="/images/实拍/IMG_20260517_193309.webp"
        alt="Huahao Sealing CNC 车间实拍：碳石墨密封件精密加工"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center [filter:brightness(0.82)]"
      />
      {/* 左深右浅可读性遮罩 + 底部收边 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0f]/95 via-[#0a0c0f]/70 to-[#0a0c0f]/30" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />

      <div className="relative z-10 w-full px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36 xl:px-[4.5vw]">
        <div className="animate-reveal">
          {/* 英文标注层 */}
          <div className="inline-flex items-center gap-4">
            <span className="h-7 w-[3px] bg-accent" aria-hidden />
            <span className="font-serif-sc text-[13px] uppercase tracking-[0.32em] text-white/85 md:text-[15px]">
              Carbon Graphite Sealing Components
            </span>
          </div>

          {/* 主标题：红色只点「按图定制」一个词；1200px 保证中文一行放下 */}
          <h1 className="mt-6 max-w-[1200px] font-serif-sc text-[clamp(2.4rem,4.6vw,5.5rem)] font-black leading-[1.12] text-white md:mt-7">
            {ui.lead}
            <span className="text-accent"> · {ui.accent}</span>
          </h1>

          {/* 600℃ 大字数据行 + 竖线注释 */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-10 md:gap-x-8">
            <span className="font-num-serif italic leading-none text-white [font-size:clamp(3.4rem,6vw,7rem)]">
              600<span className="align-top tracking-[-0.04em] text-[0.5em]">°C</span>
            </span>
            <span className="hidden h-14 w-px bg-white/35 md:block md:h-16" aria-hidden />
            <span className="text-base tracking-wide text-white/90 md:text-xl xl:text-2xl">{ui.tempLabel}</span>
          </div>

          {/* 通栏细线 */}
          <div className="mt-8 h-px w-full max-w-[820px] bg-white/20 md:mt-10 md:max-w-[56vw]" aria-hidden />

          <p className="mt-6 text-sm tracking-wide text-white/85 md:mt-7 md:text-lg xl:text-xl">{ui.subline}</p>

          {/* 唯一 CTA：红色胶囊 */}
          <div className="mt-9 md:mt-11">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-accent px-8 text-base font-medium text-white transition-colors hover:bg-accent-hover md:h-14 md:px-10 md:text-xl"
            >
              {ui.cta || t("ctaQuote")}
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
