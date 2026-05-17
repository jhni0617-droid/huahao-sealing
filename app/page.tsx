import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import FailureSolutionsSection from "@/components/FailureSolutionsSection"
import FactorySection from "@/components/FactorySection"
import FactoryWorkshopSection from "@/components/FactoryWorkshopSection"
import ClientsSection from "@/components/ClientsSection"
import AdvantagesSection from "@/components/AdvantagesSection"
import ApplicationsSection from "@/components/ApplicationsSection"
import CasesSection from "@/components/CasesSection"
import CTASection from "@/components/CTASection"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "华豪密封 | 高品质碳石墨密封解决方案",
  description:
    "专业生产碳石墨密封件、机械密封、密封环，应用于泵类、船舶、化工和工业领域。20+年行业经验，ISO认证品质，产品出口全球50+国家。",
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FailureSolutionsSection />
      <FactorySection />
      <FactoryWorkshopSection />
      <ClientsSection />
      <AdvantagesSection />
      <ApplicationsSection />
      <CasesSection />
      <CTASection />
    </>
  )
}
