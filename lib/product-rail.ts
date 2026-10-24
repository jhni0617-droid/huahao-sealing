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
 */

export const productRailModels: string[] = [
  "/images/products/rail/rail-001.webp",
  "/images/products/rail/rail-002.webp",
  "/images/products/rail/rail-003.webp",
  "/images/products/rail/rail-004.webp",
  "/images/products/rail/rail-005.webp",
  "/images/products/rail/rail-006.webp",
  "/images/products/rail/rail-007.webp",
  "/images/products/rail/rail-008.webp",
  "/images/products/rail/rail-009.webp",
  "/images/products/rail/rail-010.webp",
  "/images/products/rail/rail-011.webp",
  "/images/products/rail/rail-012.webp",
  "/images/products/rail/rail-013.webp",
  "/images/products/rail/rail-014.webp",
  "/images/products/rail/rail-015.webp",
  "/images/products/rail/rail-016.webp",
  "/images/products/rail/rail-017.webp",
  "/images/products/rail/rail-018.webp",
  "/images/products/rail/rail-019.webp",
  "/images/products/rail/rail-020.webp",
  "/images/products/rail/rail-021.webp",
  "/images/products/rail/rail-022.webp",
  "/images/products/rail/rail-023.webp",
]

export const productRailGallery: string[] = [
  "/images/products/rail/rail-024.webp",
  "/images/products/rail/rail-026.webp",
  "/images/products/rail/rail-028.webp",
  "/images/products/rail/rail-030.webp",
  "/images/products/rail/rail-032.webp",
  "/images/products/rail/rail-034.webp",
  "/images/products/rail/rail-036.webp",
  "/images/products/rail/rail-038.webp",
  "/images/products/rail/rail-040.webp",
  "/images/products/rail/rail-042.webp",
  "/images/products/rail/rail-044.webp",
  "/images/products/rail/rail-046.webp",
  "/images/products/rail/rail-048.webp",
  "/images/products/rail/rail-050.webp",
  "/images/products/rail/rail-052.webp",
  "/images/products/rail/rail-054.webp",
  "/images/products/rail/rail-056.webp",
  "/images/products/rail/rail-058.webp",
  "/images/products/rail/rail-060.webp",
  "/images/products/rail/rail-062.webp",
  "/images/products/rail/rail-063.webp",
  "/images/products/rail/rail-065.webp",
  "/images/products/rail/rail-067.webp",
  "/images/products/rail/rail-069.webp",
  "/images/products/rail/rail-071.webp",
  "/images/products/rail/rail-073.webp",
  "/images/products/rail/rail-075.webp",
  "/images/products/rail/rail-077.webp",
  "/images/products/rail/rail-079.webp",
  "/images/products/rail/rail-081.webp",
  "/images/products/rail/rail-083.webp",
  "/images/products/rail/rail-085.webp",
  "/images/products/rail/rail-087.webp",
  "/images/products/rail/rail-089.webp",
  "/images/products/rail/rail-091.webp",
  "/images/products/rail/rail-093.webp",
  "/images/products/rail/rail-095.webp",
  "/images/products/rail/rail-097.webp",
  "/images/products/rail/rail-099.webp",
  "/images/products/rail/rail-101.webp",
]
