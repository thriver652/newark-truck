import React, { useRef } from "react";
import { feedbackData, LeftIcon, RightIcon } from "../data/feedbackData";

const Feedback = () => {
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
    <div className="relative w-full h-auto flex flex-col bg-[#FEF7E6] p-8">
      {/* Left-aligned Heading */}
      <h1 className="text-[#101828] font-semibold text-[30px] leading-[40px] tracking-[-0.02em] text-left mb-8 ml-4">
        Don’t just take our word, here’s what our customers say
      </h1>

      {/* Left Navigation Arrow */}
      <button
        className="absolute left-4 top-1/2 mt-4 transform -translate-y-1/2 bg-white text-gray-700 flex items-center justify-center w-10 h-10 border border-gray-300 rounded shadow-lg hover:bg-gray-600 hover:text-white transition duration-300 z-10"
        onClick={scrollLeft}
        aria-label="Scroll Left"
      >
        <img src={LeftIcon} alt="Scroll Left" className="w-5 h-5" />
      </button>

      {/* Scrollable Feedback Container */}
      <div
        ref={scrollerRef}
        className="w-full h-auto mt-4 overflow-x-auto flex space-x-4 p-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className="w-[445.33px] h-[244px] flex-shrink-0 bg-white border border-[#D0D5DD] rounded-lg flex flex-col p-[32px] gap-[24px] opacity-100 hover:scale-105 transition-transform duration-300"
          >
            {/* Row Layout for Avatar and Details */}
            <div className="flex items-center">
              <img
                src={feedback.avatar}
                alt={feedback.name}
                className="w-12 h-12 rounded-full mr-3" // Added margin to the right
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800">
                  {feedback.name}
                </span>
                <span className="text-sm text-gray-500">{feedback.place}</span>
              </div>
            </div>
            {/* Review Title */}
            <h3 className="text-md font-medium text-blue-600 mt-2">
              {feedback.title}
            </h3>
            {/* Review Text */}
            <p className="text-gray-700 text-center">"{feedback.review}"</p>
          </div>
        ))}
      </div>

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

export default Feedback;
