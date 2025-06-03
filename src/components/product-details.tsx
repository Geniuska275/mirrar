

import { useState } from "react"
import { Heart, ChevronDown, ChevronUp } from "lucide-react"


import { MdWhatsapp } from "react-icons/md";


export default function ProductDetail() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  const [isSpecsOpen, setIsSpecsOpen] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div>
      {/* <Breadcrumb /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-[30px]">
        {/* Product Images */}
        <div className="space-y-6">
          {/* Thumbnail */}
          <div className="w-20 h-20 border border-gray-200 p-1">
            <div className="w-full h-full bg-gray-100 ">
              <img
                src="https://images.unsplash.com/photo-1748615745871-7172b3d2a7cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt="Product thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Image */}
          <div className="aspect-square bg-gray-50 ">
            <img
              src="https://images.unsplash.com/photo-1748615745871-7172b3d2a7cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              alt="Jaipur Fabric Royal Goldi Navy Blue King Size Bed Sheet"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          {/* Product Title and Price */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl font-medium text-gray-900">
                Jaipur Fabric Royal Goldi Navy Blue King Size Bed Sheet With 2 Pillow Covers
              </h1>
              <button onClick={() => setIsWishlisted(!isWishlisted)} className="p-1 hover:bg-gray-50 rounded-full">
                <Heart className={`h-6 w-6 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
              </button>
            </div>
            <div className="text-2xl font-bold text-gray-900">₹33,100.0</div>
          </div>

          {/* Available Offers */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">Available Offers :</h3>
              <button className="text-gray-500">[-]</button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-red-600">10% cashback</span>
              <a href="#" className="text-red-600 hover:underline">
                T&C
              </a>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-green-600">Estimated Delivery:</span>
              <span className="text-gray-700">15 Jun 2025</span>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-medium text-gray-900 mb-3">Shipping Information</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>We deliver all over Nigeria. Trusted Delivery via Fedex, UPS, DHL.</p>
              <p>
                Shipping Cost: Approx. <span className="font-medium">₹4812</span> for first item, and Approx.{" "}
                <span className="font-medium">₹4812</span> for every additional item.
              </p>
              <p>Please note that you'll be charged in US Dollars(USD).</p>
            </div>
          </div>

          {/* Product Description */}
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="font-medium text-gray-900">Product Description</h3>
              <div className="text-gray-500">
                {isDescriptionOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
            </button>
            {isDescriptionOpen && (
              <div className="mt-3 text-sm text-gray-600">
                <p>
                  This beautiful bed sheet set features an elegant navy blue base with intricate golden paisley
                  patterns. Made from high-quality fabric, it includes one king-size bed sheet and two matching pillow
                  covers. Perfect for adding a touch of luxury to your bedroom decor.
                </p>
              </div>
            )}
          </div>

          {/* Specifications */}
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => setIsSpecsOpen(!isSpecsOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="font-medium text-gray-900">Specifications</h3>
              <div className="text-gray-500">
                {isSpecsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
            </button>
            {isSpecsOpen && (
              <div className="mt-3">
                <div className="flex items-center py-2">
                  <span className="text-sm text-gray-600 mr-2">•</span>
                  <span className="text-sm text-gray-600">Color</span>
                  <span className="text-sm text-gray-600 mx-2">:</span>
                  <span className="text-sm text-gray-900">Multicolor</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0  shadow left-0  right-0 bg-white border-t border-gray-200 p-4 md:relative md:mt-6 md:p-0 md:border-0">
        <div className="flex items-center justify-between max-w-7xl mx-auto p-2">
          <div className="hidden md:block text-2xl font-bold text-gray-900">₹33,100.0</div>
          <div className="flex w-full md:w-auto space-x-4">
            <button className="flex-1 md:flex-initial px-6 py-2 border border-red-600 text-red-600 font-medium rounded hover:bg-red-50 transition-colors">
              🛒 ADD TO CART
            </button>
            <button className="flex-1 md:flex-initial px-6 py-2 bg-red-800 text-white font-medium rounded hover:bg-red-900 transition-colors">
              🛒 BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-20 right-4 z-10">
        <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
         <MdWhatsapp/>
        </button>
      </div>
    </div>
  )
}
