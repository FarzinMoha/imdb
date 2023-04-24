import AddWhatchList from "@/icon/AddWhatchList";
import PlayCircleIcon from "@/icon/PlayCircleIcon";
import { pallet } from "@/pallet/pallete";
import { slideItemProps } from "@/type/type";
import Image from "next/image";
import React, { useState } from "react";

const SlideItem = ({height}:slideItemProps) => {
  const [addIconColor , setAddIconColor] = useState('rgb(0,0,0,.5)')
  const [playIconColor , setPlayIconColor] = useState(pallet.white)
  return (
    <div className="each-slide-effect">
    <div className={`w-full h-[${height}px] mx-auto align-middle`}>
    <div
    onMouseEnter={()=>setPlayIconColor(pallet.imdbYellow)}
    onMouseLeave={()=>setPlayIconColor(pallet.white)}
      className="w-full h-full bg-cover bg-no-repeat bg-center relative flex justify-center items-center cursor-pointer"
      style={{ backgroundImage: "url(/asset/fastx.webp)" }}
    >
      <div className="absolute w-[90%] h-[250px] bottom-0 left-[20px] z-10 max-[650px]:w-[100%]">
        <div className="w-full h-full flex justify-start items-end ">
          <div className="absolute bottom-0 left-0 ">
          <Image className="w-[160px] max-[650px]:w-[100px]" src='/asset/image1.jpeg' alt="film" width={170} height={200} />
          <div onMouseEnter={()=>setAddIconColor('rgb(255,255,255,.5)')} onMouseLeave={()=>setAddIconColor('rgb(0,0,0,.5)')} className="absolute top-[-7px] left-[-13px] w-[30px] h-[40px] z-30 cursor-pointer"><AddWhatchList width={60} height={60} color={addIconColor}/></div>
          </div>
          <div className="flex justify-start items-center ml-[180px] max-[650px]:ml-[110px] max-[650px]:flex-col max-[650px]:items-start">

          <div className=""><PlayCircleIcon width={70} height={70} color={playIconColor} /></div>
          <div className="h-[100px] relative flex flex-col justify-center items-start text-white pl-6 max-[650px]:pl-0">
            <h2 className="w-[350px] whitespace-normal text-xl max-[650px]:w-[300px] max-[650px]:text max-[400px]:w-[170px] max-[400px]:text-xs">The "Barry" Cast Reveal the Scenes They'll Never Forget</h2>
            <h2 className="w-[350px] whitespace-normal text-l mt-1">Watch the Interview</h2>
            <span className="absolute bottom-0 right-10 text-lg text-white max-[650px]:top-[-50px] max-[650px]:left-[100px]">04:30</span>
          </div>
          </div>
        </div>
      </div>










      <div className="absolute bottom-0 left-0 w-full h-[50px] bg-black"></div>
      <div style={{background:'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'}} className="absolute bottom-[50px] left-0 w-full h-[150px] bg-gradiantBlack"></div>
    </div>
    </div>
    </div>
  );
};

export default SlideItem;

