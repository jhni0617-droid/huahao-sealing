import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import ContactForm from "@/components/ContactForm"
import Icon from "@/components/ui/Icon"
import { siteConfig, enSiteConfig } from "@/lib/constants"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import Breadcrumb from "@/components/Breadcrumb"
import TrackedLink from "@/components/TrackedLink"

/** 三重信任点图标，顺序与 contactCopy[locale].trust 一一对应 */
const heroTrustIcons = ["clock", "globe", "gear"] as const

/** Hero 配图 alt：图为海外客户到厂、工程师现场讲解加工设备 */
const heroImageAlt = {
  zh: "华豪工程师在车间向海外客户讲解碳石墨密封件加工设备",
  en: "Huahao engineer explaining carbon graphite seal machining to overseas customers on the shop floor",
  vi: "Kỹ sư Huahao giải thích gia công seal than chì carbon cho khách hàng nước ngoài tại xưởng",
  th: "วิศวกร Huahao อธิบายการผลิตซีลคาร์บอนกราไฟต์ให้ลูกค้าต่างประเทศในโรงงาน",
  ru: "Инженер Huahao объясняет обработку углеродного графита зарубежным клиентам в цехе",
  ja: "華豪の技術者が工場で海外顧客にカーボングラファイトシールの加工を説明",
  ko: "화하오 엔지니어가 공장에서 해외 고객에게 카본 그라파이트 씰 가공을 설명",
}

