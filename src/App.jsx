import Products from "./components/products/Products"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductDetail from "./components/productDetail/ProductDetail"


function App() {
  return  (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Products/>} ></Route>
          <Route path="/product/:id" element={<ProductDetail/>} ></Route>
        </Routes>
      </Router>
      
    </div>
    
  )
}

export default App
