// src/components/CartItem.js
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(ShopContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)}</p>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
        </div>
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
