// src/components/ProductItem.js
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
