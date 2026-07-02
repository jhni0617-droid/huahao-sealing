import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"
import VisitTracker from "@/components/VisitTracker"
import ScrollToTop from "@/components/ScrollToTop"

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <VisitTracker />
      <Header />
      {/* min-h 防止短页面 Footer 跳动；scroll-pt 确保锚点跳转不被 sticky header 遮挡 */}
      <main className="flex-1 min-h-[calc(100vh-64px)] scroll-pt-16">{children}</main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
