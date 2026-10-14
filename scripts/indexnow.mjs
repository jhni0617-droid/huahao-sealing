// IndexNow 推送：把 URL 立刻告诉 Bing / Yandex / Seznam / Naver 等参与引擎。
// 用法：
//   npm run indexnow                      # 推送 sitemap.xml 里的全部 URL
//   npm run indexnow -- https://hhseal.cn/en/blog/xxx   # 只推指定 URL
import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const HOST = "hhseal.cn"
const SITEMAP = `https://${HOST}/sitemap.xml`

function readKey() {
  if (process.env.INDEXNOW_KEY) return process.env.INDEXNOW_KEY.trim()
  const env = readFileSync(resolve(import.meta.dirname, "../.env.local"), "utf8")
  const m = env.match(/^INDEXNOW_KEY=(.+)$/m)
  if (!m) throw new Error("缺少 INDEXNOW_KEY（.env.local）")
  return m[1].trim()
}

async function fromSitemap() {
  const xml = await fetch(SITEMAP).then((r) => {
    if (!r.ok) throw new Error(`sitemap 抓取失败 ${r.status}`)
    return r.text()
  })
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

const key = readKey()
const argUrls = process.argv.slice(2).filter((a) => a.startsWith("http"))
const urlList = argUrls.length ? argUrls : await fromSitemap()

// 超过单请求上限就分批
for (let i = 0; i < urlList.length; i += 10000) {
  const batch = urlList.slice(i, i + 10000)
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList: batch }),
  })
  console.log(`推送 ${batch.length} 条 → HTTP ${res.status} ${res.statusText}`)
  if (!res.ok) console.log((await res.text()).slice(0, 400))
}
