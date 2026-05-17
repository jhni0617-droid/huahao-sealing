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
    slug: "109-series",
    name: "109型机械密封",
    model: "109系列",
    category: "机械密封",
    description:
      "109系列是一款通用型高性能机械密封，适用于各类旋转设备。在泵行业中以可靠性高、安装简便而广受认可。采用平衡式设计，可在中等压力和温度范围内处理多种流体介质。",
    shortDesc: "通用型机械密封，适用于泵类，平衡式设计，可承受中等压力。",
    specs: [
      { label: "型号", value: "109 / 109B" },
      { label: "压力范围", value: "≤ 1.2 MPa" },
      { label: "温度范围", value: "-20°C ~ 180°C" },
      { label: "转速", value: "≤ 3000 rpm" },
      { label: "适用介质", value: "水、油、化学品" },
      { label: "密封端面材料", value: "碳石墨 / 碳化硅" },
      { label: "O形圈材料", value: "丁腈橡胶 / 三元乙丙橡胶 / 氟橡胶" },
    ],
    applications: ["离心泵", "水处理", "暖通空调", "通用工业"],
    materials: ["碳石墨", "碳化硅", "碳化钨", "304/316不锈钢"],
    features: [
      "平衡式设计，性能可靠",
      "与国际主流标准互换",
      "自润滑碳石墨密封面",
      "耐腐蚀金属部件",
      "安装维护简便",
    ],
    faq: [
      { q: "109型密封的标准端面材料是什么？", a: "标准配置采用碳石墨旋转面配合碳化硅静环，具有优异的自润滑性能和耐磨性。" },
      { q: "109系列能否处理含磨粒介质？", a: "对于含磨粒介质，建议升级为碳化硅对碳化硅端面，并配置适当的冲洗方案。标准碳石墨对碳化硅适用于清洁流体。" },
    ],
  },
  {
    slug: "bia-series",
    name: "BIA型密封环",
    model: "BIA系列",
    category: "密封环",
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
    slug: "58u-series",
    name: "58U型碳石墨环",
    model: "58U系列",
    category: "碳石墨环",
    description:
      "58U系列是经过精密加工的碳石墨密封环，设计用于泵和阀门应用。具有优异的尺寸精度和稳定的密封性能，是OEM和替换应用的理想选择。",
    shortDesc: "精密碳石墨环，适用于泵和阀门。",
    specs: [
      { label: "型号", value: "58U" },
      { label: "材料", value: "碳石墨" },
      { label: "温度范围", value: "-20°C ~ 220°C" },
      { label: "压力", value: "≤ 1.0 MPa" },
      { label: "硬度", value: "60-80 Shore D" },
      { label: "适用场合", value: "泵、阀门" },
    ],
    applications: ["离心泵", "闸阀", "混合器", "给水泵"],
    materials: ["电化石墨", "树脂浸渍碳", "锑浸渍碳"],
    features: [
      "高精度加工，公差严格控制",
      "批次间质量一致",
      "多种浸渍牌号可选",
      "兼容各种配对面材料",
    ],
    faq: [
      { q: "58U有哪些浸渍选项？", a: "我们提供树脂浸渍（常规用途）、金属浸渍（锑或铜，适用于高温）以及专有抗氧化处理（延长使用寿命）。" },
    ],
  },
  {
    slug: "59u-series",
    name: "59U型镶嵌石墨环",
    model: "59U系列",
    category: "镶嵌石墨环",
    description:
      "59U系列采用碳石墨环体嵌入特种填充材料的设计。独特的镶嵌结构在接触界面提供卓越密封性能，同时保持碳石墨的自润滑特性。",
    shortDesc: "镶嵌式碳石墨环，增强密封性能。",
    specs: [
      { label: "型号", value: "59U" },
      { label: "材料", value: "镶嵌碳石墨" },
      { label: "温度范围", value: "-40°C ~ 250°C" },
      { label: "压力", value: "≤ 1.5 MPa" },
      { label: "转速", value: "≤ 4000 rpm" },
      { label: "特色", value: "镶嵌密封端面" },
    ],
    applications: ["化工泵", "高压密封", "炼油设备", "船用泵"],
    materials: ["镶嵌碳石墨", "碳化硅镶嵌", "碳化钨镶嵌"],
    features: [
      "镶嵌设计减少泄漏",
      "密封界面耐磨性增强",
      "摩擦系数低于标准碳石墨",
      "在磨粒工况下延长使用寿命",
    ],
    faq: [
      { q: "镶嵌设计如何提升性能？", a: "镶嵌层在关键密封界面形成更硬、更耐磨的表面，而碳石墨基体保持优异的热传导性和自润滑性。" },
    ],
  },
  {
    slug: "104-series",
    name: "104型密封环",
    model: "104系列",
    category: "密封环",
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
    slug: "m7n-series",
    name: "M7N机械密封",
    model: "M7N系列",
    category: "机械密封",
    description:
      "M7N系列是一款重型机械密封，采用先进的碳石墨技术，适用于最严苛的工业应用。配备坚固的传动结构和优质材料，在连续运行中提供卓越的可靠性。",
    shortDesc: "重型机械密封，采用优质碳石墨技术。",
    specs: [
      { label: "型号", value: "M7N" },
      { label: "压力范围", value: "≤ 2.0 MPa" },
      { label: "温度范围", value: "-40°C ~ 220°C" },
      { label: "转速", value: "≤ 4000 rpm" },
      { label: "适用介质", value: "水、油、化学品、浆液" },
      { label: "密封端面材料", value: "碳石墨 / 碳化硅 / 碳化钨" },
    ],
    applications: ["重型泵", "化工处理", "石油天然气", "矿山"],
    materials: ["优质碳石墨", "碳化硅", "碳化钨", "哈氏合金"],
    features: [
      "重型传动机构",
      "先进冷却流道设计",
      "优质材料牌号延长寿命",
      "适用于高粘度介质",
      "密封端面可现场更换",
    ],
    faq: [
      { q: "M7N为何适用于重型工况？", a: "M7N配备防止扭矩打滑的坚固传动机构、先进冷却通道用于散热，并可选用碳化钨端面以耐受磨蚀和腐蚀环境。" },
    ],
  },
  {
    slug: "204-series",
    name: "204B型碳石墨轴承",
    model: "204 / 204B系列",
    category: "碳石墨轴承",
    description:
      "204和204B系列碳石墨轴承专为高载荷、低转速且无法使用传统润滑剂的工况设计。这些自润滑轴承在浸没、高温或无污染环境中提供可靠运行。",
    shortDesc: "自润滑碳石墨轴承，适用于浸没和高温工况。",
    specs: [
      { label: "型号", value: "204 / 204B" },
      { label: "材料", value: "碳石墨" },
      { label: "温度范围", value: "-40°C ~ 300°C" },
      { label: "最大负载", value: "≤ 5 MPa（静态）" },
      { label: "转速", value: "≤ 1500 rpm" },
      { label: "适用场合", value: "浸没轴承、导向轴承" },
    ],
    applications: ["潜水泵", "船舶轴轴承", "导向轴承", "高温输送机"],
    materials: ["抗氧化碳石墨", "金属浸渍石墨", "碳-碳复合材料"],
    features: [
      "自润滑 — 无需外部润滑",
      "可在浸没或干运转条件下工作",
      "高温下优异的尺寸稳定性",
      "耐海洋环境腐蚀",
      "低摩擦系数",
    ],
    faq: [
      { q: "204B轴承可以在无外部润滑的条件下运行吗？", a: "可以。碳石墨具有固有的自润滑特性，204B系列在配对面形成薄薄的转移膜，无需外部润滑即可提供低摩擦界面。" },
    ],
  },
  {
    slug: "206-series",
    name: "206型机械密封",
    model: "206系列",
    category: "机械密封",
    description:
      "206系列机械密封采用双平衡式设计，适用于高压和挥发性介质应用。配备碳石墨主密封面，可根据需要配置各种冲洗方案以获得最佳性能。",
    shortDesc: "双平衡机械密封，适用于高压挥发性介质。",
    specs: [
      { label: "型号", value: "206" },
      { label: "压力范围", value: "≤ 3.0 MPa" },
      { label: "温度范围", value: "-20°C ~ 200°C" },
      { label: "转速", value: "≤ 3500 rpm" },
      { label: "配置", value: "双端面（串联或背对背）" },
      { label: "适用介质", value: "挥发性碳氢化合物、化学品" },
    ],
    applications: ["炼油泵", "化学品输送", "液化气/压缩天然气", "高压锅炉给水"],
    materials: ["碳石墨", "碳化硅", "碳化钨", "哈氏合金 C-276"],
    features: [
      "双平衡设计适应高压",
      "串联或背对背配置可选",
      "兼容API冲洗方案",
      "碳石墨主密封可靠耐用",
      "标配泄漏监测口",
    ],
    faq: [
      { q: "双端面密封配置的优势是什么？", a: "双端面密封为危险或挥发性介质提供额外安全层级。两端密封之间的缓冲液同时润滑两个密封面，并形成阻止工艺介质泄漏到大气的屏障。" },
    ],
  },
  {
    slug: "58b-series",
    name: "58B型密封环",
    model: "58B系列",
    category: "碳石墨环",
    description:
      "58B系列是大截面碳石墨密封环，专为大轴径和高负载需求设计。其坚固的截面提供增强的机械强度，同时保持碳石墨优异的密封特性。",
    shortDesc: "大截面碳石墨环，适用于大轴径和高负载。",
    specs: [
      { label: "型号", value: "58B" },
      { label: "材料", value: "大截面碳石墨" },
      { label: "温度范围", value: "-20°C ~ 250°C" },
      { label: "压力", value: "≤ 1.2 MPa" },
      { label: "轴径", value: "最大 300 mm" },
      { label: "牌号选项", value: "标准、金属浸渍、抗氧化" },
    ],
    applications: ["大型离心泵", "船舶推进轴", "工业搅拌机", "水轮机"],
    materials: ["高强度碳石墨", "青铜浸渍石墨", "抗氧化石墨"],
    features: [
      "大直径应用的机械强度高",
      "可定制最大300mm轴径",
      "多种浸渍选项适应不同介质",
      "抗热冲击性能好",
    ],
    faq: [
      { q: "58B系列的最大轴径是多少？", a: "58B系列可制造最大300mm轴径的产品。超过此范围的定制尺寸需与销售确认交期。" },
    ],
  },
  {
    slug: "155-series",
    name: "155型密封环",
    model: "155系列",
    category: "密封环",
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
    name: "碳石墨套",
    model: "CS系列",
    category: "碳石墨套",
    description:
      "碳石墨套（又称碳石墨轴套、衬套）采用高强度碳石墨材料制成，具有优异自润滑性能和耐温耐腐蚀特性。适用于无油润滑或油润滑不足工况下的旋转或往复运动部件支撑与导向。广泛应用于潜水泵、船舶艉轴密封、化工泵及各类工业泵中，可在水下、油中及多种化学品介质中长期稳定运行。",
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
      { q: "碳石墨套需要加油润滑吗？", a: "不需要。碳石墨具有天然自润滑特性，可在无油润滑工况下正常运行。但在条件允许的情况下，辅助润滑可进一步延长使用寿命。" },
      { q: "是否可以按图纸定制？", a: "完全可以。我们拥有成熟的非标定制能力，提供来图加工服务。请提供详细尺寸图纸或样品，我们的工程师将在24小时内给出方案。" },
      { q: "碳石墨套适用于海水环境吗？", a: "适用。碳石墨本身化学惰性强，配合专用的耐腐蚀浸渍工艺，可在海水环境中长期稳定运行，是船舶艉轴密封和海水泵的理想选择。" },
    ],
    image: "/images/sleeve-product.jpg",
  },
]

export const categories = [
  { slug: "mechanical-seals", name: "机械密封", count: 0 },
  { slug: "carbon-graphite-rings", name: "碳石墨环", count: 0 },
  { slug: "seal-rings", name: "密封环", count: 0 },
  { slug: "inlaid-graphite-rings", name: "镶嵌石墨环", count: 0 },
  { slug: "carbon-graphite-bearings", name: "碳石墨轴承", count: 0 },
  { slug: "carbon-graphite-sleeves", name: "碳石墨套", count: 0 },
]

const categorySlugMap: Record<string, string> = {
  "机械密封": "mechanical-seals",
  "碳石墨环": "carbon-graphite-rings",
  "密封环": "seal-rings",
  "镶嵌石墨环": "inlaid-graphite-rings",
  "碳石墨轴承": "carbon-graphite-bearings",
  "碳石墨套": "carbon-graphite-sleeves",
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
