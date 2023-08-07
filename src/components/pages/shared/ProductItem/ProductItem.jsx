import { Link } from "react-router-dom";
import './ProductItem.scss'

const ProductItem = ({title, price, image, id}) => {
  return ( 
    <div className="product_item">
    <div className="item_wrapper"><img src={`${image}`} alt={`${title}`} /></div>
    <p>{title}</p>
    <p>{price}$</p>
    <Link to={`/shop/${id}`}>Show more</Link>
    </div>
  );
}

export default ProductItem;