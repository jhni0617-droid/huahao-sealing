/**
 * 产品实拍图集（无名称、无参数，仅图片）。
 *
 * 来源：产品目录 PPT（第 9–22 页）车间实拍，原始文件 84 张，
 * 剔除 6 张严重虚焦或主体不是产品的，保留 78 张。
 * 转换：1200px 以内原宽、webp q80，合计约 2.4MB，页面用 lazy 加载。
 * 新增图片直接往后追加即可，顺序即展示顺序。
 *
 * kind = 图片主体内容分类，用于生成多语言 alt（2026-10-24 加）。
 * 此前 78 张全是空 alt，Google 图片搜索与 AI 爬虫完全读不到语义。
 * 抽样目视核对 24 张：7 张轴承/轴套、17 张密封环；
 * 其余 54 张未逐张核对，统一标 mixed —— alt 文案同时涵盖密封环与轴承，
 * 保证不出错（精确到单张需再核 54 张图，投入产出不划算）。
 */

export type GalleryImageKind = "seal-ring" | "bearing" | "mixed"

export interface GalleryImage {
  src: string
  kind: GalleryImageKind
}

export const productGallery: GalleryImage[] = [
  { src: "/images/products/gallery/gallery-01.webp", kind: "bearing" },
  { src: "/images/products/gallery/gallery-02.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-03.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-04.webp", kind: "bearing" },
  { src: "/images/products/gallery/gallery-05.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-06.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-07.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-08.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-09.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-10.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-11.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-12.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-13.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-14.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-15.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-16.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-17.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-18.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-19.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-20.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-21.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-22.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-23.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-24.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-25.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-26.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-27.webp", kind: "bearing" },
  { src: "/images/products/gallery/gallery-28.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-29.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-30.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-31.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-32.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-33.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-34.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-35.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-36.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-37.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-38.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-39.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-40.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-41.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-42.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-43.webp", kind: "bearing" },
  { src: "/images/products/gallery/gallery-44.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-45.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-46.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-47.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-48.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-49.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-50.webp", kind: "bearing" },
  { src: "/images/products/gallery/gallery-51.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-52.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-53.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-54.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-55.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-56.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-57.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-58.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-59.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-60.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-61.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-62.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-63.webp", kind: "bearing" },
  { src: "/images/products/gallery/gallery-64.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-65.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-66.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-67.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-68.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-69.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-70.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-71.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-72.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-73.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-74.webp", kind: "seal-ring" },
  { src: "/images/products/gallery/gallery-75.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-76.webp", kind: "mixed" },
  { src: "/images/products/gallery/gallery-77.webp", kind: "bearing" },
  { src: "/images/products/gallery/gallery-78.webp", kind: "seal-ring" },
]
