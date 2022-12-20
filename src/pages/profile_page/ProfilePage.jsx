import React, { Fragment, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { useLoaderData } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";

import swal from "sweetalert";

import ProfileEditing from "./ProfileEditing";
import PostCard from "../../components/post/PostCard";

import { TbMail } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { Dialog, Transition } from "@headlessui/react";

import { selectAuth } from "../../redux/auth/authSlice";

import { getDataUserByID } from "../../services/publicServices";
import {
  sendFriendRequest,
  getRelationship,
  removeFriend,
  cancelFriendRequest,
  acceptFriendRequest,
} from "../../services/userServices";

export async function profileLoader({ params }) {
  const profileID = Number(params.profileID);

  const res = await getDataUserByID(profileID);

  return res;
}

const ProfilePage = () => {
  const loaderData = useLoaderData();
  if (loaderData.error !== 0) console.log(loaderData);

  const userData = loaderData.data;

  const [isOpenEditBox, setIsOpenEditBox] = useState(false);
  const [userRelationship, setUserRelationship] = useState(null);

  const tmpUser = useSelector(selectAuth);
  const isAccOwner = tmpUser.userID && userData.id === tmpUser.userID;

  const fetchRelationship = () => {
    if (tmpUser.userID && !isAccOwner) {
      getRelationship(tmpUser.token, userData.id).then((res) => {
        if (res.error === 0) {
          setUserRelationship(res.data);
        } else console.log(res.message);
      });
    }
  };

  useEffect(() => {
    fetchRelationship();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const user = {
    name: userData.name,
    wallpaper: userData.profile.wallpaper,
    avatar: userData.profile.avatar,
    userPost: userData.posts,
    friendList: userData.hasFriends,
    email: userData.email,
    description: userData.profile.description,
    age: userData.profile.age,
    relationship: userRelationship,
  };

  function closeEditBox() {
    setIsOpenEditBox(false);
  }

  function openEditBox() {
    setIsOpenEditBox(true);
  }

  const handleSendFriendRequest = () => {
    sendFriendRequest(tmpUser.token, userData.id).then((res) => {
      swal({
        icon: "success",
        text: res.message,
        button: false,
        timer: 1500,
      });
      fetchRelationship();
    });
  };

  const handleUnfriend = () => {
    removeFriend(tmpUser.token, userData.id).then((res) => {
      swal({
        icon: "success",
        text: res.message,
        button: false,
        timer: 1500,
      });

      fetchRelationship();
    });
  };

  const handleCancelFriendRequest = () => {
    cancelFriendRequest(tmpUser.token, userData.id).then((res) => {
      swal({
        icon: "success",
        text: res.message,
        button: false,
        timer: 1500,
      });

      fetchRelationship();
    });
  };

  const handleAcceptFriendRequest = () => {
    acceptFriendRequest(tmpUser.token, userData.id).then((res) => {
      swal({
        icon: "success",
        text: res.message,
        button: false,
        timer: 1500,
      });

      fetchRelationship();
    });
  };

  return (
    <div className="">
      <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
        <Navbar pageName={user.name} showBackButton />
        <div className="border-layout flex flex-col border-b pb-3">
          <div className="h-[200px] bg-inherit">
            <img src={user.wallpaper} alt="" />
          </div>
          <div className="ml-3 -mt-20 mr-4 flex ">
            <div className="items-left flex flex-col">
              <img
                className="h-36 rounded-full border-[3px] border-lime-50"
                src={user.avatar}
                alt="avatar"
              />
              <span className="ml-5 text-[22px] font-[1000]">{user.name}</span>
              <span className="ml-5 text-[18px] font-[500] text-[grey]">
                {user.email}
              </span>
            </div>

            {isAccOwner ? (
              <div className="ml-auto mt-24">
                <button
                  onClick={openEditBox}
                  className="rounded-full border bg-accent p-2 text-sm font-semibold text-white hover:scale-105"
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <div className="ml-auto mt-12 flex items-center space-x-2">
                <div className="hoverAnimation p-2">
                  <HiDotsHorizontal className="h-6 w-6" />
                </div>
                <div className="hoverAnimation p-2">
                  <TbMail className="h-6 w-6" />
                </div>
                {user.relationship === "None" && (
                  <button
                    className="rounded-full border bg-accent p-2 text-sm font-semibold text-white hover:bg-accentLight"
                    onClick={() => handleSendFriendRequest()}
                  >
                    Add Friend
                  </button>
                )}
                {user.relationship === "Sent" && (
                  <button
                    className="rounded-full border bg-slate-100 p-2 text-sm font-semibold text-dark  hover:bg-slate-200"
                    onClick={() => handleCancelFriendRequest()}
                  >
                    Cancel request
                  </button>
                )}
                {user.relationship === "Received" && (
                  <button
                    className="rounded-full border bg-accent p-2 text-sm font-semibold text-white hover:scale-105"
                    onClick={() => handleAcceptFriendRequest()}
                  >
                    Accept Request
                  </button>
                )}
                {user.relationship === "Friends" && (
                  <button
                    className="rounded-full border bg-accent p-2 text-sm font-semibold text-white hover:scale-105"
                    onClick={() => handleUnfriend()}
                  >
                    Unfriend
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="mt-4 flex flex-col">
            <div className="mb-4 flex space-x-3 text-sm">
              <span className="ml-8">
                {user.friendList.length}
                {user.friendList.length > 1 ? " friends" : " friend"}
              </span>
            </div>
            <div className="mb-4 flex space-x-3 text-sm">
              <span className="ml-8">{"Age: " + user.age}</span>
            </div>

            <p className="mx-2 -mt-2 px-6">{user.description}</p>
          </div>
        </div>
        <div className="mt-3">
          <span className="content-title">Posts</span>
        </div>
        {user.userPost.map((post) => (
          <PostCard postData={post} key={post.id} canClick />
        ))}
      </div>

      <Transition appear show={isOpenEditBox} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeEditBox}>
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
                <Dialog.Panel className="flex w-full max-w-[600px] transform flex-col rounded-2xl bg-slate-100 p-6 text-left align-middle shadow-xl transition-all dark:bg-dark">
                  <div className="mt-2">
                    <ProfileEditing />
                  </div>

                  <div className="mt-auto">
                    <button
                      type="button"
                      className="ml-5 mt-3 inline-flex justify-center rounded-md border border-transparent bg-hoverLight px-4 py-2 dark:bg-hoverDark dark:text-white"
                      onClick={closeEditBox}
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

export default ProfilePage;
