import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router";

import { getUserDescriptionByID } from "../../services/publicServices";

import { pagePath } from "../../utils/routeConstants";

const ProfileSearch = ({ friendData }) => {
  const [friendAvatar, setFriendAvatar] = useState();
  const [friendDescription, setFriendDescription] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getUserDescriptionByID(friendData.id).then((res) => {
      if (res.error === 0) {
        setFriendAvatar(res.data.profile.avatar);
        setFriendDescription(res.data.profile.description);
      } else console.log(res.message);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const user = {
    id: friendData.id,
    name: friendData.name,
    email: friendData.email,
    avatar: friendAvatar,
    description: friendDescription,
  };

  return (
    <div
      className="flex cursor-pointer items-center justify-between space-x-3 py-3 px-5 hover:bg-white dark:hover:bg-hoverDark"
      onClick={() => {
        navigate(pagePath.PROFILE + "/" + user.id, {
          replace: true,
          state: { from: location },
        });
      }}
    >
      <div className="flex flex-row space-x-3">
        <div className="flex-shrink-0">
          <img src={user.avatar} alt="avatar" className="w-14 rounded-full" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <span className="text-[15px] font-[800] hover:underline">
              {user.name}
            </span>
            <span className="text-[10px] hover:underline">{user.email}</span>
          </div>

          <p className="text-[13px] text-[black]/50 dark:text-[white]/50">
            {user.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSearch;
