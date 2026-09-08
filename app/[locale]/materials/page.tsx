import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { materialLandings } from "@/lib/materials-data"
import { technicalData } from "@/lib/technical-data"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import CTASection from "@/components/CTASection"
import Breadcrumb from "@/components/Breadcrumb"
import PageHead from "@/components/ui/PageHead"
import StepStrip from "@/components/ui/StepStrip"
import Icon from "@/components/ui/Icon"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "materials" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/materials",
    locale,
  })
}

const materialImages: Record<string, string> = {
  "carbon-graphite": "/images/products/graphite-bushing.webp",
  "resin-impregnated-graphite": "/images/videos/impregnated-parts.webp",
  "antimony-impregnated-graphite": "/images/videos/seal-ring-batch.webp",
  "copper-graphite": "/images/products/graphite-bearing.webp",
  "babbitt-impregnated-graphite": "/images/videos/machining-ring.webp",
  "isostatic-graphite": "/images/products/three-part-ring.webp",
  "electrographite": "/images/products/graphite-thrust-disc.webp",
  "metal-impregnated-graphite": "/images/videos/custom-bushings.webp",
}

const familyCards = [
  { slug: "resin-impregnated-graphite", tag: "H · K" },
  { slug: "antimony-impregnated-graphite", tag: "D" },
  { slug: "copper-graphite", tag: "Cu" },
]

const heroCopy = {
  zh: { eyebrow: "材料技术" },
  en: { eyebrow: "Material Technology" },
  vi: { eyebrow: "Công nghệ vật liệu" },
  th: { eyebrow: "เทคโนโลยีวัสดุ" },
  ru: { eyebrow: "Технология материалов" },
  ja: { eyebrow: "材料技術" },
  ko: { eyebrow: "소재 기술" },
}

