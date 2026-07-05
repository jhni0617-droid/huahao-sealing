import path from "path"
import { createRequire } from "module"

const require = createRequire(import.meta.url)
const IP2Region = require("ip2region").default
const packageDir = path.dirname(require.resolve("ip2region/package.json"))
const dataDir = path.join(packageDir, "data")
console.log("Data dir:", dataDir)

const ip2region = new IP2Region({
  ipv4db: path.join(dataDir, "ip2region.db"),
  ipv6db: path.join(dataDir, "ipv6wry.db"),
})

const testIps = ["114.114.114.114", "8.8.8.8", "1.1.1.1", "223.5.5.5", "202.108.22.5", "180.101.49.11"]
testIps.forEach((ip) => {
  const result = ip2region.search(ip)
  console.log(ip, "->", JSON.stringify(result))
})