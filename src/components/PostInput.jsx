import React from "react";
import { useState, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

import useClickOutside from "../hooks/useClickOutside";
import Picker from "@emoji-mart/react";

const PostInput = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const emojiPickerRef = useRef(null);

  useClickOutside(emojiPickerRef, () => setShowEmojis(false));

  const [showEmojis, setShowEmojis] = useState(false);

  const sendPost = () => {
    console.log(input);
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

  const user = {
    name: "Nghia Mai",

    id: "abc",
    avatar:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
  };

  return (
    <div className="border-layout mr-3 flex flex-1 space-x-5 border-b bg-slate-100 dark:bg-dark dark:text-white">
      <img
        className="ml-6 flex h-14 cursor-pointer rounded-full"
        src={user.avatar}
        alt="prof"
      />
      <div className="flex w-[80%] flex-col">
        <TextareaAutosize
          minRows={2}
          maxRows={15}
          className="mt-2 resize-none bg-inherit text-2xl font-semibold outline-none dark:text-white"
          placeholder="What's happening ?"
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

        <div className="flex items-center justify-between text-accentLight">
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

            <button
              disabled={showEmojis}
              onClick={(showEmojis) => {
                if (showEmojis) setShowEmojis(true);
              }}
              className="hoverAnimation group flex h-8 w-8 items-center justify-center"
            >
              <BsEmojiSmile className="h-5 w-5 group-hover:text-accent" />
            </button>

            {showEmojis && (
              <div className="absolute z-50 mt-7" ref={emojiPickerRef}>
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
            <span className="font-bold text-white">Post</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
