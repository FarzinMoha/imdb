import React from "react";
import NavLeftItem from "./NavLeftItem";
import WatchListIcon from "@/icon/WatchListIcon";
import { pallet } from "@/pallet/pallete";
import ArrowDownIcon from "@/icon/ArrowDownIcon";
import SearchIcon from "@/icon/SearchIcon";
import { navLeftProps } from "@/type/type";

const NavLeft = ({setShowSearchHidden}:navLeftProps) => {
  return (
    <div className="flex justify-center items-center min-[1024px]:border-l ml-5 max-[400px]:ml-0">
      <div className="max-[1024px]:hidden">
      <NavLeftItem
        leftIcon={<WatchListIcon width={24} height={24} color={pallet.white} />}
        content="Whathlist"
      />
      </div>
      <div className="min-[600px]:hidden" onClick={()=> setShowSearchHidden(true)}>
        <NavLeftItem
        content={<SearchIcon width={20} height={20} color={pallet.white} />}
      />
      </div>
      <NavLeftItem
        content="Sign In"
      />
      <NavLeftItem
        rightIcon={
          <ArrowDownIcon width={15} height={15} color={pallet.white} />
        }
        content="En"
      />
    </div>
  );
};

export default NavLeft;