export default async function MaterialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("materials")
  const hero = getLocalized(heroCopy, locale)

  const tableHead = getLocalized({
    zh: ["牌号", "类型", "最高耐温", "最大压力", "最高线速度", "抗压强度"],
    en: ["Grade", "Type", "Max temp.", "Max pressure", "Max speed", "Compressive"],
    vi: ["Mác", "Loại", "Nhiệt tối đa", "Áp tối đa", "Tốc độ tối đa", "Cường độ nén"],
    th: ["เกรด", "ประเภท", "อุณหภูมิสูงสุด", "แรงดันสูงสุด", "ความเร็วสูงสุด", "กำลังอัด"],
    ru: ["Марка", "Тип", "Макс. темп.", "Макс. давление", "Макс. скорость", "Прочность"],
    ja: ["グレード", "タイプ", "最高耐温", "最大圧力", "最高周速", "圧縮強度"],
    ko: ["등급", "유형", "최고 온도", "최대 압력", "최고 속도", "압축 강도"],
  }, locale) as string[]

  const families = familyCards
    .map((card) => ({ ...card, data: materialLandings.find((m) => m.slug === card.slug)! }))
    .filter((f) => f.data)

  const faq = technicalData.faq
  const faqList = getLocalized({ zh: faq.zh, en: faq.en, vi: faq.vi, th: faq.th }, locale) ?? faq.en

  const steps = getLocalized({
    zh: [
      { title: "提供工况", desc: "提交介质、温度、压力、转速等运行参数。" },
      { title: "推荐牌号", desc: "结合工况与经验数据库，推荐合适的材料牌号。" },
      { title: "样品验证", desc: "提供样品测试验证，确认材料性能。" },
    ],
    en: [
      { title: "Share duty conditions", desc: "Submit media, temperature, pressure, and speed parameters." },
      { title: "Grade recommendation", desc: "Engineers recommend a suitable grade from duty data and experience." },
      { title: "Sample validation", desc: "Samples provided for testing to confirm material performance." },
    ],
    vi: [
      { title: "Cung cấp điều kiện", desc: "Gửi môi trường, nhiệt độ, áp suất, tốc độ vận hành." },
      { title: "Đề xuất mác", desc: "Kỹ sư đề xuất mác phù hợp theo dữ liệu và kinh nghiệm." },
      { title: "Xác nhận mẫu", desc: "Cung cấp mẫu thử để xác nhận hiệu năng vật liệu." },
    ],
    th: [
      { title: "แจ้งเงื่อนไข", desc: "ส่งตัวกลาง อุณหภูมิ แรงดัน และความเร็ว" },
      { title: "แนะนำเกรด", desc: "วิศวกรแนะนำเกรดที่เหมาะสมจากฐานข้อมูล" },
      { title: "ทดสอบตัวอย่าง", desc: "จัดเตรียมตัวอย่างเพื่อยืนยันประสิทธิภาพ" },
    ],
    ru: [
      { title: "Условия работы", desc: "Укажите среду, температуру, давление и скорость." },
      { title: "Рекомендация марки", desc: "Инженеры подберут марку по базе данных и опыту." },
      { title: "Подтверждение образцом", desc: "Предоставим образцы для проверки характеристик." },
    ],
    ja: [
      { title: "工况を提供", desc: "媒体・温度・圧力・速度などの運転参数を提出。" },
      { title: "グレード推薦", desc: "条件と経験データベースから適切なグレードを推薦。" },
      { title: "サンプル検証", desc: "サンプルで性能を確認し、材料を確定。" },
    ],
    ko: [
      { title: "조건 제공", desc: "매체, 온도, 압력, 속도 등 운전 파라미터 제출." },
      { title: "등급 추천", desc: "조건과 경험 데이터베이스로 적합한 등급을 추천." },
      { title: "샘플 검증", desc: "샘플 테스트로 재료 성능을 확인." },
    ],
  }, locale)

  return (
    <>
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/materials" }]} locale={locale} />

      <PageHead en={hero.eyebrow} title={t("pageTitle")} description={t("heroSubtitle")} />

      {/* 三大浸渍家族卡，角标为真实牌号后缀 */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {families.map((family) => (
              <Link
                key={family.slug}
                href={`/materials/${family.slug}`}
                className="group relative bg-white p-6 transition-colors hover:bg-[#fafafb] md:p-8"
              >
                <span className="en-caption absolute right-5 top-5 text-xl font-bold text-accent">{family.tag}</span>
                <h2 className="font-serif-sc text-xl font-bold text-primary transition-colors group-hover:text-accent md:text-2xl">
                  {getLocalized(family.data.title, locale)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                  {getLocalized(family.data.description, locale)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 真实牌号数据表：technicalData，M106D 为第三方实测重点牌号 */}
      <section className="section-padding-sm industrial-surface">
        <div className="container-wide">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-accent" aria-hidden />
            <span className="en-caption text-sm text-muted">
              {getLocalized({ zh: "牌号技术参数", en: "Grade Data" }, locale)}
            </span>
          </div>
          <div className="overflow-x-auto border border-border bg-white">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  {tableHead.map((label) => (
                    <th key={label} className="whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-[0.06em]">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {technicalData.grades.map((grade, i) => (
                  <tr key={grade.grade} className={`border-t border-border ${i % 2 === 1 ? "bg-[#f7f8f9]" : "bg-white"}`}>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="flex items-center gap-2">
                        {grade.grade === "M106D" && <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />}
                        <span className="font-mono font-bold text-primary">{grade.grade}</span>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs leading-relaxed text-muted">{grade.type}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-primary">{grade.tempMax}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-primary">{grade.pressureMax}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-primary">{grade.speedMax}</td>
                    <td className={`whitespace-nowrap px-4 py-3 font-mono ${grade.grade === "M106D" ? "font-bold text-accent" : "text-primary"}`}>
                      {grade.compressiveStrength}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            {getLocalized({
              zh: "M106D 抗压/抗折/硬度为第三方检测值；完整物理性能与应用工况见各牌号详情页。",
              en: "M106D compressive/flexural/hardness values are third-party tested. Full physical properties per grade on detail pages.",
            }, locale)}
          </p>
        </div>
      </section>

      {/* 按工况选牌号：真实 FAQ */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-accent" aria-hidden />
              <span className="en-caption text-sm text-muted">SELECTION GUIDE</span>
            </div>
            <h2 className="font-serif-sc text-3xl font-bold leading-tight text-primary md:text-4xl">
              {getLocalized({ zh: "按工况选牌号", en: "Grade selection by duty" }, locale)}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {getLocalized({ zh: "常见工况的选型口径，拿不准的提交参数让工程师确认。", en: "Common selection guidance — submit your parameters for engineering confirmation." }, locale)}
            </p>
          </div>
          <div>
            {faqList.map((item, i) => (
              <div key={i} className={`py-5 ${i > 0 ? "border-t border-border" : ""}`}>
                <h3 className="font-serif-sc text-base font-bold text-primary md:text-lg">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 全部材料卡片：入口到详情页 */}
      <section className="section-padding-sm industrial-surface">
        <div className="container-wide">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-accent" aria-hidden />
            <span className="en-caption text-sm text-muted">{hero.eyebrow}</span>
          </div>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {materialLandings.map((material) => (
              <Link
                key={material.slug}
                href={`/materials/${material.slug}`}
                className="group flex flex-col bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-background">
                  <Image
                    src={materialImages[material.slug] || "/images/products/graphite-bushing.webp"}
                    alt={getLocalized(material.title, locale)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif-sc font-bold text-primary transition-colors group-hover:text-accent">
                    {getLocalized(material.title, locale)}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">
                    {getLocalized(material.description, locale)}
                  </p>
                  <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-accent">
                    {getLocalized({ zh: "查看详情", en: "View details", vi: "Xem chi tiết", th: "ดูรายละเอียด", ru: "Подробнее", ja: "詳細を見る", ko: "상세 보기" }, locale)}
                    <Icon name="arrow-right" className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm industrial-surface">
        <div className="container-wide">
          <StepStrip items={steps} />
        </div>
      </section>

      <CTASection
        title={getLocalized({
          zh: "不确定选哪个牌号？让工程师帮您",
          en: "Not sure which grade? Let our engineers help",
          vi: "Không chắc chọn vật liệu nào? Kỹ sư giúp bạn",
          th: "ไม่แน่ใจเลือกเกรดใด วิศวกรช่วยคุณ",
          ru: "Не уверены в выборе марки? Помогут наши инженеры",
          ja: "グレード選びに迷ったらエンジニアへご相談ください",
          ko: "등급 선택이 막막하시면 엔지니어에게 문의하세요",
        }, locale)}
        subtitle={getLocalized({
          zh: "提交工况参数（温度、压力、介质、转速），24 小时内获得选型建议与报价。",
          en: "Submit your duty parameters — engineers reply with grade selection and quotation within 24 hours.",
          vi: "Gửi thông số vận hành — kỹ sư phản hồi trong 24 giờ.",
          th: "ส่งพารามิเตอร์ — วิศวกรตอบใน 24 ชม.",
          ru: "Отправьте параметры — ответ инженеров в течение 24 часов.",
          ja: "運転パラメータを送信 — 24時間以内にエンジニアが回答。",
          ko: "운전 파라미터 제출 — 24시간 내 엔지니어 답변.",
        }, locale)}
      />
    </>
  )
}
