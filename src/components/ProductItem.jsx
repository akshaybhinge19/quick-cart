import useSomeMethods from "../utils/utilsMethods"

const ProductItem = ({ product }) => {
  const { handleAddToCart } = useSomeMethods();
  return (
    <>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <div className="header meta ellipse" title={product.title}>{product.title}</div>
        <div className="meta grey-text">{product.category}</div>
        <div className="meta bold">$ {product.price}</div>
        <button onClick={(e)=>handleAddToCart(e,product)}>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductItem;
