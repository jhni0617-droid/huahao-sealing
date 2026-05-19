import Icon from "./Icon"

interface SpecBadgeProps {
  icon: "thermometer" | "gear" | "clock"
  label: string
  value: string
}

export default function SpecBadge({ icon, label, value }: SpecBadgeProps) {
  return (
    <div className="flex items-center gap-2.5 bg-gray-50 border border-border rounded-xl px-3.5 py-2.5 min-w-0">
      <Icon name={icon} className="w-5 h-5 text-accent shrink-0" />
      <div className="min-w-0">
        <div className="text-[11px] text-muted leading-tight">{label}</div>
        <div className="text-sm font-semibold text-primary leading-tight truncate">{value}</div>
      </div>
    </div>
  )
}
