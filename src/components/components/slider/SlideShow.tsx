import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SlideItem from "./SlideItem";
import { pallet } from "@/pallet/pallete";
import ArrowLeftIcon from "@/icon/ArrowLeftIcon";
import ArrowRightIcon from "@/icon/ArrowRightIcon";
import { slideShowProps } from "@/type/type";
const SlideShow : React.FC<slideShowProps> = ({ buttonUp ,children , responsive ,slidesToScroll, slidesToShow,indicators}) => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const btnPosition = buttonUp ? 'translateY(-50px)' : 'translateY(0px)'
  const properties = {
    prevArrow: (
      <button
      className="max-[500px]:hidden"
        onMouseEnter={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
        style={{
          backgroundColor: "rgb(0,0,0,.5)",
          margin: "0px 5px",
          width: "50px",
          height: "70px",
          borderRadius: "10px",
          transform:btnPosition 
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
      className="max-[500px]:hidden"
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
        style={{
          backgroundColor: "rgb(0,0,0,.5)",
          margin: "0px 5px",
          width: "50px",
          height: "70px",
          borderRadius: "10px",
          transform:btnPosition 
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
    <Slide  duration={5000} transitionDuration={500} slidesToScroll={slidesToScroll} slidesToShow={slidesToShow} indicators={indicators} infinite={true} autoplay={true} {...properties} responsive={responsive}>
            {children}
    </Slide>
  );
};

export default SlideShow;
