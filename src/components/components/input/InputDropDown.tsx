import { inputDropDownProps } from "@/type/type";
import React, { useState } from "react";

const InputDropDown = ({ item, openDrop ,setDropDownItem , setOpenDrop }: inputDropDownProps) => {
    const [hover , setHover] = useState(false)
  return (
    <li
    onClick={()=>{setDropDownItem(item.title);setOpenDrop(false)}}
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
      className={`
      ${!hover ? 'bg-transparent' : 'bg-slate-400'}
      ${
        openDrop ? "opacity-100 duration-300" : "opacity-0 duration-50"
      } duration-50 w-full flex flex-row justify-start items-center cursor-pointer px-2 my-1 py-2`}
    >
      <span className="mr-2 flex justify-start items-center">{item.icon}</span>
      {item.title}
    </li>
  );
};

export default InputDropDown;
