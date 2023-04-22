import ArrowDownIcon from '@/icon/ArrowDownIcon'
import ArrowUpIcon from '@/icon/ArrowUpIcon'
import { pallet } from '@/pallet/pallete'
import { dropDownButtonProps } from '@/type/type'
import React, { useRef } from 'react'

const DropDownButton = ({setOpenDrop , openDrop ,dropDownItem}:dropDownButtonProps) => {
  return (
    <span className="hover:bg-slate-200 duration-200 px-2 select-none cursor-pointer w-fit h-full whitespace-nowrap rounded-tl rounded-bl flex items-center justify-center border-2 " 
    onClick={()=>setOpenDrop(!openDrop)}
    onMouseLeave={()=>setOpenDrop(false)}
    onMouseEnter={()=>{if(openDrop){setOpenDrop(true)}}}
    >
      <span className="mr-1">{dropDownItem}</span>
      {openDrop ? <ArrowUpIcon width={10} height={10} color={pallet.black} /> : <ArrowDownIcon width={10} height={10} color={pallet.black} /> }
    </span>
  )
}

export default DropDownButton