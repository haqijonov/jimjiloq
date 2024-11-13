import { Link } from "react-router-dom";
import SearchBox from "../searchBox/SearchBox";

import { MagnifyingGlassIcon, Pencil2Icon } from "@radix-ui/react-icons";
import Avatar from "../avatar/Avatar";
function Header() {
  return (
    <div className="border-b">
      <div className="container flex items-center justify-between max-w-[1300px] px-5 mx-auto py-2 ">
        <div className="flex items-center gap-5">
          <Link className="font-logo text-3xl text-primaryColor " to={"/"}>
            Jimjiloq
          </Link>
          <div className="hidden md:block">
            <SearchBox />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <Link className=" flex items-center gap-2 leading-none text-primaryColor opacity-60 hover:opacity-100 transition-all">
              <Pencil2Icon className="w-[25px] h-[25px]" />{" "}
              <span className="-mb-[3px]">Write</span>
            </Link>
          </div>
          <div className="block md:hidden">
            <Link>
              <MagnifyingGlassIcon className="w-[25px] h-[25px] text-primaryColor opacity-65 hover:opacity-100 " />
            </Link>
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
