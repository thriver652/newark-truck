import React from "react";
import { shippingData } from "../data/shippingData";

const FreeShipping = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex space-x-0">
        {shippingData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-8 bg-gray-50 border border-gray-300 ${
              index < shippingData.length - 1 ? "border-r-0" : ""
            } flex-1`}
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={`${item.title} Icon`} // Provide alt text for accessibility
              className="text-blue-500 text-4xl mb-4" // Apply any specific styles here
              style={{ width: "40px", height: "40px" }} // Customize size if needed
            />

            {/* Title Text with custom styles */}
            <h2 className="font-inter text-[30px] font-semibold leading-[40px] tracking-[-0.02em] text-left w-[608px] h-[40px] text-[#101828] opacity-100 mb-2">
              {item.title}
            </h2>

            {/* Subtitle Text with custom styles */}
            <p className="font-inter text-[20px] font-medium leading-[24px] tracking-[-0.02em] text-left w-[608px] h-[24px] text-[#101828] opacity-100 mb-2">
              {item.subtitle}
            </p>

            {/* Description */}
            <p className="text-[#101828] text-[18px] my-4">
              {item.description}
            </p>

            {/* Shipping Policy Link */}
            <a href={item.policyLink} className="text-blue-500 hover:underline">
              {item.policy}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeShipping;
