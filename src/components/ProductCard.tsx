import React from 'react';
import Favourite from '../assets/icons/favorite.svg?react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  imageUrl,
  price,
}) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="relative flex-1 mx-2 cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="rounded-md overflow-hidden text-center">
        <span className="absolute top-0 right-0 bg-[#CED0CE] p-1 sm:p-2 rounded-md">
          <Favourite
            height={20}
            width={20}
            strokeWidth={2}
            className="hover:scale-125 hover:transition-all duration-300 ease-in-out transform cursor-pointer"
          />
        </span>
        <img
          src={imageUrl}
          alt={name}
          className="w-full object-contain rounded-md"
        />
        <h4 className="mt-1 max-sm:text-sm text-nowrap">{name}</h4>
        <span className="max-sm:text-sm font-medium mb-1">£{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
