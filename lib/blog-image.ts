import type { BlogPost } from "./blog-data"

/**
 * 博客配图池。
 *
 * 全部复用站内已有素材（技术剖视图 / 工厂实拍 / 产品实拍 / 行业应用图），
 * 三个理由：无版权风险、真实工厂照对 B2B 可信度高于图库素材、已做 webp 优化。
 *
 * 图注（caption）必须如实描述图片内容 —— 这些都是真实照片/自绘示意图，
 * 不允许为了贴合文章而编造画面里没有的东西。
 */
export interface BlogImageAsset {
  src: string
  /** 中文图注 */
  zh: string
  /** 英文图注 */
  en: string
}

const T = (name: string): string => `/images/technical/${name}`
const F = (name: string): string => `/images/factory/${name}`
const P = (name: string): string => `/images/products/${name}`
const S = (name: string): string => `/images/stock/${name}`
const A = (name: string): string => `/images/applications/${name}`

/** 技术剖视图：示意机械密封/泵阀内部的碳石墨件位置 */
const TECHNICAL: BlogImageAsset[] = [
  {
    src: T("mechanical-seal-exploded.webp"),
    zh: "机械密封爆炸图：旋转环与静止座均为碳石墨，中间为 O 圈、弹簧与传动座",
    en: "Mechanical seal exploded view — both the rotary ring and stationary seat are carbon graphite, with O-rings, springs and drive collar in between",
  },
  {
    src: T("graphite-seal-ring-application.webp"),
    zh: "机械密封总成剖面：碳石墨静止环（带台阶与倒角）的安装位置与密封面",
    en: "Mechanical seal assembly section — the carbon graphite stationary ring (with steps and chamfers) and its sealing face",
  },
  {
    src: T("centrifugal-pump-exploded.webp"),
    zh: "离心泵主要部件分解示意",
    en: "Centrifugal pump exploded view",
  },
  {
    src: T("gate-valve-exploded.webp"),
    zh: "闸阀主要部件分解示意",
    en: "Gate valve exploded view",
  },
]

/** 工厂实拍：霍邱厂区的加工、浸渍、检验、包装 */
const FACTORY_PROCESS: BlogImageAsset[] = [
  {
    src: F("cnc-turning-graphite.webp"),
    zh: "数控车床加工碳石墨密封环，工作台上为待加工与已加工的环件",
    en: "CNC turning of carbon graphite seal rings — raw and finished rings on the bench",
  },
  {
    src: F("cnc-turning.webp"),
    zh: "石墨件数控车削工序",
    en: "CNC turning operation on graphite parts",
  },
  {
    src: F("graphite-impregnation.webp"),
    zh: "树脂浸渍罐：石墨环浸入树脂，后方货架为浸渍后晾干区",
    en: "Resin impregnation tank — rings immersed in resin, with the post-impregnation drying rack behind",
  },
]

/** 工厂实拍：检验与成品 */
const FACTORY_QC: BlogImageAsset[] = [
  {
    src: F("qc-inspection-caliper.webp"),
    zh: "卡尺检验石墨环内径，桌面为《石墨密封件检验记录》与千分尺",
    en: "Caliper check on a graphite ring bore, with the inspection record sheet and micrometer on the bench",
  },
  {
    src: F("qc-inspection.webp"),
    zh: "石墨密封件成品尺寸检验",
    en: "Dimensional inspection of finished graphite seal rings",
  },
  {
    src: F("finished-rings-stack.webp"),
    zh: "浸渍碳石墨密封环成品堆叠待包装",
    en: "Finished impregnated carbon graphite seal rings stacked for packing",
  },
]

/** 工厂实拍：厂区与团队（用于行业动态类） */
const FACTORY_SITE: BlogImageAsset[] = [
  {
    src: F("factory-aerial-2021.webp"),
    zh: "华豪密封霍邱厂区航拍",
    en: "Aerial view of the Huahao Sealing plant in Huoqiu, Anhui",
  },
  {
    src: F("workshop-overview.webp"),
    zh: "生产车间全景",
    en: "Production workshop overview",
  },
  {
    src: F("workshop-wide.webp"),
    zh: "机加工车间",
    en: "Machining workshop",
  },
  {
    src: F("company-plaque-2018.webp"),
    zh: "公司厂牌",
    en: "Company entrance plaque",
  },
  {
    src: F("packing-wooden-case.webp"),
    zh: "出口木箱包装",
    en: "Export packing in wooden cases",
  },
  {
    src: F("packing-shipment.webp"),
    zh: "成品装箱待发运",
    en: "Packed orders ready for shipment",
  },
]

