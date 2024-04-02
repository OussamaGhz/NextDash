import React from "react";
import { FaceFrownIcon } from "@heroicons/react/24/solid";

const Card = ({ index }: { index: number }) => {
  return (
    <div className="bg-bgSoft p-4 min-h-[150px] rounded-lg shadow flex gap-8">
      <div className="w-1/12">
      <FaceFrownIcon className=""/>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl ">Title</h3>
        <p className="text-2xl font-bold">Numbers</p>
        <p className="">Sub text</p>

      </div>
  
    </div>
  );
};

export default Card;
