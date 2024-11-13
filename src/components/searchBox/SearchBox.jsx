import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import React from "react";

function SearchBox() {
  return (
    <div>
      <Label htmlFor="search" className="flex items-center relative">
        <Input
          id="search"
          placeholder="Search"
          className="pl-8 pr-3 py-3 border-none bg-gray-200 shadow-none  w-full placeholder:font-normal placeholder:text-gray-400"
        />
        <MagnifyingGlassIcon className="absolute left-2 text-xl w-5 h-5 text-gray-400" />
      </Label>
    </div>
  );
}

export default SearchBox;