/** 产品实拍：各品类成品 */
const PRODUCTS: BlogImageAsset[] = [
  {
    src: P("carbon-graphite-seal-ring.webp"),
    zh: "浸渍碳石墨密封环成品",
    en: "Finished impregnated carbon graphite seal rings",
  },
  {
    src: P("carbon-graphite-three-segment.webp"),
    zh: "碳石墨三瓣环：分瓣切口结构，装拆无需拆轴",
    en: "Carbon graphite split rings — segmented cuts allow fitting without dismantling the shaft",
  },
  {
    src: P("three-part-ring.webp"),
    zh: "碳石墨三瓣环成品",
    en: "Carbon graphite three-segment rings",
  },
  {
    src: P("carbon-graphite-bearing.webp"),
    zh: "碳石墨轴承（自润滑）",
    en: "Carbon graphite bearing (self-lubricating)",
  },
  {
    src: P("graphite-bearing.webp"),
    zh: "碳石墨轴承成品",
    en: "Carbon graphite bearings",
  },
  {
    src: P("graphite-bushing.webp"),
    zh: "碳石墨轴套",
    en: "Carbon graphite bushings",
  },
  {
    src: P("graphite-thrust-disc.webp"),
    zh: "碳石墨推力盘",
    en: "Carbon graphite thrust discs",
  },
  {
    src: P("resin-blank.webp"),
    zh: "浸树脂石墨毛坯",
    en: "Resin-impregnated graphite blanks",
  },
  {
    src: P("antimony-blank.webp"),
    zh: "浸锑石墨毛坯",
    en: "Antimony-impregnated graphite blanks",
  },
]

/** 应用场景实拍 */
const APPLICATIONS: BlogImageAsset[] = [
  {
    src: S("case-chemical-pump.webp"),
    zh: "化工泵应用现场",
    en: "Chemical pump application",
  },
  {
    src: S("case-power-pump.webp"),
    zh: "电力行业泵组应用",
    en: "Power plant pump application",
  },
  {
    src: S("case-marine-pump.webp"),
    zh: "船舶泵应用",
    en: "Marine pump application",
  },
  {
    src: S("case-food-mixer.webp"),
    zh: "食品混合设备应用",
    en: "Food mixing equipment application",
  },
  {
    src: S("case-molten-salt.webp"),
    zh: "熔盐工况应用",
    en: "Molten salt duty application",
  },
  {
    src: S("case-oven.webp"),
    zh: "高温炉 / 烘箱工况应用",
    en: "High-temperature oven application",
  },
  {
    src: S("industry-pump.webp"),
    zh: "泵行业应用场景",
    en: "Pump industry application",
  },
  {
    src: S("industry-chemical.webp"),
    zh: "化工行业应用场景",
    en: "Chemical industry application",
  },
  {
    src: S("industry-mining.webp"),
    zh: "矿山冶金应用场景",
    en: "Mining and metallurgy application",
  },
  {
    src: S("industry-oil.webp"),
    zh: "石油天然气应用场景",
    en: "Oil and gas application",
  },
  {
    src: S("industry-power.webp"),
    zh: "电力能源应用场景",
    en: "Power and energy application",
  },
  {
    src: S("industry-marine.webp"),
    zh: "船舶海工应用场景",
    en: "Marine application",
  },
  {
    src: S("industry-food.webp"),
    zh: "食品制药应用场景",
    en: "Food and pharma application",
  },
  {
    src: S("industry-general.webp"),
    zh: "通用机械应用场景",
    en: "General machinery application",
  },
  {
    src: S("custom-drawing.webp"),
    zh: "按图定制：来图与成品对照",
    en: "Made to drawing — customer drawing and finished part",
  },
  {
    src: A("pump-industry.webp"),
    zh: "泵类设备密封应用",
    en: "Pump sealing application",
  },
  {
    src: A("chemical-processing.webp"),
    zh: "化工流程设备应用",
    en: "Chemical processing application",
  },
  {
    src: A("food-pharma.webp"),
    zh: "食品与制药设备应用",
    en: "Food and pharmaceutical application",
  },
  {
    src: A("marine-industry.webp"),
    zh: "船舶与海工应用",
    en: "Marine industry application",
  },
  {
    src: A("mining-metallurgy.webp"),
    zh: "矿山与冶金应用",
    en: "Mining and metallurgy application",
  },
  {
    src: A("oil-gas.webp"),
    zh: "石油天然气应用",
    en: "Oil and gas application",
  },
  {
    src: A("power-energy.webp"),
    zh: "电力与能源应用",
    en: "Power and energy application",
  },
  {
    src: A("general-sealing.webp"),
    zh: "通用密封应用",
    en: "General sealing application",
  },
]

/**
 * 按标签分配图片池。
 * 同一标签下的文章用 slug 的稳定哈希轮转，避免全站都是同一张图，
 * 且同一篇文章的配图在多次构建之间保持不变（哈希而不是随机）。
 */
