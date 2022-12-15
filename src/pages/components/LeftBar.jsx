import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { BsBrush } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { FaBell, FaHashtag, FaHome, FaUserFriends } from "react-icons/fa";
import LeftButton from "./LeftButton";
import PostInput from "./PostInput";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";

const LeftBar = () => {
  let [isOpenPostBox, setIsOpenPostBox] = useState(false);
  const postModalref = useRef(null);

  function closePostBoxModal() {
    setIsOpenPostBox(false);
  }

  function openPostBoxModal() {
    setIsOpenPostBox(true);
  }

  useClickOutside(postModalref, () => closePostBoxModal());

  return (
    <div className="border-layout sticky top-0 flex min-h-screen w-[70px] shrink-0 justify-center border-r lg:w-[280px]">
      <div className="sticky top-0 flex w-[60%] flex-col items-center lg:ml-8 lg:items-start">
        <Link className="mt-5 h-12 w-12 lg:ml-[8px]" to="/">
          <img
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/900px-Android_O_Preview_Logo.png"
          />
        </Link>
        <div className="mt-2 w-full">
          <div className="flex flex-col items-center space-y-5 pt-5 lg:items-start">
            <LeftButton Icon={FaHome} text="Home" />
            <LeftButton Icon={FaBell} text="Notifications" />
            <LeftButton Icon={FaUserFriends} text="Friends" />
            <LeftButton Icon={AiOutlineMessage} text="Messages" />
            <LeftButton Icon={FaBell} text="Notifications" />
            {/*<LeftButton Icon={FaHashtag} text="Explore" />
           /

          <LeftButton Icon={FaUserFriends} text="Friends" path="/user" />
          <LeftButton Icon={AiOutlineMessage} text="Messages" />
          <LeftButton Icon={MdOutlineMoreHoriz} text="More" /> */}
          </div>
          <div type="button" onClick={openPostBoxModal}>
            <div className="post-btn-transition -ml-1 mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-accentLight lg:hidden lg:w-[200px]">
              <BsBrush className="h-6 w-6" />
            </div>
            <button className="post-btn-transition mt-6 -ml-1 hidden h-12 w-full rounded-full bg-accentLight lg:ml-3 lg:inline">
              <span className="font-bold text-white">Post</span>
            </button>
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
