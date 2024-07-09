import React from 'react';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  return (
    <section className="max-width">
      <h3>Product List</h3>
      <div className="flex overflow-x-scroll gap-4">
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </section>
  );
};

export default ProductList;
