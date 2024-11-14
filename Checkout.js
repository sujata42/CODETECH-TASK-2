// src/components/Checkout.js
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useContext(ShopContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Checkout successful!");
    // Here you can integrate payment gateways or further processing
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map(item => (
        <div key={item.id} className="checkout-item">
          <h4>{item.title}</h4>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="checkout-total">
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Confirm Purchase</button>
        </div>
      )}
      <Link to="/cart">
        <button>Back to Cart</button>
      </Link>
    </div>
  );
};

export default Checkout;
