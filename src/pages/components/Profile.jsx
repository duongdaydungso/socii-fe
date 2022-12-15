import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="border-layout flex items-center justify-between border px-4 pb-4 hover:bg-slate-50 hover:dark:bg-[black]/30">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt="avatar"
          className="mt-4 w-14 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-[17px] font-[800] hover:underline dark:text-white">
            {user.name}
          </span>
          <p className="text-xs text-[black]/50 dark:text-[white]/50">
            {user.description}
          </p>
        </div>
      </div>
      <div className="-mr-1 space-x-2">
        <button className="mt-4 h-6 w-20 rounded-xl bg-accent text-sm">
          Add Friend
        </button>
      </div>
    </div>
  );
};

const ProfileTray = (/*user list*/) => {
  const users = [
    {
      name: "Justin Bieber",
      avatar:
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
      description: "Famous Dog trainer",
    },
    {
      name: "Nghia Mai",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
      description: "Famous Trai bao",
    },
    {
      name: "Cristiano Ronaldo",
      avatar:
        "https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
      description: "Best football player",
    },
  ];
  return (
    <div className="flex w-full flex-col justify-center">
      {users.map((user) => (
        <ProfileCard user={user} />
      ))}
      <button className="w-full text-center text-sm font-semibold text-accent hover:underline">
        Show more
      </button>
    </div>
  );
};

const Profile = () => {
  return <div>hi</div>;
};

export { Profile, ProfileTray, ProfileCard };
