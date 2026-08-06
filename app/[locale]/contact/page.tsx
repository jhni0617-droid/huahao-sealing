import { getLocale, getTranslations, setRequestLocale } from "next-intl/server"
import ContactForm from "@/components/ContactForm"
import ImageCarousel from "@/components/ui/ImageCarousel"
import Icon from "@/components/ui/Icon"
import { siteConfig, enSiteConfig } from "@/lib/constants"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import PageHero from "@/components/PageHero"

const contactCopy = {
  zh: {
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

export default async function ContactPage(props: { params: Promise<{ locale: string }>; searchParams?: Promise<{ product?: string }> }) {
  const searchParams = await props.searchParams
  const defaultProduct = searchParams?.product
  const { locale } = await props.params
  setRequestLocale(locale)
  const t = await getTranslations("contact")
  const cfg = getLocalized({ zh: siteConfig, en: enSiteConfig }, locale)
  const altText = { zh: "华豪密封工厂实拍", en: "Huahao Sealing factory", vi: "Nhà máy Huahao Sealing", th: "โรงงาน Huahao Sealing", ru: "Завод Huahao Sealing", ja: "華豪シール工場", ko: "Huahao Sealing 공장" }
  const copy = getLocalized(contactCopy, locale)

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        stats={[
          { value: "24h", label: copy.stats[0] },
          { value: "PDF/CAD", label: copy.stats[1] },
          { value: "OEM", label: copy.stats[2] },
        ]}
      />

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* 移动端先显示表单 */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="mb-6 border-l-2 border-accent pl-4">
                <h2 className="text-2xl font-bold text-primary">{t("formTitle")}</h2>
                <p className="text-sm text-muted mt-1">{t("formDesc")}</p>
              </div>
              <ContactForm defaultProduct={defaultProduct} />
            </div>

            <div className="lg:col-span-2 order-2 lg:order-1 space-y-6">
              <div className="border border-border bg-primary p-6 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.08em] text-white/55">{copy.route}</div>
                <h2 className="mt-3 text-2xl font-bold">{copy.routeTitle}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{copy.routeDesc}</p>
                <div className="mt-6 space-y-4">
                  {copy.steps.map(([num, title, desc]) => (
                    <div key={num} className="flex gap-3 border-t border-white/10 pt-4">
                      <div className="text-sm font-bold text-accent">{num}</div>
                      <div>
                        <div className="text-sm font-bold">{title}</div>
                        <div className="mt-1 text-xs leading-relaxed text-slate-400">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 border border-white/10 bg-white/[0.04] p-3 text-xs leading-relaxed text-slate-300">
                  {copy.promise}
                </p>
              </div>

              <div className="card-static p-6 bg-white">
                <h2 className="font-bold mb-4 text-primary">{t("infoTitle")}</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">{t("emailLabel")}</div>
                    <a href={`mailto:${cfg.email}`} className="text-primary font-medium hover:underline">
                      {cfg.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">{t("phoneLabel")}</div>
                    <p>{cfg.phone}</p>
                  </div>
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">WhatsApp</div>
                    <a
                      href={`https://wa.me/${cfg.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      {cfg.whatsapp}
                    </a>
                  </div>
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">{t("addressLabel")}</div>
                    <p>{cfg.address}</p>
                  </div>
                </div>
              </div>

              <div className="card-static p-6 bg-white">
                <h2 className="font-bold mb-3 text-primary">{t("whyTitle")}</h2>
                <ul className="space-y-2 text-sm text-muted">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="check" className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {t(`reason${i}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <ImageCarousel
                images={[
                  { src: "/images/实拍/IMG_20260518_214858.webp", alt: getLocalized(altText, locale) },
                  { src: "/images/实拍/IMG_20260518_215335.webp", alt: getLocalized(altText, locale) },
                  { src: "/images/实拍/IMG_20260518_215353.webp", alt: getLocalized(altText, locale) },
                  { src: "/images/实拍/file_00000000e47c7209a756fff4f4d29c2b.webp", alt: getLocalized(altText, locale) },
                ]}
                aspectRatio="16/10"
                variant="solid"
                autoPlay
                interval={4000}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
