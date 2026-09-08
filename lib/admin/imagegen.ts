/**
 * gpt-image-2（apiyi 渠道）服务端调用助手。
 *
 * 注意（来自 https://docs.apiyi.com/api-capabilities/gpt-image-2/）：
 * - 同步接口，无任务 ID，客户端断连结果丢失但仍计费 → 超时必须放宽到 360s
 * - 不要传 response_format / input_fidelity，传了直接 400
 * - quality 必传固定档位（low/medium/high），不要用 auto（费用耗时漂移）
 * - 返回 b64_json 是纯 base64，无 data: 前缀
 */

export const IMAGEGEN_BASE_URL = "https://api.apiyi.com/v1"
export const IMAGEGEN_MODEL = "gpt-image-2"
export const IMAGEGEN_TIMEOUT_MS = 360_000

export type ImageGenQuality = "low" | "medium" | "high"

export interface ImageGenUsage {
  input_tokens: number
  input_tokens_details?: { image_tokens?: number; text_tokens?: number }
  output_tokens: number
  total_tokens?: number
}

export interface ImageGenResult {
  b64: string
  mime: string
  usage: ImageGenUsage
  /** 按 apiyi 公布单价估算：文本输入 $5/M、图片输入 $8/M、图片输出 $30/M */
  costUsd: number
  elapsedMs: number
}

export function getImageGenApiKey(): string {
  const key = process.env.APIYI_API_KEY
  if (!key) {
    throw new Error("缺少环境变量 APIYI_API_KEY")
  }
  return key
}

export function estimateCost(usage: ImageGenUsage): number {
  const textIn = usage.input_tokens_details?.text_tokens ?? 0
  const imageIn = usage.input_tokens_details?.image_tokens ?? 0
  const textInCost = (textIn * 5) / 1_000_000
  const imageInCost = (imageIn * 8) / 1_000_000
  const outCost = (usage.output_tokens * 30) / 1_000_000
  return textInCost + imageInCost + outCost
}

async function parseApiError(response: Response): Promise<string> {
  const raw = await response.text().catch(() => "")
  try {
    const body = JSON.parse(raw)
    return body?.error?.message || body?.message || raw.slice(0, 500) || `HTTP ${response.status}`
  } catch {
    return raw.slice(0, 500) || `HTTP ${response.status}`
  }
}

/** 文生图：POST /v1/images/generations */
export async function generateImage(params: {
  prompt: string
  quality: ImageGenQuality
  size?: string
  outputFormat?: "png" | "jpeg" | "webp"
}): Promise<ImageGenResult> {
  const startedAt = Date.now()
  const response = await fetch(`${IMAGEGEN_BASE_URL}/images/generations`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getImageGenApiKey()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: IMAGEGEN_MODEL,
      prompt: params.prompt,
      quality: params.quality,
      ...(params.size && params.size !== "auto" ? { size: params.size } : {}),
      ...(params.outputFormat ? { output_format: params.outputFormat } : {}),
    }),
    signal: AbortSignal.timeout(IMAGEGEN_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(`文生图失败（HTTP ${response.status}）：${await parseApiError(response)}`)
  }

  const body = await response.json()
  const b64 = body?.data?.[0]?.b64_json
  if (!b64) throw new Error("接口返回中缺少 b64_json")

  const usage: ImageGenUsage = body.usage
  return {
    b64,
    mime: `image/${params.outputFormat || "png"}`,
    usage,
    costUsd: estimateCost(usage),
    elapsedMs: Date.now() - startedAt,
  }
}

/** 图片编辑：POST /v1/images/edits，images 由调用方已按规范压缩 */
export async function editImage(params: {
  prompt: string
  images: File[]
  quality: ImageGenQuality
  size?: string
  mask?: File | null
}): Promise<ImageGenResult> {
  if (params.images.length === 0) throw new Error("至少需要一张参考图")
  if (params.images.length > 16) throw new Error("参考图最多 16 张")

  const startedAt = Date.now()
  const form = new FormData()
  form.set("model", IMAGEGEN_MODEL)
  form.set("prompt", params.prompt)
  form.set("quality", params.quality)
  if (params.size && params.size !== "auto") form.set("size", params.size)
  for (const image of params.images) {
    form.append("image[]", image, image.name)
  }
  if (params.mask) form.set("mask", params.mask, params.mask.name)

  const response = await fetch(`${IMAGEGEN_BASE_URL}/images/edits`, {
    method: "POST",
    headers: { Authorization: `Bearer ${getImageGenApiKey()}` },
    body: form,
    signal: AbortSignal.timeout(IMAGEGEN_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(`图片编辑失败（HTTP ${response.status}）：${await parseApiError(response)}`)
  }

  const body = await response.json()
  const b64 = body?.data?.[0]?.b64_json
  if (!b64) throw new Error("接口返回中缺少 b64_json")

  const usage: ImageGenUsage = body.usage
  return {
    b64,
    mime: "image/png",
    usage,
    costUsd: estimateCost(usage),
    elapsedMs: Date.now() - startedAt,
  }
}
