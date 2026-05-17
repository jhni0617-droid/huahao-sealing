import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, product } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const productInfo = product ? `\n产品: ${product}` : ""
    const phoneInfo = phone ? `\n电话: ${phone}` : ""

    await resend.emails.send({
      from: "华豪官网 <noreply@huahaoindustrial.com>",
      to: "sales@huahaosealing.com",
      subject: `新询价 - ${name}`,
      text: `收到新的询价信息：

姓名: ${name}
邮箱: ${email}${phoneInfo}${productInfo}
留言:
${message}
---
发送时间: ${new Date().toLocaleString("zh-CN")}`,
    })

    return NextResponse.json({ success: true, message: "Inquiry received" })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
