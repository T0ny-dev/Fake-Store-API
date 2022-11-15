import { Link } from "react-router-dom";

const ProductCard = ({id,title , price, image }) => {
  return (
    <div>
      <h2>
        <Link to={`/product/${id}`}>
          {title}
        </Link>
      </h2>
      <img src={image} alt="imagen de producto" />
      <p>{price}</p>
    </div>
  )
  
}

export default ProductCard;