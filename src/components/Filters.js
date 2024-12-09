import React, { useState } from "react";

const Filters = () => {
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const [showMoreSizes, setShowMoreSizes] = useState(false);

  const brands = [
    { name: "Bluemonster", count: 712 },
    { name: "Mill rose", count: 2 },
    { name: "Everflow", count: 12 },
    { name: "Sunset wave", count: 503 },
    { name: "Twilight peak", count: 305 },
    { name: "Golden fields", count: 820 },
    { name: "Moonlit path", count: 609 },
    { name: "Starlight meadow", count: 111 },
  ];

  const sizes = [
    { name: "1/8\"", count: 25 },
    { name: "1/4\"", count: 53 },
    { name: "3/8\"", count: 63 },
    { name: "1/2\"", count: 72 },
    { name: "5/8\"", count: 88 },
    { name: "3/4\"", count: 96 },
    { name: "7/8\"", count: 109 },
    { name: "1\"", count: 127 },
  ];

  const priceRanges = [
    "Under $1",
    "$1 to $5",
    "$5 to $10",
    "$10 to $20",
    "$20 to $50",
    "$50 to $100",
    "$100 to $200",
    "Over $200",
  ];

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">1000 items</h3>
      <button className="text-blue-600 mb-6">Reset</button>

      {/* Product Availability */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Product availability</h4>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Show In stock only (712)
        </label>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Brands</h4>
        <div>
          {brands
            .slice(0, showMoreBrands ? brands.length : 5)
            .map((brand, index) => (
              <label key={index} className="flex items-center mb-1">
                <input type="checkbox" className="mr-2" />
                {brand.name} ({brand.count})
              </label>
            ))}
          <button
            className="text-blue-600 mt-2"
            onClick={() => setShowMoreBrands(!showMoreBrands)}
          >
            {showMoreBrands ? "See less" : "See more"}
          </button>
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Size</h4>
        <div>
          {sizes
            .slice(0, showMoreSizes ? sizes.length : 5)
            .map((size, index) => (
              <label key={index} className="flex items-center mb-1">
                <input type="checkbox" className="mr-2" />
                {size.name} ({size.count})
              </label>
            ))}
          <button
            className="text-blue-600 mt-2"
            onClick={() => setShowMoreSizes(!showMoreSizes)}
          >
            {showMoreSizes ? "See less" : "See more"}
          </button>
        </div>
      </div>

      {/* Review Score */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Review score</h4>
        <div className="flex flex-col gap-1">
          {[5, 4, 3, 2, 1].map((score) => (
            <label key={score} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < score ? "text-green-500" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.75L6.16 21l1.15-6.72-4.88-4.75 6.77-.98L12 2.5l3.03 6.05 6.77.98-4.88 4.75L17.84 21z" />
                  </svg>
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Price range</h4>
        {priceRanges.map((range, index) => (
          <label key={index} className="flex items-center mb-1">
            <input type="checkbox" className="mr-2" />
            {range}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
