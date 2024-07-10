import React from 'react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

interface CartPopupProps {
  product: Product;
}

const CartPopup: React.FC<CartPopupProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="z-10 w-56 flex flex-col bg-white fixed top-16 right-4 md:right-12 border shadow-lg rounded-md text-sm p-6">
      <h6 className="font-semibold text-center mb-4">1 item added</h6>
      <div className="flex gap-5">
        <div className="w-1/3">
          <img
            className="object-contain rounded-md"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>
        <div className="w-2/3 ml-auto flex flex-col items-start text-[8px]">
          <span className="font-medium">{product.name}</span>
          <span>£{product.price}</span>
          <span>Size: Medium(M)</span>
        </div>
      </div>
      <button onClick={() => navigate('/cart')} className="btn-cart py-1 my-2">
        Go to cart
      </button>
    </div>
  );
};

export default CartPopup;
