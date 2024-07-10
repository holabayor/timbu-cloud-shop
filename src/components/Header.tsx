import React from 'react';
import Logo from './Logo';
import CartIcon from '../assets/icons/cart-basket.svg?react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="max-width flex items-center justify-between py-4 md:py-6">
      <a href="/">
        <Logo />
      </a>
      <nav className="hidden sm:flex gap-3 md:gap-6">
        <a className="text-[#F15025] border-b border-[#F15025]" href="/">
          Home
        </a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <CartIcon
        width={30}
        height={30}
        className="cursor-pointer"
        onClick={handleCartClick}
      />
    </header>
  );
};

export default Header;
