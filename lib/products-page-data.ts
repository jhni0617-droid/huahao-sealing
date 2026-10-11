/**
 * 产品列表页的服务端取数。
 *
 * 为什么要单独放这里：`app/[locale]/products/products-content.tsx` 是 "use client"，
 * 之前由它直接 import `lib/translations-products.ts`（7 种语言全量产品文案）+
 * `lib/products.ts` + `lib/products-en.ts`，等于把 7 种语言的数据一起打进客户端包。
 * 现在改由服务端按当前语言取好，作为 props 传下去，客户端不再 import 任何数据模块。
 *
 * 本文件只应被服务端组件引用，不要从 "use client" 文件里 import。
 */
import type { Product } from "@/lib/products"
import { getProductsByCategory } from "@/lib/products"
import { getEnProductsByCategory } from "@/lib/products-en"
import { productCategoryLandings } from "@/lib/product-category-data"
import { getLocalized, getLocalizedProductCategory } from "@/lib/locale-data"
import {
  productsByLocale,
  categoriesByLocale,
  getViProductsByCategory,
  getThProductsByCategory,
  getRuProductsByCategory,
  getJaProductsByCategory,
  getKoProductsByCategory,
} from "@/lib/translations-products"

export type ProductCategory = { slug: string; name: string }

/** 类别落地页链接：只带 href 与短名，避免把落地页全文塞进 RSC 载荷 */
export type CategoryGuideLink = { href: string; name: string }

/** 客户端搜索框需要的可匹配文本：服务端按当前语言拍平成一条小写字符串 */
export type ProductSearchRow = { slug: string; text: string }

export type ProductsPageData = {
  /** 当前语言 */
  locale: string
  /** 当前语言的分类列表 */
  categories: ProductCategory[]
  /** 当前语言的全部产品 */
  allProducts: Product[]
  /** 按分类 slug 预分组，避免客户端再遍历筛选 */
  productsByCategory: Record<string, Product[]>
  /** 分类筛选按钮下方的类别落地页入口 */
  categoryGuides: CategoryGuideLink[]
  /** 搜索关键词匹配表（仅 slug + 已拍平文本，不带 7 语种原文） */
  searchIndex: ProductSearchRow[]
}

/** 各语言的「按分类取产品」函数表 */
const getItemsMap: Record<string, (slug: string) => Product[]> = {
  zh: getProductsByCategory,
  en: getEnProductsByCategory,
  vi: getViProductsByCategory,
  th: getThProductsByCategory,
  ru: getRuProductsByCategory,
  ja: getJaProductsByCategory,
  ko: getKoProductsByCategory,
}

/**
 * 按语言取齐产品列表页需要的全部数据。
 * 只返回当前语言，不会把其它 6 种语言带进 RSC 载荷。
 */
export function getProductsPageData(locale: string): ProductsPageData {
  const getItems = getItemsMap[locale] ?? getItemsMap.en
  const categories = categoriesByLocale[locale] ?? categoriesByLocale.en
  const allProducts = productsByLocale[locale] ?? productsByLocale.en

  const productsByCategory: Record<string, Product[]> = {}
  for (const cat of categories) {
    productsByCategory[cat.slug] = getItems(cat.slug)
  }

  const categoryGuides = productCategoryLandings.map((c) => ({
    href: `/products/${c.slug}`,
    name: getLocalized(c.name, locale),
  }))

  // 与改造前的客户端筛选匹配字段保持一致：名称/型号/类别/短描/正文/规格/应用/特性/材料
  const searchIndex: ProductSearchRow[] = allProducts.map((p) => ({
    slug: p.slug,
    text: [
      p.name,
      p.model,
      getLocalizedProductCategory(p.category, locale),
      p.shortDesc,
      p.description,
      ...p.specs.flatMap((spec) => [spec.label, spec.value]),
      ...(p.applications || []),
      ...(p.features || []),
      ...(p.materials || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase(),
  }))

  return { locale, categories, allProducts, productsByCategory, categoryGuides, searchIndex }
}
