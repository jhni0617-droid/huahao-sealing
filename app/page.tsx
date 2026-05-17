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
  title: "Premium Carbon Graphite Sealing Solutions",
  description:
    "Professional manufacturer of carbon graphite seals, mechanical seals, and seal rings for pumps, marine, chemical, and industrial applications. 20+ years of expertise.",
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
