import { iconProps } from "@/type/type";
import React from "react";

const CloseIcon = ({width , height , color}:iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="ipc-icon ipc-icon--clear"
      id="iconContext-clear"
      viewBox="0 0 24 24"
      fill={color}
      role="presentation"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
    </svg>
  );
};

export default CloseIcon;
