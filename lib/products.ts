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
  commonSizes?: ProductSpec[]
  matingMaterials?: string[]
  installationNotes?: string[]
  applications: string[]
  materials: string[]
  features: string[]
  faq: { q: string; a: string }[]
  image?: string
  pdfUrl?: string
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
    commonSizes: [
      { label: "内径 (d)", value: "12 ~ 100 mm" },
      { label: "外径 (D)", value: "24 ~ 130 mm" },
      { label: "高度 (H)", value: "6 ~ 20 mm" },
      { label: "密封面宽度", value: "3 ~ 8 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "碳化钨（WC）", "氧化铝陶瓷（Al₂O₃）", "高铬不锈钢"],
    installationNotes: [
      "安装前检查密封面有无划伤、崩缺，用无尘布蘸酒精轻擦密封端面",
      "确认轴套与轴的配合间隙在推荐范围内，避免过紧或过松",
      "压装时使用专用导向套，压入力应均匀稳定，速度控制在 2~5 mm/s",
      "安装后手动盘车 2~3 圈，确认转动灵活、无卡滞",
      "首次运行需按磨合规范逐步升速，前 30 分钟控制在额定转速的 50% 以内",
    ],
    applications: ["搅拌器", "混合机", "压缩机", "高速转子"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
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
    image: "/images/products/seal-ring-placeholder.svg",
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
    commonSizes: [
      { label: "内径 (d)", value: "8 ~ 60 mm" },
      { label: "外径 (D)", value: "20 ~ 80 mm" },
      { label: "高度 (H)", value: "5 ~ 14 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "碳化钨（WC）", "高铬不锈钢", "淬火工具钢"],
    installationNotes: [
      "安装前确认尺寸是否匹配，密封面用洁净软布擦拭",
      "104系列轴向空间紧凑，注意弹簧压缩量调整到位",
      "座孔倒角应 ≥ 15°，避免压装时划伤外圆",
      "压装力应平稳均匀，推荐使用压力机而非锤击安装",
      "首次运行检查泄漏量和温度，磨合 2 小时后趋于稳定",
    ],
    applications: ["小型泵", "汽车行业", "家用电器", "轻工行业"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: [
      "紧凑的轴向设计",
      "大批量应用性价比高",
      "密封性能可靠",
      "更换方便",
    ],
    faq: [
      { q: "104系列适合大批量OEM应用吗？", a: "是的，104系列专为高性价比批量生产而设计，在保证质量一致性的同时，非常适合空间受限的OEM应用。" },
    ],
    image: "/images/products/seal-ring-placeholder.svg",
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
    commonSizes: [
      { label: "内径 (d)", value: "14 ~ 80 mm" },
      { label: "外径 (D)", value: "28 ~ 100 mm" },
      { label: "高度 (H)", value: "6 ~ 18 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "碳化钨（WC）", "不锈钢", "陶瓷"],
    installationNotes: [
      "155系列为标准互换尺寸，安装前与原密封件比对确认一致",
      "密封面研磨精度影响密封效果，安装时避免磕碰端面",
      "弹簧压缩量按产品说明调整，不可过度压缩",
      "螺栓按对角线顺序分次拧紧，扭矩均匀",
      "运行前确保密封腔内充满介质，排尽空气",
    ],
    applications: ["通用工业泵", "农业设备", "供水系统", "轻化工"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: [
      "国际标准化尺寸",
      "可直接替换主流品牌",
      "经济型价格",
      "常备库存，供货及时",
    ],
    faq: [
      { q: "155系列可与哪些国际品牌互换？", a: "155系列按照与约翰克兰、伊格尔博格曼、科士通等国际主流机械密封品牌兼容的尺寸标准设计。请提供具体尺寸以便交叉参考。" },
    ],
    image: "/images/products/seal-ring-placeholder.svg",
  },
  {
    slug: "109-series",
    name: "109型碳石墨密封环",
    model: "109系列",
    category: "碳石墨密封环",
    description: "109系列是应用最广泛的通用机械密封环型号之一，适用于清洁流体介质的离心泵、清水泵和污水泵。标准化尺寸设计便于更换，性能稳定可靠。",
    shortDesc: "通用型碳石墨密封环，适用于清洁流体离心泵。",
    specs: [
      { label: "型号", value: "109" },
      { label: "温度范围", value: "-20°C ~ 180°C" },
      { label: "压力", value: "≤ 1.0 MPa" },
      { label: "转速", value: "≤ 4000 rpm" },
      { label: "适用介质", value: "清水、污水、轻油" },
    ],
    commonSizes: [
      { label: "内径 (d)", value: "10 ~ 80 mm" },
      { label: "外径 (D)", value: "22 ~ 100 mm" },
      { label: "高度 (H)", value: "6 ~ 18 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "碳化钨（WC）", "不锈钢（304/316）", "陶瓷"],
    installationNotes: [
      "109系列通用性强，安装前确认尺寸规格与泵轴匹配",
      "密封端面绝对禁止磕碰，微小缺口即可能导致泄漏",
      "弹簧座安装到位后检查弹簧压缩量是否在标定范围内",
      "泵轴径向跳动量应 ≤ 0.05 mm，超出需先校轴",
      "介质含颗粒时建议前端加过滤器，保护密封端面",
    ],
    applications: ["离心泵", "清水泵", "污水泵", "通用工业"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: ["通用性最强，应用广泛", "标准化尺寸，更换方便", "性能稳定可靠", "性价比高"],
    faq: [],
    image: "/images/products/seal-ring-placeholder.svg",
  },
  {
    slug: "108-series",
    name: "108型碳石墨密封环",
    model: "108系列",
    category: "碳石墨密封环",
    description: "108系列是机械密封行业中应用最广泛的通用型动环型号之一，适配性强，可与多种静环配对使用。标准化尺寸设计覆盖主流泵轴规格，广泛应用于离心泵、化工泵、清水泵及各类通用旋转设备。经过精密研磨的碳石墨密封端面配合优化的浸渍工艺，在清水、污水、轻油及多种弱腐蚀性介质中表现稳定可靠。",
    shortDesc: "通用型碳石墨动环，适配广泛，应用最广的机械密封型号。",
    specs: [
      { label: "型号", value: "108" },
      { label: "温度范围", value: "-20°C ~ 200°C" },
      { label: "压力", value: "≤ 1.0 MPa" },
      { label: "转速", value: "≤ 4000 rpm" },
      { label: "适用介质", value: "清水、污水、轻油、弱酸碱" },
      { label: "适配静环", value: "109、BIA、155等系列" },
    ],
    commonSizes: [
      { label: "内径 (d)", value: "12 ~ 100 mm" },
      { label: "外径 (D)", value: "24 ~ 120 mm" },
      { label: "高度 (H)", value: "6 ~ 20 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "碳化钨（WC）", "不锈钢（304/316）", "陶瓷"],
    installationNotes: [
      "108型为通用动环，常与109型静环配对，安装时确认配对间隙",
      "密封面研磨精度需达到镜面级，安装前用无尘布轻擦",
      "橡胶波纹管或弹簧座需安装到位，防止偏斜",
      "轴套配合间隙按标准取值，避免过紧导致发热",
      "泵送介质含颗粒时需前端过滤，防止密封面划伤",
    ],
    applications: ["离心泵", "化工泵", "清水泵", "污水泵", "通用工业"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: ["通用性最强，适配多种静环型号", "标准化尺寸，市场覆盖面广", "精密研磨端面，密封性能稳定", "多种浸渍工艺可选，适配不同介质"],
    faq: [
      { q: "108型与109型有什么区别？", a: "108型通常作为动环使用，109型通常作为静环使用，两者互为配对。108型的外径尺寸适配109型的内孔，可组成完整的机械密封单元。" },
    ],
    image: "/images/products/seal-ring-placeholder.svg",
  },
  {
    slug: "58u-series",
    name: "58U型碳石墨密封环",
    model: "58U系列",
    category: "碳石墨密封环",
    description: "58U系列采用非平衡型结构设计，适用于中低压工况下的旋转设备密封。结构紧凑，安装方便，在常规工业泵和搅拌器中得到广泛应用。",
    shortDesc: "非平衡型碳石墨密封环，中低压工况适用。",
    specs: [
      { label: "型号", value: "58U" },
      { label: "温度范围", value: "-20°C ~ 200°C" },
      { label: "压力", value: "≤ 0.8 MPa" },
      { label: "转速", value: "≤ 3000 rpm" },
    ],
    commonSizes: [
      { label: "内径 (d)", value: "16 ~ 80 mm" },
      { label: "外径 (D)", value: "28 ~ 100 mm" },
      { label: "高度 (H)", value: "8 ~ 20 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "碳化钨（WC）", "不锈钢", "陶瓷"],
    installationNotes: [
      "58U为非平衡型结构，安装时注意介质压力方向标识",
      "座孔清洗干净后检查有无毛刺，倒角光滑",
      "密封环压入座孔时使用专用压装工具，严禁锤击",
      "弹簧安装后压缩量应均匀，检查各弹簧高度一致",
      "首次启动前手动盘车灵活，确认无卡滞",
    ],
    applications: ["工业泵", "搅拌器", "混合机", "轻工设备"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: ["非平衡型结构", "结构紧凑", "安装便捷", "经济实用"],
    faq: [],
    image: "/images/products/seal-ring-placeholder.svg",
  },
  {
    slug: "m7n-series",
    name: "M7N型碳石墨密封环",
    model: "M7N系列",
    category: "碳石墨密封环",
    description: "M7N系列专为化工领域设计，具有良好的耐化学腐蚀性能。采用多弹簧结构，补偿能力强，适用于含颗粒介质的化工泵和反应釜搅拌器。",
    shortDesc: "化工领域碳石墨密封环，耐腐蚀多弹簧结构。",
    specs: [
      { label: "型号", value: "M7N" },
      { label: "温度范围", value: "-30°C ~ 220°C" },
      { label: "压力", value: "≤ 1.5 MPa" },
      { label: "转速", value: "≤ 3500 rpm" },
      { label: "适用介质", value: "化学品、酸、碱、溶剂" },
    ],
    commonSizes: [
      { label: "内径 (d)", value: "18 ~ 100 mm" },
      { label: "外径 (D)", value: "32 ~ 130 mm" },
      { label: "高度 (H)", value: "10 ~ 25 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "碳化钨（WC）", "氧化铝陶瓷（Al₂O₃）"],
    installationNotes: [
      "M7N多弹簧结构安装时注意各弹簧高度一致，防止偏载",
      "化工介质腐蚀性强，确认O形圈材质与介质兼容",
      "密封腔体排尽空气后再启动，防止干磨损伤密封面",
      "含颗粒介质工况建议密封面开槽设计，利于颗粒排出",
      "停机后冲洗密封腔，防止结晶或沉积物固化卡滞",
    ],
    applications: ["化工泵", "反应釜", "搅拌器", "制药设备"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: ["多弹簧结构补偿能力强", "耐化学腐蚀", "适用于含颗粒介质", "密封性能稳定"],
    faq: [],
    image: "/images/products/seal-ring-placeholder.svg",
  },
  {
    slug: "206-series",
    name: "206型碳石墨密封环",
    model: "206系列",
    category: "碳石墨密封环",
    description: "206系列双端面机械密封用碳石墨环，适用于需要冲洗或循环冷却的工况。双端面设计提供更高的密封安全性，适用于易泄漏或危险性介质。",
    shortDesc: "双端面机械密封碳石墨环，适用于高危介质。",
    specs: [
      { label: "型号", value: "206" },
      { label: "温度范围", value: "-20°C ~ 200°C" },
      { label: "压力", value: "≤ 2.0 MPa" },
      { label: "转速", value: "≤ 3000 rpm" },
    ],
    commonSizes: [
      { label: "内径 (d)", value: "20 ~ 90 mm" },
      { label: "外径 (D)", value: "36 ~ 120 mm" },
      { label: "高度 (H)", value: "10 ~ 22 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "碳化钨（WC）", "不锈钢"],
    installationNotes: [
      "206为双端面密封结构，安装注意冲洗接口朝向正确",
      "两端密封面安装时需保持平行度 ≤ 0.05 mm",
      "冲洗系统管路连接后先通循环液排尽管路空气",
      "双端面密封的冷却液流量按工况要求调整到位",
      "运行中注意监测缓冲液压力，保证始终高于介质压力",
    ],
    applications: ["化工泵", "危险介质泵", "高压反应釜", "制药设备"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: ["双端面设计", "高安全性", "适用于冲洗系统", "密封可靠性高"],
    faq: [],
    image: "/images/products/seal-ring-placeholder.svg",
  },
  {
    slug: "59u-series",
    name: "59U型碳石墨密封环",
    model: "59U系列",
    category: "碳石墨密封环",
    description: "59U系列为嵌入型碳石墨密封环，橡胶波纹管结构设计，具有很好的跟随补偿能力。适用于船舶水泵、海水泵及各类腐蚀性介质工况。",
    shortDesc: "嵌入型碳石墨密封环，适合船舶与海水泵。",
    specs: [
      { label: "型号", value: "59U" },
      { label: "温度范围", value: "-30°C ~ 180°C" },
      { label: "压力", value: "≤ 1.0 MPa" },
      { label: "转速", value: "≤ 3500 rpm" },
      { label: "适用介质", value: "海水、淡水、油类" },
    ],
    commonSizes: [
      { label: "内径 (d)", value: "14 ~ 80 mm" },
      { label: "外径 (D)", value: "26 ~ 100 mm" },
      { label: "高度 (H)", value: "8 ~ 20 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "碳化钨（WC）", "高铬不锈钢"],
    installationNotes: [
      "59U为橡胶波纹管结构，安装时避免波纹管扭曲变形",
      "嵌入安装时确认座孔倒角光滑，避免划伤橡胶件",
      "海水工况需选用耐海水腐蚀的浸渍牌号",
      "橡胶波纹管对温度敏感，注意介质温度不超过额定值",
      "安装后手动盘车检查波纹管有无干涉",
    ],
    applications: ["船舶泵", "海水泵", "冷却水泵", "通用工业"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: ["橡胶波纹管结构", "跟随补偿能力好", "耐海水腐蚀", "安装方便"],
    faq: [],
    image: "/images/products/seal-ring-placeholder.svg",
  },
  {
    slug: "204-series",
    name: "204型碳石墨密封环",
    model: "204系列",
    category: "碳石墨密封环",
    description: "204系列为轻型机械密封用碳石墨环，适用于中小型泵类设备。结构简单、成本经济，是大批量OEM应用的理想选择。",
    shortDesc: "轻型碳石墨密封环，适用于中小型泵类OEM。",
    specs: [
      { label: "型号", value: "204" },
      { label: "温度范围", value: "-20°C ~ 160°C" },
      { label: "压力", value: "≤ 0.6 MPa" },
      { label: "转速", value: "≤ 3000 rpm" },
    ],
    commonSizes: [
      { label: "内径 (d)", value: "6 ~ 50 mm" },
      { label: "外径 (D)", value: "16 ~ 70 mm" },
      { label: "高度 (H)", value: "4 ~ 12 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "高铬不锈钢", "陶瓷", "淬火工具钢"],
    installationNotes: [
      "204系列为轻型经济型设计，结构简单、安装便捷",
      "适用于大批量OEM安装，建议使用自动化压装设备",
      "对座孔加工精度要求相对较低，但倒角仍不可忽视",
      "压装力控制在推荐范围内，过大力值可能导致变形",
      "批量安装时建议抽检压装后的尺寸和密封端面跳动",
    ],
    applications: ["小型泵", "家用泵", "暖通空调", "农业设备"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: ["轻型经济设计", "大批量OEM适用", "结构简单", "性价比突出"],
    faq: [],
    image: "/images/products/seal-ring-placeholder.svg",
  },
  {
    slug: "58b-series",
    name: "58B型碳石墨密封环",
    model: "58B系列",
    category: "碳石墨密封环",
    description: "58B系列为中型机械密封环，平衡型结构设计使其能够承受较高压力。适用于电厂循环水泵、大型工业泵等高要求工况。",
    shortDesc: "平衡型碳石墨密封环，适用于中高压工况。",
    specs: [
      { label: "型号", value: "58B" },
      { label: "温度范围", value: "-20°C ~ 200°C" },
      { label: "压力", value: "≤ 2.0 MPa" },
      { label: "转速", value: "≤ 4000 rpm" },
    ],
    commonSizes: [
      { label: "内径 (d)", value: "20 ~ 100 mm" },
      { label: "外径 (D)", value: "36 ~ 130 mm" },
      { label: "高度 (H)", value: "10 ~ 24 mm" },
    ],
    matingMaterials: ["碳化硅（SiC）", "碳化钨（WC）", "不锈钢"],
    installationNotes: [
      "58B为平衡型结构，承压能力强，安装前确认压力等级匹配",
      "平衡型结构对安装对中要求高，轴跳动应 ≤ 0.04 mm",
      "密封腔体冷却充分后再启动，避免高温冲击",
      "螺栓按推荐扭矩分2~3次对称拧紧",
      "首次启动后监测温度和泄漏量，稳定后再带载运行",
    ],
    applications: ["循环水泵", "大型工业泵", "电厂设备", "供水系统"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: ["平衡型结构", "承压能力高", "适用于高速工况", "耐用性强"],
    faq: [],
    image: "/images/products/seal-ring-placeholder.svg",
  },
  {
    slug: "graphite-bushing",
    name: "石墨套",
    model: "SB系列",
    category: "碳石墨轴套",
    description:
      "石墨套（碳石墨衬套）采用优质碳石墨材料制成，具有优异的自润滑性能和耐温耐腐蚀特性。适用于无油润滑或油润滑不足工况下的旋转或往复运动部件支撑与导向。广泛应用于潜水泵、污水泵、化工泵及各类工业泵中，可在水、油及多种化学品介质中长期稳定运行。支持按图纸非标定制。",
    shortDesc: "自润滑碳石墨衬套，耐高温耐腐蚀，适用于泵类及水下设备。",
    specs: [
      { label: "型号", value: "SB100 / SB200 / SB300（可按图定制）" },
      { label: "温度范围", value: "-50°C ~ 300°C（抗氧化浸渍可达350°C）" },
      { label: "压力范围", value: "≤ 15 MPa" },
      { label: "转速", value: "≤ 20 m/s" },
      { label: "适用介质", value: "清水、污水、海水、油类、弱酸弱碱及有机溶剂" },
      { label: "材料牌号", value: "M126D / M204K / M254K 等" },
    ],
    applications: ["潜水泵", "污水泵", "化工泵", "阀门", "液压设备"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: [
      "自润滑性能优异，可在干运转或边界润滑条件下工作",
      "耐温范围广，抗氧化牌号可承受350°C峰值温度",
      "化学惰性强，耐酸、碱及有机溶剂侵蚀",
      "尺寸稳定性好，热膨胀系数低，适合精密配合",
      "可按客户图纸定制非标尺寸和外形",
      "摩檫系数低，减少对偶件磨损，延长设备寿命",
    ],
    faq: [
      { q: "石墨套需要加油润滑吗？", a: "不需要。碳石墨具有天然自润滑特性，可在无油润滑工况下正常运行。但在条件允许的情况下，辅助润滑可进一步延长使用寿命。" },
      { q: "是否可以按图纸定制？", a: "完全可以。我们拥有成熟的非标定制能力，提供来图加工服务。请提供详细尺寸图纸或样品，我们的工程师将在24小时内给出方案。" },
    ],
    image: "/images/products/graphite-bushing.png",
  },
  {
    slug: "graphite-bearing",
    name: "石墨轴承",
    model: "GB系列",
    category: "碳石墨轴套",
    description:
      "石墨轴承采用高强度碳石墨材料制成，专为承受较高径向载荷的旋转设备设计。优异的自润滑特性使其特别适用于无法使用油脂润滑或维护困难的工况。广泛应用于船舶艉轴轴承、水泵轴承、搅拌器轴承及各类工业机械中，可在水下、油中及多种化学品介质中长期稳定运行。",
    shortDesc: "高强度自润滑石墨轴承，适用于重载旋转设备。",
    specs: [
      { label: "型号", value: "GB100 / GB200 / GB300（可按图定制）" },
      { label: "温度范围", value: "-50°C ~ 300°C（抗氧化浸渍可达350°C）" },
      { label: "压力范围", value: "≤ 20 MPa" },
      { label: "转速", value: "≤ 15 m/s" },
      { label: "适用介质", value: "清水、海水、油类、弱酸弱碱及有机溶剂" },
      { label: "材料牌号", value: "M204K / M254K / M126D 等" },
    ],
    applications: ["船舶艉轴", "搅拌器", "化工泵", "压缩机", "矿山设备"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: [
      "高承载能力，适用于重载旋转工况",
      "天然自润滑，无需外部润滑系统",
      "耐高温耐腐蚀，适应多种恶劣环境",
      "启动和停机阶段保持良好润滑状态",
      "可按图纸定制尺寸和公差",
      "运行安静平稳，降低设备振动",
    ],
    faq: [
      { q: "石墨轴承能承受多大载荷？", a: "GB系列石墨轴承根据牌号和浸渍工艺不同，可承受的径向载荷范围在5~20 MPa之间。请提供具体工况参数，我们的工程师将为您推荐最合适的牌号。" },
      { q: "石墨轴承适用于海水环境吗？", a: "适用。采用耐腐蚀浸渍工艺的石墨轴承可在海水环境中长期稳定运行，是船舶艉轴轴承和海水泵轴承的理想选择。" },
    ],
    image: "/images/products/graphite-bearing.png",
  },
  {
    slug: "graphite-thrust-disc",
    name: "石墨推力盘",
    model: "TD系列",
    category: "碳石墨轴套",
    description:
      "石墨推力盘（又称石墨止推盘、石墨耐磨盘）采用优质碳石墨材料制成，专门用于承受轴向推力载荷。具有优异的耐磨性能和自润滑特性，适用于立式泵、潜水泵、搅拌器等设备中的轴向定位与承载。可在无润滑或边界润滑条件下长期稳定运行，有效保护设备端面，防止金属对磨。",
    shortDesc: "耐磨自润滑石墨推力盘，适用于轴向承载与定位。",
    specs: [
      { label: "型号", value: "TD100 / TD200 / TD300（可按图定制）" },
      { label: "温度范围", value: "-40°C ~ 280°C（抗氧化浸渍可达350°C）" },
      { label: "轴向载荷", value: "≤ 10 MPa" },
      { label: "转速", value: "≤ 15 m/s" },
      { label: "适用介质", value: "清水、污水、油类、化学品" },
      { label: "材料牌号", value: "M126D / M204K / M254K 等" },
    ],
    applications: ["立式泵", "潜水泵", "搅拌器", "离心泵", "液压设备"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
    features: [
      "优异的耐磨性能，使用寿命长",
      "自润滑特性，无需外部供油",
      "有效承载轴向推力，保护设备端面",
      "耐高温耐腐蚀，适应多种工况",
      "支持按图纸非标定制尺寸和厚度",
      "更换方便，维护成本低",
    ],
    faq: [
      { q: "石墨推力盘和石墨轴承有什么区别？", a: "石墨推力盘主要承受轴向推力载荷，安装在轴的端面位置；石墨轴承则主要承受径向载荷，安装在轴套位置。两者的应用场景和受力方向不同。" },
      { q: "是否可以定制非标尺寸的推力盘？", a: "完全可以。请提供详细图纸或样品，我们可以根据您的需求定制外径、内径、厚度及安装孔位。" },
    ],
    image: "/images/products/graphite-thrust-disc.png",
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
    applications: ["压缩机", "离心泵", "船舶设备", "化工设备", "蒸汽透平", "石墨轴套", "石墨三瓣环"],
    materials: ["普通石墨", "浸树脂石墨", "浸锑石墨", "浸铜石墨"],
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
    image: "/images/products/three-part-ring.jpg",
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
