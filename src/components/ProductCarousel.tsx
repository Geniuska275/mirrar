"use client"

import { ChevronRight } from "lucide-react"

export default function ProductCarousel() {
  const products = [
    {
      id: 1,
      name: "Yellow And Multi Cotton Floral...",
      price: "₹6350.0",
      originalPrice: "₹9675.0",
      discount: "(44% OFF)",
      image: "https://plus.unsplash.com/premium_photo-1745627612755-6b20bed3b949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      name: "Pink And White Cotton Floral...",
      price: "₹6075.0",
      originalPrice: "₹13475.0",
      discount: "(60% OFF)",
      image: "https://plus.unsplash.com/premium_photo-1745627612755-6b20bed3b949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      name: "Pink And White Cotton Floral...",
      price: "₹6150.0",
      originalPrice: "₹11100.0",
      discount: "(44% OFF)",
      image: "https://plus.unsplash.com/premium_photo-1745627612755-6b20bed3b949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      id: 4,
      name: "Light Pink And Blue Cotton...",
      price: "₹6850.0",
      originalPrice: "₹9675.0",
      discount: "(44% OFF)",
      image: "https://plus.unsplash.com/premium_photo-1745627612755-6b20bed3b949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      id: 5,
      name: "Green Cotton Geometric Dress",
      price: "₹6000.0",
      originalPrice: "₹13325.0",
      discount: "(47% OFF)",
      image: "https://plus.unsplash.com/premium_photo-1745627612755-6b20bed3b949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      id: 6,
      name: "Blue And White Cotton...",
      price: "₹7200.0",
      originalPrice: "₹12675.0",
      discount: "(42% OFF)",
      image: "https://plus.unsplash.com/premium_photo-1745627612755-6b20bed3b949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
        {
      id: 6,
      name: "Blue And White Cotton...",
      price: "₹7200.0",
      originalPrice: "₹12675.0",
      discount: "(42% OFF)",
      image: "https://plus.unsplash.com/premium_photo-1745627612755-6b20bed3b949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
        {
      id: 6,
      name: "Blue And White Cotton...",
      price: "₹7200.0",
      originalPrice: "₹12675.0",
      discount: "(42% OFF)",
      image: "https://plus.unsplash.com/premium_photo-1745627612755-6b20bed3b949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
  ]

  return (
    <div className="mb-8">
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="flex-none w-48 group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>
                <span className="text-sm text-red-600 font-medium">{product.discount}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50">
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
