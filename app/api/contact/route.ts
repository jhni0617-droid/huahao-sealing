import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Format the inquiry data
    const inquiry = {
      name,
      email,
      phone: phone || "N/A",
      message,
      receivedAt: new Date().toISOString(),
    }

    // Log inquiry (in production, send email or save to database)
    console.log("New inquiry received:", inquiry)

    // For production: integrate with email service (SendGrid, Resend, etc.)
    // await sendEmail({ ... })

    return NextResponse.json({ success: true, message: "Inquiry received" })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
