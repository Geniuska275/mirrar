


import Breadcrumb from "./components/Breadcrumb";
import ProductGrid from "./components/product-grid";

import Sidebar from "./components/Sidebar";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumb />
        <div className="flex gap-8 ">
          <Sidebar />
          <ProductGrid /> 
        </div>
      </div>
      
  
    </div>
  )
}
