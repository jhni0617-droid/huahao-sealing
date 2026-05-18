interface StatsCardProps {
  label: string
  value: string | number
  icon?: string
}

export default function StatsCard({ label, value, icon }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-500 mt-0.5">{label}</div>
        </div>
      </div>
    </div>
  )
}
