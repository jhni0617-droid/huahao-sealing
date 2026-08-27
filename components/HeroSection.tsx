import { Link } from "@/i18n/routing"
import { getLocale, getTranslations } from "next-intl/server"
import Image from "next/image"
import { siteConfig } from "@/lib/constants"
import { getLocalized } from "@/lib/locale-data"
import Icon from "@/components/ui/Icon"

const heroUi = {
  zh: {
    bullets: ["按图纸 OEM 加工", "材料牌号选型支持", "24小时工程响应"],
  },
  en: {
    bullets: ["Drawing-based OEM machining", "Material grade support", "24h engineering response"],
  },
  vi: {
    bullets: ["Gia công OEM theo bản vẽ", "Hỗ trợ chọn cấp vật liệu", "Phản hồi kỹ thuật 24h"],
  },
  th: {
    bullets: ["ผลิต OEM ตามแบบ", "สนับสนุนการเลือกเกรดวัสดุ", "ตอบกลับทางวิศวกรรม 24 ชม."],
  },
  ru: {
    bullets: ["OEM обработка по чертежам", "Подбор марки материала", "Инженерный ответ за 24 ч"],
  },
  ja: {
    bullets: ["図面ベースのOEM加工", "材料グレード選定サポート", "24時間以内の技術対応"],
  },
  ko: {
    bullets: ["도면 기반 OEM 가공", "재료 등급 선정 지원", "24시간 엔지니어링 응답"],
  },
}

/**
 * 首页横幅：全幅厂区实拍图 + 左深右浅遮罩，文案分层延迟入场（良工式 ele 分层动画）。
 */
export default async function HeroSection() {
  const locale = await getLocale()
  const t = await getTranslations("home.hero")
  const ui = getLocalized(heroUi, locale)

  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-hero-bg text-white">
      <Image
        src="/images/IMG_20260321_153130.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* 左深右浅的可读性遮罩 + 底部收边 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e11]/95 via-[#0c0e11]/72 to-[#0c0e11]/30" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />

      <div className="container-wide relative z-10 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* 英文标注层 */}
          <div
            className="animate-reveal mb-6 inline-flex items-center gap-3"
            style={{ animationDelay: "60ms" }}
          >
            <span className="h-8 w-[3px] bg-accent" aria-hidden />
            <span className="en-caption text-xs sm:text-sm text-white/85">
              Carbon Graphite Sealing Components
            </span>
          </div>

          {/* 标题层 */}
          <h1
            className="animate-reveal text-[clamp(2.35rem,5vw,4.25rem)] font-bold leading-[1.06]"
            style={{ animationDelay: "180ms" }}
          >
            {t("title1")}
            <br />
            <span className="text-accent">{t("title2")}</span>
          </h1>

          {/* 描述层 */}
          <p
            className="animate-reveal mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
            style={{ animationDelay: "320ms" }}
          >
            {t("description")}
          </p>

          {/* 卖点层 */}
          <div
            className="animate-reveal mt-8 grid max-w-2xl gap-2 sm:grid-cols-3"
            style={{ animationDelay: "440ms" }}
          >
            {ui.bullets.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 border border-white/15 bg-white/[0.05] px-3 py-2 text-xs font-medium text-slate-200"
              >
                <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-accent" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA 层 */}
          <div
            className="animate-reveal mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "560ms" }}
          >
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
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <Link href="/products" className="btn-ghost border-white/10 px-0 text-sm hover:bg-transparent">
              <span className="border-b border-dashed border-white/40 pb-0.5">{t("ctaProducts")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
