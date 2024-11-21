import React from "react";
import { fittings } from "../../data/headerData";
const FittingsContent = () => {
  return (
    <>
      {fittings.map((fit) => (
        <div key={fit} className="p-1 text-black">
          {fit}
        </div>
      ))}
    </>
  );
};

export default FittingsContent;
