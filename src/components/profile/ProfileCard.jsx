import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router";

import swal from "sweetalert";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

import { sendFriendRequest } from "../../services/userServices";

import { getUserDescriptionByID } from "../../services/publicServices";

import { pagePath } from "../../utils/routeConstants";

const ProfileCard = ({ userID, triggerFetch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const tmpAuth = useSelector(selectAuth);
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");

  const fetchData = () => {
    getUserDescriptionByID(userID).then((res) => {
      if (res.error === 0) {
        setUserAvatar(res.data.profile.avatar);
        setUserName(res.data.name);
        setUserDescription(res.data.profile.description);
      } else console.log(res.message);
    });
  };

  const addFriend = () => {
    sendFriendRequest(tmpAuth.token, userID).then((res) => {
      if (res.error === 0) {
        swal({
          icon: "success",
          text: res.message,
          button: false,
          timer: 2000,
        });

        triggerFetch();
      } else console.log(res.message);
    });
  };

  useEffect(() => fetchData(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="border-layout flex items-center justify-between border px-4 pb-4 hover:bg-slate-50 hover:dark:bg-[black]/30">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src={userAvatar}
            alt="avatar"
            className="mt-4 h-14 w-14 rounded-full object-cover"
          />
        </div>

        <div className="tooltip mt-2 flex w-28 flex-col" data-tip={userName}>
          <span
            className="max-w-sm truncate text-[14px] font-[800] hover:cursor-pointer hover:underline dark:text-white"
            onClick={() => {
              navigate(pagePath.PROFILE + "/" + userID, {
                replace: true,
                state: { from: location },
              });
            }}
          >
            {userName}
          </span>
          <p className="max-w-sm text-[11px]  text-[black]/50 dark:text-[white]/50">
            {userDescription}
          </p>
        </div>
      </div>
      <div className="-mr-1 mt-3 space-x-2">
        <button
          className="whitespace-nowrap rounded-xl bg-accent p-1 text-sm hover:bg-accentLight"
          onClick={() => addFriend()}
        >
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
