/**
 * 首页「产品图片轮播」的两组图片序列（两行各用一组，内容不重叠）。
 *
 * - productRailModels：23 张型号/品类产品图，第一行使用
 * - productRailGallery：40 张车间实拍，第二行使用（倒序播放）
 *
 * 全部压到 360px 宽 webp，原始文件与顺序见 scripts/ppt-rail-manifest.json，
 * 生成脚本 scripts/build-product-rail.mjs。
 *
 * 实拍组原为全部 78 张，2026-10-24 做性能优化时等距抽稀到 40 张
 * （保留首尾两张，抽稀后末张仍是 rail-101，「从最后一张开始」的语义不变）。
 * 原因：第二行原轨道宽 34,632px，超过 GPU 16,384px 的常见纹理上限被切片；
 * 抽稀后轨道 15,360px，压进上限内，DOM 图片节点从 202 降到 126。
 *
 * kind = 图片主体内容的分类，用于生成多语言 alt（2026-10-24 逐张目视核对）：
 *   seal-ring      碳石墨机械密封环（静环，方/L/楔形截面，带止动槽或油孔）
 *   bearing        碳石墨轴承 / 轴套（带油槽或分瓣）
 *   thrust-bearing 碳石墨止推轴承（端面螺旋槽）
 *   split-ring     碳石墨三瓣环（三个弧段拼合）
 *   parts          碳石墨小规格配件（桌面摊拍场景）
 * 纯装饰性轮播也要写 alt：空 alt 会让 Google 图片搜索与 AI 爬虫完全读不到语义，
 * 204 张图等于白加载。aria-hidden 只盖第二份副本，第一份的 alt 会被收录。
 */

export type RailImageKind =
  | "seal-ring"
  | "bearing"
  | "thrust-bearing"
  | "split-ring"
  | "parts"

export interface RailImage {
  src: string
  kind: RailImageKind
}

export const productRailModels: RailImage[] = [
  { src: "/images/products/rail/rail-001.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-002.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-003.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-004.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-005.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-006.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-007.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-008.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-009.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-010.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-011.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-012.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-013.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-014.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-015.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-016.webp", kind: "bearing" },
  { src: "/images/products/rail/rail-017.webp", kind: "thrust-bearing" },
  { src: "/images/products/rail/rail-018.webp", kind: "parts" },
  { src: "/images/products/rail/rail-019.webp", kind: "split-ring" },
  { src: "/images/products/rail/rail-020.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-021.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-022.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-023.webp", kind: "seal-ring" },
]

export const productRailGallery: RailImage[] = [
  { src: "/images/products/rail/rail-024.webp", kind: "bearing" },
  { src: "/images/products/rail/rail-026.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-028.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-030.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-032.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-034.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-036.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-038.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-040.webp", kind: "bearing" },
  { src: "/images/products/rail/rail-042.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-044.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-046.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-048.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-050.webp", kind: "bearing" },
  { src: "/images/products/rail/rail-052.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-054.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-056.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-058.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-060.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-062.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-063.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-065.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-067.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-069.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-071.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-073.webp", kind: "bearing" },
  { src: "/images/products/rail/rail-075.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-077.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-079.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-081.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-083.webp", kind: "bearing" },
  { src: "/images/products/rail/rail-085.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-087.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-089.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-091.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-093.webp", kind: "bearing" },
  { src: "/images/products/rail/rail-095.webp", kind: "bearing" },
  { src: "/images/products/rail/rail-097.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-099.webp", kind: "seal-ring" },
  { src: "/images/products/rail/rail-101.webp", kind: "seal-ring" },
]
