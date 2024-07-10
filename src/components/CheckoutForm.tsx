import React from 'react';
import Mastercard from '../assets/icons/mastercard.svg?react';
import Paypal from '../assets/icons/paypal.svg?react';
import Visa from '../assets/icons/visa.svg?react';
import { useCart } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutForm: React.FC = () => {
  const { cart, updateCart, getSubtotal, getTotal } = useCart();
  const navigate = useNavigate();

  const taxAmount = 1.99;
  const deliveryFee = 2.99;

  return (
    <section className="max-width my-6 md:my-12">
      <h2 className="font-bold text-2xl my-2 sm:my-4 md:my-6">My Cart</h2>
      {cart.length > 0 ? (
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 p-4 gap-2 border border-[#151515] rounded-md">
            {cart.map((product) => (
              <div className="flex gap-2">
                <>
                  <div key={product.id} className="w-1/3">
                    <img
                      className="object-contain rounded-md"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <p className="text-sm font-medium text-center mb-2">
                      {product.name}
                    </p>
                  </div>
                  <div className="w-2/3 text-xs">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-[10px]">
                        <p>Delivery: Standard</p>
                        <span className="mx-auto text-[8px]">
                          July 10 - July 13
                        </span>
                      </div>
                      <span className="font-semibold">£{product.price}</span>
                    </div>
                    <div className="mb-2">Size: Medium (M)</div>
                    <div className="mb-2">Colour: Gray</div>
                    <div className="border w-fit p-1 rounded-md">
                      Qty{' '}
                      <select
                        name="Qty"
                        value={product.quantity}
                        id=""
                        onChange={(e) =>
                          updateCart(product.id, parseInt(e.target.value))
                        }
                        className="border-none focus:border-none focus:outline-none"
                      >
                        {[...Array(10).keys()].map((i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              </div>
            ))}
          </div>
          <div className="bg-[#CED0CE] flex-1 py-4 px-8 rounded-md text-sm leading-loose">
            <div className="flex items-center justify-between mt-2 border-b">
              <span>Subtotal:</span>
              <span>£{getSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mt-2 border-b">
              <span>Tax:</span>
              <span>£{taxAmount}</span>
            </div>
            <div className="flex items-center justify-between mt-2 border-b">
              <span>Delivery:</span>
              <span>£{deliveryFee}</span>
            </div>
            <div className="flex items-center justify-between font-medium text-lg my-2">
              <span>Total</span>
              <span>£{getTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={() => navigate('/payment')}
              className="w-full font-medium  bg-[#F15025] max-sm:text-sm py-[6px] rounded-md text-white my-4"
            >
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
      ) : (
        <>
          <h2 className="font-semibold text-xl sm:text-4xl md:text-6xl text-center">
            Cart is empty
          </h2>
          <p className="text-center">
            <a href="/">Back to Homepage</a>
          </p>
        </>
      )}
    </section>
  );
};

export default CheckoutForm;
