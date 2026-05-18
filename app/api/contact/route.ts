import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { getDb } from "@/lib/admin/db"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, productType, industry, temperature, pressure, medium, speed, quantity, message, product, fileName, fileContent } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
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

    // Send email
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

    const emailPayload: any = {
      from: "华豪官网 <noreply@huahaoindustrial.com>",
      to: "seals@huahaoindustrial.com",
      subject: `新询价 - ${name}${company ? ` (${company})` : ""}`,
      text: `收到新的询价信息：

${bodyText}

留言:
${message}
---
发送时间: ${new Date().toLocaleString("zh-CN")}`,
    }

    if (fileName && fileContent) {
      emailPayload.attachments = [{ filename: fileName, content: fileContent }]
    }

    await resend.emails.send(emailPayload)

    return NextResponse.json({ success: true, message: "Inquiry received" })
  } catch (error: any) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 },
    )
  }
}
