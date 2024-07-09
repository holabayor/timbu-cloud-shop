import React from 'react';
import { menCollection } from '../constants';
import Mastercard from '../assets/icons/mastercard.svg?react';
import Paypal from '../assets/icons/paypal.svg?react';
import Visa from '../assets/icons/visa.svg?react';

const product = menCollection[0].products[5];

const CheckoutForm: React.FC = () => {
  return (
    <section className="max-width">
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
              <Visa width={60} height={60} />
              <Mastercard width={60} height={60} />
              <Paypal width={60} height={60} />
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default CheckoutForm;
