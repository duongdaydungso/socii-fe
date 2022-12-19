import React from "react";

const ProfileEditing = () => {
  return (
    <div className="dark:text-white">
      <form className="max-w-[600px]">
        <div className="flex flex-col pb-3">
          <div
            className="tooltip relative h-[200px] cursor-pointer"
            data-tip="Click to Edit"
          >
            <img
              className="opacity-80"
              src="https://pbs.twimg.com/profile_banners/2235729541/1570134480/1080x360"
              alt="wallpaper"
            />
          </div>
          <div className="ml-3 -mt-20 mr-4 flex">
            <div
              className="tooltip flex cursor-pointer flex-col items-center"
              data-tip="Click to Edit"
            >
              <img
                className="h-36 w-36 rounded-full border-[3px] border-lime-50 opacity-80"
                src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
                alt="avatar"
              />
            </div>
          </div>
        </div>
        <div className="mx-5">
          <div className="mb-6">
            <label for="Name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              className="block w-full rounded-lg border p-2 outline-none"
              placeholder=""
            />
          </div>
          <div className="mb-6">
            <label for="Bio" className="blocktext-sm mb-2 font-medium">
              Bio
            </label>
            <input className="block w-full rounded-lg border p-2 outline-none" />
          </div>
          <button className="rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-medium">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditing;
