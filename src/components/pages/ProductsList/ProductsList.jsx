import ProductItem from "../shared/ProductItem/ProductItem";
import './ProductList.scss'

const ProductsList = ({products}) => {
  console.log(products);
  return ( 
    <section className="product_section">
      <section className="products_grid">
      {products.map(product => <ProductItem 
      key={product.id} 
      title={product.title}
      price={product.price}
      image={product.image}
      id={product.id}
      />)}
    </section>
    </section>
  );
}

export default ProductsList;