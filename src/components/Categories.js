  import React from "react";
  import {
    Bushings,
    Couplings,
    Flanges,
    PipeFittings,
    Plugs,
    Reducers,
    Unions,
    Valves,
  } from "../images";

  const Categories = () => {
    const categories = [
      { name: "Bushings", image: Bushings },
      { name: "Couplings", image: Couplings },
      { name: "Flanges", image: Flanges },
      { name: "Pipe Fittings", image: PipeFittings },
      { name: "Plugs", image: Plugs },
      { name: "Reducers", image: Reducers },
      { name: "Unions", image: Unions },
      { name: "Valves", image: Valves },
    ];

    return (
      <div className=" bg-[#F2F4F7]">
        <h2 className="text-[14px] bg-[#FFFFFF] px-8 py-4 mb-6">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 p-8 gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-[275px] h-[275px] p-1 flex flex-col items-center justify-between bg-white border border-solid border-[#EAECF0] shadow-sm"
            >
              <div className="w-[267px] h-[220px] bg-[#F2F4F7] flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-[267px] h-[220px] object-cover"
                />
              </div>
              <p className="text-lg font-medium text-center justify-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Categories;
