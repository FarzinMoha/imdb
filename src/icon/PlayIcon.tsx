import { iconProps } from "@/type/type";
import React from "react";

const PlayIcon = ({width , height , color}:iconProps) => {
  return (
    <svg

      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="ipc-icon ipc-icon--play-arrow ipc-btn__icon ipc-btn__icon--pre"
      id="iconContext-play-arrow"
      viewBox="0 0 24 24"
      fill={color}
      role="presentation"
    >
      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path>
    </svg>
  );
};

export default PlayIcon;
