import React, { useRef, useState } from "react";

import { useNavigate } from "react-router";

import swal from "sweetalert";

import { editProfile } from "../../services/userServices";

const ProfileEditing = ({ user, accessToken }) => {
  const avatarPicker = useRef();
  const wallpaperPicker = useRef();

  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(user.avatar);
  const [inputAvatar, setInputAvatar] = useState(null);
  const [wallpaper, setWallpaper] = useState(user.wallpaper);
  const [inputWallpaper, setInputWallpaper] = useState(null);
  const [name, setName] = useState(user.name);
  const [description, setDescription] = useState(user.description);

  const handleEditProfile = (e) => {
    editProfile(
      accessToken,
      name,
      description,
      inputAvatar,
      inputWallpaper
    ).then((res) => {
      console.log(res);
      if (res.error === 0) {
        swal({
          icon: "success",
          text: res.message,
          button: false,
          timer: 2000,
        });

        navigate(0);
      } else {
        swal({
          icon: "error",
          text: res.message,
          button: false,
          timer: 2000,
        });
      }
    });
  };

  const handleChangeAvatar = (e) => {
    const reader = new FileReader();

    if (
      e.target.files[0] &&
      (e.target.files[0].type.split("/")[0] === "video" ||
        e.target.files[0].type.split("/")[0] === "image")
    ) {
      reader.readAsDataURL(e.target.files[0]);
      setInputAvatar(e.target.files[0]);

      reader.onload = (readerEvent) => {
        setAvatar(readerEvent.target.result);
      };
    } else {
      swal({
        icon: "error",
        text: "Invalid input file type!",
        button: false,
        timer: 2000,
      });
    }
  };

  const handleChangeWallpaper = (e) => {
    const reader = new FileReader();

    if (
      e.target.files[0] &&
      (e.target.files[0].type.split("/")[0] === "video" ||
        e.target.files[0].type.split("/")[0] === "image")
    ) {
      reader.readAsDataURL(e.target.files[0]);
      setInputWallpaper(e.target.files[0]);

      reader.onload = (readerEvent) => {
        setWallpaper(readerEvent.target.result);
      };
    } else {
      swal({
        icon: "error",
        text: "Invalid input file type!",
        button: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="dark:text-white">
      <div className="max-w-[600px]">
        <div className="flex flex-col pb-3">
          <div
            className="tooltip relative cursor-pointer"
            data-tip="Click to Edit"
            onClick={() => wallpaperPicker.current.click()}
          >
            <img
              src={wallpaper}
              className="h-full w-full object-cover"
              alt="wallpaper"
            />
            <input
              type="file"
              ref={wallpaperPicker}
              hidden
              onChange={handleChangeWallpaper}
            />
          </div>
          <div className="ml-3 -mt-20 mr-4 flex">
            <div
              className="tooltip items-left flex cursor-pointer flex-col"
              data-tip="Click to Edit"
              onClick={() => avatarPicker.current.click()}
            >
              <img
                className="h-36 w-36 rounded-full border-[3px] border-lime-50 object-cover "
                src={avatar}
                alt="avatar"
              />
              <input
                type="file"
                ref={avatarPicker}
                hidden
                onChange={handleChangeAvatar}
              />
            </div>
          </div>
        </div>
        <div className="mx-5">
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">Name</label>
            <input
              className="block w-full rounded-lg border p-2 outline-none dark:bg-dark"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label className="blocktext-sm mb-2 font-medium">Description</label>
            <input
              className="block w-full rounded-lg border p-2 outline-none dark:bg-dark"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              className="rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-medium"
              onClick={() => handleEditProfile()}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditing;
