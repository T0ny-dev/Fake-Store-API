import { Link } from "react-router-dom";
import "./productCard.css"

const ProductCard = ({id,title , price, image,description }) => {
  return (
    <div className="card">
      <h2>
        <Link to={`/product/${id}`}>
          {title}
        </Link>
      </h2>
      <img src={image} alt="imagen de producto" />
      {description&& <p>{description}</p> }
      <p className="card__price">Price: ${price} US</p>
    </div>
  )
  
}

export default ProductCard;