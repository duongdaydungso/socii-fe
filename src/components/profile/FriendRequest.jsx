import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router";

import { pagePath } from "../../utils/routeConstants";

import swal from "sweetalert";

import { getUserDescriptionByID } from "../../services/publicServices";
import {
  acceptFriendRequest,
  rejectFriendRequest,
} from "../../services/userServices";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

const FriendRequest = ({ userRequest, changer }) => {
  const [userRequestName, setUserRequestName] = useState();
  const [userRequestAvatar, setUserRequestAvatar] = useState();
  const [userRequestDescription, setUserRequestDescription] = useState();

  const navigate = useNavigate();
  const location = useLocation();

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
      swal({
        icon: "success",
        text: res.message,
        button: false,
        timer: 1500,
      });

      changer();
    });
  };

  const handleRejectFriendRequest = () => {
    rejectFriendRequest(tmpAuth.token, userReq.id).then((res) => {
      swal({
        icon: "success",
        text: res.message,
        button: false,
        timer: 1500,
      });

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
        <div className="flex-shrink-0">
          <img
            src={userReq.avatar}
            alt="avatar"
            className="mt-4 h-14 w-14 rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <span
            className="text-[15px] font-[800] line-clamp-1 hover:cursor-pointer hover:underline dark:text-white"
            onClick={() => {
              navigate(pagePath.PROFILE + "/" + userReq.id, {
                replace: true,
                state: { from: location },
              });
            }}
          >
            {userReq.name}
          </span>
          <p className="w-[75%] text-[10px] text-[black]/50 line-clamp-2 dark:text-[white]/50">
            {userReq.description}
          </p>
        </div>
      </div>
      <div className="mt-3 grid justify-items-end space-x-2 space-y-1">
        <button
          className="w-16 rounded-xl bg-accent p-1 text-sm hover:scale-105"
          onClick={() => handleAcceptFriendRequest()}
        >
          Accept
        </button>
        <button
          className="w-16 rounded-xl bg-red-500 p-1 text-sm hover:scale-105"
          onClick={() => handleRejectFriendRequest()}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;
