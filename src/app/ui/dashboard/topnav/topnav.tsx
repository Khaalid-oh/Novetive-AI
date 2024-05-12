import React from "react";
import ExitICon from "../../icons/ExitIcon";

function Topnav() {
  return (
    <div className="flex h-[153px] px-12 w-full items-center justify-between bg-light">
      <h2 className="font-bold text-3xl text-black">
        NAI<span className="text-orange">3.5</span>
      </h2>
      <div className="flex items-center justify-center border-gray-300 border-[1px] h-16 w-16 rounded-full">
        <ExitICon />
      </div>
    </div>
  );
}

export default Topnav;
