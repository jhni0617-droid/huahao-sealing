const statusMap: Record<string, { label: string; className: string }> = {
  unread: { label: "未读", className: "bg-red-100 text-red-600" },
  read: { label: "已读", className: "bg-blue-100 text-blue-600" },
  replied: { label: "已回复", className: "bg-green-100 text-green-600" },
  archived: { label: "已归档", className: "bg-gray-200 text-gray-500" },
}

export default function StatusBadge({ status }: { status: string }) {
  const config = statusMap[status] || { label: status, className: "bg-gray-100 text-gray-600" }
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  )
}
