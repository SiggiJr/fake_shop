import { useEffect, useState } from "react";
import ProductItem from "../shared/ProductItem/ProductItem";
import ProductsList from "../ProductsList/ProductsList";
import { apiBaseLink } from "../../../utils/api";

const FakeShop = () => {

  const [products, setProducts] = useState([])

useEffect(() => {
  fetch(apiBaseLink)
            .then(response=>{
              if (!response.ok) {
                throw new Error("Fetch hat nicht geklappt")
              }
              return response.json()
            })
            .then(productsData => {
              setProducts(productsData)
            })
            .catch(error => console.log(error.message))
},[])

  return ( 
    <>
    <h1>Wilkommen</h1>
    <ProductsList products={products}/>
    </>
  );
}

export default FakeShop;