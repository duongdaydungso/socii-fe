import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

import ProfileCard from "./ProfileCard";

import { getRandomUserNotFriend } from "../../services/userServices";
import { getTopUser } from "../../services/publicServices";

const ProfileTray = () => {
  const tmpAuth = useSelector(selectAuth);

  const [fetchTrigger, setFetchTrigger] = useState(0);
  const [users, setUsers] = useState([]);

  const fetchUserList = () => {
    if (tmpAuth.token !== null) {
      getRandomUserNotFriend(tmpAuth.token).then((res) => {
        if (res.error === 0) {
          setUsers(res.data);
        } else console.log(res.message);
      });
    } else {
      getTopUser().then((res) => {
        if (res.error === 0) {
          setUsers(res.data);
        } else console.log(res.message);
      });
    }
  };

  useEffect(() => fetchUserList(), []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => fetchUserList(), [fetchTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex w-full flex-col justify-center">
      {users.map((user) => (
        <ProfileCard
          userID={user.id}
          key={user.id}
          triggerFetch={() => setFetchTrigger(fetchTrigger + 1)}
        />
      ))}
      <button
        className="w-full text-center text-sm font-semibold text-accent"
        onClick={() => fetchUserList()}
      >
        Refresh
      </button>
    </div>
  );
};

export default ProfileTray;
