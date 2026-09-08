"use client"

import { useCallback, useRef, useState } from "react"
import { prepareImages, type PreparedImage } from "@/lib/client/compress-image"

export const dynamic = "force-dynamic"

type Quality = "low" | "medium" | "high"

interface GenResult {
  b64: string
  mime: string
  usage: {
    input_tokens: number
    input_tokens_details?: { image_tokens?: number; text_tokens?: number }
    output_tokens: number
  }
  costUsd: number
  elapsedMs: number
}

const QUALITY_OPTIONS: { value: Quality; label: string; price: string }[] = [
  { value: "low", label: "low（低，~$0.006/张@1K）", price: "最快最便宜" },
  { value: "medium", label: "medium（中，~$0.053/张@1K）", price: "推荐" },
  { value: "high", label: "high（高，~$0.211/张@1K）", price: "最慢最贵，可能 3-5 分钟" },
]

const SIZE_OPTIONS = ["auto", "1024x1024", "1536x1024", "1024x1536", "2048x1152", "2048x2048"]

const inputCls =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-900"
const labelCls = "mb-1.5 block text-sm font-medium text-gray-700"
const btnCls =
  "rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"

function formatBytes(n: number) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`
  return `${(n / 1024 / 1024).toFixed(2)} MB`
}

export default function ImageGenPage() {
  const [tab, setTab] = useState<"generate" | "edit">("generate")
  const [prompt, setPrompt] = useState("")
  const [quality, setQuality] = useState<Quality>("medium")
  const [size, setSize] = useState("auto")
  const [outputFormat, setOutputFormat] = useState<"png" | "jpeg">("png")
  const [files, setFiles] = useState<PreparedImage[]>([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState<GenResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const resetResult = useCallback(() => {
    setError("")
    setResult(null)
  }, [])

  const onPickFiles = useCallback(
    async (picked: FileList | null) => {
      resetResult()
      const list = Array.from(picked ?? []).slice(0, 16)
      if (list.length === 0) return
      setBusy(true)
      try {
        setFiles(await prepareImages(list))
      } finally {
        setBusy(false)
      }
    },
    [resetResult],
  )

  const submit = useCallback(async () => {
    resetResult()
    if (tab === "generate" && !prompt.trim()) {
      setError("请输入提示词")
      return
    }
    if (tab === "edit") {
      if (files.length === 0) {
        setError("请至少上传一张参考图")
        return
      }
      if (!prompt.trim()) {
        setError("请输入编辑指令")
        return
      }
    }

    setBusy(true)
    try {
      let response: Response
      if (tab === "generate") {
        response = await fetch("/api/admin/imagegen/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, quality, size, outputFormat }),
          signal: AbortSignal.timeout(360_000),
        })
      } else {
        const form = new FormData()
        form.set("prompt", prompt)
        form.set("quality", quality)
        form.set("size", size)
        for (const p of files) form.append("images", p.file, p.file.name)
        response = await fetch("/api/admin/imagegen/edit", {
          method: "POST",
          body: form,
          signal: AbortSignal.timeout(360_000),
        })
      }

      const body = await response.json()
      if (!response.ok) {
        throw new Error(body?.error || `请求失败（HTTP ${response.status}）`)
      }
      setResult(body.data)
    } catch (e: any) {
      setError(e?.name === "TimeoutError" ? "请求超时（360s）" : e?.message || "请求失败")
    } finally {
      setBusy(false)
    }
  }, [tab, prompt, quality, size, outputFormat, files, resetResult])

  const saveToLocal = useCallback(() => {
    if (!result) return
    const a = document.createElement("a")
    a.href = `data:${result.mime};base64,${result.b64}`
    const ext = result.mime.split("/")[1] || "png"
    a.download = `huahao-imagegen-${Date.now()}.${ext}`
    a.click()
  }, [result])

  const imageUrl = result ? `data:${result.mime};base64,${result.b64}` : ""

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-1 text-xl font-bold">AI 出图（gpt-image-2）</h1>
      <p className="mb-6 text-sm text-gray-500">
        同步接口，high 档可能 3-5 分钟，请勿关闭页面；结果只在本次响应中返回，超时/断连不补发。
      </p>

      {/* Tab 切换 */}
      <div className="mb-5 flex gap-2 border-b border-gray-200">
        {(
          [
            ["generate", "文生图"],
            ["edit", "图片编辑 / 融合"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setTab(key)
              resetResult()
            }}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
              tab === key ? "border-gray-900 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {/* 编辑模式：参考图上传 */}
        {tab === "edit" && (
          <div>
            <label className={labelCls}>
              参考图（最多 16 张，png/jpg/webp，{'>'}1.5MB 自动压缩，合计 ≤6MB）
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              multiple
              className="hidden"
              onChange={(e) => {
                void onPickFiles(e.target.files)
                e.target.value = ""
              }}
            />
            <button type="button" className={btnCls} onClick={() => fileInputRef.current?.click()} disabled={busy}>
              选择图片
            </button>
            {files.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                {files.map((p, i) => (
                  <li key={`${p.file.name}-${i}`} className="flex items-center gap-2">
                    <span className="text-gray-400">{i + 1}.</span>
                    <span className="truncate">{p.file.name}</span>
                    <span>
                      {formatBytes(p.originalSize)}
                      {p.compressed && ` → ${formatBytes(p.file.size)}（已压缩）`}
                      {p.fallback && "（压缩失败，使用原图）"}
                    </span>
                    <button
                      type="button"
                      className="ml-auto text-red-500 hover:text-red-700"
                      onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                    >
                      移除
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* 提示词 */}
        <div>
          <label className={labelCls}>{tab === "generate" ? "提示词" : "编辑 / 融合指令"}</label>
          <textarea
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value)
              resetResult()
            }}
            rows={5}
            className={inputCls}
            placeholder={
              tab === "generate"
                ? "例：工业风格首页设计图，黑白灰配色，唯一强调色 #E60012……"
                : "例：把图1的产品放进图2的车间场景，保持产品外观完全不变"
            }
          />
        </div>

        {/* 参数行 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <label className={labelCls}>质量（quality）</label>
            <select value={quality} onChange={(e) => setQuality(e.target.value as Quality)} className={inputCls}>
              {QUALITY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>尺寸</label>
            <select value={size} onChange={(e) => setSize(e.target.value)} className={inputCls}>
              {SIZE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          {tab === "generate" && (
            <div>
              <label className={labelCls}>输出格式</label>
              <select
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value as "png" | "jpeg")}
                className={inputCls}
              >
                <option value="png">png</option>
                <option value="jpeg">jpeg</option>
              </select>
            </div>
          )}
        </div>

        <button type="button" className={`${btnCls} w-full`} onClick={submit} disabled={busy}>
          {busy ? "生成中……（high 档最长等 6 分钟，勿关闭页面）" : tab === "generate" ? "生成图片" : "开始编辑"}
        </button>

        {error && <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

        {/* 结果 */}
        {result && (
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="生成结果" className="mx-auto max-h-[560px] w-auto max-w-full rounded" />
            <div className="mt-3 text-xs text-gray-500">
              耗时 {(result.elapsedMs / 1000).toFixed(1)}s ｜ tokens：输入 {result.usage.input_tokens}（文本{" "}
              {result.usage.input_tokens_details?.text_tokens ?? 0} / 图片{" "}
              {result.usage.input_tokens_details?.image_tokens ?? 0}）、输出 {result.usage.output_tokens} ｜
              预估花费 <span className="font-semibold text-gray-900">${result.costUsd.toFixed(4)}</span>
            </div>
            <button type="button" className={`${btnCls} mt-3`} onClick={saveToLocal}>
              保存到本地
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
