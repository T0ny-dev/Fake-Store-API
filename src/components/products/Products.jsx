import ProductCard from "../productCard/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./products.css"

const Products = () => {
    const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((response)=> {
      setProducts(response.data);
    })
  }, [])

  return (
    <div className="App">
      {products && products.map((product)=>{
        return (
          <ProductCard 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image} />
        )
      })}
    </div>
  )
}


export default Products;