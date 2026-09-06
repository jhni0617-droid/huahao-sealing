/**
 * 访问/事件统计共用的后端工具：bot 识别、外部来源解析。
 * /api/visit 与 /api/event 共用，保持两处行为一致。
 */

export const BOT_KEYWORDS = [
  "bot", "crawler", "spider", "archiver", "slurp", "baidu", "bingpreview",
  "facebookexternalhit", "twitterbot", "linkedinbot", "telegrambot",
  "whatsapp", "applebot", "yandex", "duckduckbot", "sogou", "exabot",
  "ia_archiver", "siteaudit", "semrush", "ahrefsbot", "dataforseo",
  "mj12bot", "dotbot", "petalbot", "bytespider", "googleother",
  "claudebot", "gptbot", "ccbot", "anthropic-ai", "oai-searchbot",
  "perfcraw", "headlesschrome", "phantomjs", "selenium", "puppeteer",
  "wget", "curl", "python-requests", "go-http-client", "node-fetch",
  "httpclient", "httpx", "scrapy", "java/",
  "googlebot", "bingbot", "msnbot", "yahoo", "teoma", "ask jeeves",
  "scrubby", "yandexbot", "yandexsearch", "sogou spider",
  "360spider", "so.com", "haosou", "baiduspider", "baiduimage",
  "linkedinbot", "facebookbot", "pinterest", "slackbot",
  "redditbot", "discordbot", "whatsappbot", "linebot", "kakao",
  "tiktokbot", "douyin", "xiaohongshu", "snapchatbot", "instagram",
  "twitchbot", "twitterbot", "telegram", "messenger", "skype",
  "google-assistant", "alexa", "siri", "cortana",
  "baidu-ai", "alibaba", "toutiao", "meituan", "jd",
  "qqbot", "wechatbot", "weixin", "smtbot", "youdaobot",
  "google-cloud", "aws-sdk", "azure-sdk", "digitalocean", "cloudflare",
]

export function isBotUA(ua: string): boolean {
  // 无 User-Agent（健康检查、脚本、部分爬虫）一律视为非真实访客
  if (!ua || !ua.trim()) return true
  const lower = ua.toLowerCase()
  if (BOT_KEYWORDS.some((k) => lower.includes(k))) return true
  // 常见脚本/非浏览器特征（无 bot 字样）
  if (/^(python|curl|wget|go-http-client|node|java\/|okhttp|axios|httpclient|ruby|perl|php|powershell|lua)/.test(lower)) return true
  return false
}

export function extractReferrer(referrer: string | null, host: string | null): string | null {
  if (!referrer) return null
  try {
    const u = new URL(referrer)
    // 同源跳转（含端口差异，如 localhost:3005 → localhost）不算外部来源
    if (host) {
      const hostname = host.replace(/:\d+$/, "").toLowerCase()
      if (u.hostname.toLowerCase() === hostname) return null
    }
    return u.hostname
  } catch {
    return null
  }
}
