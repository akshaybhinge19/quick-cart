import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

const Header = () => {
  const cartItems = useSelector((state)=> state.cart.cartItems);
  const productCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="header-container">
      <div className="logo-container">
      <Link to={'/'}><img src={require("../../public/logo.png")} alt="Logo" /></Link>
      </div>
      {/* <h1> Quickart App</h1> */}
      <div className="nav-items">
        <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/cart'}>
            <li>🛒{ cartItems.length > 0 && <sup>({productCount})</sup>}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
