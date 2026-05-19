import type { Metadata } from "next"
import HeroSection from "@/components/HeroSection"
import WhyCarbonGraphite from "@/components/WhyCarbonGraphite"
import FactoryQuality from "@/components/FactoryQuality"
import ClientsSection from "@/components/ClientsSection"
import ApplicationsSection from "@/components/ApplicationsSection"
import CasesSection from "@/components/CasesSection"
import CTASection from "@/components/CTASection"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "zh") {
    return {
      title: "Huahao Sealing | High-Quality Carbon Graphite Sealing Solutions",
      description: "Professional manufacturer of carbon graphite seal rings, bushings/bearings, and split rings for pumps, marine, chemical and industrial applications. 20+ years of experience, exported to 15+ countries.",
    }
  }
  return {
    title: "华豪密封 | 高品质碳石墨密封解决方案",
    description: "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环，应用于泵类、船舶、化工和工业领域。20+年行业经验，产品出口全球15+国家。",
  }
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyCarbonGraphite />
      <FactoryQuality />
      <ClientsSection />
      <ApplicationsSection />
      <CasesSection />
      <CTASection />
    </>
  )
}
