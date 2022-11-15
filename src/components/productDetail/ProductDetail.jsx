import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard"

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
      <div>
        <h1>Informacion del producto con el id:{id} </h1>
        {product&& <ProductCard 
          title={product.title}
          image={product.image}
          price={product.price}
          id={product.id}
        />
        }

        
      </div>
  )
}

export default ProductDetail;