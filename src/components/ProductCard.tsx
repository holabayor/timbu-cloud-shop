import React from 'react';
import Favourite from '../assets/icons/favorite.svg?react';

interface ProductCardProps {
  name: string;
  imageUrl: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl, price }) => {
  return (
    <div className="relative flex-1 mx-2">
      <div className="rounded-md overflow-hidden text-center">
        <span className="absolute top-0 right-0 bg-[#CED0CE] p-1 rounded-md">
          <Favourite height={20} width={20} strokeWidth={2} className="" />
        </span>
        <img
          src={imageUrl}
          alt={name}
          className="w-full object-contain rounded-md"
        />
        <h4 className="my-1 text-nowrap">{name}</h4>
        <span className="text-sm font-semibold mb-1">£{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
