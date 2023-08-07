import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiBaseLink } from "../../../utils/api";
import './ProductDetails.scss'

const ProductDetails = () => {

  const [product, setProduct] = useState({});

  const productId = useParams().id

  useEffect(() => {
    fetch(`${apiBaseLink}/${productId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Produkt konnte nicht gefetcht werden!")
      }
      return response.json()
    })
    .then(productData => {
      setProduct(productData)
    })
    .catch(error => console.log(error))
  },[])

  return ( 
    <section className="details_section">
      <Link to={"/"}>back to Home</Link>
      <Link to={"/shop"}>back to Shop</Link>
      <div className="product">
        <div className="picture_price">
          <div className="img_wrapper">
            <img src={product.image} alt={product.title} />
          </div>
          <p className="price">{product.price}$</p>
        </div>
        <h2>{product.title}</h2>
        <p className="description">{product.description}</p>
      </div>
    </section>
  );
}

export default ProductDetails;