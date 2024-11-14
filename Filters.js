// src/components/Filters.js
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Filters = () => {
  const { filter, setFilter } = useContext(ShopContext);

  return (
    <div className="filters">
      <label>Filter by Category:</label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default Filters;
