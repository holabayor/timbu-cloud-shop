import React from 'react';
import { useCart } from '../context/cartContext';
import PdfIcon from '../assets/icons/pdf.svg?react';
import { useNavigate } from 'react-router-dom';

const Success: React.FC = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
    navigate('/');
  };

  return (
    <section className="max-width my-6 md:my-12">
      <h2 className="font-bold text-2xl my-2 sm:my-4 md:my-6">Successful</h2>
      {cart.length > 0 ? (
        <>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 p-4 gap-2">
              {cart.map((product) => (
                <div className="flex gap-2">
                  <>
                    <div key={product.id} className="w-1/5">
                      <img
                        className="object-contain rounded-md"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                      <p className="font-medium text-sm text-center">
                        {product.name}
                      </p>
                    </div>
                    <div className="w-2/3 text-[10px]">
                      <div className="flex flex-col items-start justify-between">
                        <div className="">Colour: Gray</div>
                        <div className="">
                          <p>Delivery: Standard</p>
                          <span className="ml-2 text-[8px]">
                            July 10 - July 13
                          </span>
                        </div>
                      </div>
                      <div className="mb-2">Size: Medium (M)</div>
                    </div>
                  </>
                </div>
              ))}
            </div>
            <div className="flex-1 py-4 px-8 rounded-md text-sm leading-loose">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => clearCart()}
              >
                <PdfIcon width={20} height={20} />
                <span>Download PDF</span>
              </div>
            </div>
          </div>
          <p className="text-center cursor-pointer" onClick={handleClearCart}>
            Back to Homepage
          </p>
        </>
      ) : (
        <>
          <h2 className="font-semibold text-xl sm:text-4xl md:text-6xl text-center">
            Cart is empty
          </h2>
        </>
      )}
    </section>
  );
};

export default Success;
