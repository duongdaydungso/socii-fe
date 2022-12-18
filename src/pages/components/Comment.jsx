import React from "react";
import {
  BsChat,
  BsFillHeartFill,
  BsHeart,
  BsShare,
  BsTrash,
} from "react-icons/bs";
import { HiDotsHorizontal, HiSwitchHorizontal } from "react-icons/hi";

import { useState, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineSchedule } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import Picker from "@emoji-mart/react";

const CommentDialog = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const [showEmojis, setShowEmojis] = useState(false);

  const sendPost = () => {
    console.log("send");
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div className="border-layout mr-3 flex space-x-5 border-b py-5 dark:bg-dark dark:text-white">
      <img
        className="ml-6 flex h-14 cursor-pointer rounded-full"
        src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        alt="prof"
      />
      <div className="flex w-[80%] flex-col">
        <TextareaAutosize
          minRows={1}
          maxRows={8}
          className="my-2 resize-none bg-inherit pb-4 text-2xl font-semibold outline-none dark:text-white"
          placeholder="Write your comment"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {selectedFile && (
          <div className="relative">
            <div
              className="absolute top-1 left-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#15181c] bg-opacity-75 hover:bg-[#272c26]"
              onClick={() => setSelectedFile(null)}
            >
              <IoIosClose className="h-5 text-white" />
            </div>
            <div className="flex max-w-[90%] flex-1">
              <img src={selectedFile} alt="" className=" rounded-2xl" />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between text-accent">
          <div className="flex pt-8 pb-3">
            <div
              className="hoverAnimation group flex h-8 w-8 items-center justify-center"
              onClick={() => filePickerRef.current.click()}
            >
              <BsImage className="h-5 w-5 group-hover:text-accent" />
              <input
                type="file"
                ref={filePickerRef}
                hidden
                onChange={addImageToPost}
              />
            </div>

            <div
              onClick={() => setShowEmojis(!showEmojis)}
              className="hoverAnimation group flex h-8 w-8 items-center justify-center"
            >
              <BsEmojiSmile className="h-5 w-5 group-hover:text-accent" />
            </div>

            {showEmojis && (
              <div className="absolute z-50 mt-7">
                <Picker autoFocus onEmojiSelect={addEmoji} theme="dark" />
              </div>
            )}

            {/* <div className="hoverAnimation group flex h-8 w-8 items-center justify-center">
              <HiOutlineLocationMarker className="h-5 w-5 group-hover:text-accent" />
            </div>
            <div className="hoverAnimation group flex h-8 w-8 items-center justify-center">
              <MdOutlineSchedule className="h-5 w-5 group-hover:text-accent" />
            </div> */}
          </div>
          <button
            disabled={!input && !selectedFile}
            onClick={sendPost}
            className="post-btn-transition mt-4 mr-4 h-10 w-[20%] rounded-full bg-accentLight disabled:opacity-50"
          >
            <span className="font-bold text-white">Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const CommentsTray = () => {
  return <div>Comments</div>;
};

const CommentCard = () => {
  const sessionUIDEqualsCOMENTUID = false;
  const liked = false;

  const comment = {
    user: {
      userName: "Elon Musk",
      avatar:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    },
    image: [],

    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timestamp: "1 min",

    comments: ["hay", "ngu", "nice"],
    likes: ["NghiaMai", "Cr7", "M10"],
  };

  return (
    <div className="border-layout flex cursor-pointer border-b pt-4 pb-4 hover:bg-hoverLight dark:text-white dark:hover:bg-hoverDark">
      <img
        className="ml-5 mr-4 h-14 cursor-pointer rounded-full"
        src={comment.user.avatar}
        alt="prof"
      />
      <div className="flex w-[82%] flex-col">
        <div className="flex w-full items-center">
          <div className="flex items-center space-x-2">
            <span className="cursor-pointer font-bold hover:underline">
              {comment.user.userName}
            </span>
            <span className="text-xs opacity-60">{comment.timestamp} ago</span>
          </div>

          <div className="group ml-auto mt-[1px] flex-shrink-0 pr-2">
            <HiDotsHorizontal className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

        <p className="">{comment.content}</p>

        <div className="mt-2 mr-2">
          {comment.image.length > 0 && (
            <img
              className="rounded-2xl"
              src={comment?.image}
              alt="comment image"
            />
          )}
        </div>

        <div className="mt-1 -mb-3 flex justify-between pr-2">
          {/* Comment */}
          <div className="group flex items-center space-x-1 ">
            <div className="post-icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <BsChat className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            {comment.comments.length > 0 && (
              <span className="text-sm group-hover:text-[#1d9bf0]">
                {comment.comments.length}
              </span>
            )}
          </div>
          {/* Like */}
          <div className="group flex items-center space-x-1">
            <div className="post-icon group-hover:bg-pink-600/10">
              {liked ? (
                <BsFillHeartFill className="h-5 text-pink-600" />
              ) : (
                <BsHeart className="h-5 group-hover:text-pink-600" />
              )}
            </div>
            {comment.likes.length > 0 && (
              <span
                className={` text-sm group-hover:text-pink-600 ${
                  liked && "text-pink-600"
                }`}
              >
                {comment.likes.length}
              </span>
            )}
          </div>
          {/* ShareLink */}
          <div className="post-icon group">
            <BsShare className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          {/* Share/Delete*/}
          {sessionUIDEqualsCOMENTUID ? (
            <div
              className="group flex items-center space-x-1"
              onClick={() => {}}
            >
              <div className="post-icon group-hover:bg-red-600/10">
                <BsTrash className="h-5 group-hover:text-red-600" />
              </div>
            </div>
          ) : (
            <div className="group flex items-center space-x-1">
              <div className="post-icon group-hover:bg-green-500/10">
                <HiSwitchHorizontal className="h-5 group-hover:text-green-500" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { CommentCard, CommentDialog, CommentsTray };
