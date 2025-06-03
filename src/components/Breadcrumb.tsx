import { ChevronRight } from "lucide-react"

export default function Breadcrumb() {
  return (
    <div className="flex items-center text-sm text-gray-600 mb-6">
      <a href="#" className="hover:text-red-600">
        Home
      </a>
      <ChevronRight className="h-4 w-4 mx-2" />
      <span className="text-gray-900">Women</span>
    </div>
  )
}
