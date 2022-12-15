import React from "react";
import Navbar from "../components/Navbar";
import { TbMail } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import FeedTest from "../components/FeedTest";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

const ProfilePage = () => {
  const user = {
    name: "Elon Musk",
    wallpaper:
      "https://pbs.twimg.com/profile_banners/44196397/1576183471/1080x360",
    avatar:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
  };

  return (
    <div className="page">
      <div className="mx-auto flex min-w-[450px] max-w-[1280px] justify-center">
        <div className="sticky top-0">
          <LeftBar />
        </div>

        <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
          <Navbar pageName={user.name} showButton />
          {/* Top */}
          <div className="border-layout flex flex-col border-b pb-3">
            <div className="h-[200px] bg-black">
              <img src={user.wallpaper} alt="" />
            </div>
            <div className="ml-3 -mt-20 mr-4 flex">
              <div className="flex flex-col items-center ">
                <img
                  className="h-36 rounded-full border-[3px] border-lime-50"
                  src={user.avatar}
                  alt="avatar"
                />
                <span className="text-[22px] font-[1000]">{user.name}</span>
              </div>

              <div className="ml-auto mt-12 flex items-center space-x-2">
                <div className="hoverAnimation p-2">
                  <HiDotsHorizontal className="h-6 w-6" />
                </div>
                <div className="hoverAnimation p-2">
                  <TbMail className="h-6 w-6" />
                </div>
                <button className="rounded-full border bg-accent p-2 text-sm font-semibold text-white">
                  Add Friend
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 flex space-x-3 text-sm">
                <span className="ml-8">100 friends</span>
                <span className="">6 mutual</span>
              </div>

              <p className="mx-2 -mt-2 px-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="mt-3">
            <span className="content-title">Posts</span>
            <FeedTest></FeedTest>
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default ProfilePage;
