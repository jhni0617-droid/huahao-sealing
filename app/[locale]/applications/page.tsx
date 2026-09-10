import Image from "next/image"
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { applications } from "@/lib/constants"
import CTASection from "@/components/CTASection"
import ApplicationConditionsSection from "@/components/ApplicationConditionsSection"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import { applicationsDetailsByLocale } from "@/lib/translations-app-details"
import { industryLandings } from "@/lib/industry-landing-data"
import Breadcrumb from "@/components/Breadcrumb"
import HashScroll from "@/components/HashScroll"
import PageHead from "@/components/ui/PageHead"
import StepStrip from "@/components/ui/StepStrip"
import Icon from "@/components/ui/Icon"

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

const appImages: Record<string, string> = {
  "pump-industry": "/images/applications/pump-industry.webp",
  "marine-industry": "/images/applications/marine-industry.webp",
  "chemical-processing": "/images/applications/chemical-processing.webp",
  "power-energy": "/images/applications/power-energy.webp",
  "food-pharma": "/images/applications/food-pharma.webp",
  "mining-metallurgy": "/images/applications/mining-metallurgy.webp",
  "oil-gas": "/images/applications/oil-gas.webp",
  "general-sealing": "/images/applications/general-sealing.webp",
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

  const steps = getLocalized({
    zh: [
      { title: "提交工况", desc: "提供介质、温度、压力、转速等关键参数。" },
      { title: "材料匹配", desc: "工程师进行材料与结构匹配分析。" },
      { title: "方案确认", desc: "输出推荐方案与使用建议，双方确认。" },
    ],
    en: [
      { title: "Submit duty conditions", desc: "Share media, temperature, pressure, and speed parameters." },
      { title: "Material matching", desc: "Engineers analyze material and structure fit." },
      { title: "Solution confirmed", desc: "We deliver a recommended solution for mutual confirmation." },
    ],
    vi: [
      { title: "Gửi điều kiện vận hành", desc: "Cung cấp môi trường, nhiệt độ, áp suất, tốc độ." },
      { title: "Ghép vật liệu", desc: "Kỹ sư phân tích vật liệu và kết cấu phù hợp." },
      { title: "Xác nhận phương án", desc: "Đưa ra phương án đề xuất và khuyến nghị sử dụng." },
    ],
    th: [
      { title: "ส่งเงื่อนไขการใช้งาน", desc: "แจ้งตัวกลาง อุณหภูมิ แรงดัน ความเร็ว" },
      { title: "จับคู่วัสดุ", desc: "วิศวกรวิเคราะห์วัสดุและโครงสร้างที่เหมาะสม" },
      { title: "ยืนยันโซลูชัน", desc: "เสนอแนวทางและคำแนะนำการใช้งาน" },
    ],
    ru: [
      { title: "Отправьте условия", desc: "Укажите среду, температуру, давление, скорость." },
      { title: "Подбор материала", desc: "Инженеры подберут материал и конструкцию." },
      { title: "Согласование решения", desc: "Выдача рекомендаций и подтверждение решения." },
    ],
    ja: [
      { title: "条件を提出", desc: "媒体・温度・圧力・速度などの参数を共有。" },
      { title: "材料マッチング", desc: "エンジニアが材料と構造を分析。" },
      { title: "案確定", desc: "推奨案と使用上の助言をご提示。" },
    ],
    ko: [
      { title: "조건 제출", desc: "매체, 온도, 압력, 속도 등 핵심 파라미터 공유." },
      { title: "재료 매칭", desc: "엔지니어가 재료와 구조를 분석." },
      { title: "방안 확정", desc: "추천 방안과 사용 권장 사항을 전달." },
    ],
  }, locale)

  return (
    <>
      <HashScroll />
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/applications" }]} locale={locale} />

      <PageHead en={hero.eyebrow} title={t("pageTitle")} description={t("heroSubtitle")} />

      {/* 八大行业瓷砖：黑白实拍 + 红色序号，点击跳到同页详情行 */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((app, idx) => (
              <a key={app.slug} href={`#${app.slug}`} className="group relative block bg-white">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-background">
                  <Image
                    src={appImages[app.slug]}
                    alt={app.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="en-caption absolute left-3 top-3 text-sm font-bold text-accent">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="font-serif-sc text-sm font-bold text-primary transition-colors group-hover:text-accent">
                    {app.title}
                  </span>
                  <span className="text-muted transition-transform group-hover:translate-x-0.5" aria-hidden>
                    ↓
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm industrial-surface">
        <div className="container-wide">
          {applications.map((app, idx) => {
            const detail = details[app.slug]
            return (
              <div key={app.slug} id={app.slug} className="scroll-mt-24 border-t border-border py-10 first:border-t-0 first:pt-0 md:py-12">
                <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-4">
                      <span className="en-caption text-3xl font-bold leading-none text-border">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-serif-sc text-2xl font-bold text-primary md:text-3xl">{app.title}</h2>
                    </div>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted">{detail.description}</p>

                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {(detail.reasons || []).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{t("applicableProducts")}</span>
                      <Link href="/products#seal-rings" className="tag-accent">
                        {t("sealRings")}
                      </Link>
                      <Link href="/products#carbon-graphite-sleeves" className="tag-accent">
                        {t("bushings")}
                      </Link>
                    </div>
                  </div>

                  {appImages[app.slug] && (
                    <div className="relative aspect-[4/3] overflow-hidden border border-border bg-background lg:mt-1">
                      <Image
                        src={appImages[app.slug]}
                        alt={app.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 420px"
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 图文特性带：为工况选材料 */}
      <section className="border-y border-border bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background lg:aspect-auto lg:border-b-0 lg:border-r">
            <Image
              src="/images/stock/industry-pump.webp"
              alt={getLocalized({ zh: "工业泵与管路设备", en: "Industrial pump and piping equipment" }, locale)}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-accent" aria-hidden />
              <span className="en-caption text-sm text-muted">{getLocalized({ zh: "选型逻辑", en: "Selection Logic" }, locale)}</span>
            </div>
            <h2 className="font-serif-sc text-2xl font-bold leading-tight text-primary md:text-3xl">
              {getLocalized({ zh: "为工况选材料，而非为目录卖型号", en: "Materials selected for your duty, not a catalog SKU" }, locale)}
            </h2>
            <ul className="mt-6 space-y-3.5">
              {getLocalized({
                zh: [
                  "基于温度、压力、介质、转速等真实工况参数",
                  "匹配合适的碳石墨材料、浸渍工艺与结构方案",
                  "提升密封可靠性，降低维护与停机成本",
                ],
                en: [
                  "Based on real duty parameters — temperature, pressure, media, speed",
                  "Matching carbon graphite grade, impregnation, and structure",
                  "Higher sealing reliability, lower maintenance and downtime cost",
                ],
              }, locale).map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-border pt-3.5 text-sm leading-relaxed text-muted">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary mt-8 self-start">
              {getLocalized({ zh: "提交工况获取建议", en: "Submit duty for advice" }, locale)}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-accent" aria-hidden />
            <span className="en-caption text-sm text-muted">{getLocalized({ zh: "行业专题", en: "Industry Guides" }, locale)}</span>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {industryLandings.map((industry) => (
              <Link
                key={industry.slug}
                href={`/applications/${industry.slug}`}
                className="group bg-white p-5 transition-colors hover:bg-[#fafafb]"
              >
                <h3 className="font-serif-sc font-bold text-primary transition-colors group-hover:text-accent">
                  {getLocalized(industry.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">{getLocalized(industry.description, locale)}</p>
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

      <ApplicationConditionsSection />

      <CTASection
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
      />
    </>
  )
}
