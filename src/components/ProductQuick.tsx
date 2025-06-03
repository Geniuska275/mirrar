export default function ProductView() {
  return (
    <div className="bg-white border-t border-gray-200 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Multi Cotton Floral Dress</h3>
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-gray-900">₹61,675.0</span>
            <span className="text-lg text-gray-500 line-through">₹112,175.0</span>
            <span className="text-lg text-red-600 font-medium">(45% OFF)</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="px-6 py-2 border border-red-600 text-red-600 font-medium rounded hover:bg-red-50 transition-colors">
            🛒 ADD TO CART
          </button>
          <button className="px-6 py-2 bg-red-800 text-white font-medium rounded hover:bg-red-900 transition-colors">
            🛒 BUY NOW
          </button>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-10">
        <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
