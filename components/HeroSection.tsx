import { Link } from "@/i18n/routing"
import { getLocale, getTranslations } from "next-intl/server"
import { siteConfig } from "@/lib/constants"
import { getLocalized } from "@/lib/locale-data"
import { factoryHighlightsByLocale } from "@/lib/translations"
import Icon from "@/components/ui/Icon"
import HeroDynamicContent from "@/components/HeroDynamicContent"

const heroUi = {
  zh: {
    bullets: ["按图纸 OEM 加工", "材料牌号选型支持", "24小时工程响应"],
    precision: "精密零部件",
  },
  en: {
    bullets: ["Drawing-based OEM machining", "Material grade support", "24h engineering response"],
    precision: "Precision component",
  },
  vi: {
    bullets: ["Gia công OEM theo bản vẽ", "Hỗ trợ chọn cấp vật liệu", "Phản hồi kỹ thuật 24h"],
    precision: "Linh kiện chính xác",
  },
  th: {
    bullets: ["ผลิต OEM ตามแบบ", "สนับสนุนการเลือกเกรดวัสดุ", "ตอบกลับทางวิศวกรรม 24 ชม."],
    precision: "ชิ้นส่วนความแม่นยำ",
  },
  ru: {
    bullets: ["OEM обработка по чертежам", "Подбор марки материала", "Инженерный ответ за 24 ч"],
    precision: "Прецизионный компонент",
  },
  ja: {
    bullets: ["図面ベースのOEM加工", "材料グレード選定サポート", "24時間以内の技術対応"],
    precision: "精密部品",
  },
  ko: {
    bullets: ["도면 기반 OEM 가공", "재료 등급 선정 지원", "24시간 엔지니어링 응답"],
    precision: "정밀 부품",
  },
}

export default async function HeroSection() {
  const locale = await getLocale()
  const t = await getTranslations("home.hero")
  const ui = getLocalized(heroUi, locale)
  const highlights = getLocalized(factoryHighlightsByLocale, locale)

  return (
    <section className="bg-hero-bg text-white relative overflow-hidden min-h-[84vh] flex items-center">
      <HeroDynamicContent />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.55) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-hero-bg via-hero-bg/82 to-hero-bg/42 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[36vw] h-[36vw] -translate-y-1/2 bg-accent/8 blur-[150px] pointer-events-none" />

      <div className="container-wide relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/12 text-slate-200 text-xs font-bold tracking-[0.08em] uppercase px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              {t("tag")}
            </div>

            <h1 className="text-[clamp(2.25rem,5vw,4.35rem)] font-bold leading-[1.04] mb-6 max-w-3xl">
              {t("title1")}
              <br />
              <span className="text-accent">{t("title2")}</span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {t("description")}
            </p>

            <div className="mb-9 grid max-w-2xl gap-2 sm:grid-cols-3">
              {ui.bullets.map((item) => (
                <div key={item} className="flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300">
                  <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-accent" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-sm group">
                {t("ctaQuote")}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("ctaWhatsApp")}
              </a>
              <Link href="/products" className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                {t("ctaProducts")}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="hidden md:flex gap-8 mt-12 pt-8 border-t border-white/10">
              {highlights.map((h) => (
                <div key={h.label} className="group">
                  <div className="text-2xl font-bold text-accent group-hover:scale-105 transition-transform origin-left">
                    {h.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 tracking-wide">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats — mobile */}
        <div className="flex md:hidden gap-6 mt-10 pt-6 border-t border-white/10">
          {highlights.map((h) => (
            <div key={h.label}>
              <div className="text-lg font-bold text-accent">{h.value}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
