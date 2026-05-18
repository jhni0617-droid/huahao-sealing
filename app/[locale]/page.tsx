import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import FactorySection from "@/components/FactorySection"
import StatsSection from "@/components/StatsSection"
import ClientsSection from "@/components/ClientsSection"
import AdvantagesSection from "@/components/AdvantagesSection"
import ApplicationsSection from "@/components/ApplicationsSection"
import CasesSection from "@/components/CasesSection"
import CTASection from "@/components/CTASection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "华豪密封 | 高品质碳石墨密封解决方案",
  description:
    "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环，应用于泵类、船舶、化工和工业领域。20+年行业经验，产品出口全球10+国家。",
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FactorySection />
      <StatsSection />
      <ClientsSection />
      <AdvantagesSection />
      <ApplicationsSection />
      <CasesSection />
      <CTASection />
    </>
  )
}
