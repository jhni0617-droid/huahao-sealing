import Image from "next/image"
import { getLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"
import SectionRail, { HomeSection } from "@/components/home/SectionRail"

const railLabel = {
  zh: "定制服务", en: "Custom Service", vi: "Dịch vụ tùy chỉnh", th: "บริการกำหนดเอง", ru: "Индивидуальные заказы", ja: "カスタムサービス", ko: "맞춤 서비스",
}

const titleText = {
  zh: "支持按图纸 / 样品定制",
  en: "Custom-Made to Drawings or Samples",
  vi: "Chế tạo theo bản vẽ / mẫu",
  th: "ผลิตตามแบบร่าง / ตัวอย่าง",
  ru: "Изготовление по чертежам / образцам",
  ja: "図面・サンプルによる特注製作",
  ko: "도면 / 샘플 맞춤 제작",
}

const bodyText = {
  zh: "提供尺寸、公差、介质、温度、压力和转速信息，我们可协助推荐材料牌号与加工方案。",
  en: "Share dimensions, tolerances, medium, temperature, pressure and speed — we help recommend the right material grade and machining solution.",
  vi: "Cung cấp kích thước, dung sai, môi chất, nhiệt độ, áp suất và tốc độ, chúng tôi hỗ trợ đề xuất loại vật liệu và phương án gia công.",
  th: "ให้ข้อมูลขนาด ความคลาดเคลื่อน สื่อ อุณหภูมิ ความดัน และความเร็ว เราช่วยแนะนำเกรดวัสดุและโซลูชันการตัดเฉือน",
  ru: "Предоставьте размеры, допуски, среду, температуру, давление и скорость — мы поможем подобрать марку материала и технологию обработки.",
  ja: "寸法、公差、媒体、温度、圧力、回転数をお知らせいただければ、材料銘柄と加工方案をご提案します。",
  ko: "치수, 공차, 매체, 온도, 압력, 회전수 정보를 제공해 주시면 적합한 재료 등급과 가공 방안을 추천해 드립니다.",
}

const btnText = {
  zh: "提交图纸询价",
  en: "Submit Drawing for Quote",
  vi: "Gửi bản vẽ để báo giá",
  th: "ส่งแบบร่างเพื่อขอใบเสนอราคา",
  ru: "Отправить чертеж на расчет",
  ja: "図面を送って見積もり",
  ko: "도면 제출하여 견적 요청",
}

const params = [
  { zh: "尺寸", en: "Dimensions" },
  { zh: "公差", en: "Tolerances" },
  { zh: "介质", en: "Medium" },
  { zh: "温度", en: "Temperature" },
  { zh: "压力", en: "Pressure" },
  { zh: "转速", en: "Speed" },
]

export default async function CustomOrderCTA() {
  const locale = await getLocale()

  return (
    <HomeSection className="bg-white">
      <SectionRail locale={locale} index="04" label={getLocalized(railLabel, locale)} en="Custom Service" href="/contact" />

      <div className="min-w-0 relative overflow-hidden rounded-lg border border-border bg-primary text-white p-8 md:p-12">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`, backgroundSize: "36px 36px" }} />

        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_280px] md:items-center">
          <div>
            <h2 className="font-serif-sc text-3xl font-bold leading-tight md:text-4xl">
              {getLocalized(titleText, locale)}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
              {getLocalized(bodyText, locale)}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {params.map((p) => (
                <span key={p.en} className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300">
                  {getLocalized(p, locale)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex md:justify-end">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5">
              {getLocalized(btnText, locale)}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* 图纸配图 */}
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-lg border border-white/10 md:block">
            <Image
              src="/images/stock/custom-drawing.webp"
              alt="Custom drawing quote"
              fill
              className="object-cover"
              sizes="280px"
            />
          </div>
        </div>
      </div>
    </HomeSection>
  )
}
