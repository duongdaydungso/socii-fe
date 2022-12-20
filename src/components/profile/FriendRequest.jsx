import React, { useEffect, useState } from "react";

import { getUserDescriptionByID } from "../../services/publicServices";
import { acceptFriendRequest } from "../../services/userServices";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

const FriendRequest = ({ userRequest, changer }) => {
  const [userRequestName, setUserRequestName] = useState();
  const [userRequestAvatar, setUserRequestAvatar] = useState();
  const [userRequestDescription, setUserRequestDescription] = useState();

  useEffect(() => {
    getUserDescriptionByID(userRequest.senderId).then((res) => {
      if (res.error === 0) {
        setUserRequestName(res.data.name);
        setUserRequestAvatar(res.data.profile.avatar);
        setUserRequestDescription(res.data.profile.description);
      } else console.log(res.message);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAcceptFriendRequest = () => {
    acceptFriendRequest(tmpAuth.token, userReq.id).then((res) => {
      alert(res.message);

      changer();
    });
  };

  const tmpAuth = useSelector(selectAuth);

  const userReq = {
    id: userRequest.senderId,
    name: userRequestName,
    avatar: userRequestAvatar,
    description: userRequestDescription,
  };

  return (
    <div className="border-layout flex items-center justify-between border px-4 pb-4 hover:bg-slate-50 hover:dark:bg-[black]/30">
      <div className="flex items-center space-x-4">
        <img
          src={userReq.avatar}
          alt="avatar"
          className="mt-4 w-14 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-[17px] font-[800] hover:underline dark:text-white">
            {userReq.name}
          </span>
          <p className="text-xs text-[black]/50 dark:text-[white]/50">
            {userReq.description}
          </p>
        </div>
      </div>
      <div className="-mr-1 mt-3 space-x-2">
        <button
          className="rounded-xl bg-accent p-1 text-sm hover:scale-105"
          onClick={() => handleAcceptFriendRequest()}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;