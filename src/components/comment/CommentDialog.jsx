import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router";

import swal from "sweetalert";

import { createComment } from "../../services/userServices";
import { getUserDescriptionByID } from "../../services/publicServices";

import TextareaAutosize from "react-textarea-autosize";
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import Picker from "@emoji-mart/react";

const CommentDialog = ({ postID }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileInput, setFileInput] = useState(null);

  const filePickerRef = useRef(null);

  const [showEmojis, setShowEmojis] = useState(false);

  const userData = useSelector(selectAuth);

  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const fetchData = () => {
    getUserDescriptionByID(userData.userID).then((res) => {
      if (res.error === 0) {
        setUserAvatar(res.data.profile.avatar);
        setUserName(res.data.name);
        setUserEmail(res.data.email);
      } else console.log(res.message);
    });
  };

  useEffect(() => fetchData(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const user = {
    name: userName,
    avatar: userAvatar,
    email: userEmail,
    id: userData.userID,
  };

  const sendComment = () => {
    createComment(userData.token, input, postID, fileInput).then((res) => {
      if (res.error === 0) {
        swal({
          icon: "success",
          text: res.message,
          button: false,
          timer: 2000,
        });

        navigate(0);
      } else console.log(res);
    });
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setFileInput(e.target.files[0]);
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
        className="ml-6 flex h-14 w-14 cursor-pointer rounded-full object-cover"
        src={user.avatar}
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
          <div className="flex">
            <div className="flex max-w-[90%] flex-1">
              {fileInput.type.split("/")[0] === "video" ? (
                <video controls>
                  <source src={selectedFile} />
                </video>
              ) : (
                <img src={selectedFile} alt="" />
              )}
            </div>
            <div
              className="top-1 right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#15181c] bg-opacity-75 hover:bg-[#272c26]"
              onClick={() => {
                setSelectedFile(null);
                setFileInput(null);
              }}
            >
              <IoIosClose className="h-5 text-white" />
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
            onClick={sendComment}
            className="post-btn-transition mt-4 mr-4 h-10 w-[20%] rounded-full bg-accentLight hover:cursor-pointer disabled:opacity-50"
          >
            <span className="font-bold text-white">Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentDialog;
