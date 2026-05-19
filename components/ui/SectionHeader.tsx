interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ label, title, description, centered, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12 ${className}`}>
      {label && (
        <div className="text-accent font-bold text-sm tracking-widest mb-3">{label}</div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      <div className={`industrial-divider ${centered ? "mx-auto" : ""}`} />
      {description && (
        <p className={`text-muted mt-4 max-w-2xl ${centered ? "mx-auto" : ""} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  )
}
