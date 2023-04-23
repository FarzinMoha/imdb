import { inputDropDownProps } from "@/type/type";
import React, { useState } from "react";

const InputDropDown = ({ item, openDrop ,setDropDownItem , setOpenDrop }: inputDropDownProps) => {
  return (
    <li
    onClick={()=>{setDropDownItem(item?.title);setOpenDrop(false)}}
      className={`
      ${
        openDrop ? "opacity-100 duration-300" : "opacity-0 duration-50"
      } duration-50 w-full flex flex-row justify-start items-center cursor-pointer my-1 p-3 hover:bg-lighterBlack`}
    >
      <span className="mr-2 flex justify-start items-center">{item?.icon}</span>
      {item?.title}
    </li>
  );
};

export default InputDropDown;
