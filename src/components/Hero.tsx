import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="max-width">
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col md:w-[60%] text-center max-sm:items-center sm:text-left  md:pr-4">
          <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-none">
            Where <br className="hidden md:block" /> Fashion{' '}
            <br className="hidden max-md:block" /> Lives{' '}
            <br className="hidden md:block" />
            and Abides
          </h1>
          <p className="max-sm:text-sm my-4 w-[320px] max-sm:w-[80%]">
            Our curated collection of high-quality clothing is designed to make
            you look and feel your best.
          </p>
          <button className="font-medium sm:self-start bg-[#F15025] max-sm:w-[75%] max-sm:text-sm py-3 px-4 rounded-md text-white">
            Shop the Collection
          </button>
        </div>
        <div className="md:w-[40%] my-4 rounded-lg overflow-hidden">
          <img
            className="object-cover hidden sm:block md:hidden mx-auto"
            src="./assets/hero-tablet.png"
            alt="hero for tablet"
          />
          <img
            className="w-full object-cover block sm:hidden md:block"
            src="./assets/hero.png"
            alt="hero"
          />
        </div>
      </div>
      <div
        className="flex px-2 sm:px-4 md:px-6 items-center justify-between h-6 sm:h-8 md:h-12 w-full bg-[#151515] font-semibold uppercase text-[8px] text-[#E6E8E6]
"
      >
        <span>450+ kind of loosef tea</span>
        <span>woldwide delivery</span>
        <span>partnership</span>
      </div>
    </section>
  );
};

export default Hero;
