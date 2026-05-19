interface ROIMetricProps {
  beforeLabel: string
  afterLabel: string
  beforeValue: string
  afterValue: string
  improvement: string
  className?: string
}

export default function ROIMetric({ beforeLabel, afterLabel, beforeValue, afterValue, improvement, className = "" }: ROIMetricProps) {
  return (
    <div className={`bg-white rounded-xl border border-border p-5 ${className}`}>
      <div className="flex items-center gap-4 mb-3">
        <div className="flex-1">
          <div className="text-xs text-muted mb-1">{beforeLabel}</div>
          <div className="text-lg font-bold text-muted/60 line-through">{beforeValue}</div>
        </div>
        <div className="text-accent font-bold text-xl">→</div>
        <div className="flex-1">
          <div className="text-xs text-muted mb-1">{afterLabel}</div>
          <div className="text-lg font-bold text-success">{afterValue}</div>
        </div>
      </div>
      <div className="bg-success/10 text-success text-sm font-bold px-3 py-1.5 rounded-lg text-center">
        {improvement}
      </div>
    </div>
  )
}
