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

export const Navbar = () => {

  return (
    <nav className="h-16 w-screen ">
      <LogoIcon width={80} height={40} />
      <BergurMenuIcon width={70} height={25} color={pallet.black} />
      <Input
        placeholder="imdb search"
        dropDown={[
            { title: "All", icon: <SearchIcon width={15} height={15} color={pallet.black} /> },
            { title: "Titles", icon: <FilmIcon width={15} height={15} color={pallet.black} /> },
            { title: "Tv Episodes", icon: <TvIcon width={15} height={15} color={pallet.black} />  },
            { title: "Celebs", icon: <PersonIcon width={15} height={15} color={pallet.black} /> },
            { title: "Companies", icon: <CompaniesIcon width={16} height={16} color={pallet.black} /> },
            { title: "Keywords", icon: <KeyWordIcon width={16} height={16} color={pallet.black} /> },
          ]}
          rightIcon={<SearchIcon width={20} height={20} color={pallet.black}/>}
      />
    </nav>
  );
};
