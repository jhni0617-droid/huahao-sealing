"use client"

import { useState, type ReactNode } from "react"

interface Props {
  title: string
  description?: string
  children: ReactNode
  defaultOpen?: boolean
}

export default function FAQAccordion({ title, description, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className={`card-subtle overflow-hidden ${
        open ? "border-accent/30" : "hover:border-accent/20"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-primary text-lg">{title}</h3>
          {description && <p className="text-sm text-muted mt-0.5">{description}</p>}
        </div>
        <svg
          className={`w-5 h-5 text-muted shrink-0 ml-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: open ? "2000px" : "0px" }}
      >
        <div className="px-5 pb-5">{children}</div>
      </div>
    </div>
  )
}
