import { iconProps } from "@/type/type";
import React from "react";

const ArrowUpIcon = ({ width, height, color }: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <path fill={color} stroke= {color} d="M 1.5,80 98,80 50,21 z" />
    </svg>
  );
};

export default ArrowUpIcon;
