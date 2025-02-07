'use client';
import { useState } from "react";
import {Cursor} from "./Cursor";

export const Scene = () => {
   const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-full flex items-center justify-center">
      <h1 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} className="text-[6vw] max-w-{90vw} text-center font-bold text-white p-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </h1>
      <Cursor isHovered={isHovered} />
    </div>
  );
};
