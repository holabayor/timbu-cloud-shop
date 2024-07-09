import React from 'react';
import Mastercard from '../assets/icons/mastercard.svg?react';
import Paypal from '../assets/icons/paypal.svg?react';
import Visa from '../assets/icons/visa.svg?react';
import Location from '../assets/icons/location.svg?react';
import Home from '../assets/icons/home.svg?react';
import { menCollection } from '../constants';

const product = menCollection[0].products[0];

const Payment: React.FC = () => {
  return (
    <section className="max-width">
      <h2 className="font-bold text-2xl my-2 sm:my-4 md:my-6">My Cart</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-1 p-4 gap-2">
          <div className="">
            <div className="flex items-center">
              <input type="radio" name="payment-option" id="" />
              <label
                className="flex items-center ml-5 gap-2 text-nowrap"
                htmlFor=""
              >
                <Mastercard width={40} height={40} /> Master card
              </label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="payment-option" id="" />
              <label className="flex items-center ml-5 gap-2" htmlFor="">
                <Visa width={40} height={40} /> Visa
              </label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="payment-option" id="" />
              <label className="flex ml-5 gap-2" htmlFor="">
                <Paypal width={50} height={50} />
              </label>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-[450px]">
          <div className="bg-[#E6E8E6] flex-1 py-4 px-8 rounded-md text-sm leading-loose space-y-4">
            <div className="flex items-center gap-2">
              <Location width={20} height={20} />
              <span className="text-[#F15025]">Pick up address</span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="address">Address</label>
              <input
                className="bg-[#CED0CE] h-10 rounded-md"
                type="text"
                name="address"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 flex-col">
                <label htmlFor="postal" className="text-nowrap">
                  Postal Code
                </label>
                <input
                  className="w-full h-10 bg-[#CED0CE] rounded-md"
                  type="text"
                  name="postal"
                />
              </div>
              <div className="flex-1 flex-col">
                <label htmlFor="address">City</label>
                <input
                  className="w-full h-10 bg-[#CED0CE] rounded-md"
                  type="text"
                  name="address"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Home width={20} height={20} />
              <span className="text-[#F15025]">Home Address</span>
            </div>
          </div>
          <div className="flex-1 py-4 px-2 rounded-md text-sm leading-loose">
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
            <button className="w-full font-medium  bg-[#E6E8E6] max-sm:text-sm py-[6px] rounded-md my-4">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Payment;
