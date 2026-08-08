"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/lib/constants"
import { getMetaBrowserCookies, trackPixelEvent } from "@/lib/meta/client"
import Icon from "@/components/ui/Icon"

interface Props {
  defaultProduct?: string
}

export default function ContactForm({ defaultProduct }: Props) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "",
    industry: "",
    temperature: "",
    pressure: "",
    medium: "",
    speed: "",
    quantity: "",
    message: "",
  })

  const [errorMsg, setErrorMsg] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState("")
  const t = useTranslations("contact.form")

  // Honeypot anti-spam: hidden field bots fill in but humans don't see
  const [honeypot, setHoneypot] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    setFileError("")
    if (!selected) {
      setFile(null)
      return
    }
    if (selected.size > 5 * 1024 * 1024) {
      setFileError(t("uploadError"))
      setFile(null)
      return
    }
    setFile(selected)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg("")
    // 事件唯一 ID：浏览器 Pixel 与服务端 CAPI 共用，Meta 据此去重
    const metaEventId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`
    const { fbp, fbc } = getMetaBrowserCookies()
    try {
      const body: Record<string, string> = { ...form, _hp: honeypot }
      if (defaultProduct) body.product = defaultProduct
      body.metaEventId = metaEventId
      if (fbp) body.metaFbp = fbp
      if (fbc) body.metaFbc = fbc

      if (file) {
        const base64 = await new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onload = () => {
            const result = reader.result as string
            resolve(result.split(",")[1])
          }
          reader.readAsDataURL(file)
        })
        body.fileName = file.name
        body.fileContent = base64
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setSubmitted(true)
        // 浏览器端 Pixel 上报 Lead（服务端 CAPI 已在 /api/contact 内同步上报，同 event_id 去重）
        trackPixelEvent(
          "Lead",
          {
            content_name: "Contact Form",
            ...(defaultProduct ? { content_category: defaultProduct } : {}),
          },
          metaEventId,
        )
      } else {
        const data = await res.json()
        setErrorMsg(data?.error || t("errorSend"))
      }
    } catch {
      setErrorMsg(t("errorNetwork"))
    } finally {
      setLoading(false)
    }
  }

  const isValidStep1 = form.email && form.message

  const labelCn = (label: string, opt: string) => (
    <>{label} <span className="text-gray-400 font-normal">{opt}</span></>
  )

  if (submitted) {
    return (
      <div className="card-static bg-white p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="check" className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{t("successTitle")}</h3>
        <p className="text-muted mb-4">
          {t("successText")}
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          {t("successWhatsApp")}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-static bg-white p-6 md:p-8 space-y-5">
      {/* Honeypot: invisible to users, catches bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0 }}>
        <label htmlFor="contact-hp">Leave this empty</label>
        <input id="contact-hp" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <p className="text-sm text-muted">
        {t("formIntro")}
      </p>

      {/* Step indicator */}
      <div className="flex gap-2 mb-2">
        <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 1 ? "bg-accent" : "bg-gray-200"}`} />
        <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 2 ? "bg-accent" : "bg-gray-200"}`} />
      </div>

      {step === 1 && (
        <>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label" htmlFor="contact-name">{labelCn(t("name"), t("nameOptional"))}</label>
              <input id="contact-name" className="form-input" placeholder={t("namePlaceholder")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="form-label" htmlFor="contact-email">{t("email")} <span className="text-red-500">{t("emailRequired")}</span></label>
              <input id="contact-email" type="email" required className="form-input" placeholder={t("emailPlaceholder")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="form-label" htmlFor="contact-phone">{labelCn(t("phone"), t("phoneOptional"))}</label>
              <input id="contact-phone" type="tel" className="form-input" placeholder={t("phonePlaceholder")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label className="form-label" htmlFor="contact-company">{labelCn(t("company"), t("companyOptional"))}</label>
              <input id="contact-company" className="form-input" placeholder={t("companyPlaceholder")} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor="contact-message">{t("message")} <span className="text-red-500">{t("messageRequired")}</span></label>
            <textarea id="contact-message" required rows={3} className="form-input resize-y" placeholder={t("messagePlaceholder")} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>

          <button type="button" onClick={() => setStep(2)} disabled={!isValidStep1} className="btn-primary w-full justify-center text-base disabled:opacity-50">
            {t("nextStep") || "下一步 →"}
          </button>
        </>
      )}

      {step === 2 && (
        <>
          {/* Product & industry */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label" htmlFor="contact-productType">{labelCn(t("productType"), t("productTypeOptional"))}</label>
              <select id="contact-productType" className="form-input" value={form.productType} onChange={(e) => setForm({ ...form, productType: e.target.value })}>
                <option value="">{t("productTypePlaceholder")}</option>
                <option value="碳石墨密封环">{t("productSealRing")}</option>
                <option value="碳石墨轴套">{t("productBushing")}</option>
                <option value="碳石墨三瓣环">{t("productSplitRing")}</option>
                <option value="其他">{t("productOther")}</option>
              </select>
            </div>
            <div>
              <label className="form-label" htmlFor="contact-industry">{labelCn(t("industry"), t("industryOptional"))}</label>
              <select id="contact-industry" className="form-input" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })}>
                <option value="">{t("industryPlaceholder")}</option>
                <option value="泵行业">{t("industryPump")}</option>
                <option value="船舶">{t("industryMarine")}</option>
                <option value="化工">{t("industryChemical")}</option>
                <option value="电力">{t("industryPower")}</option>
                <option value="制药">{t("industryPharma")}</option>
                <option value="其他">{t("industryOther")}</option>
              </select>
            </div>
          </div>

          {/* Operating conditions */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-3">{t("conditions")} <span className="text-gray-400 font-normal">{t("conditionsOptional")}</span></h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="form-label" htmlFor="contact-temperature">{t("temperature")}</label>
                <input id="contact-temperature" className="form-input" placeholder={t("temperaturePlaceholder")} value={form.temperature} onChange={(e) => setForm({ ...form, temperature: e.target.value })} />
              </div>
              <div>
                <label className="form-label" htmlFor="contact-pressure">{t("pressure")}</label>
                <input id="contact-pressure" className="form-input" placeholder={t("pressurePlaceholder")} value={form.pressure} onChange={(e) => setForm({ ...form, pressure: e.target.value })} />
              </div>
              <div>
                <label className="form-label" htmlFor="contact-medium">{t("medium")}</label>
                <input id="contact-medium" className="form-input" placeholder={t("mediumPlaceholder")} value={form.medium} onChange={(e) => setForm({ ...form, medium: e.target.value })} />
              </div>
              <div>
                <label className="form-label" htmlFor="contact-speed">{t("speed")}</label>
                <input id="contact-speed" className="form-input" placeholder={t("speedPlaceholder")} value={form.speed} onChange={(e) => setForm({ ...form, speed: e.target.value })} />
              </div>
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor="contact-quantity">{labelCn(t("quantity"), t("quantityOptional"))}</label>
            <input id="contact-quantity" className="form-input" placeholder={t("quantityPlaceholder")} value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
          </div>

          {/* File upload */}
          <div>
            <label className="form-label" htmlFor="contact-file">{t("upload")} <span className="text-gray-400 font-normal">{t("uploadOptional")}</span></label>
            <div className="flex items-center gap-3">
              <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl text-sm text-muted hover:bg-gray-50 hover:border-primary/30 transition-colors">
                <Icon name="download" className="w-4 h-4" />
                {t("uploadButton")}
                <input id="contact-file" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.dwg,.dxf,.step,.stp,.igs,.stl" onChange={handleFileChange} className="hidden" />
              </label>
              {file && (
                <span className="text-sm text-muted flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-green-600" />
                  {file.name}
                  <button type="button" onClick={() => { setFile(null); setFileError("") }} className="text-red-500 hover:text-red-700 text-sm ml-1">
                    {t("uploadRemove")}
                  </button>
                </span>
              )}
            </div>
            {fileError && <p className="text-sm text-red-500 mt-1">{fileError}</p>}
          </div>

          {errorMsg && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl p-3">
              {errorMsg}
            </div>
          )}

          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1 justify-center text-base">
              ← {t("prevStep") || "上一步"}
            </button>
            <button type="submit" disabled={loading} className="btn-primary flex-[2] justify-center text-base disabled:opacity-50">
              {loading ? t("submitting") : t("submit")}
            </button>
          </div>
        </>
      )}

      <div className="text-center pt-2 border-t border-border">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
        >
          <Icon name="whatsapp" className="w-4 h-4" />
          {t("whatsappLink")}
        </a>
      </div>
    </form>
  )
}
