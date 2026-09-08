/**
 * 大数字统计条：发丝线分栏，承接原 PageHero 的 stats 槽位。
 */
export default function StatsRow({
  items,
  dark = false,
}: {
  items: { value: string; label: string }[]
  dark?: boolean
}) {
  const cols = items.length >= 4 ? "lg:grid-cols-4" : items.length === 3 ? "sm:grid-cols-3" : items.length === 2 ? "sm:grid-cols-2" : ""

  return (
    <div className={`grid gap-px border-y ${cols} ${dark ? "border-white/12 bg-white/12" : "border-border bg-border"}`}>
      {items.map((stat) => (
        <div key={stat.label} className={`px-6 py-8 text-center ${dark ? "bg-primary" : "bg-white"}`}>
          <div className={`stat-num text-3xl font-bold md:text-4xl ${dark ? "text-white" : "text-primary"}`}>{stat.value}</div>
          <div className={`mt-1.5 text-xs leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
