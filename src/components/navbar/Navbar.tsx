import LogoIcon from "@/icon/LogoIcon";
import BergurMenuIcon from "@/icon/bergurMenuIcon";
import { pallet } from "@/pallet/pallete";
import Input from "../components/input/Input";
import SearchIcon from "@/icon/SearchIcon";
import FilmIcon from "@/icon/FilmIcon";
import TvIcon from "@/icon/TvIcon";
import PersonIcon from "@/icon/PersonIcon";
import CompaniesIcon from "@/icon/CompaniesIcon";
import KeyWordIcon from "@/icon/KeyWordIcon";
import NavLeft from "./nav-left/NavLeft";
import { useState } from "react";
import CloseIcon from "@/icon/CloseIcon";

export const Navbar = () => {
    const [showSearchHidden , setShowSearchHidden] = useState(false)

  return (
    <nav className="h-16 text-sm relative w-screen flex items-center justify-center px-10 bg-lightBlack max-[600px]:justify-between max-[600px]:px-2 max-[400px]:px-0">
        <div className=" flex justify-center items-center max-[1024px]:flex-row-reverse">
      <div className="mr-5 cursor-pointer max-[400px]:mr-0"><LogoIcon width={80} height={40} /></div>
      <div className="flex justify-center items-center cursor-pointer hover:bg-lighterBlack mx-2 rounded p-2  max-[400px]:mx-0  max-[400px]:p-[10px]">
        <BergurMenuIcon width={30} height={25} color={pallet.white} />
        <span className="text-white max-[1024px]:hidden">Menu</span>
      </div>
      </div>
      <Input
        rootClass={showSearchHidden ? 'w-full h-full absolute bg-lightBlack text-white z-20' : ''}
        placeholder="imdb search"
        dropDown={!showSearchHidden && [
            { title: "All", icon: <SearchIcon width={20} height={20} color={pallet.white} /> },
            { title: "Titles", icon: <FilmIcon width={20} height={20} color={pallet.white} /> },
            { title: "Tv Episodes", icon: <TvIcon width={20} height={20} color={pallet.white} />  },
            { title: "Celebs", icon: <PersonIcon width={20} height={20} color={pallet.white} /> },
            { title: "Companies", icon: <CompaniesIcon width={20} height={20} color={pallet.white} /> },
            { title: "Keywords", icon: <KeyWordIcon width={20} height={20} color={pallet.white} /> },
          ]}
          rightIcon={!showSearchHidden ? <SearchIcon width={20} height={20} color={pallet.black}/> : <span onClick={()=>setShowSearchHidden(false)} className="w-12 h-12 rounded-full flex justify-center items-center bg-transparent hover:bg-lighterBlack mr-2"><CloseIcon width={24} height={24} color={pallet.white}/></span>}
      />
      <NavLeft setShowSearchHidden={setShowSearchHidden}/>
    </nav>
  );
};
