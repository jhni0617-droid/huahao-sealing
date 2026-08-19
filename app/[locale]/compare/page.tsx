import { setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { comparisons } from "@/lib/compare-data"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import Breadcrumb from "@/components/Breadcrumb"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const title = getLocalized({
    zh: "密封材料对比指南",
    en: "Sealing Material Comparison Guide",
    vi: "Hướng dẫn so sánh vật liệu kín",
    th: "คู่มือเปรียบเทียบวัสดุซีล",
    ru: "Руководство по сравнению уплотнительных материалов",
    ja: "シール素材比較ガイド",
    ko: "밀봉 재료 비교 가이드",
  }, locale)
  return generateMeta({ title, description: title, path: "/compare", locale })
}

export default async function CompareIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const pageTitle = getLocalized({
    zh: "密封材料对比指南",
    en: "Sealing Material Comparison Guide",
    vi: "Hướng dẫn so sánh vật liệu kín",
    th: "คู่มือเปรียบเทียบวัสดุซีล",
    ru: "Руководство по сравнению уплотнительных материалов",
    ja: "シール素材比較ガイド",
    ko: "밀봉 재료 비교 가이드",
  }, locale)

  const subtitle = getLocalized({
    zh: "通过量化参数对比碳石墨、PTFE、金属合金、碳化硅与碳化钨等密封材料的耐温、强度、导热、耐腐蚀与寿命差异，为泵、压缩机与高温工况选材提供依据。",
    en: "Quantitative parameter comparisons of carbon graphite, PTFE, metal alloy, silicon carbide and tungsten carbide sealing materials across temperature, strength, thermal conductivity, corrosion resistance and service life to guide pump, compressor and high-temperature material selection.",
    vi: "So sánh định lượng các vật liệu kín như than chì carbon, PTFE, hợp kim kim loại, carbur silic và carbur vonfram theo nhiệt độ, cường độ, dẫn nhiệt, chống ăn mòn và tuổi thọ để hướng dẫn chọn vật liệu cho bơm, máy nén và điều kiện nhiệt độ cao.",
    th: "เปรียบเทียบเชิงปริมาณวัสดุซีล เช่น คาร์บอนกราไฟต์ PTFE โลหะผสม ซิลิคอนคาร์ไบด์ และทังสเตนคาร์ไบด์ ตามอุณหภูมิ ความแข็งแรง การนำความร้อน การต้านการกัดกร่อน และอายุการใช้งาน เพื่อแนะนำการเลือกวัสดุสำหรับปั๊ม คอมเพรสเซอร์และงานอุณหภูมิสูง",
    ru: "Количественное сравнение уплотнительных материалов (углеграфит, PTFE, металлические сплавы, карбид кремния и карбид вольфрама) по температуре, прочности, теплопроводности, коррозионной стойкости и сроку службы для выбора материалов для насосов, компрессоров и высокотемпературных применений.",
    ja: "カーボングラファイト、PTFE、金属合金、炭化ケイ素、炭化タングステンなどのシール素材を温度、強度、熱伝導、耐食性、寿命で定量比較し、ポンプ、圧縮機、高温用途の材料選定を支援します。",
    ko: "탄소그라파이트, PTFE, 금속 합금, 탄화규소, 탄화텅스텐 등 밀봉 재료를 온도, 강도, 열전도성, 내식성, 수명으로 정량 비교하여 펌프, 압축기 및 고온 환경의 재료 선택을 안내합니다.",
  }, locale)

  const eyebrow = getLocalized({
    zh: "技术资源",
    en: "Technical Resources",
    vi: "Tài nguyên kỹ thuật",
    th: "แหล่งข้อมูลทางเทคนิค",
    ru: "Технические ресурсы",
    ja: "テクニカルリソース",
    ko: "기술 자료",
  }, locale)

  return (
    <>
      <Breadcrumb items={[{ name: pageTitle, url: "/compare" }]} locale={locale} />
      <PageHero eyebrow={eyebrow} title={pageTitle} subtitle={subtitle} />
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {comparisons.map((item) => (
              <Link
                key={item.slug}
                href={`/compare/${item.slug}`}
                className="card-static p-6 hover:border-accent transition-colors block"
              >
                <h2 className="text-xl font-bold text-primary mb-3">{getLocalized(item.title, locale)}</h2>
                <p className="text-sm text-muted">{getLocalized(item.description, locale)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
