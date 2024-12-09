import React from "react";
import { pumps } from "../../data/headerData";

const PumpsContent = () => {
  return (
    <>
      {pumps.map((pump) => (
        <div key={pump} className="p-1 text-black">
          {pump}
        </div>
      ))}
    </>
  );
};

export default PumpsContent;
