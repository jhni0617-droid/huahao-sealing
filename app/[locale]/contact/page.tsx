import { Suspense } from "react"
import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import ContactForm from "@/components/ContactForm"
import Icon from "@/components/ui/Icon"
import { siteConfig, enSiteConfig } from "@/lib/constants"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import PageHead from "@/components/ui/PageHead"
import StatsRow from "@/components/ui/StatsRow"
import Breadcrumb from "@/components/Breadcrumb"
import TrackedLink from "@/components/TrackedLink"

const contactCopy = {
  zh: {
    headline: "提交图纸，工程师当天回复",
    eyebrow: "工程询盘",
    stats: ["响应", "图纸支持", "定制加工"],
    route: "询盘路径",
    routeTitle: "让工程师快速判断型号与材料",
    routeDesc: "提交图纸、样品照片或工况参数后，我们会根据介质、温度、压力、转速和尺寸要求进行材料与结构建议。",
    steps: [
      ["01", "提交需求", "产品类型、图纸、尺寸或当前失效问题"],
      ["02", "工程评估", "材料牌号、浸渍工艺、配对面和公差建议"],
      ["03", "报价确认", "样品、批量价格、交期和包装方式确认"],
    ],
    promise: "建议提供：介质、温度、压力、转速、内外径/高度、年用量。",
  },
  en: {
    headline: "Submit drawings — engineers reply same day",
    eyebrow: "Engineering inquiry",
    stats: ["Response", "Drawing support", "Custom machining"],
    route: "Inquiry route",
    routeTitle: "Help engineers identify grade and model faster",
    routeDesc: "After drawings, sample photos, or duty conditions are submitted, we recommend material and structure based on media, temperature, pressure, speed, and dimensions.",
    steps: [
      ["01", "Send requirements", "Product type, drawing, dimensions, or current failure issue"],
      ["02", "Engineering review", "Grade, impregnation, mating face, and tolerance recommendation"],
      ["03", "Quote confirmation", "Samples, batch pricing, lead time, and packing method"],
    ],
    promise: "Useful details: media, temperature, pressure, speed, I.D./O.D./height, annual quantity.",
  },
  vi: {
    headline: "Gửi bản vẽ — kỹ sư phản hồi trong ngày",
    eyebrow: "Yêu cầu kỹ thuật",
    stats: ["Phản hồi", "Hỗ trợ bản vẽ", "Gia công tùy chỉnh"],
    route: "Quy trình yêu cầu",
    routeTitle: "Giúp kỹ sư xác định cấp vật liệu và model nhanh hơn",
    routeDesc: "Sau khi gửi bản vẽ, ảnh mẫu hoặc điều kiện vận hành, chúng tôi sẽ đề xuất vật liệu và cấu trúc theo môi trường, nhiệt độ, áp suất, tốc độ và kích thước.",
    steps: [
      ["01", "Gửi yêu cầu", "Loại sản phẩm, bản vẽ, kích thước hoặc vấn đề hư hỏng hiện tại"],
      ["02", "Đánh giá kỹ thuật", "Khuyến nghị cấp vật liệu, tẩm, bề mặt đối tiếp và dung sai"],
      ["03", "Xác nhận báo giá", "Mẫu, giá lô, thời gian giao hàng và phương án đóng gói"],
    ],
    promise: "Thông tin hữu ích: môi trường, nhiệt độ, áp suất, tốc độ, I.D./O.D./chiều cao, số lượng năm.",
  },
  th: {
    headline: "ส่งแบบ — วิศวกรตอบภายในวัน",
    eyebrow: "สอบถามทางวิศวกรรม",
    stats: ["ตอบกลับ", "รองรับ PDF/CAD", "ผลิตตามแบบ"],
    route: "เส้นทางการสอบถาม",
    routeTitle: "ช่วยให้วิศวกรระบุเกรดและรุ่นได้เร็วขึ้น",
    routeDesc: "หลังจากส่งแบบ รูปตัวอย่าง หรือสภาวะการทำงาน เราจะแนะนำวัสดุและโครงสร้างตามตัวกลาง อุณหภูมิ แรงดัน ความเร็ว และขนาด",
    steps: [
      ["01", "ส่งความต้องการ", "ประเภทสินค้า แบบ ขนาด หรือปัญหาการใช้งานปัจจุบัน"],
      ["02", "ประเมินทางวิศวกรรม", "แนะนำเกรดวัสดุ การอัดซึม ผิวคู่ และค่าความคลาดเคลื่อน"],
      ["03", "ยืนยันใบเสนอราคา", "ตัวอย่าง ราคาล็อต ระยะเวลาจัดส่ง และวิธีบรรจุภัณฑ์"],
    ],
    promise: "ข้อมูลที่ควรระบุ: ตัวกลาง อุณหภูมิ แรงดัน ความเร็ว I.D./O.D./ความสูง และปริมาณต่อปี",
  },
  ru: {
    headline: "Отправьте чертёж — ответ в тот же день",
    eyebrow: "Инженерный запрос",
    stats: ["Ответ", "Поддержка PDF/CAD", "Изготовление на заказ"],
    route: "Маршрут запроса",
    routeTitle: "Помогаем инженерам быстрее определить марку и модель",
    routeDesc: "После получения чертежей, фото образца или условий работы мы рекомендуем материал и конструкцию по среде, температуре, давлению, скорости и размерам.",
    steps: [
      ["01", "Отправьте требования", "Тип изделия, чертеж, размеры или текущая проблема"],
      ["02", "Инженерная оценка", "Марка, пропитка, сопряженная поверхность и допуски"],
      ["03", "Подтверждение цены", "Образцы, партия, срок поставки и упаковка"],
    ],
    promise: "Полезные данные: среда, температура, давление, скорость, I.D./O.D./высота, годовой объем.",
  },
  ja: {
    headline: "図面送付 — 当日回答",
    eyebrow: "技術問い合わせ",
    stats: ["対応", "PDF/CAD対応", "カスタム加工"],
    route: "問い合わせフロー",
    routeTitle: "技術者がグレードと型番を素早く判断",
    routeDesc: "図面、サンプル写真、運転条件を送付いただくと、媒体、温度、圧力、速度、寸法に基づいて材料と構造を提案します。",
    steps: [
      ["01", "要件送付", "製品タイプ、図面、寸法、または現在の不具合"],
      ["02", "技術評価", "材料グレード、含浸、相手面、公差の提案"],
      ["03", "見積確認", "サンプル、量産価格、納期、梱包方法を確認"],
    ],
    promise: "推奨情報: 媒体、温度、圧力、速度、内外径/高さ、年間数量。",
  },
  ko: {
    headline: "도면 제출 — 당일 회신",
    eyebrow: "엔지니어링 문의",
    stats: ["응답", "PDF/CAD 지원", "맞춤 가공"],
    route: "문의 흐름",
    routeTitle: "엔지니어가 등급과 모델을 더 빠르게 판단하도록 지원",
    routeDesc: "도면, 샘플 사진 또는 운전 조건을 제출하면 매체, 온도, 압력, 속도 및 치수에 따라 재료와 구조를 제안합니다.",
    steps: [
      ["01", "요구사항 제출", "제품 유형, 도면, 치수 또는 현재 고장 문제"],
      ["02", "엔지니어링 검토", "재료 등급, 함침, 상대면 및 공차 추천"],
      ["03", "견적 확인", "샘플, 대량 가격, 납기 및 포장 방식 확인"],
    ],
    promise: "유용한 정보: 매체, 온도, 압력, 속도, I.D./O.D./높이, 연간 수량.",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "contact" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/contact",
    locale,
  })
}

