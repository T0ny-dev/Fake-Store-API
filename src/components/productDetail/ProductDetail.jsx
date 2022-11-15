import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard"
import "./productDetail.css"
import axios from "axios";


const ProductDetail = () => {
  let {id} = useParams()
  const [product, setProduct] = useState({});
  useEffect(()=> {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response)=> {
      setProduct(response.data)
    })
  }, [])

  return (
      <div className="detail">
        <h1>Product information with id:{id} </h1>
        {product&& <ProductCard 
          title={product.title}
          image={product.image}
          price={product.price}
          id={product.id}
          description={product.description}
        />
        }

        
      </div>
  )
}

export default ProductDetail;