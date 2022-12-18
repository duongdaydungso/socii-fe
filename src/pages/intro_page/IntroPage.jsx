import { FaHashtag } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import LeftButton from "../components/LeftButton";
import Navbar from "../components/Navbar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import LoginDialog from "../login_page/LoginDialog";
import { ProfileTray } from "../components/Profile";
import FeedTest from "../components/FeedTest";

export default function IntroPage() {
  let [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  function closeLoginModal() {
    setIsOpenLoginModal(false);
  }

  function openLoginModal() {
    setIsOpenLoginModal(true);
  }

  return (
    <div className="w-screen bg-slate-100 dark:bg-dark">
      <div className="mx-auto flex min-w-[450px] max-w-[1280px] justify-center">
        {/*Left*/}
        <div className="sticky top-0 flex h-screen w-[70px] shrink-0 flex-col lg:w-[280px]">
          <div className="sticky top-0 flex flex-col items-center lg:items-start">
            <div className="mt-5 h-12 w-12 lg:ml-[57px]">
              <img
                alt="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/900px-Android_O_Preview_Logo.png"
              />
            </div>
            <div className="mt-2 lg:ml-[50px]">
              <LeftButton Icon={FaHashtag} text="Explore" active />
            </div>
          </div>
        </div>
        {/*Mid*/}
        <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
          <Navbar pageName="Socii" />
          <div className="sticky top-[4.5rem] z-10 flex w-full items-center justify-center bg-slate-100 dark:bg-dark">
            <input
              type="text"
              className="h-10 w-[95%] rounded-full bg-slate-50 p-4 pl-10 text-dark outline-none focus:bg-white focus:outline-[2px] dark:bg-hoverDark dark:text-white dark:focus:bg-black"
              placeholder="Search Socii..."
            />
            <BiSearchAlt className="absolute top-[10px] left-[23px] h-6 w-6 dark:text-white" />
          </div>
          {/*famous post*/}
          <div className="mt-3 flex w-full flex-col">
            <div className="content-title mb-3">What's happening?</div>
            <FeedTest />

            {/*famous guy*/}
            <div className="border-layout mt-3 flex flex-col justify-center border-t">
              <span className="content-title right-0 my-3">Famous People</span>
              <ProfileTray />
            </div>
          </div>
        </div>
        {/*Right*/}
        <div className="hidden w-[300px] max-w-[380px] flex-1 justify-center md:flex">
          <div className="border-layout sticky top-2 mt-2 flex h-[150px] w-[90%] flex-col rounded-xl border pl-2 dark:text-white">
            <span className="ml-4 mt-2 text-[20px] font-extrabold ">
              Newcomers?
            </span>
            <span className="ml-4 mb-2 text-sm">
              Sign up now to discover the world with your friends.
            </span>
            <div className="flex w-full flex-col items-center">
              {/* <button className="btn-login-right w-[90%]">
                <FcGoogle className="h-6 w-6" />
                <span>Sign up with google</span>
              </button> */}
              <button className="btn-login-right w-[90%]">
                Sign up with email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Bottom*/}
      <div className="sticky bottom-0 flex h-20 w-full items-center justify-center bg-gradient-to-r from-accent to-[#CBEDD5] text-white dark:bg-accentLight dark:text-dark sm:space-x-[300px]">
        <p className="hidden flex-col sm:flex">
          <span className="text-[16px] font-bold">
            Don't miss what happening
          </span>
          <span className="text-sm">Sign in now to explore</span>
        </p>

        <div className="space-x-2">
          <button
            type="button"
            onClick={openLoginModal}
            className="h-[30px] w-[120px] rounded-full border font-bold text-white sm:w-[80px]"
          >
            Login
          </button>
          <button className="h-[30px] w-[120px] rounded-full border bg-white font-bold text-black sm:w-[80px]">
            Sign Up
          </button>
        </div>
      </div>
      {/* Login Dialog */}
      <Transition appear show={isOpenLoginModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeLoginModal}>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-2xl p-0 align-middle shadow-xl transition-all">
                  <div
                    onClick={closeLoginModal}
                    className="absolute top-1 right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#15181c] bg-opacity-75 hover:bg-[#272c26]"
                  >
                    <IoIosClose className="h-5 text-white" />
                  </div>

                  <LoginDialog />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
