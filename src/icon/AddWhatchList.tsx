import { iconProps } from "@/type/type";
import React from "react";

const AddWhatchList = ({ width, height, color }: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className="ipc-icon ipc-icon--watchlist ipc-btn__icon ipc-btn__icon--pre"
      id="iconContext-watchlist"
      viewBox="0 0 24 24"
      fill='red'
      role="presentation"
    >
      <path
      style={{transition:'.5s'}}
        d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
        fill={color}
      ></path>
    </svg>
  );
};

export default AddWhatchList;
