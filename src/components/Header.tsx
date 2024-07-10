import React from 'react';
import Logo from './Logo';
import CartIcon from '../assets/icons/cart-basket.svg?react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  console.log('Total items ', totalItems);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="max-width flex items-center justify-between py-4 md:py-6 px-4">
      <Logo />

      <nav className="hidden sm:flex gap-3 md:gap-6">
        <a className="text-[#F15025] border-b border-[#F15025]" href="/">
          Home
        </a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className="relative">
        <CartIcon
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={handleCartClick}
        />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
