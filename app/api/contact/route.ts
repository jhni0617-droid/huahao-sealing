import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { getDb } from "@/lib/admin/db"

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.mxhichina.com",
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
    const { name, email, phone, company, productType, industry, temperature, pressure, medium, speed, quantity, message, product, fileName, fileContent } = body

    if (!email || !message) {
      return NextResponse.json({ error: "请填写邮箱和留言" }, { status: 400 })
    }

    // Save to database
    try {
      const db = getDb()
      db.prepare(`
        INSERT INTO inquiries (name, email, phone, company, product_type, industry, temperature, pressure, medium, speed, quantity, message, product, file_name, file_content)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        name, email, phone || "", company || "", productType || "", industry || "",
        temperature || "", pressure || "", medium || "", speed || "", quantity || "",
        message, product || "", fileName || null, fileContent || null,
      )
    } catch (dbError) {
      console.error("DB save error (non-fatal):", dbError)
    }

    // Send email via SMTP (Alibaba Enterprise Email)
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
      from: `华豪官网 <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `新询价 - ${name}${company ? ` (${company})` : ""}`,
      text: `收到新的询价信息：

${bodyText}

留言:
${message}
---
发送时间: ${new Date().toLocaleString("zh-CN")}`,
    }

    if (fileName && fileContent) {
      mailOptions.attachments = [{ filename: fileName, content: fileContent }]
    }

    const transporter = createTransporter()
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Inquiry received" })
  } catch (error: any) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 },
    )
  }
}
