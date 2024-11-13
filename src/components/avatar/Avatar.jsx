import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
import {
  BookmarkIcon,
  ExitIcon,
  MixerVerticalIcon,
  PersonIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import { removeUser } from "../../feature/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useSelector } from "react-redux";

function Avatarr() {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  return (
    <Popover className={`mr-20`}>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage
            src={user && user.avatar ? user.username.charAt(0) : ""}
          />
          <AvatarFallback className="uppercase text-primaryColor">
            {user && user.username ? user.username.charAt() : ""}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="mr-5 mt-[4px] flex gap-10 justify-start flex-col">
        <Link
          to={"/myprofile"}
          className="flex items-center justify-between  text-primaryColor "
        >
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all hover:underline">
            <PersonIcon className="w-[25px] h-[25px] " /> <span>Profile</span>
          </div>
          {user
            ? user.username.charAt().toUpperCase() +
              user.username.slice(1).toLowerCase()
            : ""}
        </Link>
        <Link className="flex items-center gap-3 text-primaryColor opacity-60 hover:opacity-100 transition-all hover:underline">
          <BookmarkIcon className="w-[25px] h-[25px] " />{" "}
          <span>Favorite articles</span>
        </Link>
        <Link className="flex items-center gap-3 text-primaryColor opacity-60 hover:opacity-100 transition-all hover:underline">
          <ReaderIcon className="w-[25px] h-[25px] " /> <span>My stories</span>
        </Link>
        <Link className="flex items-center gap-3 text-primaryColor opacity-60 hover:opacity-100 transition-all hover:underline">
          <MixerVerticalIcon className="w-[25px] h-[25px] " />{" "}
          <span>Stats</span>
        </Link>
        <span
          onClick={() => {
            localStorage.removeItem("user");
            dispatch(removeUser(null));
            toast.success("see you soon");
          }}
          className="flex items-center gap-3 cursor-pointer text-black opacity-60 hover:opacity-100 transition-all hover:underline"
        >
          <ExitIcon className="w-[25px] h-[25px] " /> <span>Sign Out</span>
        </span>
      </PopoverContent>
    </Popover>
  );
}

export default Avatarr;
