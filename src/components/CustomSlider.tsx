import React from 'react';
import Slider from 'react-slick';

interface CustomSliderProps {
  children: React.ReactNode;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ children }) => {
  return (
    <Slider
      {...{
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        // initialSlide: 0,
        responsive: [
          // {
          //   breakpoint: 1024,
          //   settings: {
          //     slidesToShow: 5,
          //     slidesToScroll: 5,
          //   },
          // },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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

export default CustomSlider;
