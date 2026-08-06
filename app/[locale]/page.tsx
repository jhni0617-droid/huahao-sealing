import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { setRequestLocale } from "next-intl/server"
import { getLocalized } from "@/lib/locale-data"
import HeroSection from "@/components/HeroSection"
import HomeProductEntry from "@/components/HomeProductEntry"
import WhyCarbonGraphite from "@/components/WhyCarbonGraphite"
import FactoryQuality from "@/components/FactoryQuality"
import ApplicationsSection from "@/components/ApplicationsSection"
import CasesSection from "@/components/CasesSection"
import CTASection from "@/components/CTASection"

const ClientsSection = dynamic(() => import("@/components/ClientsSection"), {
  loading: () => <div className="section-padding bg-gray-50" />,
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return getLocalized({
    zh: {
      title: "华豪密封 | 高品质碳石墨密封解决方案",
      description: "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环，应用于泵类、船舶、化工和工业领域。20+年行业经验，产品出口全球15+国家。",
    },
    en: {
      title: "Huahao Sealing | High-Quality Carbon Graphite Sealing Solutions",
      description: "Professional manufacturer of carbon graphite seal rings, bushings/bearings, and split rings for pumps, marine, chemical and industrial applications. 20+ years of experience, exported to 15+ countries.",
    },
    vi: {
      title: "Huahao Sealing | Giải pháp làm kín than chì carbon chất lượng cao",
      description: "Nhà sản xuất vòng phớt, bạc lót/ổ trục và vòng chia than chì carbon cho bơm, hàng hải, hóa chất và công nghiệp.",
    },
    th: {
      title: "Huahao Sealing | โซลูชันซีลคาร์บอนกราไฟต์คุณภาพสูง",
      description: "ผู้ผลิตแหวนซีลคาร์บอนกราไฟต์ บูช/แบริ่ง และแหวนแยก สำหรับปั๊ม งานเรือ เคมี และอุตสาหกรรม",
    },
    ru: {
      title: "Huahao Sealing | Углерод-графитовые уплотнительные решения",
      description: "Производитель углерод-графитовых колец, втулок, подшипников и разрезных колец для насосов, судового, химического и промышленного оборудования.",
    },
    ja: {
      title: "Huahao Sealing | 高品質カーボングラファイトシールソリューション",
      description: "ポンプ、船舶、化学、産業用途向けのシールリング、ブッシング/軸受、分割リングの専門メーカー。",
    },
    ko: {
      title: "Huahao Sealing | 고품질 카본 그라파이트 씰링 솔루션",
      description: "펌프, 해양, 화학 및 산업용 카본 그라파이트 씰 링, 부싱/베어링, 분할 링 전문 제조업체.",
    },
  }, locale)
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <>
      <HeroSection />
      <HomeProductEntry />
      <CTASection />
      <WhyCarbonGraphite />
      <FactoryQuality />
      <ClientsSection />
      <ApplicationsSection />
      <CasesSection />
      <CTASection />
    </>
  )
}
