export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  slug: string
  name: string
  model: string
  category: string
  description: string
  shortDesc: string
  specs: ProductSpec[]
  applications: string[]
  materials: string[]
  features: string[]
  faq: { q: string; a: string }[]
  image?: string
}

export const products: Product[] = [
  {
    slug: "bia-series",
    name: "BIA型碳石墨密封环",
    model: "BIA系列",
    category: "碳石墨密封环",
    description:
      "BIA系列碳石墨密封环专为高温、高速旋转设备设计。先进的材料配方提供卓越的尺寸稳定性和一致的密封性能，适用于苛刻工况条件。",
    shortDesc: "耐高温碳石墨密封环，适用于高要求旋转设备。",
    specs: [
      { label: "型号", value: "BIA" },
      { label: "温度范围", value: "-40°C ~ 280°C" },
      { label: "压力", value: "≤ 0.8 MPa" },
      { label: "转速", value: "≤ 5000 rpm" },
      { label: "材料", value: "浸渍碳石墨" },
      { label: "适用场合", value: "旋转轴、搅拌器" },
    ],
    applications: ["搅拌器", "混合机", "压缩机", "高速转子"],
    materials: ["抗氧化碳石墨", "树脂浸渍石墨", "金属浸渍石墨"],
    features: [
      "优异的高温稳定性",
      "抗氧化处理延长寿命",
      "低摩擦系数",
      "启停阶段自润滑",
      "出色的化学耐受性",
    ],
    faq: [
      { q: "BIA系列的最高工作温度是多少？", a: "BIA系列采用抗氧化浸渍牌号可长期在280°C下连续运行，短期峰值可承受350°C。" },
    ],
  },
  {
    slug: "104-series",
    name: "104型碳石墨密封环",
    model: "104系列",
    category: "碳石墨密封环",
    description:
      "104系列碳石墨密封环是一款紧凑型高性能密封方案，专为空间受限的安装环境设计。优化的几何结构提供优异的密封力分布，同时轴向空间需求最小化。",
    shortDesc: "紧凑型碳石墨密封环，适用于空间受限安装。",
    specs: [
      { label: "型号", value: "104" },
      { label: "材料", value: "碳石墨" },
      { label: "温度范围", value: "-20°C ~ 200°C" },
      { label: "压力", value: "≤ 0.8 MPa" },
      { label: "转速", value: "≤ 3500 rpm" },
    ],
    applications: ["小型泵", "汽车行业", "家用电器", "轻工行业"],
    materials: ["碳石墨", "树脂浸渍碳"],
    features: [
      "紧凑的轴向设计",
      "大批量应用性价比高",
      "密封性能可靠",
      "更换方便",
    ],
    faq: [
      { q: "104系列适合大批量OEM应用吗？", a: "是的，104系列专为高性价比批量生产而设计，在保证质量一致性的同时，非常适合空间受限的OEM应用。" },
    ],
  },
  {
    slug: "155-series",
    name: "155型碳石墨密封环",
    model: "155系列",
    category: "碳石墨密封环",
    description:
      "155系列碳石墨密封环是一款标准化工业密封件，可与国际主流密封品牌互换。在性能和成本之间取得良好平衡，适用于一般工业密封需求。",
    shortDesc: "标准化碳石墨密封环，与国际主流品牌互换。",
    specs: [
      { label: "型号", value: "155" },
      { label: "材料", value: "碳石墨" },
      { label: "温度范围", value: "-20°C ~ 200°C" },
      { label: "压力", value: "≤ 0.6 MPa" },
      { label: "互换性", value: "兼容国际主流标准" },
    ],
    applications: ["通用工业泵", "农业设备", "供水系统", "轻化工"],
    materials: ["碳石墨", "树脂浸渍碳"],
    features: [
      "国际标准化尺寸",
      "可直接替换主流品牌",
      "经济型价格",
      "常备库存，供货及时",
    ],
    faq: [
      { q: "155系列可与哪些国际品牌互换？", a: "155系列按照与约翰克兰、伊格尔博格曼、科士通等国际主流机械密封品牌兼容的尺寸标准设计。请提供具体尺寸以便交叉参考。" },
    ],
  },
  {
    slug: "sleeve-series",
    name: "碳石墨轴套",
    model: "CS系列",
    category: "碳石墨轴套",
    description:
      "碳石墨轴套（又称碳石墨衬套、滑动轴承套）采用高强度碳石墨材料制成，具有优异自润滑性能和耐温耐腐蚀特性。适用于无油润滑或油润滑不足工况下的旋转或往复运动部件支撑与导向。广泛应用于潜水泵、船舶艉轴密封、化工泵及各类工业泵中，可在水下、油中及多种化学品介质中长期稳定运行。",
    shortDesc: "自润滑碳石墨轴套，耐高温耐腐蚀，适用于泵类及水下设备。",
    specs: [
      { label: "型号", value: "CS100 / CS200 / CS300（可按图定制）" },
      { label: "温度范围", value: "-50°C ~ 300°C（抗氧化浸渍可达350°C）" },
      { label: "压力范围", value: "≤ 15 MPa" },
      { label: "转速", value: "≤ 20 m/s" },
      { label: "适用介质", value: "清水、污水、海水、油类、弱酸弱碱及有机溶剂" },
      { label: "材料牌号", value: "M126D / M204K / M254K 等" },
    ],
    applications: ["潜水泵", "船舶艉轴", "化工泵", "污水泵", "搅拌器", "压缩机"],
    materials: ["M126D（标准）", "M204K（耐高温）", "M254K（耐腐蚀）", "特殊浸渍定制"],
    features: [
      "自润滑性能优异，可在干运转或边界润滑条件下工作",
      "耐温范围广，抗氧化牌号可承受350°C峰值温度",
      "化学惰性强，耐酸、碱及有机溶剂侵蚀",
      "尺寸稳定性好，热膨胀系数低，适合精密配合",
      "可按客户图纸定制非标尺寸和外形",
      "摩檫系数低，减少对偶件磨损，延长设备寿命",
    ],
    faq: [
      { q: "碳石墨轴套需要加油润滑吗？", a: "不需要。碳石墨具有天然自润滑特性，可在无油润滑工况下正常运行。但在条件允许的情况下，辅助润滑可进一步延长使用寿命。" },
      { q: "是否可以按图纸定制？", a: "完全可以。我们拥有成熟的非标定制能力，提供来图加工服务。请提供详细尺寸图纸或样品，我们的工程师将在24小时内给出方案。" },
      { q: "碳石墨轴套适用于海水环境吗？", a: "适用。碳石墨本身化学惰性强，配合专用的耐腐蚀浸渍工艺，可在海水环境中长期稳定运行，是船舶艉轴密封和海水泵的理想选择。" },
    ],
    image: "/images/sleeve-product.jpg",
  },
  {
    slug: "three-part-series",
    name: "碳石墨三瓣环",
    model: "TP系列",
    category: "碳石墨三瓣环",
    description:
      "碳石墨三瓣环采用分体式三瓣结构设计，由三块120°弧段碳石墨环片精密拼接而成。分体结构便于安装于无法从轴端穿入的封闭式腔体，广泛应用于压缩机、泵类及各类旋转设备的密封与支撑。瓣间配合面经精密研磨，组装后整体密封性能与整体环无异。",
    shortDesc: "分体式三瓣碳石墨环，适用于封闭腔体安装。",
    specs: [
      { label: "型号", value: "TP100 / TP200 / TP300（可按图定制）" },
      { label: "温度范围", value: "-40°C ~ 280°C（抗氧化牌号可达350°C）" },
      { label: "压力范围", value: "≤ 10 MPa" },
      { label: "转速", value: "≤ 15 m/s" },
      { label: "适用介质", value: "水、油、化学品、蒸汽、气体" },
      { label: "瓣数", value: "3瓣（120°均分），可非标定制多瓣" },
    ],
    applications: ["压缩机", "离心泵", "船舶设备", "化工设备", "蒸汽透平"],
    materials: ["M126D（标准）", "M204K（耐高温）", "M254K（耐腐蚀）", "金属浸渍定制"],
    features: [
      "分体三瓣结构，可在封闭腔体内直接安装，无需拆轴",
      "瓣间接合面精密研磨，组装后密封性能优异",
      "碳石墨自润滑，无需外部润滑系统",
      "耐高温耐腐蚀，适应多种恶劣工况",
      "可按客户图纸定制尺寸和瓣数",
      "维护方便，可单独更换损坏瓣片",
    ],
    faq: [
      { q: "三瓣环和整体环有什么区别？", a: "三瓣环由三块弧段拼接而成，主要优势是可在不拆卸轴的情况下安装于封闭腔体。整体环则为一体式结构，密封性略优但安装时需从轴端穿入。" },
      { q: "三瓣环的瓣间接合处会泄漏吗？", a: "瓣间接合面经过精密研磨加工，配合碳石墨材料的自润滑特性，在运行中瓣间间隙极小。对于绝大多数工况，密封性能完全满足要求。" },
      { q: "可以定制其他瓣数吗？", a: "可以。除标准三瓣外，我们可定制2瓣、4瓣、6瓣等多瓣结构，以满足不同安装空间和使用需求。" },
    ],
  },
]

export const categories = [
  { slug: "seal-rings", name: "碳石墨密封环", count: 0 },
  { slug: "carbon-graphite-sleeves", name: "碳石墨轴套", count: 0 },
  { slug: "three-part-rings", name: "碳石墨三瓣环", count: 0 },
]

const categorySlugMap: Record<string, string> = {
  "碳石墨密封环": "seal-rings",
  "碳石墨轴套": "carbon-graphite-sleeves",
  "碳石墨三瓣环": "three-part-rings",
}

export function getCategoryCounts() {
  const counts: Record<string, number> = {}
  products.forEach((p) => {
    const catSlug = categorySlugMap[p.category] || p.category.toLowerCase().replace(/\s+/g, "-")
    counts[catSlug] = (counts[catSlug] || 0) + 1
  })
  return counts
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => (categorySlugMap[p.category] || p.category.toLowerCase().replace(/\s+/g, "-")) === categorySlug)
}
