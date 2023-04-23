import SlideShow from "@/components/components/slider/SlideShow";
import React from "react";
import UpNext from "../up-next/UpNext";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center px-10 py-3 max-[1024px]:px-3">
      <div className="w-4/6 max-[1024px]:w-full">
        <SlideShow />
      </div>
      <div className="w-2/6 h-[600px] ml-2 max-[1024px]:hidden">
        <UpNext/>
      </div>
    </div>
  );
};

export default HeroSection;
