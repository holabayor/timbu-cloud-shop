import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="max-width">
      <div className="bg-[#ff5f00] my-8 p-6">
        <h3 className="text-xl text-center font-medium text-white mb-3">
          Testimonials
        </h3>
        <div className="flex flex-row justify-between gap-2  overflow-x-scroll">
          <div className="bg-[#fff8f4] min-w-48 flex-1 p-2 rounded-md text-sm ">
            <div className="flex items-center">
              <img
                className="object-cover w-8 md:w-10 h-8 md:h-10 rounded-full mr-4"
                src="./assets/avatar.png"
                alt="image 1"
              />
              <span className="font-medium">Brandon Smith</span>
            </div>
            <p className="my-2">
              I really enjoyed my other that i had to refer all my friend.
              Deliivery was realy fast and there were no complications with my
              package
            </p>
            <div>stars</div>
          </div>
          <div className="bg-[#fff8f4] min-w-48 flex-1 p-2 rounded-md text-sm ">
            <div className="flex items-center">
              <img
                className="object-cover w-8 md:w-10 h-8 md:h-10 rounded-full mr-4"
                src="./assets/avatar.png"
                alt="image 1"
              />
              <span className="font-medium">Brandon Smith</span>
            </div>
            <p className="my-2">
              I really enjoyed my other that i had to refer all my friend.
              Deliivery was realy fast and there were no complications with my
              package
            </p>
            <div>stars</div>
          </div>
          <div className="bg-[#fff8f4] min-w-48 flex-1 p-2 rounded-md text-sm ">
            <div className="flex items-center">
              <img
                className="object-cover w-8 md:w-10 h-8 md:h-10 rounded-full mr-4"
                src="./assets/avatar.png"
                alt="image 1"
              />
              <span className="font-medium">Brandon Smith</span>
            </div>
            <p className="my-2">
              I really enjoyed my other that i had to refer all my friend.
              Deliivery was realy fast and there were no complications with my
              package
            </p>
            <div>stars</div>
          </div>
          <div className="bg-[#fff8f4] min-w-48 flex-1 p-2 rounded-md text-sm ">
            <div className="flex items-center">
              <img
                className="object-cover w-8 md:w-10 h-8 md:h-10 rounded-full mr-4"
                src="./assets/avatar.png"
                alt="image 1"
              />
              <span className="font-medium">Brandon Smith</span>
            </div>
            <p className="my-2">
              I really enjoyed my other that i had to refer all my friend.
              Deliivery was realy fast and there were no complications with my
              package
            </p>
            <div>stars</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
