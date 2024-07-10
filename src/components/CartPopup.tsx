import React from 'react';
import { Product } from '../types';

interface CartPopupProps {
  product: Product;
}

const CartPopup: React.FC<CartPopupProps> = ({ product }) => {
  return (
    <div className="fixed top-16 right-12 border shadow-lg rounded-md">
      <h4>1 item added</h4>
      <div>
        <img
          className="object-contain rounded-md w-20 h-20"
          src={product.imageUrl}
          alt={product.name}
        />
        <p className="font-medium text-center mb-2">{product.name}</p>
      </div>
      <button>Go to cart</button>
    </div>
  );
};

export default CartPopup;
