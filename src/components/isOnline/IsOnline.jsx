import React from "react";
import OflineImg from "../../img/ofline.png";

function IsOnline() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-[150px] h-[150px]">
          <img src={OflineImg} className="w-full" alt="img" />
        </div>
        <p>Ooops !</p>
        <p className="text-1xl font-bold ">please check your internet</p>
      </div>
    </div>
  );
}

export default IsOnline;
