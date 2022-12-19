import React, { Fragment, useRef, useState } from "react";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { Dialog, Transition } from "@headlessui/react";

import { BsBrush } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import LeftButton from "./LeftButton";
import PostInput from "./PostInput";

import useClickOutside from "../hooks/useClickOutside";
import { clearToken } from "../redux/auth/authSlice";
import { pagePath } from "../utils/routeConstants";

const LeftBar = () => {
  let [isOpenPostBox, setIsOpenPostBox] = useState(false);
  const postModalref = useRef(null);

  const dispatch = useDispatch();

  function closePostBoxModal() {
    setIsOpenPostBox(false);
  }

  function openPostBoxModal() {
    setIsOpenPostBox(true);
  }

  useClickOutside(postModalref, () => closePostBoxModal());

  const user = {
    name: "Elon Musk",
    avatar:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
  };

  return (
    <div className="border-layout sticky top-0 flex h-screen w-[70px] shrink-0 justify-center border-r lg:w-[280px]">
      <div className="sticky top-0 flex w-[73%] flex-col items-center lg:ml-8 lg:items-start">
        <Link className="mt-5 h-12 w-12 lg:ml-[8px]" to="/">
          <img
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/900px-Android_O_Preview_Logo.png"
          />
        </Link>
        <div className="mt-2 flex h-full w-full flex-col">
          <div className="flex flex-col items-center space-y-5 pt-5 lg:items-start ">
            <LeftButton Icon={FaHome} text="Home" path={pagePath.ROOT} />
            {/* <LeftButton Icon={FaBell} text="Notifications" path="/notification" />
            <LeftButton Icon={FaUserFriends} text="Friends" path="/friends" />
            <LeftButton Icon={AiOutlineMessage} text="Messages" path="/message" /> */}
            {/*<LeftButton Icon={FaHashtag} text="Explore" />
           /
          <LeftButton Icon={FaUserFriends} text="Friends" path="/user" />
          <LeftButton Icon={AiOutlineMessage} text="Messages" />
          <LeftButton Icon={MdOutlineMoreHoriz} text="More" /> */}
          </div>
          <div type="button" onClick={openPostBoxModal}>
            <div className="post-btn-transition ml-[2px] mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-accentLight lg:hidden lg:w-[200px]">
              <BsBrush className="h-6 w-6" />
            </div>
            <button className="post-btn-transition mt-6 -ml-1 hidden h-12 w-[90%] rounded-full bg-accentLight lg:ml-3 lg:inline">
              <span className="font-bold text-white">Post</span>
            </button>
          </div>
        </div>
        <div className="hoverAnimation mt-auto mb-5 flex items-center space-x-1 p-2 ">
          <Link to="/user" className="h-14 w-14 ">
            <img src={user.avatar} className="rounded-full" alt="profile" />
          </Link>

          <span className="hidden px-2 font-semibold dark:text-white lg:inline">
            {user.name}
            <br />
            <span className="text-sm opacity-60">
              {"@" + user.name.toLowerCase().split(" ").join("")}
            </span>
          </span>
          <div className="tooltip group hidden lg:inline" data-tip="Log Out">
            <BiLogOut
              className="ml-2 h-6 w-6 group-hover:text-[#1d9bf0]"
              onClick={() => {
                dispatch(clearToken());
              }}
            />
          </div>
        </div>
      </div>

      <Transition appear show={isOpenPostBox} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  ref={postModalref}
                  className="flex w-full max-w-[600px] transform flex-col rounded-2xl bg-slate-100 p-6 text-left align-middle shadow-xl transition-all dark:bg-dark"
                >
                  <div className="mt-2">
                    <PostInput />
                  </div>

                  <div className="mt-auto">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-hoverLight px-4 py-2 dark:bg-hoverDark dark:text-white"
                      onClick={closePostBoxModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default LeftBar;
