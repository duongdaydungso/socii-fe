import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

import ProfileCard from "./ProfileCard";

const ProfileTray = () => {
  const tmpAuth = useSelector(selectAuth);

  const [fetchTrigger, setFetchTrigger] = useState(0);
  const [users, setUsers] = useState([]);

  const fetchUserList = () => {
    setUsers([{ id: 1 }, { id: 2 }]);
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
