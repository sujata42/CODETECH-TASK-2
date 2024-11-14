// src/components/ProductList.js
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Filters from './Filters';
import SortOptions from './SortOptions';

const ProductList = () => {
  const { products, filter, sort } = useContext(ShopContext);

  // Apply filter
  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'electronics') return product.category === 'electronics';
    if (filter === 'jewelery') return product.category === 'jewelery';
    if (filter === "men's clothing") return product.category === "men's clothing";
    if (filter === "women's clothing") return product.category === "women's clothing";
    return true;
  });

  // Apply sorting
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'title-asc') return a.title.localeCompare(b.title);
    if (sort === 'title-desc') return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div>
      <h2>Products</h2>
      <Filters />
      <SortOptions />
      <div className="product-list">
        {sortedProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
