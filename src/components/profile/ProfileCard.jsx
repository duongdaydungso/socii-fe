import React, { useState } from "react";

const ProfileCard = ({ user }) => {
  const [requested, setRequested] = useState(false);

  const sendFriendRequest = () => {
    setRequested(!requested);
  };

  return (
    <div className="border-layout flex items-center justify-between border px-4 pb-4 hover:bg-slate-50 hover:dark:bg-[black]/30">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt="avatar"
          className="mt-4 w-14 rounded-full"
        />
        <div className="mt-2 flex flex-col">
          <span className="text-[14px] font-[800] hover:underline dark:text-white">
            {user.name}
          </span>
          <p className="text-[11px] text-[black]/50 dark:text-[white]/50">
            {user.description}
          </p>
        </div>
      </div>
      <div className="-mr-1 mt-3 space-x-2">
        {!requested ? (
          <button
            className="whitespace-nowrap rounded-xl bg-accent p-1 text-sm hover:bg-accentLight"
            onClick={sendFriendRequest}
          >
            Add Friend
          </button>
        ) : (
          <button
            className="whitespace-nowrap rounded-xl bg-slate-300 p-1 text-sm text-dark hover:bg-slate-500"
            onClick={sendFriendRequest}
          >
            Cancel Request
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
