import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    setProducts(products);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  
  if (!products.length) {
    return (
      <Shimmer />
    );
  }
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="search-bar">
        <div><IoIosSearch className="search-icon"/></div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="products-list-container">
      {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={'/products/' + product.id} key={product.id} className="product-card">
              <ProductItem key={product.id} product={product} />
            </Link>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
