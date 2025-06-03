import { Search, User, Heart, ShoppingBag } from "lucide-react"
import logo from "./m.png"
export default function Header() {
  return (
    <header className="bg-[#fefafb] border-b border-gray-200 px-4 py-3 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} style={{height:"40px"}}/>
          <div className="text-xs text-gray-500 ml-1">Dress. Adore. Repeat.</div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Try Saree, Kurti or Product Id"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-center text-gray-600 hover:text-red-600 cursor-pointer">
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </div>
          <div className="flex flex-col items-center text-gray-600 hover:text-red-600 cursor-pointer">
            <Heart className="h-5 w-5" />
            <span className="text-xs">Wishlist</span>
          </div>
          <div className="flex flex-col items-center text-gray-600 hover:text-red-600 cursor-pointer relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="text-xs">Bag</span>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
