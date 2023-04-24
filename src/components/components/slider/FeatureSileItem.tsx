import ListIcon from "@/icon/ListIcon";
import PhotosIcon from "@/icon/PhotosIcon";
import { pallet } from "@/pallet/pallete";
import { slideItemProps } from "@/type/type";
import Link from "next/link";
import React, { useState } from "react";

const FeatureSileItem = ({ height, type }: slideItemProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="each-slide-effect cursor-pointer "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`w-full h-[${height + 30}px] mx-auto align-middle`}>
        <div className="w-full h-full">
          <div
          className={`z-10 w-[98%] h-[${height}px] relative bg-cover bg-repeat bg-center mx-1 after:content-[''] after:w-full after:h-full after:top-0 after:bottom-0 bg after:bg-black-shadow after:-z-10 after:absolute`}
          style={{ backgroundImage: "url(/asset/fastx.webp)" }}
        >
          {type === "list" && (
            <div className="absolute bottom-1 left-1 flex flex-col justify-center items-center">
              <ListIcon
                width={30}
                height={30}
                color={!hover ? pallet.white : pallet.imdbYellow}
              />
              <span className="ml-[3px] text-sm text-white">List</span>
            </div>
          )}
          {type === "photos" && (
            <div className="absolute bottom-1 left-1  flex justify-center items-center">
              <PhotosIcon
                width={40}
                height={40}
                color={!hover ? pallet.white : pallet.imdbYellow}
              />
              <span className="ml-[3px] text-sm text-white">Photos</span>
            </div>
          )}
          </div>
          <div className="w-[98%] h-[30px] mt-1 ml-[4px] flex justify-start items-center text-white hover:underline text-sm">
            <Link href='/'>The Best New & Upcoming Sci-Fi & Fantasy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSileItem;
