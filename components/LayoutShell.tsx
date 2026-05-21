import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"
import VisitTracker from "@/components/VisitTracker"

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VisitTracker />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
