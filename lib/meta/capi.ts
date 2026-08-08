import { createHash } from "crypto"

/**
 * Meta 转化 API（Conversions API, CAPI）服务端工具
 *
 * 用途：把网站转化事件（如询价表单提交 = Lead）直接从服务器上报到
 * Meta 广告系统，与浏览器端 Meta Pixel 双通道配合（同 event_id 去重），
 * 以提升广告投放的转化追踪可靠性。
 *
 * 配置（环境变量）：
 * - NEXT_PUBLIC_META_PIXEL_ID      —— Pixel ID（公开）
 * - META_CAPI_ACCESS_TOKEN         —— 转化 API 访问令牌（保密，仅服务端）
 * - META_CAPI_TEST_EVENT_CODE      —— 可选，Events Manager 中的测试事件代码
 *
 * 隐私：Meta 要求 em/ph/fn 等 PII 字段在服务端 SHA-256 哈希后再发送，
 * 因此本模块只在服务端使用，切勿暴露给浏览器。
 */

// 当前使用的 Graph API 版本（v23.0 有效期至 2027-10-08）
const META_GRAPH_VERSION = "v23.0"

export function getPixelId(): string | undefined {
  return process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || undefined
}

export function getCapiAccessToken(): string | undefined {
  return process.env.META_CAPI_ACCESS_TOKEN?.trim() || undefined
}

export function getCapiTestEventCode(): string | undefined {
  return process.env.META_CAPI_TEST_EVENT_CODE?.trim() || undefined
}

/** Pixel ID 与 access token 都已配置时才启用 CAPI */
export function isCapiConfigured(): boolean {
  return Boolean(getPixelId() && getCapiAccessToken())
}

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex")
}

// Meta 要求 email 统一小写并去掉首尾空格后再哈希，以提高匹配率
function normalizeEmail(email: string): string | null {
  const v = email.trim().toLowerCase()
  return v || null
}

// Meta 要求 phone 去掉空格、横线、括号等符号，可保留 +/00 国家码
function normalizePhone(phone: string): string | null {
  const v = phone.replace(/[^0-9+]/g, "").replace(/^00/, "+")
  return v || null
}

export interface CapiEventInput {
  /** 事件名，如 "Lead"、"PageView"（标准事件）或自定义事件名 */
  eventName: string
  /** 事件唯一 ID，用于与浏览器端 Pixel 上报去重（推荐） */
  eventId?: string
  /** Unix 秒级时间戳，默认当前时间 */
  eventTime?: number
  email?: string
  phone?: string
  name?: string
  /** 浏览器 _fbp cookie（不哈希，直接透传） */
  fbp?: string
  /** 浏览器 _fbc cookie（不哈希，直接透传） */
  fbc?: string
  /** 客户端 IP（不哈希） */
  ip?: string
  /** 客户端 User-Agent（不哈希） */
  userAgent?: string
  customData?: Record<string, unknown>
}

export interface CapiResult {
  ok: boolean
  response?: unknown
}

/**
 * 上报单个事件到 Meta Graph API。
 * 未配置或网络失败时返回 { ok: false } 并记录日志，绝不抛错中断业务。
 */
export async function sendCapiEvent(input: CapiEventInput): Promise<CapiResult> {
  if (!isCapiConfigured()) {
    return { ok: false }
  }
  const pixelId = getPixelId()!
  const token = getCapiAccessToken()!
  const testEventCode = getCapiTestEventCode()

  const userData: Record<string, unknown> = {}

  const em = input.email ? normalizeEmail(input.email) : null
  if (em) userData.em = [sha256(em)]

  const ph = input.phone ? normalizePhone(input.phone) : null
  if (ph) userData.ph = [sha256(ph)]

  if (input.name) userData.fn = [sha256(input.name.trim().toLowerCase())]

  if (input.fbp) userData.fbp = input.fbp
  if (input.fbc) userData.fbc = input.fbc
  if (input.ip && input.ip !== "unknown") userData.client_ip_address = input.ip
  if (input.userAgent) userData.client_user_agent = input.userAgent.slice(0, 500)

  const event: Record<string, unknown> = {
    event_name: input.eventName,
    event_time: input.eventTime ?? Math.floor(Date.now() / 1000),
    action_source: "website",
    user_data: userData,
  }
  if (input.eventId) event.event_id = input.eventId
  if (input.customData && Object.keys(input.customData).length > 0) {
    event.custom_data = input.customData
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" }
  // v13.0 起测试事件代码通过请求头传递
  if (testEventCode) headers["x-meta-pixel-test-event-code"] = testEventCode

  try {
    const url = `https://graph.facebook.com/${META_GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ data: [event] }),
      signal: AbortSignal.timeout(8000),
    })
    const json: unknown = await res.json().catch(() => ({}))
    if (!res.ok) {
      console.error("[meta-capi] Graph API error:", res.status, JSON.stringify(json))
      return { ok: false, response: json }
    }
    return { ok: true, response: json }
  } catch (e) {
    console.error("[meta-capi] send failed:", e instanceof Error ? e.message : e)
    return { ok: false }
  }
}

export interface CapiLeadInput extends Omit<CapiEventInput, "eventName"> {
  /** 询价相关的产品/类型，会放入 custom_data.content_category */
  product?: string
}

/** 询价表单提交成功 → 上报 Lead 事件 */
export function sendCapiLead(input: CapiLeadInput): Promise<CapiResult> {
  return sendCapiEvent({
    ...input,
    eventName: "Lead",
    customData: {
      content_name: "Contact Form",
      ...(input.product ? { content_category: input.product } : {}),
    },
  })
}
