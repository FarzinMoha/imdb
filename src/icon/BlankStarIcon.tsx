import { iconProps } from "@/type/type";
import React from "react";

const BlankStarIcon = ({ width, height, color }: iconProps) => {
  return (
    <svg
    style={{transition:'.1s'}}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="ipc-icon ipc-icon--star-border-inline"
      id="iconContext-star-border-inline"
      viewBox="0 0 24 24"
      fill={color}
      role="presentation"
    >
      <path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path>
    </svg>
  );
};

export default BlankStarIcon;
