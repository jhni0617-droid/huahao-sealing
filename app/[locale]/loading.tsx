export default function Loading() {
  // 高度与 LayoutShell 的 main min-h 一致，避免加载完成时高度跳变
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="w-10 h-10 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  )
}
