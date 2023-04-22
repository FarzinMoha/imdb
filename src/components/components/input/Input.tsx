"use client"
import { inputProps } from "@/type/type";
import React, { InputHTMLAttributes, useRef, useState } from "react";
import InputDropDown from "./InputDropDown";
import DropDownButton from "./DropDownButton";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement> & inputProps> = ({
  leftIcon,
  rightIcon,
  dropDown,
  ...props
}) => {
    const [openDrop , setOpenDrop] = useState(false)
    const [active , setActive] = useState(false)
    const [dropDownItem , setDropDownItem] = useState(dropDown[0].title)
    

  return (
    <div className={`${active ? 'border-yellow-400' : 'border-current'} w-1/2 h-9 relative ml-10 flex items-center justify-center border-2`}>
      {dropDown && <DropDownButton setOpenDrop={setOpenDrop} openDrop={openDrop} dropDownItem={dropDownItem} />}
      <input onFocus={()=>setActive(true)} className="w-full right-0 h-full grow p-1 border-2 rounded-tr rounded-br" {...props}/>
      {rightIcon && <span className="absolute top-2/4 right-2 cursor-pointer -translate-y-2/4 ">{rightIcon}</span>}
      {leftIcon && <span className="absolute top-2/4 left-1 -translate-y-2/4 ">{leftIcon}</span>}
      {dropDown && <ul onMouseLeave={()=>setOpenDrop(false)} onMouseEnter={()=>setOpenDrop(true)} className={` ${openDrop ? 'scale-100' : 'scale-0'} w-1/3 origin-top-left duration-300 absolute left-0 z-20 -translate-y-0.5 bg-slate-500 top-full flex flex-col items-center justify-center `}>
        {dropDown.map((item:any , index:number)=>{
            return <InputDropDown key={index} item={item} openDrop={openDrop} setDropDownItem={setDropDownItem} setOpenDrop={setOpenDrop} />
        })}
        </ul>}
    </div>
  );
};

export default Input;
