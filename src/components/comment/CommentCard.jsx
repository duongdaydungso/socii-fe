import React, { useState, useEffect, useRef, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

import swal from "sweetalert";

import { useNavigate, useLocation } from "react-router-dom";

import { getUserDescriptionByID } from "../../services/publicServices";
import {
  checkCommentLike,
  toggleCommentLike,
  deleteComment,
} from "../../services/userServices";

import { BsTrash, BsFillHeartFill, BsHeart } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";

import useClickOutside from "../../hooks/useClickOutside";

import { getTimestamp } from "../../utils/getTimestamp";
import { pagePath } from "../../utils/routeConstants";

const CommentCard = ({ commentData, triggerFetch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const imageRef = useRef(null);

  const tmpUser = useSelector(selectAuth);

  const [authorAvatar, setAuthorAvatar] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [liked, setLiked] = useState();
  const [isOpenImage, setIsOpenImage] = useState(false);

  useEffect(() => {
    getUserDescriptionByID(commentData.authorId).then((value) => {
      if (value.error !== 0) console.log(value);

      setAuthorAvatar(value.data.profile.avatar);
      setAuthorName(value.data.name);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const comment = {
    id: commentData.id,

    author: {
      userName: authorName,
      avatar: authorAvatar,
      id: commentData.authorId,
    },
    file:
      commentData.attachments !== "http://localhost:8080null"
        ? commentData.attachments
        : null,
    content: commentData.content,
    timestamp: getTimestamp(commentData.updatedAt),

    likes: commentData.likes,
  };

  const fetchLiked = () => {
    if (tmpUser.token == null) return;

    checkCommentLike(tmpUser.token, comment.id).then((res) => {
      if (res.error === 0) setLiked(res.data);
      else console.log(res.message);
    });
  };

  useEffect(() => {
    fetchLiked();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLikeComment = () => {
    toggleCommentLike(tmpUser.token, comment.id).then((res) => {
      if (res.error !== 0) console.log(res.message);

      fetchLiked();
      triggerFetch();
    });
  };

  const handleDeleteComment = () => {
    deleteComment(tmpUser.token, comment.id).then((res) => {
      if (res.error === 0) {
        swal({
          icon: "success",
          text: res.message,
          button: false,
          timer: 2000,
        });

        triggerFetch();
      } else console.log(res.message);
    });
  };

  function closeImage() {
    setIsOpenImage(false);
  }

  function openImage() {
    setIsOpenImage(true);
  }

  useClickOutside(imageRef, () => closeImage());

  return (
    <div className="border-layout flex cursor-pointer border-b pt-4 pb-4 hover:bg-hoverLight dark:text-white dark:hover:bg-hoverDark">
      <img
        className="ml-5 mr-4 h-14 w-14 cursor-pointer rounded-full object-cover"
        src={comment.author.avatar}
        alt="prof"
      />
      <div className="flex w-[82%] flex-col">
        <div className="flex w-full items-center">
          <div className="flex items-center space-x-2">
            <span
              className="cursor-pointer font-bold hover:underline"
              onClick={() => {
                navigate(pagePath.PROFILE + "/" + comment.author.id, {
                  replace: true,
                  state: { from: location },
                });
              }}
            >
              {comment.author.userName}
            </span>
            <span className="text-xs opacity-60">{comment.timestamp}</span>
          </div>

          <div className="group ml-auto mt-[1px] flex-shrink-0 pr-2">
            <HiDotsHorizontal className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

        <p className="">{comment.content}</p>

        {comment.file && (
          <div className="mt-2 mr-2">
            {String(comment.file).includes("/video/") ? (
              <video controls>
                <source src={comment?.file} />
              </video>
            ) : (
              <img
                src={comment?.file}
                alt=""
                onClick={(e) => {
                  e.stopPropagation();
                  openImage();
                }}
              />
            )}
          </div>
        )}

        {tmpUser.token !== null && (
          <div className="mt-1 -mb-3 flex justify-between pr-2">
            {/* Like */}
            <div className="group flex items-center space-x-1">
              <div
                className="post-icon group-hover:bg-pink-600/10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeComment();
                }}
              >
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
            {/* Share/Delete*/}
            {tmpUser.userID === comment.author.id && (
              <div
                className="group flex items-center space-x-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteComment();
                }}
              >
                <div className="post-icon group-hover:bg-red-600/10">
                  <BsTrash className="h-5 group-hover:text-red-600" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {comment.file && !String(comment.file).includes("/video/") && (
        <Transition appear show={isOpenImage} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => {}}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    ref={imageRef}
                    className="flex w-full max-w-[600px] transform flex-col rounded-2xl bg-slate-100 p-6 text-left align-middle shadow-xl transition-all dark:bg-dark"
                  >
                    <div className="mt-2">
                      <img
                        src={comment?.file}
                        alt=""
                        className="h-full w-full"
                      />
                    </div>

                    <div className="mt-auto">
                      <button
                        type="button"
                        className="mt-2 inline-flex justify-center rounded-md border border-transparent bg-hoverLight px-4 py-2 dark:bg-hoverDark dark:text-white"
                        onClick={closeImage}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};

export default CommentCard;
