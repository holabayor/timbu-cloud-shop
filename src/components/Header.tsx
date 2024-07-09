import React from 'react';
import Logo from './Logo';
import Cart from '../assets/icons/cart-basket.svg?react';

const Header: React.FC = () => {
  return (
    <header className="max-width flex items-center justify-between py-4 md:py-6">
      <Logo />
      <nav className="hidden sm:flex gap-3 md:gap-6">
        <a href="/">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <Cart width={30} height={30} />
    </header>
  );
};

export default Header;
