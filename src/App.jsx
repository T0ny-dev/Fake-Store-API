import Products from "./components/products/Products"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductDetail from "./components/productDetail/ProductDetail"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./app.css"


function App() {
  return  (
    <div>
      <Navbar/>
      <h1>List Products</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Products/>} ></Route>
          <Route path="/product/:id" element={<ProductDetail/>} ></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
    
  )
}

export default App
