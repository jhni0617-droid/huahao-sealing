/**
 * 浏览器端参考图压缩（gpt-image-2 /images/edits 前置处理）。
 * 规则：超过 1.5MB 才处理；长边等比缩到 2048px 以内（不放大小图）；
 * 质量 0.9 重编码、保持原格式；多图合计控制在 6MB 以内；
 * 单张压缩失败回退原图，不中断整个请求。
 */
export interface PreparedImage {
  file: File
  originalSize: number
  compressed: boolean
  /** 压缩失败回退原图时为 true */
  fallback: boolean
}

const SIZE_THRESHOLD = 1.5 * 1024 * 1024
const MAX_EDGE = 2048
const TOTAL_LIMIT = 6 * 1024 * 1024
const QUALITY = 0.9

async function loadImage(file: File): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(file)
  try {
    const img = new Image()
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = () => reject(new Error(`无法解码：${file.name}`))
      img.src = url
    })
    return img
  } finally {
    URL.revokeObjectURL(url)
  }
}

async function reencode(img: HTMLImageElement, mime: string, maxEdge: number, quality: number): Promise<Blob> {
  const scale = Math.min(1, maxEdge / Math.max(img.naturalWidth, img.naturalHeight))
  const canvas = document.createElement("canvas")
  canvas.width = Math.round(img.naturalWidth * scale)
  canvas.height = Math.round(img.naturalHeight * scale)
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("canvas 2d 上下文不可用")
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, mime, quality))
  if (!blob) throw new Error("toBlob 失败")
  return blob
}

/** 单张：>1.5MB 才压缩；压缩失败返回原图（fallback=true） */
async function prepareOne(file: File): Promise<PreparedImage> {
  if (file.size <= SIZE_THRESHOLD) {
    return { file, originalSize: file.size, compressed: false, fallback: false }
  }
  try {
    const img = await loadImage(file)
    const blob = await reencode(img, file.type, MAX_EDGE, QUALITY)
    if (blob.size < file.size) {
      const compressed = new File([blob], file.name, { type: file.type })
      return { file: compressed, originalSize: file.size, compressed: true, fallback: false }
    }
    return { file, originalSize: file.size, compressed: false, fallback: false }
  } catch {
    return { file, originalSize: file.size, compressed: false, fallback: true }
  }
}

/** 多图合计超 6MB 时，对最大的一张逐轮降分辨率+降质量，直到达标 */
export async function prepareImages(files: File[]): Promise<PreparedImage[]> {
  const prepared = await Promise.all(files.map(prepareOne))

  const totalSize = () => prepared.reduce((sum, p) => sum + p.file.size, 0)
  let guard = 0
  while (totalSize() > TOTAL_LIMIT && guard < 8) {
    guard += 1
    const largest = prepared.reduce((a, b) => (a.file.size >= b.file.size ? a : b))
    try {
      const img = await loadImage(largest.file)
      const currentEdge = Math.max(img.naturalWidth, img.naturalHeight)
      const nextEdge = Math.max(512, Math.round(currentEdge * 0.75))
      const quality = largest.file.type === "image/png" ? undefined : 0.75
      const blob = await reencode(img, largest.file.type, nextEdge, quality ?? 1)
      if (blob.size < largest.file.size) {
        largest.file = new File([blob], largest.file.name, { type: largest.file.type })
        largest.compressed = true
        continue
      }
    } catch {
      // 保底：直接跳过该张的进一步压缩，避免死循环
    }
    // 无法再缩（比如 PNG toBlob 不接受 quality 且已到底），直接跳出防止死循环
    break
  }

  return prepared
}