const contactCopy = {
  zh: {
    headline: "提交图纸  获取报价",
    eyebrow: "工程询盘",
    stats: ["响应", "图纸支持", "定制加工"],
    trust: [["24 小时", "快速回复"], ["7 种语言", "专业沟通"], ["源头工厂", "定制加工"]],
    route: "询盘路径",
    routeTitle: "让工程师快速判断型号与材料",
    routeDesc: "提交图纸、样品照片或工况参数后，我们会根据介质、温度、压力、转速和尺寸要求进行材料与结构建议。",
    steps: [
      ["01", "提交需求", "产品类型、图纸、尺寸或当前失效问题"],
      ["02", "工程评估", "材料牌号、浸渍工艺、配对面和公差建议"],
      ["03", "报价确认", "样品、批量价格、交期和包装方式确认"],
      ["04", "生产交付", "严格质检、出口包装，按约定交期发运"],
    ],
    promise: "建议提供：介质、温度、压力、转速、内外径/高度、年用量。",
  },
  en: {
    headline: "Submit drawings — get a quote",
    eyebrow: "Engineering inquiry",
    stats: ["Response", "Drawing support", "Custom machining"],
    trust: [["24 hours", "Fast response"], ["7 languages", "Technical dialogue"], ["Source factory", "Custom machining"]],
    route: "Inquiry route",
    routeTitle: "Help engineers identify grade and model faster",
    routeDesc: "After drawings, sample photos, or duty conditions are submitted, we recommend material and structure based on media, temperature, pressure, speed, and dimensions.",
    steps: [
      ["01", "Send requirements", "Product type, drawing, dimensions, or current failure issue"],
      ["02", "Engineering review", "Grade, impregnation, mating face, and tolerance recommendation"],
      ["03", "Quote confirmation", "Samples, batch pricing, lead time, and packing method"],
      ["04", "Production & delivery", "Strict QC, export packing, shipment on the agreed lead time"],
    ],
    promise: "Useful details: media, temperature, pressure, speed, I.D./O.D./height, annual quantity.",
  },
  vi: {
    headline: "Gửi bản vẽ — nhận báo giá",
    eyebrow: "Yêu cầu kỹ thuật",
    stats: ["Phản hồi", "Hỗ trợ bản vẽ", "Gia công tùy chỉnh"],
    trust: [["24 giờ", "Phản hồi nhanh"], ["7 ngôn ngữ", "Trao đổi kỹ thuật"], ["Nhà máy gốc", "Gia công tùy chỉnh"]],
    route: "Quy trình yêu cầu",
    routeTitle: "Giúp kỹ sư xác định cấp vật liệu và model nhanh hơn",
    routeDesc: "Sau khi gửi bản vẽ, ảnh mẫu hoặc điều kiện vận hành, chúng tôi sẽ đề xuất vật liệu và cấu trúc theo môi trường, nhiệt độ, áp suất, tốc độ và kích thước.",
    steps: [
      ["01", "Gửi yêu cầu", "Loại sản phẩm, bản vẽ, kích thước hoặc vấn đề hư hỏng hiện tại"],
      ["02", "Đánh giá kỹ thuật", "Khuyến nghị cấp vật liệu, tẩm, bề mặt đối tiếp và dung sai"],
      ["03", "Xác nhận báo giá", "Mẫu, giá lô, thời gian giao hàng và phương án đóng gói"],
      ["04", "Sản xuất & giao hàng", "Kiểm định nghiêm ngặt, đóng gói xuất khẩu, giao đúng hạn"],
    ],
    promise: "Thông tin hữu ích: môi trường, nhiệt độ, áp suất, tốc độ, I.D./O.D./chiều cao, số lượng năm.",
  },
  th: {
    headline: "ส่งแบบ — รับใบเสนอราคา",
    eyebrow: "สอบถามทางวิศวกรรม",
    stats: ["ตอบกลับ", "รองรับ PDF/CAD", "ผลิตตามแบบ"],
    trust: [["24 ชั่วโมง", "ตอบกลับเร็ว"], ["7 ภาษา", "สื่อสารเชิงเทคนิค"], ["โรงงานต้นทาง", "ผลิตตามแบบ"]],
    route: "เส้นทางการสอบถาม",
    routeTitle: "ช่วยให้วิศวกรระบุเกรดและรุ่นได้เร็วขึ้น",
    routeDesc: "หลังจากส่งแบบ รูปตัวอย่าง หรือสภาวะการทำงาน เราจะแนะนำวัสดุและโครงสร้างตามตัวกลาง อุณหภูมิ แรงดัน ความเร็ว และขนาด",
    steps: [
      ["01", "ส่งความต้องการ", "ประเภทสินค้า แบบ ขนาด หรือปัญหาการใช้งานปัจจุบัน"],
      ["02", "ประเมินทางวิศวกรรม", "แนะนำเกรดวัสดุ การอัดซึม ผิวคู่ และค่าความคลาดเคลื่อน"],
      ["03", "ยืนยันใบเสนอราคา", "ตัวอย่าง ราคาล็อต ระยะเวลาจัดส่ง และวิธีบรรจุภัณฑ์"],
      ["04", "ผลิตและจัดส่ง", "ตรวจสอบคุณภาพเข้มงวด บรรจุภัณฑ์ส่งออก จัดส่งตามกำหนด"],
    ],
    promise: "ข้อมูลที่ควรระบุ: ตัวกลาง อุณหภูมิ แรงดัน ความเร็ว I.D./O.D./ความสูง และปริมาณต่อปี",
  },
  ru: {
    headline: "Отправьте чертёж — получите расчёт",
    eyebrow: "Инженерный запрос",
    stats: ["Ответ", "Поддержка PDF/CAD", "Изготовление на заказ"],
    trust: [["24 часа", "Быстрый ответ"], ["7 языков", "Технический диалог"], ["Свой завод", "Изготовление на заказ"]],
    route: "Маршрут запроса",
    routeTitle: "Помогаем инженерам быстрее определить марку и модель",
    routeDesc: "После получения чертежей, фото образца или условий работы мы рекомендуем материал и конструкцию по среде, температуре, давлению, скорости и размерам.",
    steps: [
      ["01", "Отправьте требования", "Тип изделия, чертеж, размеры или текущая проблема"],
      ["02", "Инженерная оценка", "Марка, пропитка, сопряженная поверхность и допуски"],
      ["03", "Подтверждение цены", "Образцы, партия, срок поставки и упаковка"],
      ["04", "Производство и поставка", "Строгий контроль качества, экспортная упаковка, отгрузка в срок"],
    ],
    promise: "Полезные данные: среда, температура, давление, скорость, I.D./O.D./высота, годовой объем.",
  },
  ja: {
    headline: "図面を送って見積を取得",
    eyebrow: "技術問い合わせ",
    stats: ["対応", "PDF/CAD対応", "カスタム加工"],
    trust: [["24時間", "迅速回答"], ["7言語", "技術対話"], ["自社工場", "カスタム加工"]],
    route: "問い合わせフロー",
    routeTitle: "技術者がグレードと型番を素早く判断",
    routeDesc: "図面、サンプル写真、運転条件を送付いただくと、媒体、温度、圧力、速度、寸法に基づいて材料と構造を提案します。",
    steps: [
      ["01", "要件送付", "製品タイプ、図面、寸法、または現在の不具合"],
      ["02", "技術評価", "材料グレード、含浸、相手面、公差の提案"],
      ["03", "見積確認", "サンプル、量産価格、納期、梱包方法を確認"],
      ["04", "生産・納品", "厳格な品質検査、輸出梱包、納期通りの出荷"],
    ],
    promise: "推奨情報: 媒体、温度、圧力、速度、内外径/高さ、年間数量。",
  },
  ko: {
    headline: "도면 제출하고 견적 받기",
    eyebrow: "엔지니어링 문의",
    stats: ["응답", "PDF/CAD 지원", "맞춤 가공"],
    trust: [["24시간", "빠른 회신"], ["7개 언어", "기술 소통"], ["자체 공장", "맞춤 가공"]],
    route: "문의 흐름",
    routeTitle: "엔지니어가 등급과 모델을 더 빠르게 판단하도록 지원",
    routeDesc: "도면, 샘플 사진 또는 운전 조건을 제출하면 매체, 온도, 압력, 속도 및 치수에 따라 재료와 구조를 제안합니다.",
    steps: [
      ["01", "요구사항 제출", "제품 유형, 도면, 치수 또는 현재 고장 문제"],
      ["02", "엔지니어링 검토", "재료 등급, 함침, 상대면 및 공차 추천"],
      ["03", "견적 확인", "샘플, 대량 가격, 납기 및 포장 방식 확인"],
      ["04", "생산 및 납품", "엄격한 품질 검사, 수출 포장, 약속된 납기 내 출하"],
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
 * ?product= 现在由 ContactForm 在提交时从 window.location 读，页面保持静态预渲染，
 * 并且表单能进 SSR HTML（用 useSearchParams() 会把这块踢出 SSR）。
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

      {/* Hero：矮横幅。文字在左侧容器内，实拍图从 lg 起绝对定位在右侧、满高且右出血，
          左缘加白色渐变与文字区柔和衔接；lg 以下图回落到文字下方全宽。 */}
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="container-wide relative z-10 py-10 md:py-12 lg:flex lg:min-h-[320px] lg:items-center lg:py-14">
          <div className="lg:max-w-[34rem] xl:max-w-[36rem]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-accent" aria-hidden />
              <span className="en-caption text-sm text-muted">{copy.eyebrow}</span>
            </div>
            <h1 className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-serif-sc text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-[2.75rem]">
              {copy.headline.split("  ").map((part) => (
                <span key={part}>{part}</span>
              ))}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">{t("pageSubtitle")}</p>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-border pt-6 md:gap-4">
              {copy.trust.map(([main, sub], i) => (
                <div key={main} className="flex items-start gap-2 md:gap-2.5">
                  <Icon name={heroTrustIcons[i]} className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="min-w-0">
                    <span className="block text-[13px] font-bold leading-snug text-primary md:text-sm">{main}</span>
                    <span className="mt-0.5 block text-xs leading-snug text-muted">{sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 桌面：右侧满高出血实拍 */}
        <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          <Image
            src="/images/实拍/IMG_20260518_215113.webp"
            alt={getLocalized(heroImageAlt, locale)}
            fill
            priority
            className="object-cover"
            sizes="48vw"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" aria-hidden />
        </div>

        {/* 移动/平板：图在文字下方，通栏 */}
        <figure className="relative aspect-[16/10] w-full overflow-hidden bg-background sm:aspect-[16/9] lg:hidden">
          <Image
            src="/images/实拍/IMG_20260518_215113.webp"
            alt={getLocalized(heroImageAlt, locale)}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </figure>
      </section>

      {/* 主分栏：左表单（白），右深色面板（询盘路径 + 联系方式） */}
      <section className="border-b border-border bg-white">
        <div className="grid gap-px bg-border lg:grid-cols-[1.15fr_0.85fr]">
          {/* 移动端先显示表单 */}
          <div className="order-1 bg-white p-6 md:p-10 lg:p-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-accent" aria-hidden />
              <span className="en-caption text-sm text-muted">{t("formTitle")}</span>
            </div>
            <ContactForm />
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
