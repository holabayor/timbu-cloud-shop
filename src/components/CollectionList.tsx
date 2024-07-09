import React from 'react';
import ProductCard from './ProductCard';
import ArrowRight from '../assets/icons/right-arrow.svg?react';
import { menCollection } from '../constants';
import ProductSlider from './ProductSlider';

const CollectionList: React.FC = () => {
  return (
    <section className="max-width my-4">
      <h3 className="max-sm:text-center font-medium text-base sm:text-lg md:text-xl my-2 sm:my-4">
        Men Collections
      </h3>
      {menCollection.map((collection) => (
        <>
          <div className="flex items-center justify-between my-2 md:my-4">
            <h4 className="bg-[#FFF0EC] text-[#862208] font-medium sm:text-xl px-2 py-1 sm:py-2 rounded-sm">
              {collection.category}
            </h4>
            <span>
              <ArrowRight
                className="bg-[#F2F2F2] p-1 rounded-sm"
                width={35}
                height={35}
              />
            </span>
          </div>
          {/* <div className="flex gap-4"> */}
          <ProductSlider>
            {collection.products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
              />
            ))}
          </ProductSlider>
          {/* </div> */}
        </>
      ))}
    </section>
  );
};

export default CollectionList;
