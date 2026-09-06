import { getLocale, getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { applications } from "@/lib/constants"
import CTASection from "@/components/CTASection"
import ApplicationConditionsSection from "@/components/ApplicationConditionsSection"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import { applicationsDetailsByLocale } from "@/lib/translations-app-details"
import { industryLandings } from "@/lib/industry-landing-data"
import PageHero from "@/components/PageHero"
import Breadcrumb from "@/components/Breadcrumb"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "applications" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/applications",
    locale,
  })
}

interface DetailData {
  description: string
  reasons: string[]
}

const zhDetails: Record<string, DetailData> = {
  "pump-industry": {
    description:
      "我们的密封件广泛应用于各类离心泵、化工泵、清水泵和油泵的旋转轴密封。碳石墨的自润滑特性使其成为高速旋转设备的理想选择，配合高精度研磨的石墨轴套，可显著提升泵组运行稳定性，降低轴磨损，将大修周期从3个月延长至18个月以上。",
    reasons: [
      "自润滑免维护，无需外部润滑系统",
      "配合高精度研磨轴套，显著降低轴磨损",
      "耐冲刷，适应含固体颗粒介质",
      "启动和停机过程中保持密封稳定",
      "将大修周期从3个月延长至18个月以上",
    ],
  },
  "marine-industry": {
    description:
      "船舶环境要求特殊的耐腐蚀性能。我们经过特殊浸渍处理的碳石墨密封件和轴承能够承受海水的长期腐蚀，同时在变化载荷和冲击工况下保持尺寸稳定性。石墨轴套在船舶艉轴密封和海水泵中表现尤为突出，自润滑特性确保在长期浸水和干湿交替工况下可靠运行。",
    reasons: [
      "特殊浸渍工艺抵抗海水长期腐蚀",
      "干湿交替工况下尺寸稳定",
      "自润滑特性确保长期浸水可靠运行",
      "冲击和振动载荷下保持密封完整性",
    ],
  },
  "chemical-processing": {
    description:
      "化工反应釜、搅拌器和工艺泵要求密封件能够抵抗各类腐蚀性介质。我们的浸渍碳石墨牌号具有优异的化学惰性，耐受强酸、强碱及有机溶剂的腐蚀。配套的石墨轴套和轴承在腐蚀性介质中保持化学稳定，为搅拌轴和泵轴提供长期可靠的支撑和导向。",
    reasons: [
      "化学惰性，耐受强酸强碱及有机溶剂",
      "无金属污染风险，适合洁净工艺",
      "高温下保持化学稳定性和机械强度",
      "丰富的浸渍牌号可选，适配不同介质",
    ],
  },
  "power-energy": {
    description:
      "电厂循环水泵、核电站辅助泵、热电联产供热泵、汽轮机润滑油泵等一系列能源行业设备都离不开可靠的密封和轴承部件。碳石墨耐高温特性（可达600°C）确保在高温蒸汽和热介质工况中保持尺寸稳定，大幅减少计划外停机，显著提升发电设备的运行可用率。",
    reasons: [
      "耐高温达600°C，适用高温蒸汽环境",
      "热膨胀系数低，温度波动下尺寸稳定",
      "自润滑确保润滑油泵故障时仍可运行",
      "无油运行，适合高温区域防火安全要求",
    ],
  },
  "food-pharma": {
    description:
      "食品和制药机械对密封材料有严格的卫生和安全要求。我们的食品级树脂浸渍碳石墨完全无油自润滑运行，无金属颗粒和润滑脂污染风险，符合FDA和EU食品接触材料标准。广泛应用于巧克力搅拌机、食品输送泵、灌装机、制药混合机等设备。",
    reasons: [
      "完全无油运行，零润滑脂污染风险",
      "无金属离子析出，适合洁净生产环境",
      "耐蒸汽清洗和CIP在线清洗",
    ],
  },
  "mining-metallurgy": {
    description:
      "矿山渣浆泵、冶金轧机润滑系统、选矿设备搅拌器、除尘风机等重载设备对耐磨性和可靠性要求极高。碳石墨材料优异的自润滑性能和抗热冲击性能，在含固体颗粒介质和高粉尘恶劣环境中保持长寿命。",
    reasons: [
      "优异的耐磨性，抵抗固体颗粒冲刷",
      "抗热冲击性能卓越，适应骤冷骤热",
      "干式运行能力，应对润滑中断",
      "高粉尘环境中自润滑性能稳定",
    ],
  },
  "oil-gas": {
    description:
      "输油泵机械密封、天然气压缩机轴承、油田注水泵轴套、LNG低温泵密封等油气行业关键部件，要求材料在极端工况下保持稳定。碳化和特殊浸渍处理的碳石墨牌号在油气介质中保持化学惰性和尺寸精度，满足API标准要求。",
    reasons: [
      "碳化处理后在油气介质中化学惰性稳定",
      "满足API标准密封和轴承要求",
      "低温和高温工况均保持尺寸精度",
      "适用于陆地及海上油气平台",
    ],
  },
  "general-sealing": {
    description:
      "阀杆密封、压缩机密封、搅拌器密封、风机轴承、造纸设备密封及各类非标工业设备的定制工程密封方案。碳石墨材料灵活的可加工性和丰富的牌号选择，使其能够适应各种复杂的安装空间和工况条件。",
    reasons: [
      "可加工性强，适应非标结构和异形件",
      "丰富的牌号覆盖不同温度/介质需求",
      "OEM配套经验成熟，交期稳定",
    ],
  },
}

