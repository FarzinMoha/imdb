import ArrowRightIcon from "@/icon/ArrowRightIcon";
import { pallet } from "@/pallet/pallete";
import { insideTitleProps } from "@/type/type";
import React, { useState } from "react";

const InsideTitle = ({text1 , text2 , titleIcon}:insideTitleProps) => {
    const [hover , setHover] = useState(false)
  return (
    <div 
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    className="flex flex-col justify-start items-start cursor-pointer">
      <h3 className="pl-5 relative font-black text-white text-2xl before:absolute before:rounded before:h-full before:w-[3px] before:bg-yellow-500 before:content-[''] before:top-0 before:left-0">
        <span className="pr-4" >{text1}</span>
        {titleIcon && <ArrowRightIcon width={20} height={20} color={hover ? pallet.imdbYellow : pallet.white}/>}
      </h3>
      {text2 && <p className="mt-2 text-slate-300">{text2}</p>}
    </div>
  );
};

export default InsideTitle;
