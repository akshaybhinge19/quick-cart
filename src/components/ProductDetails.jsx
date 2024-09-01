import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import useSomeMethods from "../utils/utilsMethods"

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const productId = useParams();
  const { handleAddToCart } = useSomeMethods();

  useEffect(() => {
    fetchProducts();
  }, [productId]);

  const fetchProducts = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/${productId.id}`
    );
    const productDetails = await data.json();
    setProduct(productDetails);
  };
  

  if (!product) return <h1>Loading...</h1>;
  const { image, title, price, category, description, rating } = product;

  return (
    <div className="product-details-container">
      <div className="info-container">
        <div className="info-image">
          <img className="image" src={image} />
        </div>
        <div className="info-content">
          <h2>{title}</h2>
          <span className="icon-container">
            <FaStar />
            { rating.rate } <span>({rating.count})</span>
          </span>
          <h2>
            <a className="info-meta info-price">${price}</a>
          </h2>
          <h3 className="info-meta">{category}</h3>
          <p>{description}</p>
          <div className="info-meta" tabIndex="0">
            <button className="info-action" onClick={(e)=>handleAddToCart(e,product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
