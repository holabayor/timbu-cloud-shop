import React from 'react';

import { collections } from '../constants';
import { useNavigate, useParams } from 'react-router-dom';

// const product = menCollection[0].products[5];

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  // Find the product by ID
  const product = Object.values(collections)
    .flatMap((category) =>
      category.flatMap((subCategory) => subCategory.products)
    )
    .find((product) => product.id === productId);

  // const product = menCollection[0].products[0];

  console.log('The product is ', product);

  if (!product) {
    return (
      <section className="max-width min-h-screen">
        <p>Product not found.</p>
      </section>
    );
  }

  const handleAddToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <h2 className="font-bold text-2xl my-2 sm:my-4 md:my-6">My Cart</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-1 p-4 gap-2 border border-[#151515] rounded-md">
          <div className="w-1/3">
            <img
              className="object-contain rounded-md"
              src={product.imageUrl}
              alt={product.name}
            />
            <p className="font-medium text-center">{product.name}</p>
          </div>
          <div className="w-2/3 text-sm">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p>Delivery: Standard</p>
                <span className="mx-auto text-xs">July 10 - July 13</span>
              </div>
              <span className="font-semibold">£{product.price}</span>
            </div>
            <div className="mb-2">Size: Medium (M)</div>
            <div className="mb-2">Colour: Gray</div>
            <div className="border w-fit p-1 rounded-md">
              Qty{' '}
              <select name="Qty" id="" className="border-none">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-[#CED0CE] flex-1 py-4 px-8 rounded-md text-sm leading-loose">
          <div className="flex items-center justify-between mt-2 border-b">
            <span>Subtotal:</span>
            <span>£{product.price}</span>
          </div>
          <div className="flex items-center justify-between mt-2 border-b">
            <span>Tax:</span>
            <span>£1.99</span>
          </div>
          <div className="flex items-center justify-between mt-2 border-b">
            <span>Delivery:</span>
            <span>£2.99</span>
          </div>
          <div className="flex items-center justify-between font-medium text-lg my-2">
            <span>Total</span>
            <span>£37.97</span>
          </div>
          <button className="w-full font-medium  bg-[#F15025] max-sm:text-sm py-[6px] rounded-md text-white my-4">
            Check out
          </button>
          <div>
            <span className="font-medium text-sm">Payment Method</span>
            <div className="flex items-center justify-between">
              {/* <Visa width={60} height={60} />
              <Mastercard width={60} height={60} />
              <Paypal width={60} height={60} /> */}
            </div>
          </div>
        </div>
      </div>
      ;
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
            <img
              src={product.imageUrl}
              className="w-3/4 object-contain"
              alt=""
            />
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
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