const POOL_BY_TAG: Record<string, BlogImageAsset[]> = {
  application: [...APPLICATIONS, ...TECHNICAL],
  selection: [...TECHNICAL, ...PRODUCTS],
  faq: PRODUCTS,
  process: [...FACTORY_PROCESS, ...FACTORY_QC],
  precision: [...FACTORY_QC, ...FACTORY_PROCESS],
  material: [...PRODUCTS.slice(7), ...FACTORY_QC, ...FACTORY_PROCESS],
  maintenance: [...PRODUCTS, ...FACTORY_QC],
  news: [...FACTORY_SITE, ...FACTORY_PROCESS],
}

const DEFAULT_POOL: BlogImageAsset[] = [...PRODUCTS, ...TECHNICAL]

/**
 * 单篇覆盖表：需要专属配图的文章在这里登记，优先级高于标签池。
 * 键为 slug，值为图片资源（图注必须与实际图片内容一致）。
 */
const IMAGE_OVERRIDES: Record<string, BlogImageAsset> = {
  "liquid-oxygen-graphite-seal-oil-free-cleanliness": {
    ...TECHNICAL[0],
    zh: "机械密封爆炸图：无油、禁油工况下碳石墨摩擦副的典型结构",
    en: "Mechanical seal exploded view — the typical carbon graphite friction pair layout for oil-free duty",
  },
  "copper-impregnated-graphite": {
    ...PRODUCTS[8],
    zh: "浸金属石墨毛坯：黑色致密环坯为金属浸渍后的半成品",
    en: "Metal-impregnated graphite blanks — the dense black rings are semi-finished parts after metal impregnation",
  },
  "graphite-seal-stainless-shaft-galvanic-corrosion": {
    ...PRODUCTS[0],
    zh: "浸渍碳石墨密封环：石墨与不锈钢轴的电偶腐蚀发生在两者接触的密封面上",
    en: "Impregnated carbon graphite seal rings — galvanic corrosion with a stainless shaft occurs at the sealing face where the two materials meet",
  },
  "chiller-centrifugal-compressor-labyrinth-graphite": {
    src: T("centrifugal-pump-exploded.webp"),
    zh: "离心泵主要部件分解示意——离心冷水机组的叶轮与轴端密封同样属于这类旋转机械结构",
    en: "Centrifugal pump exploded view — chiller impellers and shaft-end seals belong to the same family of rotating machinery",
  },
  "oil-free-screw-air-compressor-carbon-ring-seal": {
    ...PRODUCTS[1],
    zh: "碳石墨三瓣环：分瓣切口结构，装拆无需拆轴，常用于压缩机轴端碳环密封",
    en: "Carbon graphite split rings — segmented cuts allow fitting without dismantling the shaft, commonly used as compressor shaft-end carbon rings",
  },
  "impregnated-graphite-performance-upgrade-2023": {
    src: F("impregnation-autoclave-2023.webp"),
    zh: "浸渍车间：两台真空-加压浸渍罐（编号1、2），前方为待浸渍与已浸渍的碳石墨密封环与轴套",
    en: "Impregnation workshop — two vacuum-pressure impregnation vessels (No. 1 and 2), with carbon graphite seal rings and bushings awaiting or finishing impregnation in the foreground",
  },
}

/**
 * 图片关键词：从文章 slug（英文）里匹配，命中越多优先级越高。
 *
 * 为什么需要这一层：只按 tag 分组 + 哈希轮转，会出现「讲浸树脂石墨存放的文章配一张推力盘图」
 * 这种明显不相关的情况。加关键词后，slug 里带 resin / bearing / thrust 等词就能命中对应图。
 */
