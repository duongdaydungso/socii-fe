import React from "react";

import ProfileCard from "./ProfileCard";

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
        <ProfileCard user={user} key={user.name} />
      ))}
      <button className="w-full text-center text-sm font-semibold text-accent hover:underline">
        Show more
      </button>
    </div>
  );
};

export default ProfileTray;
