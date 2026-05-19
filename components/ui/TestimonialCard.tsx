interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  company?: string
  className?: string
}

export default function TestimonialCard({ quote, author, role, company, className = "" }: TestimonialCardProps) {
  return (
    <div className={`card p-6 ${className}`}>
      <svg className="w-8 h-8 text-accent/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-10z" />
      </svg>
      <p className="text-sm text-muted leading-relaxed mb-4 italic">{quote}</p>
      <div>
        <div className="text-sm font-semibold text-primary">{author}</div>
        {(role || company) && (
          <div className="text-xs text-muted">{[role, company].filter(Boolean).join(" · ")}</div>
        )}
      </div>
    </div>
  )
}
