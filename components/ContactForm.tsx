"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/lib/constants"
import { getMetaBrowserCookies, trackPixelEvent } from "@/lib/meta/client"
import { trackEvent } from "@/lib/track"
import Icon from "@/components/ui/Icon"

interface Props {
  defaultProduct?: string
}

// 邮箱正则：本地部分(字母数字._%+-) @ 域名(字母数字.-) . TLD(≥2字母)
// 与 app/api/contact/route.ts 保持一致，前后端共用同一规格
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// 需求描述上限：设计稿为 500 字，够写完整工况（介质/温度/压力/转速/尺寸）
const MAX_MESSAGE = 500

export default function ContactForm({ defaultProduct: defaultProductProp }: Props) {
  // ?product= 只在提交时用来给询盘打标签，不参与渲染，所以从 window.location 读。
  // 不用 useSearchParams()：它会让整棵表单子树退出 SSR，联系页的 HTML 里就没有
  // 任何 input，Google 和 AI 抓取器看不到表单（同「列表内链必须 SSR」那条规矩）。
  const productRef = useRef<string | undefined>(defaultProductProp)
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("product")
    if (fromUrl) productRef.current = fromUrl
  }, [])
  const defaultProduct = productRef.current

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
  const [dragging, setDragging] = useState(false)
  const t = useTranslations("contact.form")

  // Honeypot 反机器人：3 个隐藏字段 + 1 个提交时间戳
  // 字段名故意取诱饵名字（website/url/phone_alt），机器人识别为常见字段会自动填，人类看不到
  const [honeypot, setHoneypot] = useState("") // _hp：通用字段
  const [honeypotWebsite, setHoneypotWebsite] = useState("") // _hp2：website 诱饵
  const [honeypotUrl, setHoneypotUrl] = useState("") // _hp3：url 诱饵
  // 表单挂载时间戳：用于后端检测秒填机器人（< 1.5s 判定为机器人）
  const [formMountedAt] = useState(() => Date.now())

  // 文件选择与拖拽共用同一套校验（大小上限 5MB，与后端 /api/contact 及文案一致）
  const pickFile = (selected: File | null | undefined) => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    pickFile(e.target.files?.[0])
    // 清空 value，否则同一个文件移除后再选不会触发 change
    e.target.value = ""
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
      const body: Record<string, string> = {
        ...form,
        _hp: honeypot,
        _hp2: honeypotWebsite,
        _hp3: honeypotUrl,
        _t0: String(formMountedAt),
      }
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
        // 自建统计：询盘提交转化事件（与 Pixel 独立，供后台漏斗分析）
        trackEvent("inquiry_submit", defaultProduct)
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

  // 邮箱必填且必须符合规格；留言必填。电话号码可选（input 无 required）
  const emailValid = EMAIL_RE.test(form.email.trim())
  const isValidStep1 = form.email.trim() && emailValid && form.message.trim()

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
          onClick={() => trackEvent("whatsapp_click", "form_success")}
          className="btn-secondary"
        >
          {t("successWhatsApp")}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-static bg-white p-6 md:p-8 space-y-5">
      {/* Honeypot 反机器人：3 个隐藏诱饵字段，机器人会自动填，人类看不到 */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: 0, opacity: 0, pointerEvents: "none", height: 0, width: 0, overflow: "hidden" }}>
        <label htmlFor="contact-hp">Leave this empty</label>
        <input id="contact-hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        <label htmlFor="contact-hp2">Website URL</label>
        <input id="contact-hp2" name="url" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypotWebsite} onChange={(e) => setHoneypotWebsite(e.target.value)} />
        <label htmlFor="contact-hp3">Alternate phone</label>
        <input id="contact-hp3" name="phone_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypotUrl} onChange={(e) => setHoneypotUrl(e.target.value)} />
      </div>

      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <p className="min-w-0 flex-1 basis-[min(100%,14rem)] text-sm text-muted">
          {t("formIntro")}
        </p>
        <span className="shrink-0 whitespace-nowrap pt-0.5 text-xs text-muted-light">{t("requiredHint")}</span>
      </div>

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
              {form.email && !emailValid && (
                <p className="text-sm text-red-500 mt-1">{t("emailInvalid")}</p>
              )}
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
            <div className="relative">
              <textarea
                id="contact-message"
                required
                rows={5}
                maxLength={MAX_MESSAGE}
                className="form-input resize-y pb-7"
                placeholder={t("messagePlaceholder")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {/* 字数计数：提示「该写多细」，同时防止超长被截断 */}
              <span
                aria-hidden
                className={`pointer-events-none absolute bottom-2.5 right-3 text-xs tabular-nums ${
                  form.message.length > MAX_MESSAGE * 0.9 ? "text-accent" : "text-muted-light"
                }`}
              >
                {form.message.length}/{MAX_MESSAGE}
              </span>
            </div>
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

          {/* File upload：整块虚线区，支持点击与拖拽（B2B 询盘的核心动作就是传图） */}
          <div>
            <label className="form-label" htmlFor="contact-file">{t("upload")}</label>
            <div
              onDragOver={(e) => {
                e.preventDefault()
                setDragging(true)
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault()
                setDragging(false)
                pickFile(e.dataTransfer.files?.[0])
              }}
              className={`border border-dashed transition-colors duration-200 ${
                dragging ? "border-accent bg-accent-subtle" : "border-border bg-[#fafbfc] hover:border-muted-light"
              } ${file ? "px-4 py-3" : "px-5 py-6"}`}
            >
              {file ? (
                <div className="flex items-center justify-between gap-3">
                  <span className="flex min-w-0 items-center gap-2 text-sm text-primary">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-success" />
                    <span className="truncate">{file.name}</span>
                    <span className="shrink-0 text-xs text-muted-light">{(file.size / 1024 / 1024).toFixed(1)} MB</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setFile(null)
                      setFileError("")
                    }}
                    className="shrink-0 text-sm text-muted transition-colors hover:text-accent"
                  >
                    {t("uploadRemove")}
                  </button>
                </div>
              ) : (
                <label htmlFor="contact-file" className="flex cursor-pointer flex-col items-center gap-1.5 text-center">
                  <Icon name="download" className="h-5 w-5 text-muted" />
                  <span className="text-sm font-medium text-primary">{t("uploadDrop")}</span>
                  <span className="text-xs leading-relaxed text-muted-light">{t("uploadOptional")}</span>
                </label>
              )}
              <input
                id="contact-file"
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.dwg,.dxf,.step,.stp,.igs,.stl"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            {fileError && <p className="mt-1 text-sm text-red-500">{fileError}</p>}
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
          onClick={() => trackEvent("whatsapp_click", "form_bottom")}
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
        >
          <Icon name="whatsapp" className="w-4 h-4" />
          {t("whatsappLink")}
        </a>
      </div>
    </form>
  )
}
