import { ReactNode, SetStateAction } from "react";

export type iconProps = {
  width: number;
  height: number;
  color?: string;
};

export type inputProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  dropDown?: any;
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
