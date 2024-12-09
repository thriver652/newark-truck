import React from "react";
import { accessories } from "../../data/headerData";
const AccessoriesContent = () => {
  return (
    <>
      {accessories.map((acc) => (
        <div key={acc} className="p-1 text-black">
          {acc}
        </div>
      ))}
    </>
  );
};

export default AccessoriesContent;
