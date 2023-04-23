import React, { ReactNode, SetStateAction } from "react";

export type iconProps = {
  width: number;
  height: number;
  color?: string;
};

export type inputProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  dropDown?: any;
  rootClass?:string
};

export type inputDropDownProps = {
  item:{
    title:string
    icon:ReactNode
  }
  openDrop:boolean
  setDropDownItem:React.Dispatch<SetStateAction<string>>
  setOpenDrop:React.Dispatch<SetStateAction<boolean>>
}

export type dropDownButtonProps = {
  setOpenDrop:React.Dispatch<SetStateAction<boolean>> , 
  openDrop:boolean
  dropDownItem:string

}

export type navLeftItemProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  content?: string | ReactNode ;
  path?:string
}
export type navLeftProps = {
  setShowSearchHidden: React.Dispatch<SetStateAction<boolean>>
}
