/**
 * 01/02/03 三步流程条：红色大序号 + 发丝线分栏，内页通用收尾模块。
 */
import Icon, { type IconName } from "@/components/ui/Icon"

export default function StepStrip({
  items,
}: {
  items: { title: string; desc: string; icon?: IconName }[]
}) {
  return (
    <div className="grid gap-px border border-border bg-border md:grid-cols-3">
      {items.map((item, index) => (
        <div key={item.title} className="flex items-start gap-5 bg-white p-6 md:p-8">
          <span className="en-caption shrink-0 text-4xl font-bold leading-none text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <div className="text-sm font-bold text-primary">{item.title}</div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.desc}</p>
          </div>
          {item.icon && <Icon name={item.icon} className="ml-auto h-5 w-5 shrink-0 text-border" />}
        </div>
      ))}
    </div>
  )
}
