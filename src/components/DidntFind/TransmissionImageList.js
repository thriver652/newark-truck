import React, { useRef } from "react";
import { LeftIcon, RightIcon } from "../../data/partsData"; // Import navigation icons

const TransmissionImageList = ({ images }) => {
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full h-full flex mt-2 flex-col">
      {/* Scrollable Images Container */}
      <div
        ref={scrollerRef}
        className="w-full h-[250px] mt-4 overflow-x-auto flex space-x-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="w-[240px] h-[230px] flex-shrink-0 bg-white shadow-lg rounded-lg flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-[180px] object-cover rounded-lg" // Use a height that allows the image to be fully visible
            />
            <span className="mt-2 text-center text-gray-700 font-medium">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Left Navigation Arrow */}
      <button
        className="absolute left-4 top-1/2 mt-4 transform -translate-y-1/2 bg-white text-gray-700 flex items-center justify-center w-10 h-10 border border-gray-300 rounded shadow-lg hover:bg-gray-600 hover:text-white transition duration-300 z-10"
        onClick={scrollLeft}
        aria-label="Scroll Left"
      >
        <img src={LeftIcon} alt="Scroll Left" className="w-5 h-5" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        className="absolute right-4 top-1/2 mt-4 transform -translate-y-1/2 bg-white text-gray-700 flex items-center justify-center w-10 h-10 border border-gray-300 rounded shadow-lg hover:bg-gray-600 hover:text-white transition duration-300 z-10"
        onClick={scrollRight}
        aria-label="Scroll Right"
      >
        <img src={RightIcon} alt="Scroll Right" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TransmissionImageList;
