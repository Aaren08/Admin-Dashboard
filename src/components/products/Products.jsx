import { products } from "../../data";
import Button from "../button/Button";
import "./Products.css";

function Products() {
  return (
    <>
      <div className="products-header flex">
        <h1>My Products</h1>
        <Button />
      </div>
      <div className="products-items flex">
        {products.map((product, id) => (
          <div className="product-item" key={id}>
            <span className="icon">{product.icon}</span>
            <img src={product.imageSrc} alt={product.name} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
