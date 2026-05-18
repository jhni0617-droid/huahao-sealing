"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import StatusBadge from "@/components/admin/StatusBadge"

export default function InquiryDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [inquiry, setInquiry] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [statusLoading, setStatusLoading] = useState(false)

  useEffect(() => {
    fetch(`/api/admin/inquiries/${params.id}`)
      .then((r) => r.json())
      .then((d) => setInquiry(d.data))
      .finally(() => setLoading(false))
  }, [params.id])

  const updateStatus = async (status: string) => {
    setStatusLoading(true)
    try {
      await fetch(`/api/admin/inquiries/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })
      setInquiry((prev: any) => ({ ...prev, status }))
    } finally {
      setStatusLoading(false)
    }
  }

  if (loading) return <div className="text-gray-400">加载中...</div>
  if (!inquiry) return <div className="text-gray-400">询价不存在</div>

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-900">询价详情</h1>
        <button onClick={() => router.push("/admin/inquiries")} className="text-sm text-gray-500 hover:text-gray-700">返回列表</button>
      </div>

      <div className="grid gap-6">
        {/* Contact Info */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">联系信息</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-gray-500">姓名：</span>{inquiry.name}</div>
            <div><span className="text-gray-500">邮箱：</span>{inquiry.email}</div>
            <div><span className="text-gray-500">电话：</span>{inquiry.phone || "-"}</div>
            <div><span className="text-gray-500">公司：</span>{inquiry.company || "-"}</div>
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">产品信息</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-gray-500">产品类型：</span>{inquiry.product_type || "-"}</div>
            <div><span className="text-gray-500">具体产品：</span>{inquiry.product || "-"}</div>
            <div><span className="text-gray-500">应用行业：</span>{inquiry.industry || "-"}</div>
          </div>
        </div>

        {/* Operating Conditions */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">工况参数</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-gray-500">温度：</span>{inquiry.temperature || "-"}</div>
            <div><span className="text-gray-500">压力：</span>{inquiry.pressure || "-"}</div>
            <div><span className="text-gray-500">介质：</span>{inquiry.medium || "-"}</div>
            <div><span className="text-gray-500">转速：</span>{inquiry.speed || "-"}</div>
            <div><span className="text-gray-500">预估数量：</span>{inquiry.quantity || "-"}</div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">留言</h2>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{inquiry.message || "无"}</p>
        </div>

        {/* Attachment */}
        {inquiry.file_name && (
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-2">附件</h2>
            <p className="text-sm text-gray-500">{inquiry.file_name}</p>
          </div>
        )}

        {/* Status + Time */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">状态：</span>
              <StatusBadge status={inquiry.status} />
              <select
                value={inquiry.status}
                onChange={(e) => updateStatus(e.target.value)}
                disabled={statusLoading}
                className="ml-2 px-2 py-1 border border-gray-300 rounded text-sm"
              >
                <option value="unread">未读</option>
                <option value="read">已读</option>
                <option value="replied">已回复</option>
                <option value="archived">已归档</option>
              </select>
            </div>
            <span className="text-xs text-gray-400">提交时间：{inquiry.created_at}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
