

import { ArrowUp } from 'lucide-react'
import Footer from './components/footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
import ProductDetail from './components/product-details'
import ProductGrid from './components/product-grid'
import Home from './page'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <Router>
         <div className="top-0 sticky z-[300]">
          <Header />
          <Navigation />
            </div>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product-details' element={<ProductDetail/>}/>

            </Routes>
                    {/* Back to Top Button */}
        <div className="flex justify-end">
          <a href="#top" className="bg-red-800 p-3 mb-2 mr-2 rounded-full hover:bg-red-700 transition-colors">
            <ArrowUp className="h-5 w-5 text-white " />
          </a>
        </div>
            <Footer/> 
    </Router>
  )
}

export default App
