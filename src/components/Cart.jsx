
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import useSomeMethods from "../utils/utilsMethods"


const Cart = () => {
  const cartItems = useSelector((state)=>state.cart.cartItems);
  const [total, setTotal] = useState(0);
  const { handdleUpdateQuantity, handleRemoveCart } = useSomeMethods();

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cartItems]);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {cartItems.map((item, i) => (
            <div key={item.id+i+item.price/i} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * (item.quantity)).toFixed(2)}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handdleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => handdleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => handleRemoveCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <div className="cart-checkout">
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

