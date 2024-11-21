import React from "react";
import { valves } from "../../data/headerData";

const ValvesContent = () => {
  return (
    <>
      {valves.map((valve) => (
        <div key={valve} className="p-1 text-black">
          {valve}
        </div>
      ))}
    </>
  );
};

export default ValvesContent;
