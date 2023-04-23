import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SlideItem from "./SlideItem";
import { pallet } from "@/pallet/pallete";
import ArrowLeftIcon from "@/icon/ArrowLeftIcon";
import ArrowRightIcon from "@/icon/ArrowRightIcon";

const SlideShow = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const properties = {
    prevArrow: (
      <button
        onMouseEnter={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
        style={{
          backgroundColor: "rgb(0,0,0,.5)",
          margin: "0px 5px",
          width: "50px",
          height: "70px",
          borderRadius: "10px",
          transform:'translateY(-50px)'
        }}
      >
        <ArrowLeftIcon
          width={20}
          height={20}
          color={hoverLeft ? pallet.imdbYellow : pallet.white}
        />
      </button>
    ),
    nextArrow: (
      <button
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
        style={{
          backgroundColor: "rgb(0,0,0,.5)",
          margin: "0px 5px",
          width: "50px",
          height: "70px",
          borderRadius: "10px",
          transform:'translateY(-50px)'
        }}
      >
        <ArrowRightIcon
          width={20}
          height={20}
          color={hoverRight ? pallet.imdbYellow : pallet.white}
        />
      </button>
    ),
    width:'100%'
  };

  return (
    <Slide  duration={5000} transitionDuration={500} infinite={true} autoplay={true} {...properties}>
      <div className="each-slide-effect">
        <div className="w-full h-[600px] mx-auto align-middle">
          <SlideItem/>
        </div>
      </div>
    </Slide>
  );
};

export default SlideShow;
