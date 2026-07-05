import path from "path"
import { createRequire } from "module"
import fs from "fs"

let ip2regionInstance: any = null
let initError: Error | null = null
let initAttempted = false

function getIp2Region() {
  if (initAttempted) return { ip2region: ip2regionInstance, initError }

  initAttempted = true

  try {
    const require = createRequire(import.meta.url)
    const IP2Region = require("ip2region").default

    const packageDir = path.dirname(require.resolve("ip2region/package.json"))
    const dataDir = path.join(packageDir, "data")

    const ipv4db = path.join(dataDir, "ip2region.db")
    const ipv6db = path.join(dataDir, "ipv6wry.db")

    if (!fs.existsSync(ipv4db)) {
      initError = new Error(`IPv4 database not found: ${ipv4db}`)
      return { ip2region: null, initError }
    }

    ip2regionInstance = new IP2Region({ ipv4db, ipv6db })
  } catch (e: any) {
    initError = e
    ip2regionInstance = null
  }

  return { ip2region: ip2regionInstance, initError }
}

const COUNTRY_NAME_TO_CODE: Record<string, string> = {
  "中国": "CN",
  "香港": "HK",
  "澳门": "MO",
  "台湾": "TW",
  "日本": "JP",
  "韩国": "KR",
  "朝鲜": "KP",
  "蒙古": "MN",
  "越南": "VN",
  "泰国": "TH",
  "菲律宾": "PH",
  "马来西亚": "MY",
  "新加坡": "SG",
  "印度尼西亚": "ID",
  "印度": "IN",
  "巴基斯坦": "PK",
  "孟加拉国": "BD",
  "斯里兰卡": "LK",
  "尼泊尔": "NP",
  "不丹": "BT",
  "马尔代夫": "MV",
  "哈萨克斯坦": "KZ",
  "乌兹别克斯坦": "UZ",
  "吉尔吉斯斯坦": "KG",
  "塔吉克斯坦": "TJ",
  "土库曼斯坦": "TM",
  "阿富汗": "AF",
  "伊朗": "IR",
  "伊拉克": "IQ",
  "沙特阿拉伯": "SA",
  "阿联酋": "AE",
  "科威特": "KW",
  "卡塔尔": "QA",
  "阿曼": "OM",
  "巴林": "BH",
  "以色列": "IL",
  "黎巴嫩": "LB",
  "约旦": "JO",
  "叙利亚": "SY",
  "土耳其": "TR",
  "塞浦路斯": "CY",
  "德国": "DE",
  "英国": "GB",
  "法国": "FR",
  "意大利": "IT",
  "西班牙": "ES",
  "葡萄牙": "PT",
  "荷兰": "NL",
  "比利时": "BE",
  "瑞典": "SE",
  "挪威": "NO",
  "丹麦": "DK",
  "芬兰": "FI",
  "俄罗斯": "RU",
  "乌克兰": "UA",
  "波兰": "PL",
  "捷克": "CZ",
  "匈牙利": "HU",
  "罗马尼亚": "RO",
  "保加利亚": "BG",
  "希腊": "GR",
  "瑞士": "CH",
  "奥地利": "AT",
  "爱尔兰": "IE",
  "冰岛": "IS",
  "卢森堡": "LU",
  "摩纳哥": "MC",
  "列支敦士登": "LI",
  "安道尔": "AD",
  "圣马力诺": "SM",
  "马耳他": "MT",
  "斯洛伐克": "SK",
  "斯洛文尼亚": "SI",
  "克罗地亚": "HR",
  "塞尔维亚": "RS",
  "波黑": "BA",
  "黑山": "ME",
  "北马其顿": "MK",
  "阿尔巴尼亚": "AL",
  "立陶宛": "LT",
  "拉脱维亚": "LV",
  "爱沙尼亚": "EE",
  "白俄罗斯": "BY",
  "摩尔多瓦": "MD",
  "格鲁吉亚": "GE",
  "亚美尼亚": "AM",
  "阿塞拜疆": "AZ",
  "美国": "US",
  "加拿大": "CA",
  "墨西哥": "MX",
  "古巴": "CU",
  "牙买加": "JM",
  "海地": "HT",
  "多米尼加": "DO",
  "巴拿马": "PA",
  "哥斯达黎加": "CR",
  "危地马拉": "GT",
  "洪都拉斯": "HN",
  "萨尔瓦多": "SV",
  "尼加拉瓜": "NI",
  "伯利兹": "BZ",
  "巴哈马": "BS",
  "巴巴多斯": "BB",
  "特立尼达和多巴哥": "TT",
  "巴西": "BR",
  "阿根廷": "AR",
  "智利": "CL",
  "哥伦比亚": "CO",
  "秘鲁": "PE",
  "委内瑞拉": "VE",
  "厄瓜多尔": "EC",
  "玻利维亚": "BO",
  "巴拉圭": "PY",
  "乌拉圭": "UY",
  "圭亚那": "GY",
  "苏里南": "SR",
  "澳大利亚": "AU",
  "新西兰": "NZ",
  "巴布亚新几内亚": "PG",
  "斐济": "FJ",
  "萨摩亚": "WS",
  "汤加": "TO",
  "瓦努阿图": "VU",
  "所罗门群岛": "SB",
  "密克罗尼西亚": "FM",
  "马绍尔群岛": "MH",
  "帕劳": "PW",
  "基里巴斯": "KI",
  "图瓦卢": "TV",
  "瑙鲁": "NR",
  "埃及": "EG",
  "南非": "ZA",
  "尼日利亚": "NG",
  "肯尼亚": "KE",
  "摩洛哥": "MA",
  "阿尔及利亚": "DZ",
  "突尼斯": "TN",
  "利比亚": "LY",
  "苏丹": "SD",
  "埃塞俄比亚": "ET",
  "坦桑尼亚": "TZ",
  "乌干达": "UG",
  "加纳": "GH",
  "科特迪瓦": "CI",
  "塞内加尔": "SN",
  "马里": "ML",
  "布基纳法索": "BF",
  "尼日尔": "NE",
  "多哥": "TG",
  "贝宁": "BJ",
  "喀麦隆": "CM",
  "加蓬": "GA",
  "刚果": "CG",
  "安哥拉": "AO",
  "莫桑比克": "MZ",
  "津巴布韦": "ZW",
  "赞比亚": "ZM",
  "马拉维": "MW",
  "纳米比亚": "NA",
  "博茨瓦纳": "BW",
  "莱索托": "LS",
  "斯威士兰": "SZ",
  "马达加斯加": "MG",
  "毛里求斯": "MU",
  "塞舌尔": "SC",
  "佛得角": "CV",
  "几内亚": "GN",
  "索马里": "SO",
  "卢旺达": "RW",
  "布隆迪": "BI",
  "乍得": "TD",
  "中非": "CF",
  "吉布提": "DJ",
  "厄立特里亚": "ER",
  "冈比亚": "GM",
  "塞拉利昂": "SL",
  "利比里亚": "LR",
  "几内亚比绍": "GW",
  "赤道几内亚": "GQ",
  "圣多美和普林西比": "ST",
  "科摩罗": "KM",
  "缅甸": "MM",
  "柬埔寨": "KH",
  "老挝": "LA",
  "文莱": "BN",
  "东帝汶": "TL",
  "格陵兰": "GL",
}

