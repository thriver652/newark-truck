import React from "react";

// Add a placeholder image URL for the truck parts
const placeholderImage = "https://via.placeholder.com/150"; // Replace with actual image URLs if needed

const TruckPartCards = () => {
  const truckParts = [
    {
      name: '1/2" Copper 90° Elbow',
      sku: "31272",
      brand: "Brand name",
      stock: 24,
      priceEach: "$0.64",
      priceBox: "$28 box of 12 ($0.57 each)",
      deliveryDate: "Thu, Oct 17",
    },
    {
      name: "Engine Oil",
      sku: "31273",
      brand: "Brand name",
      stock: 15,
      priceEach: "$50",
      priceBox: "$600 box of 12 ($50 each)",
      deliveryDate: "Mon, Oct 21",
    },
    {
      name: "Brake Pads",
      sku: "31274",
      brand: "Brand name",
      stock: 8,
      priceEach: "$30",
      priceBox: "$360 box of 12 ($30 each)",
      deliveryDate: "Wed, Oct 18",
    },
    {
      name: "Headlights",
      sku: "31275",
      brand: "Brand name",
      stock: 5,
      priceEach: "$70",
      priceBox: "$840 box of 12 ($70 each)",
      deliveryDate: "Tue, Oct 19",
    },
    // Add more truck parts here as needed
  ];

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {truckParts.map((part, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-start space-y-4 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
              <img
                src={placeholderImage}
                alt={part.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <h4 className="font-semibold text-xl text-gray-800">{part.name}</h4>
            <p className="text-gray-600 text-sm">SKU: {part.sku}</p>
            <p className="text-gray-600 text-sm">Brand: {part.brand}</p>
            <p className="text-gray-600 text-sm">In stock: {part.stock}</p>
            <p className="text-green-600 font-semibold text-lg">
              {part.priceEach} each
            </p>
            <p className="text-gray-500 line-through text-sm">
              {part.priceBox}
            </p>
            <p className="text-sm text-gray-500">Get by: {part.deliveryDate}</p>
            <button className="mt-4 bg-[#E31B54] text-white px-6 py-2 rounded-lg hover:bg-[#B91A42] transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TruckPartCards;
