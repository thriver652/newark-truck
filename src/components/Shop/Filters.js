import React, { useState, useEffect } from "react";

const Filters = ({ onApplyFilter }) => {
  // States for filter values
  const [isInStock, setIsInStock] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const [showMoreSizes, setShowMoreSizes] = useState(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  useEffect(() => {
    // Pass the selected filters to the parent component whenever the filters change
    onApplyFilter({
      isInStock,
      selectedBrands,
      selectedSizes,
    });
  }, [isInStock, selectedBrands, selectedSizes, onApplyFilter]);

  const handleShowMore = (setter) => {
    setter((prev) => !prev);
  };

  const handleReset = () => {
    // Reset all filters
    setIsInStock(false);
    setSelectedBrands([]);
    setSelectedSizes([]);
    onApplyFilter("Reset");
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg max-h-[1212px] overflow-y-auto">
      {/* Filter Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-gray-600 font-semibold"
          onClick={() => setIsFiltersVisible((prev) => !prev)}
        >
          {isFiltersVisible ? "Hide filters" : "Show filters"}
        </button>
        <button className="text-red-600 font-semibold" onClick={handleReset}>
          Reset
        </button>
      </div>

      {isFiltersVisible && (
        <>
          {/* Product Availability */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Product availability</h3>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={isInStock}
                onChange={() => setIsInStock((prev) => !prev)}
              />
              <span>Show In stock only</span>
            </label>
          </div>

          {/* Brands */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Brands</h3>
            {[
              "Bluemonster (712)",
              "Mill rose (02)",
              "Everflow (12)",
              "Sunset wave (503)",
              "Twilight peak (305)",
              "Golden fields (820)",
              "Moonlit path (609)",
              "Starlight meadow (111)",
            ]
              .slice(0, showMoreBrands ? undefined : 6)
              .map((brand, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <span>{brand}</span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-2"
              onClick={() => handleShowMore(setShowMoreBrands)}
            >
              {showMoreBrands ? "See less" : "See more"}
            </button>
          </div>

          {/* Size */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            {[
              "1/8” (25)",
              "1/4” (53)",
              "3/8” (63)",
              "1/2” (72)",
              "5/8” (88)",
              "3/4” (96)",
              "7/8” (109)",
              "1” (127)",
            ]
              .slice(0, showMoreSizes ? undefined : 6)
              .map((size, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeChange(size)}
                  />
                  <span>{size}</span>
                </label>
              ))}
            <button
              className="text-blue-500 mt-2"
              onClick={() => handleShowMore(setShowMoreSizes)}
            >
              {showMoreSizes ? "See less" : "See more"}
            </button>
          </div>

          {/* Review Score (To be implemented) */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Review score</h3>
            <p>Feature to be implemented</p>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Price range</h3>
            {[
              "Under $1",
              "$1 to $5",
              "$5 to $10",
              "$10 to $20",
              "$20 to $50",
              "$50 to $100",
              "$100 to $200",
              "Over $200",
            ].map((range, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{range}</span>
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Filters;
