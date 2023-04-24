import SlideShow from "@/components/components/slider/SlideShow";
import React from "react";
import UpNext from "../up-next/UpNext";
import SlideItem from "@/components/components/slider/SlideItem";

const HeroSection = () => {
  return (
    <div className="flex w-screen justify-center items-center px-10 py-3 max-[1024px]:px-3 max-[400px]:px-[5px]">
      <div className="w-4/6 max-[1024px]:w-full max-[1024px]:mx-auto">
        <SlideShow  buttonUp >
          <SlideItem height={600}/>
        </SlideShow>
      </div>
      <div className="w-2/6 h-[600px] ml-4 max-[1024px]:hidden">
        <UpNext/>
      </div>
    </div>
  );
};

export default HeroSection;
