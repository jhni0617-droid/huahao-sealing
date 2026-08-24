import { NextRequest, NextResponse, after } from "next/server"
import nodemailer from "nodemailer"
import { getDb, dbRun } from "@/lib/admin/db"
import { sendCapiLead } from "@/lib/meta/capi"
import { extractClientIp } from "@/lib/ip-geolocation"

// 邮箱正则：本地部分(字母数字._%+-) @ 域名(字母数字.-) . TLD(≥2字母)
// 与 components/ContactForm.tsx 保持一致，前后端共用同一规格
// 用于过滤机器人提交的无效邮箱（如 a@b.c / test@test / 随机字符串）
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.qiye.aliyun.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, productType, industry, temperature, pressure, medium, speed, quantity, message, product, fileName, fileContent, _hp, _hp2, _hp3, _t0 } = body

    // Honeypot 反机器人：任一隐藏诱饵字段被填即判定为机器人
    // 三个诱饵字段（website/url/phone_alt）覆盖不同机器人扫描策略
    if (_hp || _hp2 || _hp3) {
      return NextResponse.json({ success: true, message: "Inquiry received" })
    }

    // 提交时间检测：< 1.5 秒视为机器人秒填（人类填写+翻页至少数秒）
    // 静默返回 200 不暴露拒绝逻辑，迷惑机器人继续浪费资源
    const SUBMIT_MIN_MS = 1500
    if (_t0) {
      const elapsed = Date.now() - Number(_t0)
      if (!Number.isNaN(elapsed) && elapsed < SUBMIT_MIN_MS) {
        return NextResponse.json({ success: true, message: "Inquiry received" })
      }
    }

    // 邮箱必填且必须符合规格（过滤机器人提交的无效邮箱）
    // 电话号码可选：不强制填写
    if (!email || !message) {
      return NextResponse.json({ error: "请填写邮箱和留言" }, { status: 400 })
    }

    if (!EMAIL_RE.test(String(email).trim())) {
      return NextResponse.json({ error: "邮箱格式不正确" }, { status: 400 })
    }

    // 构造邮件内容
    const fields = [
      ["姓名", name],
      ["邮箱", email],
      ["电话", phone],
      ["公司", company],
      ["产品类型", productType],
      ["应用行业", industry],
      ["工作温度", temperature],
      ["工作压力", pressure],
      ["介质类型", medium],
      ["转速", speed],
      ["预估数量", quantity],
      ["产品", product],
    ].filter(([, v]) => v)

    const bodyText = fields.map(([label, value]) => `${label}: ${value}`).join("\n")

    const mailOptions: nodemailer.SendMailOptions = {
      from: `Huahao Website Inquiry <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` (${company})` : ""} - huahaoindustrial.com`,
      text: `New inquiry received from huahaoindustrial.com contact form:

${bodyText}

Message:
${message}
---
Sent: ${new Date().toLocaleString("zh-CN")}
Customer email: ${email}
Customer phone: ${phone || "N/A"}
Company: ${company || "N/A"}

⚠️ Reply to this email will go to the customer directly (replyTo: ${email})`,

      headers: {
        "X-Mailer": "HuahaoSealing-ContactForm",
        "X-Auto-Response-Suppress": "OOF, AutoReply",
      },
    }

    if (fileName && fileContent) {
      mailOptions.attachments = [{ filename: fileName, content: fileContent, encoding: "base64" }]
    }

    // 数据库保存和邮件发送并行执行，总耗时 = max(DB, SMTP) 而非两者之和
    const transporter = createTransporter()
    const [dbResult, mailResult] = await Promise.allSettled([
      (async () => {
        const db = await getDb()
        await dbRun(
          `INSERT INTO inquiries (name, email, phone, company, product_type, industry, temperature, pressure, medium, speed, quantity, message, product, file_name, file_content)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [name, email, phone || "", company || "", productType || "", industry || "",
            temperature || "", pressure || "", medium || "", speed || "", quantity || "",
            message, product || "", fileName || null, fileContent || null],
        )
      })(),
      transporter.sendMail(mailOptions),
    ])

    // 数据库保存失败：记录日志（非致命）
    if (dbResult.status === "rejected") {
      console.error("DB save error (non-fatal):", dbResult.reason)
    }

    // 邮件发送失败：记录日志（非致命，询价已存入数据库则后台可见）
    if (mailResult.status === "rejected") {
      console.error("Email send failed (non-fatal):", mailResult.reason)
    }

    // Meta 转化 API：异步上报 Lead（不阻塞响应）。浏览器 Pixel 端会用同一
    // metaEventId 上报，Meta 据此去重，保证浏览器被拦截/跳出时转化仍被记录。
    const metaEventId = typeof body.metaEventId === "string" ? body.metaEventId : undefined
    if (metaEventId) {
      // after() 在响应发送后继续执行（Vercel Serverless 上不会被冻结中断）
      after(() => {
        sendCapiLead({
          eventId: metaEventId,
          email,
          phone: phone || undefined,
          name: name || undefined,
          fbp: typeof body.metaFbp === "string" ? body.metaFbp : undefined,
          fbc: typeof body.metaFbc === "string" ? body.metaFbc : undefined,
          ip: extractClientIp(request.headers),
          userAgent: request.headers.get("user-agent") || undefined,
          product: productType || product || undefined,
        })
          .then((r) => {
            if (r.ok && process.env.NODE_ENV === "development") {
              console.log("[meta-capi] Lead sent:", r.response)
            }
          })
          .catch((e) => console.error("[meta-capi] async error:", e))
      })
    }

    return NextResponse.json({ success: true, message: "Inquiry received" })
  } catch (error: any) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 },
    )
  }
}
