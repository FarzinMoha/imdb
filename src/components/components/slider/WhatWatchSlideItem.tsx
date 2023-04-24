import BlankStarIcon from "@/icon/BlankStarIcon";
import FillStarIcon from "@/icon/FillStarIcon";
import InfoIcon from "@/icon/InfoIcon";
import PlayIcon from "@/icon/PlayIcon";
import { pallet } from "@/pallet/pallete";
import { whatToWatchProps } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const WhatWatchSlideItem = ({ height }: whatToWatchProps) => {
    const [blanStarHover , setBlankStarHover] = useState(false)
  return (
    <div className="each-slide-effect border-8 border-transparent box-border">
      <div className={`w-full h-[${height}px] mx-auto align-middle`}>
        <div
          className={`relative w-[99%]  h-[${height}px] bg-lightBlack`}
        >
          <Image
            className="w-full h-[300px] object-cover object-center cursor-pointer "
            src="/asset/fastx.webp"
            alt="film"
            width={200}
            height={300}
          />
          <div className="w-full h-[30px] flex justify-start items-center my-1 px-2 ">
          <span className=""><FillStarIcon width={15} height={15} color={pallet.imdbYellow} /></span>
            <span className="mt-[3px] pl-1 text-white">9.0</span>
            <span 
            onMouseEnter={()=>setBlankStarHover(true)}
            onMouseLeave={()=>setBlankStarHover(false)}
            className="ml-5 flex justify-center items-center hover:bg-lighterBlack py-2 px-3 rounded cursor-pointer "><BlankStarIcon width={15} height={15} color={!blanStarHover ? pallet.white : pallet.imdbYellow} /></span>
          </div>
          <div className="w-full h-[60px] px-2 mt-2 mb-4">
          <Link href='/' className=" text-white hover:underline ">Death Note Death Note Death Note</Link>
          </div>
          <div className="w-full text-center">
          <Link href='/' className="py-3 px-16 bg-lighterBlack rounded-md text-blue hover:bg-lightestBlack">+ Watchlist</Link>
          </div>
          <div className="w-full h-[75px] mt-5  flex justify-between px-5 items-center">
            <div className="flex justify-center items-center px-3 py-1 rounded-md hover:bg-lightestBlack cursor-pointer">
                <PlayIcon width={17} height={17} color={pallet.white}/>
                <span className="text-white">Trailer</span>
            </div>
            <div className="p-3 rounded-full hover:bg-lightestBlack cursor-pointer">
                <InfoIcon width={30} height={30} color={pallet.white} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWatchSlideItem;
