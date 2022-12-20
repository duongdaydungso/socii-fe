import { Outlet } from "react-router-dom";

import { FaHashtag } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import LeftButton from "../../components/buttons/LeftButton";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import LoginDialog from "../../components/login/LoginDialog";
import { Link } from "react-router-dom";

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
        <Outlet />
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
              <Link to="/register" className="w-[90%]">
                <button className="btn-login-right w-[90%]">
                  Sign up with email
                </button>
              </Link>
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
            className="h-[30px] w-[120px] rounded-full border font-bold text-white hover:bg-accent sm:w-[80px]"
          >
            Login
          </button>
          <Link to="/register">
            <button className="h-[30px] w-[120px] rounded-full border bg-white font-bold text-black hover:bg-slate-100 sm:w-[80px]">
              Sign Up
            </button>
          </Link>
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
