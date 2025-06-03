import { ChevronDown } from "lucide-react"

export default function Sidebar() {
  const filterSections = ["PRICE", "CATEGORY", "DESIGNER", "DISCOUNT"]

  return (
    <div className="w-64 space-y-4">
      {filterSections.map((section) => (
        <div key={section} className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full text-left font-medium text-gray-900">
            {section}
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