/**
 * 注意：这里**不读 searchParams**。
 * 之前 `await searchParams` 取 ?product= 会让整个路由退化为「每请求 SSR」。
 * 现在取参搬到 ContactForm 内部用 useSearchParams()，页面恢复静态预渲染。
 */
export default async function ContactPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params
  setRequestLocale(locale)
  const t = await getTranslations("contact")
  const cfg = getLocalized({ zh: siteConfig, en: enSiteConfig }, locale)
  const altText = { zh: "华豪密封工厂实拍", en: "Huahao Sealing factory", vi: "Nhà máy Huahao Sealing", th: "โรงงาน Huahao Sealing", ru: "Завод Huahao Sealing", ja: "華豪シール工場", ko: "Huahao Sealing 공장" }
  const copy = getLocalized(contactCopy, locale)

  return (
    <>
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/contact" }]} locale={locale} />

      <PageHead en={copy.eyebrow} title={copy.headline} description={t("pageSubtitle")} />

      <StatsRow
        items={[
          { value: "24h", label: copy.stats[0] },
          { value: "7", label: getLocalized({ zh: "语言支持", en: "Languages" }, locale) },
          { value: "OEM", label: copy.stats[2] },
        ]}
      />

      {/* 主分栏：左表单（白），右深色面板（询盘路径 + 联系方式） */}
      <section className="border-b border-border bg-white">
        <div className="grid gap-px bg-border lg:grid-cols-[1.15fr_0.85fr]">
          {/* 移动端先显示表单 */}
          <div className="order-1 bg-white p-6 md:p-10 lg:p-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-accent" aria-hidden />
              <span className="en-caption text-sm text-muted">{t("formTitle")}</span>
            </div>
            {/* ContactForm 内部用 useSearchParams() 读 ?product=，需要 Suspense 边界 */}
            <Suspense fallback={<div className="h-96 animate-pulse bg-border-light" />}>
              <ContactForm />
            </Suspense>
          </div>

          <aside className="order-2 bg-primary p-6 text-white md:p-10 lg:p-14">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-10 bg-accent" aria-hidden />
              <span className="en-caption text-sm text-white/60">{copy.route}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">{copy.routeDesc}</p>

            <div className="mt-8">
              {copy.steps.map(([num, title, desc], i) => (
                <div key={num} className={`flex items-start gap-5 py-5 ${i > 0 ? "border-t border-white/10" : ""}`}>
                  <span className="en-caption shrink-0 text-3xl font-bold leading-none text-accent md:text-4xl">{num}</span>
                  <div className="min-w-0 pt-0.5">
                    <div className="text-sm font-bold">{title}</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-400">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="border border-white/10 bg-white/[0.04] p-3 text-xs leading-relaxed text-slate-300">
              {copy.promise}
            </p>

            {/* 联系方式列表：发丝线行 */}
            <div className="mt-8">
              <div className="en-caption mb-2 text-xs text-white/50">{t("infoTitle")}</div>
              {[
                { label: t("emailLabel"), value: cfg.email, href: `mailto:${cfg.email}`, tracked: true, event: "email_click" },
                { label: t("phoneLabel"), value: cfg.phone },
                { label: "WhatsApp", value: cfg.whatsapp, href: `https://wa.me/${cfg.whatsapp}`, tracked: true, event: "whatsapp_click" },
                { label: t("zaloLabel"), value: cfg.zalo, href: `https://zalo.me/${cfg.zalo.replace(/\D/g, "")}` },
                { label: t("addressLabel"), value: cfg.address },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-[92px_1fr] items-baseline gap-4 border-t border-white/10 py-3.5 first:border-t-0">
                  <span className="text-xs text-slate-400">{row.label}</span>
                  {row.href ? (
                    row.tracked ? (
                      <TrackedLink
                        href={row.href}
                        target={row.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        event={row.event}
                        label="contact_page"
                        className="break-all text-sm font-medium text-white hover:text-accent"
                      >
                        {row.value}
                      </TrackedLink>
                    ) : (
                      <a href={row.href} target={row.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className="break-all text-sm font-medium text-white hover:text-accent">
                        {row.value}
                      </a>
                    )
                  ) : (
                    <span className="break-words text-sm leading-relaxed text-slate-200">{row.value}</span>
                  )}
                </div>
              ))}
              <div className="grid grid-cols-[92px_1fr] items-baseline gap-4 border-t border-white/10 py-3.5">
                <span className="text-xs text-slate-400">Facebook</span>
                <span className="space-y-1">
                  <a href={cfg.facebookPage} target="_blank" rel="noopener noreferrer" className="block break-all text-sm font-medium text-white hover:text-accent">
                    {t("facebookPageLabel")}
                  </a>
                  <a href={cfg.facebookProfile} target="_blank" rel="noopener noreferrer" className="block break-all text-sm font-medium text-white hover:text-accent">
                    {t("facebookProfileLabel")}
                  </a>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Why us：发丝线四栏 */}
      <section className="bg-white">
        <div className="container-wide py-10">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                <span className="text-sm leading-relaxed text-muted">{t(`reason${i}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 通栏工厂实拍 + 图注条 */}
      <figure>
        <div className="relative h-[380px] w-full overflow-hidden border-y border-border bg-background md:h-[460px]">
          <Image
            src="/images/实拍/IMG_20260517_193309.webp"
            alt={getLocalized(altText, locale)}
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <figcaption className="bg-primary px-6 py-3 text-center text-xs tracking-wide text-white/70">
          {getLocalized({ zh: "精密制造 · 严苛检测 · 稳定交付 — 碳石墨密封环专业制造商", en: "Precision machining · Strict inspection · Stable delivery — carbon graphite seal ring manufacturer" }, locale)}
        </figcaption>
      </figure>
    </>
  )
}