const enDetails: Record<string, DetailData> = {
  "pump-industry": {
    description:
      "Our seals are widely used in centrifugal pumps, chemical pumps, water pumps, and oil pumps for rotating shaft sealing. Carbon graphite's self-lubricating properties make it ideal for high-speed rotating equipment, significantly improving pump operating stability and extending overhaul cycles.",
    reasons: [
      "Self-lubricating, no external lubrication system needed",
      "High-precision ground bushings significantly reduce shaft wear",
      "Erosion resistant, handles media with solid particles",
      "Stable sealing during start-up and shutdown",
      "Extends overhaul cycle from 3 to 18+ months",
    ],
  },
  "marine-industry": {
    description:
      "Marine environments require exceptional corrosion resistance. Our specially impregnated carbon graphite seals and bearings withstand long-term seawater corrosion while maintaining dimensional stability under variable loads and impact conditions.",
    reasons: [
      "Special impregnation resists long-term seawater corrosion",
      "Dimensionally stable in wet/dry cycling conditions",
      "Self-lubricating for reliable submerged operation",
      "Maintains seal integrity under shock and vibration loads",
    ],
  },
  "chemical-processing": {
    description:
      "Chemical reactors, agitators, and process pumps require seals that resist aggressive media. Our impregnated carbon graphite grades offer excellent chemical inertness, resisting strong acids, bases, and organic solvents.",
    reasons: [
      "Chemically inert, resists strong acids, bases, and solvents",
      "No metal contamination risk, suitable for clean processes",
      "Maintains chemical stability and mechanical strength at high temperatures",
      "Multiple impregnation grades available for different media",
    ],
  },
  "power-energy": {
    description:
      "Power plant circulating water pumps, nuclear auxiliary pumps, and turbine oil pumps all rely on reliable sealing and bearing components. Carbon graphite's high-temperature resistance (up to 600°C) ensures dimensional stability in high-temperature steam and thermal media conditions.",
    reasons: [
      "High temperature resistance up to 600°C",
      "Low thermal expansion, dimensionally stable under temperature fluctuation",
      "Self-lubricating ensures operation even if lube oil pump fails",
      "Oil-free operation, ideal for high-temperature fire safety areas",
    ],
  },
  "food-pharma": {
    description:
      "Food and pharmaceutical machinery requires strict hygiene and safety standards. Our food-grade resin-impregnated carbon graphite runs completely oil-free with zero contamination risk, complying with FDA and EU food contact material standards.",
    reasons: [
      "Completely oil-free, zero grease contamination risk",
      "No metal ion leaching, suitable for clean production",
      "Withstands steam cleaning and CIP processes",
    ],
  },
  "mining-metallurgy": {
    description:
      "Heavy-duty equipment like slurry pumps, mill lubrication systems, and dust fans demand exceptional wear resistance. Carbon graphite's self-lubricating and thermal shock resistance properties deliver long service life in harsh environments with solid particles and high dust.",
    reasons: [
      "Excellent wear resistance against solid particle erosion",
      "Outstanding thermal shock resistance",
      "Dry run capability for lubrication interruption scenarios",
      "Stable self-lubrication in high-dust environments",
    ],
  },
  "oil-gas": {
    description:
      "Oil pumps, natural gas compressor bearings, and LNG pump seals require materials that remain stable under extreme conditions. Carbonized and specially impregnated carbon graphite grades maintain chemical inertness and dimensional accuracy in oil and gas media, meeting API standards.",
    reasons: [
      "Chemically inert in oil and gas media after carbonization",
      "Meets API standard sealing and bearing requirements",
      "Maintains dimensional accuracy at both low and high temperatures",
      "Suitable for both onshore and offshore platforms",
    ],
  },
  "general-sealing": {
    description:
      "Valve stem seals, compressor seals, agitator seals, and custom industrial equipment sealing solutions. Carbon graphite's flexible machinability and wide grade selection make it adaptable to complex installation spaces and operating conditions.",
    reasons: [
      "Highly machinable, adapts to custom shapes",
      "Wide grade selection for different temperature/media needs",
      "Mature OEM experience with stable delivery",
    ],
  },
}

