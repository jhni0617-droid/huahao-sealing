"use client"

interface Column {
  key: string
  label: string
  render?: (value: any, row: any) => React.ReactNode
}

interface DataTableProps {
  columns: Column[]
  data: any[]
  searchPlaceholder?: string
  searchQuery?: string
  onSearch?: (query: string) => void
  loading?: boolean
}

export default function DataTable({
  columns,
  data,
  searchPlaceholder = "搜索...",
  searchQuery,
  onSearch,
  loading,
}: DataTableProps) {
  return (
    <div>
      {onSearch && (
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery || ""}
            onChange={(e) => onSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          />
        </div>
      )}

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {columns.map((col) => (
                <th key={col.key} className="text-left px-4 py-3 font-medium text-gray-600 whitespace-nowrap">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-12 text-center text-gray-400">
                  加载中...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-12 text-center text-gray-400">
                  暂无数据
                </td>
              </tr>
            ) : (
              data.map((row, i) => (
                <tr key={row.id || i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3">
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
