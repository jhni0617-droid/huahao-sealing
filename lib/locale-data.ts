/**
 * Locale-aware data getter.
 * Returns data for the matching locale, falling back to English for unsupported locales.
 */
export function getLocalized<T>(data: Record<string, T>, locale: string): T {
  return data[locale] ?? data.en ?? data.zh
}

export const localizedSiteConfig = {
  zh: {
    name: "华豪密封",
    fullName: "霍邱县华豪密封件有限公司",
    description:
      "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环，应用于泵类、船舶设备、化工处理和通用工业领域。",
    address: "中国安徽省六安市霍邱县龙潭镇产业园14号",
  },
  en: {
    name: "Huahao Sealing",
    fullName: "Huahao Carbon Graphite Sealing Co., Ltd.",
    description:
      "Professional manufacturer of carbon graphite seal rings, bushings/bearings, and split rings for pumps, marine equipment, chemical processing, and general industry.",
    address: "No.14, Longtan Town Industrial Park, Huoqiu County, Lu'an, Anhui, China",
  },
  vi: {
    name: "Huahao Sealing",
    fullName: "Huahao Carbon Graphite Sealing Co., Ltd.",
    description:
      "Nhà sản xuất chuyên nghiệp vòng đệm than chì carbon, bạc lót/vòng bi và vòng phân đoạn cho bơm, thiết bị hàng hải, xử lý hóa chất và công nghiệp tổng hợp.",
    address: "Số 14, Khu công nghiệp thị trấn Longtan, huyện Huoqiu, Lu'an, An Huy, Trung Quốc",
  },
  th: {
    name: "Huahao Sealing",
    fullName: "Huahao Carbon Graphite Sealing Co., Ltd.",
    description:
      "ผู้ผลิตมืออาชีพด้านแหวนซีลคาร์บอนกราไฟต์ บุชชิ่ง/แบริ่ง และแหวนแยก สำหรับปั๊ม อุปกรณ์ทางทะเล กระบวนการเคมี และอุตสาหกรรมทั่วไป",
    address: "เลขที่ 14 สวนอุตสาหกรรมเมืองหลงถาน อำเภอฮั่วชิว เมืองลู่อัน มณฑลอานฮุย ประเทศจีน",
  },
  ru: {
    name: "Huahao Sealing",
    fullName: "Huahao Carbon Graphite Sealing Co., Ltd.",
    description:
      "Профессиональный производитель углеграфитовых уплотнительных колец, втулок/подшипников и разрезных колец для насосов, морского оборудования, химических процессов и промышленности.",
    address: "No.14, Longtan Town Industrial Park, Huoqiu County, Lu'an, Anhui, China",
  },
  ja: {
    name: "Huahao Sealing",
    fullName: "Huahao Carbon Graphite Sealing Co., Ltd.",
    description:
      "ポンプ、船舶機器、化学プロセス、一般産業向けカーボングラファイトシールリング、ブッシュ/ベアリング、分割リングの専門メーカーです。",
    address: "中国安徽省六安市霍邱県龍潭鎮産業園14号",
  },
  ko: {
    name: "Huahao Sealing",
    fullName: "Huahao Carbon Graphite Sealing Co., Ltd.",
    description:
      "펌프, 선박 장비, 화학 공정 및 일반 산업용 카본 그라파이트 씰링, 부싱/베어링, 분할 링 전문 제조업체입니다.",
    address: "중국 안후이성 루안시 훠추현 룽탄진 산업단지 14호",
  },
}

export const localizedProductCategories = {
  zh: {
    "碳石墨密封环": "碳石墨密封环",
    "碳石墨轴套": "碳石墨轴套 / 轴承",
    "碳石墨三瓣环": "碳石墨三瓣环",
  },
  en: {
    "碳石墨密封环": "Carbon Graphite Seal Rings",
    "碳石墨轴套": "Carbon Graphite Bushings / Bearings",
    "碳石墨三瓣环": "Carbon Graphite Split Rings",
  },
  vi: {
    "碳石墨密封环": "Vòng đệm than chì carbon",
    "碳石墨轴套": "Bạc lót / vòng bi than chì carbon",
    "碳石墨三瓣环": "Vòng phân đoạn than chì carbon",
  },
  th: {
    "碳石墨密封环": "แหวนซีลคาร์บอนกราไฟต์",
    "碳石墨轴套": "บุชชิ่ง / แบริ่งคาร์บอนกราไฟต์",
    "碳石墨三瓣环": "แหวนแยกคาร์บอนกราไฟต์",
  },
  ru: {
    "碳石墨密封环": "Уплотнительные кольца из углеродного графита",
    "碳石墨轴套": "Втулки / подшипники из углеродного графита",
    "碳石墨三瓣环": "Разрезные кольца из углеродного графита",
  },
  ja: {
    "碳石墨密封环": "カーボングラファイトシールリング",
    "碳石墨轴套": "カーボングラファイトブッシュ / ベアリング",
    "碳石墨三瓣环": "カーボングラファイト分割リング",
  },
  ko: {
    "碳石墨密封环": "카본 그라파이트 씰링",
    "碳石墨轴套": "카본 그라파이트 부싱 / 베어링",
    "碳石墨三瓣环": "카본 그라파이트 분할 링",
  },
}

export function getLocalizedSiteConfig(locale: string) {
  return getLocalized(localizedSiteConfig, locale)
}

export function getLocalizedProductCategory(category: string, locale: string) {
  const categories = getLocalized(localizedProductCategories, locale)
  return categories[category as keyof typeof categories] || category
}
