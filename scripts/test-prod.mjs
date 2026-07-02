import https from "https"

function fetch(url, opts = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, opts, (res) => {
      let data = ""
      res.on("data", (chunk) => (data += chunk))
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: data }))
    })
    req.on("error", reject)
    if (opts.body) req.write(opts.body)
    req.end()
  })
}

async function main() {
  console.log("=== Testing production deployment ===")

  const loginRes = await fetch("https://huahaoindustrial.com/api/admin/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "admin", password: "qqnjh123" }),
  })

  console.log("Login:", loginRes.status)
  if (loginRes.status !== 200) {
    console.log("Login failed:", loginRes.body)
    process.exit(1)
  }

  const cookie = loginRes.headers["set-cookie"]?.[0]?.split(";")[0]
  console.log("Cookie:", cookie ? cookie.slice(0, 50) + "..." : "none")

  const dashRes = await fetch("https://huahaoindustrial.com/api/admin/dashboard", {
    headers: { cookie },
  })

  console.log("Dashboard:", dashRes.status)
  if (dashRes.status === 200) {
    const data = JSON.parse(dashRes.body)
    console.log("\nStats:", JSON.stringify(data.data.stats))
    console.log("Visits:", JSON.stringify(data.data.visits))
    console.log("\n✅ Production is working!")
  } else {
    console.log("Dashboard failed:", dashRes.body)
  }
}

main().catch(console.error)