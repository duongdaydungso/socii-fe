import React, { useState, useEffect } from "react";

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

import { getTimestamp } from "../../utils/getTimestamp";
import { pagePath } from "../../utils/routeConstants";

const CommentCard = ({ commentData, triggerFetch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const tmpUser = useSelector(selectAuth);

  const [authorAvatar, setAuthorAvatar] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [liked, setLiked] = useState();

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
    image: [],

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

  return (
    <div className="border-layout flex cursor-pointer border-b pt-4 pb-4 hover:bg-hoverLight dark:text-white dark:hover:bg-hoverDark">
      <img
        className="ml-5 mr-4 h-14 cursor-pointer rounded-full"
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

        <div className="mt-2 mr-2">
          {comment.image.length > 0 && (
            <img className="rounded-2xl" src={comment?.image} alt="comment" />
          )}
        </div>

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
      </div>
    </div>
  );
};

export default CommentCard;