export function getCountryCodeByIp(ip: string): string | null {
  if (!ip || ip === "unknown" || ip === "127.0.0.1" || ip === "::1") {
    return null
  }

  if (ip.startsWith("192.168.") || ip.startsWith("10.") || ip.startsWith("172.16.")) {
    return null
  }

  try {
    const { ip2region, initError: err } = getIp2Region()
    if (!ip2region) {
      console.warn("[ip-geolocation] ip2region not available:", err?.message)
      return null
    }

    const result = ip2region.search(ip)
    if (result && result.country) {
      const countryName = result.country as string
      const code = COUNTRY_NAME_TO_CODE[countryName]
      if (!code) {
        console.warn(`[ip-geolocation] Unknown country name: "${countryName}" for IP: ${ip}`)
      }
      return code || null
    }
    return null
  } catch (e: any) {
    console.warn("[ip-geolocation] search error:", e?.message)
    return null
  }
}

export function extractClientIp(headers: Headers): string {
  const xVercelForwardedFor = headers.get("x-vercel-forwarded-for")
  if (xVercelForwardedFor) {
    const ip = xVercelForwardedFor.split(",")[0].trim()
    if (ip) return ip
  }

  const xForwardedFor = headers.get("x-forwarded-for")
  if (xForwardedFor) {
    const ips = xForwardedFor.split(",").map((s) => s.trim()).filter(Boolean)
    if (ips.length > 0) {
      return ips[0]
    }
  }

  const xRealIp = headers.get("x-real-ip")
  if (xRealIp) return xRealIp

  const cfConnectingIp = headers.get("cf-connecting-ip")
  if (cfConnectingIp) return cfConnectingIp

  return "unknown"
}