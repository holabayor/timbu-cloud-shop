import React from 'react';
import { menCollection } from '../constants';

const product = menCollection[0].products[0];

const ProductDetail: React.FC = () => {
  return (
    <section className="max-width min-h-screen">
      <div className="flex flex-col sm:flex-row w-full gap-8 overflow-clip">
        <div className="w-full md:w-1/2 max-sm:flex-row-reverse flex flex-1 gap-1">
          <div className="w-1/4 flex flex-col gap-1">
            <img
              src={product.imageUrl}
              className="object-contain flex-1 w-full"
              alt=""
            />
            <img
              src={product.imageUrl}
              className="object-contain flex-1 w-full"
              alt=""
            />
            <img
              src={product.imageUrl}
              className="object-contain flex-1 w-full"
              alt=""
            />
          </div>
          <img src={product.imageUrl} className="w-3/4 object-contain" alt="" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <div>
            <h1>{product.name}</h1>
            <p>£{product.price}</p>
          </div>
          <div className="flex gap-3 max-sm:h-48">
            <div className="flex-1">
              <img
                src={product.imageUrl}
                className="rounded-sm"
                alt={product.name}
              />
              <p className="text-center">White</p>
            </div>

            <div className="flex-1">
              <img
                src={product.imageUrl}
                className="rounded-sm"
                alt={product.name}
              />
              <p className="text-center">Grey</p>
            </div>

            <div className="flex-1">
              <img
                src={product.imageUrl}
                className="rounded-sm"
                alt={product.name}
              />
              <p className="text-center">Black</p>
            </div>
          </div>
          <div>size</div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
