import React from 'react';
import Slider from 'react-slick';

interface ProductSliderProps {
  children: React.ReactNode;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ children }) => {
  return (
    <Slider
      {...{
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      }}
      // className="flex gap-4"
    >
      {children}
    </Slider>
  );
};

export default ProductSlider;
