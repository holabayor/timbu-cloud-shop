import React, { useEffect, useState } from 'react';
import ArrowUp from '../assets/icons/arrow-up.svg?react';

const GoToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed bottom-4 right-4 text-xs text-white">
      {isVisible && (
        <span
          className="flex bg-[#151515] p-2 gap-2 items-center rounded-md cursor-pointer"
          onClick={scrollToTop}
        >
          Return to the Top <ArrowUp width={20} height={20} />
        </span>
      )}
    </div>
  );
};

export default GoToTop;