const KEYWORDS: Record<string, string[]> = {
  [T("mechanical-seal-exploded.webp")]: ["mechanical-seal", "seal-face", "exploded", "cartridge"],
  [T("graphite-seal-ring-application.webp")]: ["assembly", "position", "install", "housing"],
  [T("centrifugal-pump-exploded.webp")]: ["centrifugal", "impeller", "chiller", "multistage"],
  [T("gate-valve-exploded.webp")]: ["valve", "gate", "ball-valve"],

  [F("cnc-turning-graphite.webp")]: ["turning", "cnc", "machining"],
  [F("cnc-turning.webp")]: ["turning", "lathe", "blank-machining"],
  [F("graphite-impregnation.webp")]: ["impregnat", "resin", "vacuum", "storage", "shelf-life"],

  [F("qc-inspection-caliper.webp")]: ["tolerance", "precision", "measure", "dimension", "fit", "clearance"],
  [F("qc-inspection.webp")]: ["inspection", "qc", "quality", "defect"],
  [F("finished-rings-stack.webp")]: ["finished", "stock", "inventory", "batch"],

  [F("factory-aerial-2021.webp")]: ["factory", "plant", "capacity"],
  [F("workshop-overview.webp")]: ["workshop", "production"],
  [F("workshop-wide.webp")]: ["workshop", "machining-line"],
  [F("company-plaque-2018.webp")]: ["company", "certification", "iso"],
  [F("packing-wooden-case.webp")]: ["packing", "shipment", "export", "logistics"],
  [F("packing-shipment.webp")]: ["packing", "shipment", "delivery"],

  [P("carbon-graphite-seal-ring.webp")]: ["seal-ring"],
  [P("carbon-graphite-three-segment.webp")]: ["three-segment", "split", "three-part", "segment", "compressor"],
  [P("three-part-ring.webp")]: ["three-part", "split-ring"],
  [P("carbon-graphite-bearing.webp")]: ["bearing"],
  [P("graphite-bearing.webp")]: ["bearing"],
  [P("graphite-bushing.webp")]: ["bushing", "sleeve"],
  [P("graphite-thrust-disc.webp")]: ["thrust", "axial"],
  [P("resin-blank.webp")]: ["resin", "blank", "impregnat", "grade"],
  [P("antimony-blank.webp")]: ["antimony", "metal-impregnat", "copper", "silver", "blank"],

  [S("case-chemical-pump.webp")]: ["chemical-pump", "chemical-industry"],
  [S("case-power-pump.webp")]: ["power-plant", "boiler", "power-station"],
  [S("case-marine-pump.webp")]: ["marine", "ship", "vessel"],
  [S("case-food-mixer.webp")]: ["food", "mixer", "beverage", "dairy"],
  [S("case-molten-salt.webp")]: ["molten-salt", "solar", "thermal-storage"],
  [S("case-oven.webp")]: ["oven", "furnace", "kiln", "high-temp"],
  [S("industry-pump.webp")]: ["pump"],
  [S("industry-chemical.webp")]: ["chemical"],
  [S("industry-mining.webp")]: ["mining", "slurry", "sediment", "sand"],
  [S("industry-oil.webp")]: ["oil-gas", "petroleum", "refiner", "gas-processing"],
  [S("industry-power.webp")]: ["power", "energy", "turbine"],
  [S("industry-marine.webp")]: ["marine", "offshore"],
  [S("industry-food.webp")]: ["food", "pharma", "hygien", "cip"],
  [S("industry-general.webp")]: ["general"],
  [S("custom-drawing.webp")]: ["custom", "drawing", "oem", "made-to-order"],
  [A("pump-industry.webp")]: ["pump"],
  [A("chemical-processing.webp")]: ["chemical"],
  [A("food-pharma.webp")]: ["food", "pharma"],
  [A("marine-industry.webp")]: ["marine"],
  [A("mining-metallurgy.webp")]: ["mining", "metallurg"],
  [A("oil-gas.webp")]: ["oil-gas", "petroleum", "refiner"],
  [A("power-energy.webp")]: ["power", "energy"],
  [A("general-sealing.webp")]: ["general"],
}

/** 全部图片去重（同一 src 可能出现在多个池里） */
const ALL_ASSETS: BlogImageAsset[] = Array.from(
  new Map(
    [
      ...TECHNICAL,
      ...FACTORY_PROCESS,
      ...FACTORY_QC,
      ...FACTORY_SITE,
      ...PRODUCTS,
      ...APPLICATIONS,
    ].map((a) => [a.src, a])
  ).values()
)

/** 按 slug 关键词挑出最贴切的一张；全不命中返回 null */
function bestKeywordMatch(slug: string): BlogImageAsset | null {
  const haystack = slug.toLowerCase()
  let best: BlogImageAsset | null = null
  let bestScore = 0
  for (const asset of ALL_ASSETS) {
    const kws = KEYWORDS[asset.src]
    if (!kws) continue
    let score = 0
    for (const k of kws) if (haystack.includes(k)) score++
    if (score > bestScore) {
      bestScore = score
      best = asset
    }
  }
  return best
}

/** djb2 字符串哈希，保证同一 slug 每次都落到同一张图 */
function hashSlug(slug: string): number {
  let h = 5381
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) + h + slug.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

/**
 * 取某篇博客的配图，优先级：
 * 1. 单篇覆盖表（人工指定，最准）
 * 2. slug 关键词匹配（图文相关性最高）
 * 3. 标签池哈希轮转（保底，保证每篇都有图且不重复堆在同一张）
 */
export function getPostImage(post: Pick<BlogPost, "slug" | "tag">): BlogImageAsset {
  const override = IMAGE_OVERRIDES[post.slug]
  if (override) return override

  const matched = bestKeywordMatch(post.slug)
  if (matched) return matched

  const pool = POOL_BY_TAG[post.tag] ?? DEFAULT_POOL
  return pool[hashSlug(post.slug) % pool.length]
}
