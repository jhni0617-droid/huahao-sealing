"use client"

import { useState } from "react"
import { siteConfig } from "@/lib/constants"

interface Props {
  defaultProduct?: string
}

export default function ContactForm({ defaultProduct }: Props) {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    setFileError("")
    if (!selected) {
      setFile(null)
      return
    }
    if (selected.size > 5 * 1024 * 1024) {
      setFileError("文件大小不能超过 5MB")
      setFile(null)
      return
    }
    setFile(selected)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg("")
    try {
      const body: Record<string, any> = { ...form }
      if (defaultProduct) body.product = defaultProduct

      if (file) {
        const base64 = await new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onload = () => {
            const result = reader.result as string
            resolve(result.split(",")[1]) // strip data URL prefix
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
      if (res.ok) setSubmitted(true)
      else {
        const data = await res.json()
        setErrorMsg(data?.error || "发送失败，请直接发邮件联系我们。")
      }
    } catch {
      setErrorMsg("网络错误，请重试。")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="card p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">感谢您的咨询！</h3>
        <p className="text-muted mb-4">
          您的询价已提交成功，我们将在24小时内与您联系。
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          通过WhatsApp更快获取回复
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
      <p className="text-sm text-muted">
        填写基本信息与工况参数，我们将在24小时内与您联系。
      </p>

      {/* Basic info */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">姓名 <span className="text-gray-400 font-normal">(可不填)</span></label>
          <input className="form-input" placeholder="您的姓名" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className="form-label">邮箱 <span className="text-red-500">*必填</span></label>
          <input type="email" required className="form-input" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="form-label">电话 <span className="text-gray-400 font-normal">(可不填)</span></label>
          <input type="tel" className="form-input" placeholder="+86-xxx-xxxx" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <label className="form-label">公司名称 <span className="text-gray-400 font-normal">(可不填)</span></label>
          <input className="form-input" placeholder="公司/单位名称" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        </div>
      </div>

      {/* Product & industry */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">产品类型 <span className="text-gray-400 font-normal">(可不填)</span></label>
          <select className="form-input" value={form.productType} onChange={(e) => setForm({ ...form, productType: e.target.value })}>
            <option value="">请选择产品类型</option>
            <option value="碳石墨密封环">碳石墨密封环</option>
            <option value="碳石墨轴套">碳石墨轴套</option>
            <option value="碳石墨三瓣环">碳石墨三瓣环</option>
            <option value="其他">其他 / 非标定制</option>
          </select>
        </div>
        <div>
          <label className="form-label">应用行业 <span className="text-gray-400 font-normal">(可不填)</span></label>
          <select className="form-input" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })}>
            <option value="">请选择行业</option>
            <option value="泵行业">泵行业</option>
            <option value="船舶">船舶行业</option>
            <option value="化工">化工处理</option>
            <option value="电力">电力能源</option>
            <option value="制药">制药食品</option>
            <option value="其他">其他</option>
          </select>
        </div>
      </div>

      {/* Operating conditions */}
      <div>
        <h3 className="text-sm font-semibold text-primary mb-3">工况参数 <span className="text-gray-400 font-normal">(可不填)</span></h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="form-label">工作温度</label>
            <input className="form-input" placeholder="如: 150°C" value={form.temperature} onChange={(e) => setForm({ ...form, temperature: e.target.value })} />
          </div>
          <div>
            <label className="form-label">工作压力</label>
            <input className="form-input" placeholder="如: 0.8 MPa" value={form.pressure} onChange={(e) => setForm({ ...form, pressure: e.target.value })} />
          </div>
          <div>
            <label className="form-label">介质类型</label>
            <input className="form-input" placeholder="如: 清水/油/酸" value={form.medium} onChange={(e) => setForm({ ...form, medium: e.target.value })} />
          </div>
          <div>
            <label className="form-label">转速</label>
            <input className="form-input" placeholder="如: 3000 rpm" value={form.speed} onChange={(e) => setForm({ ...form, speed: e.target.value })} />
          </div>
        </div>
      </div>

      {/* Quantity & message */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">预估数量 <span className="text-gray-400 font-normal">(可不填)</span></label>
          <input className="form-input" placeholder="如: 100件/年" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="form-label">留言 <span className="text-red-500">*必填</span></label>
        <textarea required rows={3} className="form-input resize-y" placeholder="请描述您的具体需求、安装尺寸或技术参数..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>

      {/* File upload */}
      <div>
        <label className="form-label">上传图纸 <span className="text-gray-400 font-normal">(可不填，支持 PDF/Word/Excel/图片/CAD，最大 5MB)</span></label>
        <div className="flex items-center gap-3">
          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm text-muted hover:bg-gray-50 hover:border-primary/30 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            选择文件
            <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.dwg,.dxf,.step,.stp,.igs,.stl" onChange={handleFileChange} className="hidden" />
          </label>
          {file && (
            <span className="text-sm text-muted flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {file.name}
              <button type="button" onClick={() => { setFile(null); setFileError("") }} className="text-red-500 hover:text-red-700 text-sm ml-1">
                移除
              </button>
            </span>
          )}
        </div>
        {fileError && <p className="text-sm text-red-500 mt-1">{fileError}</p>}
      </div>

      {errorMsg && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
          {errorMsg}
        </div>
      )}
      <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base disabled:opacity-50">
        {loading ? "发送中..." : "提交咨询"}
      </button>
      <div className="text-center">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          或通过WhatsApp与我们联系
        </a>
      </div>
    </form>
  )
}
