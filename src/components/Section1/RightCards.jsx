import React from 'react';

export default function RightCards({ items, index }) {
  return (
    <div
      className=" relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-full w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]
        flex justify-center items-center rounded-4xl shrink-0 overflow-hidden">


      {/* Image */}
      <img src={items.URL} alt="" className="h-full w-full object-cover rounded-4xl"/>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-between p-4 sm:p-5 md:p-6 rounded-4xl">
        

        {/* Number */}
        <div className="bg-white rounded-full h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center">
          <h1 className="text-black text-base sm:text-xl font-bold">
            {index + 1}
          </h1>
        </div>


        {/* Text */}
        <div className="text-white">
          <p className="text-[16px] sm:text-base md:text-lg leading-6 sm:leading-7">
            {items.text}
          </p>
        </div>
        

        {/* Buttons */}
        <div className="flex justify-between items-center gap-3">
          <button style={{ backgroundColor: items.color }}
            className="text-white rounded-full px-5 sm:px-6 md:px-8 py-2 text-xs sm:text-sm">
            {items.button}
          </button>


          <button
            className="text-white p-2 sm:px-4 sm:py-2 rounded-full"
            style={{ backgroundColor: items.color }}>
            <i className="ri-arrow-right-line"></i>
          </button>


        </div>
      </div>
    </div>
  );
}