export default async function ApplicationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("applications")
  const details = getLocalized({ zh: zhDetails, en: enDetails, ...applicationsDetailsByLocale }, locale)
  const hero = getLocalized({
    zh: { eyebrow: "应用与工况", primary: "描述工况获取建议", secondary: "查看产品", stats: ["工业场景", "高温适配", "介质覆盖"] },
    en: { eyebrow: "Applications & duty conditions", primary: "Get Application Advice", secondary: "View Products", stats: ["Industries", "High-temp range", "Media range"] },
    vi: { eyebrow: "Ứng dụng & điều kiện", primary: "Nhận tư vấn ứng dụng", secondary: "Xem sản phẩm", stats: ["Ngành ứng dụng", "Dải nhiệt cao", "Dải môi trường"] },
    th: { eyebrow: "การใช้งานและสภาวะ", primary: "รับคำแนะนำการใช้งาน", secondary: "ดูสินค้า", stats: ["อุตสาหกรรม", "ช่วงอุณหภูมิสูง", "ช่วงตัวกลาง"] },
    ru: { eyebrow: "Применения и условия", primary: "Получить рекомендацию", secondary: "Смотреть продукцию", stats: ["Отрасли", "Высокие температуры", "Диапазон сред"] },
    ja: { eyebrow: "用途と運転条件", primary: "用途相談を依頼", secondary: "製品を見る", stats: ["産業用途", "高温対応", "媒体範囲"] },
    ko: { eyebrow: "응용 및 운전 조건", primary: "응용 상담 받기", secondary: "제품 보기", stats: ["산업 분야", "고온 범위", "매체 범위"] },
  }, locale)

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={t("pageTitle")}
        subtitle={t("heroSubtitle")}
        primaryLabel={hero.primary}
        secondaryLabel={hero.secondary}
        secondaryHref="/products"
        stats={[
          { value: "8", label: hero.stats[0] },
          { value: "600°C", label: hero.stats[1] },
          { value: "pH 0-14", label: hero.stats[2] },
        ]}
      />
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/applications" }]} locale={locale} />

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          {applications.map((app, idx) => {
            const detail = details[app.slug]
            return (
              <div key={app.slug} id={app.slug} className={`mb-16 scroll-mt-24 last:mb-0 ${idx > 0 ? "pt-8" : ""}`}>
                <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-stretch">
                  <div>
                    <div className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">
                      0{idx + 1}
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">{app.title}</h2>
                    <div className="industrial-divider" />
                    <p className="text-muted mt-4 leading-relaxed">{detail.description}</p>

                    <div className="mt-6">
                      <h3 className="font-semibold mb-3">{t("applicableProducts")}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Link href="/products#seal-rings" className="tag-accent">
                          {t("sealRings")}
                        </Link>
                        <Link href="/products#carbon-graphite-sleeves" className="tag-accent">
                          {t("bushings")}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="card-static p-6 bg-white">
                    <h3 className="font-semibold mb-4">{t("whyTitle", { industry: app.title })}</h3>
                    <ul className="space-y-3">
                      {(detail.reasons || [
                        getLocalized({ zh: "自润滑 — 无需外部润滑", en: "Self-lubricating — no external lubrication", vi: "Tự bôi trơn — không cần bôi trơn ngoài", th: "หล่อลื่นตัวเอง — ไม่ต้องใช้สารหล่อลื่นภายนอก", ru: "Самосмазывание — без внешней смазки", ja: "自己潤滑 — 外部潤滑不要", ko: "자체 윤활 — 외부 윤활 불필요" }, locale),
                        getLocalized({ zh: "恶劣环境中耐腐蚀", en: "Corrosion resistant in harsh environments", vi: "Chống ăn mòn trong môi trường khắc nghiệt", th: "ทนการกัดกร่อนในสภาพแวดล้อมรุนแรง", ru: "Коррозионная стойкость в тяжелых средах", ja: "過酷環境での耐食性", ko: "가혹 환경 내식성" }, locale),
                        getLocalized({ zh: "耐高温和抗热冲击", en: "High temperature & thermal shock resistance", vi: "Chịu nhiệt và sốc nhiệt", th: "ทนความร้อนและช็อกความร้อน", ru: "Стойкость к высокой температуре и термошоку", ja: "高温・熱衝撃に強い", ko: "고온 및 열충격 저항" }, locale),
                        getLocalized({ zh: "长寿命减少维护停机时间", en: "Long life reducing maintenance downtime", vi: "Tuổi thọ dài, giảm thời gian dừng máy", th: "อายุการใช้งานยาว ลดเวลาหยุดซ่อม", ru: "Долгий срок службы снижает простои", ja: "長寿命で保守停止を削減", ko: "긴 수명으로 유지보수 정지 감소" }, locale),
                      ]).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-accent shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-primary mb-8">{getLocalized({ zh: "行业应用专题", en: "Industry Application Guides", vi: "Hướng dẫn ứng dụng ngành", th: "คู่มือการใช้งานอุตสาหกรรม" }, locale)}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryLandings.map((industry) => (
              <Link key={industry.slug} href={`/applications/${industry.slug}`} className="card-static p-5 hover:border-accent transition-colors block">
                <h3 className="font-semibold text-primary mb-2">{getLocalized(industry.title, locale)}</h3>
                <p className="text-sm text-muted line-clamp-2">{getLocalized(industry.description, locale)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ApplicationConditionsSection />

      <CTASection
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
      />
    </>
  )
}
