import React from "react";

const ProfileSearch = () => {
  const user = {
    name: "Elon Ma",
    email: "elon@example.com",
    avatar:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
    description:
      "Tao ten la elon va tao ham mo anh 7, siuuuuuuuuuuudadsddadasd, 🇦🇷 🇦🇷 🇦🇷 🇦🇷 ",
  };

  return (
    <div className="flex cursor-pointer items-center justify-between space-x-3 py-3 px-5 hover:bg-white dark:hover:bg-hoverDark">
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
      <button className="whitespace-nowrap rounded-xl bg-slate-100 p-1 text-sm text-dark hover:bg-accentLight">
        Unfriend
      </button>
    </div>
  );
};

export default ProfileSearch;
