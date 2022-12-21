import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { BsEmojiSmile } from "react-icons/bs";
import Picker from "@emoji-mart/react";

import { useNavigate } from "react-router";
import swal from "sweetalert";

import { getUserDescriptionByID } from "../../services/publicServices";

import { selectAuth } from "../../redux/auth/authSlice";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";

import { sharePost } from "../../services/userServices";

const ShareDialog = ({ postData }) => {
  const tmpAuth = useSelector(selectAuth);
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [avatar, setAvatar] = useState("");

  const fetchUserData = () => {
    getUserDescriptionByID(tmpAuth.userID).then((res) => {
      if (res.error === 0) {
        setAvatar(res.data.profile.avatar);
      } else console.log(res.message);
    });
  };

  useEffect(() => fetchUserData(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const sendShare = () => {
    sharePost(tmpAuth.token, input, postData.id).then((res) => {
      if (res.error === 0) {
        swal({
          icon: "success",
          text: res.message,
          button: false,
          timer: 2000,
        });

        navigate(0);
      } else console.log(res.message);
    });
  };

  const user = {
    avatar: avatar,
  };

  return (
    <div className="border-layout mr-3 flex space-x-5 border-b py-5 dark:bg-dark dark:text-white">
      <img
        className="ml-6 flex h-14 w-14 cursor-pointer rounded-full object-cover"
        src={user.avatar}
        alt="prof"
      />
      <div className="flex w-[80%] flex-col">
        <div className="flex w-full">
          <TextareaAutosize
            minRows={1}
            maxRows={8}
            className="my-2 w-[90%] resize-none bg-inherit pb-4 text-2xl font-semibold outline-none dark:text-white"
            placeholder="Share..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div
            onClick={() => setShowEmojis(!showEmojis)}
            className="hoverAnimation group mt-1 flex h-8 w-8 items-center justify-center"
          >
            <BsEmojiSmile className="h-5 w-5 group-hover:text-accent" />
          </div>

          {showEmojis && (
            <div className="absolute z-50 mx-auto mt-9 xs:ml-[90px]">
              <Picker autoFocus onEmojiSelect={addEmoji} theme="dark" />
            </div>
          )}
        </div>

        <div className="w-[85%] bg-red-200">
          <PostCard postData={postData} enableMethod={false} />
        </div>
        <div>
          <button
            disabled={!input}
            onClick={sendShare}
            className="post-btn-transition mt-4 h-10 w-[20%] rounded-full bg-accentLight hover:cursor-pointer disabled:opacity-50"
          >
            <span className="font-bold text-white">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareDialog;
