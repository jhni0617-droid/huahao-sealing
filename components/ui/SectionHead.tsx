import Reveal from "@/components/ui/Reveal"

type SectionHeadProps = {
  /** Uppercase EN caption rendered in the display font (良工式双语标注) */
  en: string
  title: string
  description?: string
  align?: "left" | "center"
}

export default function SectionHead({ en, title, description, align = "left" }: SectionHeadProps) {
  const centered = align === "center"
  return (
    <Reveal className={`mb-12 md:mb-16 ${centered ? "mx-auto max-w-3xl text-center" : ""}`}>
      <div className={centered ? "" : "grid gap-10 lg:grid-cols-[1fr_400px] lg:items-end"}>
        <div>
          <div className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
            <span className="h-[3px] w-10 bg-accent" aria-hidden />
            <span className="en-caption text-sm text-muted">{en}</span>
          </div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-[2.75rem] leading-tight">
            {title}
          </h2>
        </div>
        {description && !centered && (
          <p className="max-w-xl text-base leading-relaxed text-muted max-lg:hidden">{description}</p>
        )}
      </div>
      {description && centered && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  )
}
