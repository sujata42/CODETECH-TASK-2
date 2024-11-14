// src/components/SortOptions.js
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const SortOptions = () => {
  const { sort, setSort } = useContext(ShopContext);

  return (
    <div className="sort-options">
      <label>Sort by:</label>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="default">Default</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
      </select>
    </div>
  );
};

export default SortOptions;
