import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ArrowRight from '../assets/icons/right-arrow.svg?react';
import ProductSlider from './ProductSlider';
import { fetchCollections } from '../api';
import { Collections } from '../types';

const CollectionList: React.FC = () => {
  const [collections, setCollections] = useState<Collections>({});

  useEffect(() => {
    fetchCollections().then((data) => {
      setCollections(data);
    });
  }, []);

  return (
    <section className="max-width my-4" id="collection">
      {Object.entries(collections).map(([collectionType, categories]) => (
        <div key={collectionType}>
          <h2 className="max-sm:text-center font-medium text-base sm:text-lg md:text-xl my-2 sm:my-4">
            {collectionType.charAt(0).toUpperCase() + collectionType.slice(1)}{' '}
            Collection
          </h2>
          {categories.map((collection) => (
            <>
              <div className="flex items-center justify-between my-2 md:my-4">
                <h3 className="bg-[#FFF0EC] text-[#862208] font-medium sm:text-xl px-2 py-1 sm:py-2 rounded-sm">
                  {collection.category}
                </h3>
                <span>
                  <ArrowRight
                    className="bg-[#F2F2F2] p-1 rounded-sm"
                    width={35}
                    height={35}
                  />
                </span>
              </div>
              <ProductSlider>
                {collection.products.map((product) => (
                  <ProductCard
                    key={product.id + product.name}
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                  />
                ))}
              </ProductSlider>
            </>
          ))}
        </div>
        // <h2 className="max-sm:text-center font-medium text-base sm:text-lg md:text-xl my-2 sm:my-4">
        //   {collectionType.charAt(0).toUpperCase() + collectionType.slice(1)}{' '}
        //   Collection
        // </h2>

        // {categories.map((collection) => (
        //   <>
        //     <div className="flex items-center justify-between my-2 md:my-4">
        //       <h3 className="bg-[#FFF0EC] text-[#862208] font-medium sm:text-xl px-2 py-1 sm:py-2 rounded-sm">
        //         {collection.category}
        //       </h3>
        //       <span>
        //         <ArrowRight
        //           className="bg-[#F2F2F2] p-1 rounded-sm"
        //           width={35}
        //           height={35}
        //         />
        //       </span>
        //     </div>
        //     {/* <div className="flex gap-4"> */}
        //     <ProductSlider>
        //       {collection.products.map((product) => (
        //         <ProductCard
        //           key={product.id + product.name}
        //           id={product.id}
        //           name={product.name}
        //           imageUrl={product.imageUrl}
        //           price={product.price}
        //         />
        //       ))}
        //     </ProductSlider>
        //     {/* </div> */}
        //   </>
        // ))}
      ))}
    </section>
  );
};

export default CollectionList;
