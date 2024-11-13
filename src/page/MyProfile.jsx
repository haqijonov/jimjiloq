import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";
import { useSelector } from "react-redux";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditProfile from "../components/editprofile/EditProfile";

function MyProfile() {
  //   const [hostname, setHostname] = useState("");
  //   const [port, setPort] = useState("");
  //   const [pathname, setPathname] = useState("");
  //   const [link, setLink] = useState("");
  const { user } = useSelector((state) => state.userSlice);
  console.log(user);

  //   useEffect(() => {
  //     // URL qismlarini olish
  //     setHostname(window.location.hostname); // localhost
  //     setPort(window.location.port); // 5173
  //     setPathname(window.location.pathname); // /myprofile
  //     setLink(`${hostname}:${port}${pathname}`);
  //   }, []);
  return (
    <div className="flex ">
      <div className="w-[75%]  border-r h-screen">
        <div className="w-[67%] mx-auto pt-24">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">
              {user.username.charAt().toUpperCase() +
                user.username.slice(1).toLowerCase()}
            </h1>
            <div>
              <Popover>
                <PopoverTrigger>
                  <DotsHorizontalIcon />
                </PopoverTrigger>
                <PopoverContent className={"max-w-[200px] rounded-md"}>
                  <span className="opacity-55 text-[15px]">
                    Coppy link to profile
                  </span>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-3 p-10">
        <Avatar className={"w-[65px] h-[65px]"}>
          <AvatarImage
            src={user && user.avatar ? user.avatar : ""}
            alt={user && user.username ? user.username : "Avatar"}
          />
          <AvatarFallback className="uppercase text-2xl text-primaryColor">
            {user && user.username ? user.username.charAt(0) : ""}
          </AvatarFallback>
        </Avatar>
        <p>
          {" "}
          {user.username.charAt().toUpperCase() +
            user.username.slice(1).toLowerCase()}
        </p>
        <EditProfile />
      </div>
    </div>
  );
}

export default MyProfile;
