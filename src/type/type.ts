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

export type slideShowProps = {
  buttonUp?:boolean
  children: ReactNode;
  responsive?:any
  slidesToScroll?:number 
  slidesToShow?:number 
  indicators?:boolean
 
}
export type slideItemProps = {
  height:number
  type?:string
}

export type titleProps = {
  title:string
}

export type insideTitleProps = {
  text1:string 
  text2:string
  titleIcon?:boolean
}
export type whatToWatchProps = {
  height:number
}
