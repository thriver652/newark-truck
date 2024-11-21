// src/CategoryComponents/BrandsContent.js
import React from "react";
import { hoses } from "../../data/headerData";

const HosesContent = () => (
  <>
    {hoses.map((hose) => (
      <div key={hose} className="p-1 text-black">
        {hose}
      </div>
    ))}
  </>
);

export default HosesContent;
