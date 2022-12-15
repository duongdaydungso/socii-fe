import React from "react";

import { BiSearchAlt } from "react-icons/bi";
import { ProfileTray } from "../components/Profile";

const RightBar = () => {
  return (
    <div className="hidden w-[300px] max-w-[380px] flex-1 flex-col md:flex">
      <div className="sticky top-0 flex h-[4.5rem] items-center justify-center bg-slate-100 dark:bg-dark">
        <input
          type="text"
          className="h-[70%] w-[90%] rounded-full bg-hoverLight p-4 pl-10 text-black outline-none 
                        focus:outline-[2px] focus:outline-accent dark:bg-hoverDark dark:text-white
                      focus:dark:bg-dark"
          placeholder="Search Socii..."
        />
        <BiSearchAlt className="absolute top-[23px] left-[27px] h-6 w-6  dark:text-white" />
      </div>
      <div className="border-layout">
        <div className="content-title mb-2">You may know</div>
        <ProfileTray />
      </div>
    </div>
  );
};

export default RightBar;
