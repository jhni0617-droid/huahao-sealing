import { NextRequest, NextResponse } from "next/server"
import { generateImage, type ImageGenQuality } from "@/lib/admin/imagegen"

export const maxDuration = 360

const QUALITIES: ImageGenQuality[] = ["low", "medium", "high"]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const prompt = typeof body.prompt === "string" ? body.prompt.trim() : ""
    if (!prompt) {
      return NextResponse.json({ error: "请输入提示词" }, { status: 400 })
    }

    const quality: ImageGenQuality = QUALITIES.includes(body.quality) ? body.quality : "medium"
    const size = typeof body.size === "string" ? body.size : undefined
    const outputFormat = body.outputFormat === "jpeg" || body.outputFormat === "webp" ? body.outputFormat : undefined

    const result = await generateImage({ prompt, quality, size, outputFormat })
    return NextResponse.json({ data: result })
  } catch (error: any) {
    const aborted = error?.name === "TimeoutError" || error?.name === "AbortError"
    console.error("Image generation error:", error)
    return NextResponse.json(
      { error: aborted ? "请求超时（360s），结果丢失但可能已计费，建议降低质量或分辨率重试" : error.message || "生成失败" },
      { status: aborted ? 504 : 500 },
    )
  }
}
