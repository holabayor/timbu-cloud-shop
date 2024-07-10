import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };
  return (
    <div
      onClick={handleHomeClick}
      className="text-3xl md:text-4xl font-extrabold"
    >
      <span className="text-[#151515]">A</span>
      <span className="text-[#F15025]">T</span>
    </div>
  );
};

export default Logo;
