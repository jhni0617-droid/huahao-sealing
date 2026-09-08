import { NextRequest, NextResponse } from "next/server"
import { editImage, type ImageGenQuality } from "@/lib/admin/imagegen"

export const maxDuration = 360

const QUALITIES: ImageGenQuality[] = ["low", "medium", "high"]
const ALLOWED_MIME = new Set(["image/png", "image/jpeg", "image/webp"])

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData()
    const prompt = String(form.get("prompt") || "").trim()
    if (!prompt) {
      return NextResponse.json({ error: "请输入编辑指令" }, { status: 400 })
    }

    const files = form.getAll("images").filter((f): f is File => f instanceof File && f.size > 0)
    if (files.length === 0) {
      return NextResponse.json({ error: "请至少上传一张参考图" }, { status: 400 })
    }
    if (files.length > 16) {
      return NextResponse.json({ error: "参考图最多 16 张" }, { status: 400 })
    }
    for (const file of files) {
      if (!ALLOWED_MIME.has(file.type)) {
        return NextResponse.json({ error: `不支持的图片格式：${file.name}（仅 png/jpg/webp）` }, { status: 400 })
      }
    }

    const quality: ImageGenQuality = QUALITIES.includes(form.get("quality") as ImageGenQuality)
      ? (form.get("quality") as ImageGenQuality)
      : "medium"
    const sizeRaw = form.get("size")
    const size = typeof sizeRaw === "string" && sizeRaw ? sizeRaw : undefined
    const mask = form.get("mask")
    const maskFile = mask instanceof File && mask.size > 0 ? mask : null

    const result = await editImage({ prompt, images: files, quality, size, mask: maskFile })
    return NextResponse.json({ data: result })
  } catch (error: any) {
    const aborted = error?.name === "TimeoutError" || error?.name === "AbortError"
    console.error("Image edit error:", error)
    return NextResponse.json(
      { error: aborted ? "请求超时（360s），结果丢失但可能已计费，建议降低质量或分辨率重试" : error.message || "编辑失败" },
      { status: aborted ? 504 : 500 },
    )
  }
}
