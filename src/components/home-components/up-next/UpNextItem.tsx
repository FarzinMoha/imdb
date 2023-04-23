import PlayCircleIcon from "@/icon/PlayCircleIcon";
import { pallet } from "@/pallet/pallete";
import Image from "next/image";
import React, { useState } from "react";

const UpNextItem = () => {
    const [hover , setHover] = useState(false)
  return (
    <div className="w-full h-[180px]  bg-lightBlack">
      <div className="w-full h-full px-2 py-3">
        <div className="w-full h-full flex justify-start items-center">
          <Image src="/asset/image1.jpeg" alt="film" width={90} height={150} />
          <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="ml-1 h-full flex flex-col justify-center items-start text-white pl-1 cursor-pointer">
            <div className="flex justify-start items-end mb-2">
              <PlayCircleIcon width={30} height={30} color={hover ? pallet.imdbYellow : pallet.white} />
              <span className="ml-1 text-sm" >4:25</span>
            </div>
            <span className="mb-1">The "Barry" Cast Reveal the Scenes They'll Never Forget</span>
            <span className="font-extralight">Watch the Interview</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpNextItem;
