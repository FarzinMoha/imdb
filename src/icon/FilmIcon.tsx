import { iconProps } from "@/type/type";
import React from "react";

const FilmIcon = ({width , height , color}:iconProps) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      id="film-movie-2"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-line"
      
    >
      <rect
        id="secondary"
        x="7"
        y="3"
        width="10"
        height="18"
        rx="1"
        fill="none"
      ></rect>
      <path
        id="primary"
        d="M17,12h4V6H17Zm0,6h4V12H17Zm4,3V3M7,6H3v6H7Zm0,6H3v6H7ZM3,21V3m10,9-2-1.5v3Zm3,9H8a1,1,0,0,1-1-1V4A1,1,0,0,1,8,3h8a1,1,0,0,1,1,1V20A1,1,0,0,1,16,21Z"
        fill="none"
        stroke={color}
        strokeLinecap= 'round' 
        strokeLinejoin= 'round'
        strokeWidth= '2'
      ></path>
    </svg>
  );
};

export default FilmIcon;
