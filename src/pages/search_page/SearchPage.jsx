import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import FeedTest from "../components/FeedTest";

const SearchPage = () => {
  return (
    <div className="page">
      <div className="border-layout flex min-h-screen min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
        <div className="sticky top-0 z-10 flex h-[4.5rem] w-full bg-slate-100 dark:bg-dark">
          <div className="flex h-full w-full items-center justify-center">
            <input
              type="text"
              className="h-[60%] w-[88%] rounded-full bg-hoverLight p-4 pl-10 text-black outline-none 
                        focus:outline-[2px] focus:outline-accent dark:bg-hoverDark dark:text-white
                      focus:dark:bg-dark"
              placeholder="Search Socii..."
            />
            <BiSearchAlt className="absolute top-[25px] left-[44px] h-6 w-6  dark:text-white" />
          </div>
        </div>
        <FeedTest />
      </div>
    </div>
  );
};

export default SearchPage;
