import { Heart } from "lucide-react"
import a from "./a.jpeg"
import b from "./b.jpeg"
import c from "./c.jpeg"
import d from "./d.jpeg"
import e from "./e.jpeg"
import f from "./f.jpeg"
import g from "./g.jpeg"

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Stylee Lifestyle Turquoise Cotton Blend Printed Dress Material",
      price: "₹61,900.0",
      originalPrice: "₹123800.0",
      discount: "50% OFF",
      image:a,
    },
     {
      id: 1,
      name: "Stylee Lifestyle Turquoise Cotton Blend Printed Dress Material",
      price: "₹61,900.0",
      originalPrice: "₹123800.0",
      discount: "50% OFF",
      image: b
    },
     {
      id: 1,
      name: "Stylee Lifestyle Turquoise Cotton Blend Printed Dress Material",
      price: "₹61,900.0",
      originalPrice: "₹123800.0",
      discount: "50% OFF",
      image:c
    },
    {
      id: 2,
      name: "Sea Green Organza Lace Work Saree",
      price: "₹61,300.0",
      originalPrice: "₹87500.0",
      discount: "30% OFF",
      image: d
    },
    {
      id: 3,
      name: "Pink Vichitra Art Silk Saree",
      price: "₹48,400.0",
      originalPrice: "₹60525.0",
      discount: "20% OFF",
      image:e
    },
    {
      id: 4,
      name: "Red Viscose Silk Floral Printed Salwar Suit",
      price: "₹63,925.0",
      originalPrice: "₹98750.0",
      discount: "35% OFF",
      image:g
    },
      {
      id: 4,
      name: "Red Viscose Silk Floral Printed Salwar Suit",
      price: "₹63,925.0",
      originalPrice: "₹98750.0",
      discount: "35% OFF",
      image:f
    },
      {
      id: 4,
      name: "Red Viscose Silk Floral Printed Salwar Suit",
      price: "₹63,925.0",
      originalPrice: "₹98750.0",
      discount: "35% OFF",
      image: a
    },
      {
      id: 4,
      name: "Red Viscose Silk Floral Printed Salwar Suit",
      price: "₹63,925.0",
      originalPrice: "₹98750.0",
      discount: "35% OFF",
      image:g
    },
       {
      id: 4,
      name: "Red Viscose Silk Floral Printed Salwar Suit",
      price: "₹63,925.0",
      originalPrice: "₹98750.0",
      discount: "35% OFF",
      image:a
    },
       {
      id: 4,
      name: "Red Viscose Silk Floral Printed Salwar Suit",
      price: "₹63,925.0",
      originalPrice: "₹98750.0",
      discount: "35% OFF",
      image: b
    },
       {
      id: 4,
      name: "Red Viscose Silk Floral Printed Salwar Suit",
      price: "₹63,925.0",
      originalPrice: "₹98750.0",
      discount: "35% OFF",
      image:c
    },
  ]

  return (
    <div className="flex-1 z-[-10px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Women Apparels</h1>
          <p className="text-gray-600">147795 Items</p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
            <option>SORT BY: Newest First</option>
            <option>Hand Picked</option>
            <option>SORT BY: Trending </option>

            <option>SORT BY:most ordered</option>


          </select>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border">New Arrival</span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border">Brands</span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border">Express Delivery</span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border">Buy 1 Get 3</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z--10">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer z--10">
            <div className=" relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4]">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="mt-3">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">{product.price}</span>
                {/* <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span> */}
                <span className="text-sm text-red-300 font-medium">{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
