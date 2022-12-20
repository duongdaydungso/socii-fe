import { useNavigate, useLocation } from "react-router-dom";

import { HiDotsHorizontal, HiSwitchHorizontal } from "react-icons/hi";
import {
  BsChat,
  BsFillHeartFill,
  BsHeart,
  BsShare,
  BsTrash,
} from "react-icons/bs";
import { pagePath } from "../../utils/routeConstants";
import { getUserDescriptionByID } from "../../services/publicServices";
import {
  deletePost,
  checkPostLike,
  togglePostLike,
} from "../../services/userServices";
import { useEffect, useState } from "react";

import { getTimestamp } from "../../utils/getTimestamp";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

const PostCard = ({ postData, canClick = false, triggerFetch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sessionUIDEqualsPOSTUID = true;

  const [authorAvatar, setAuthorAvatar] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [liked, setLiked] = useState();

  useEffect(() => {
    getUserDescriptionByID(postData.authorId).then((value) => {
      if (value.error !== 0) console.log(value);

      setAuthorAvatar(value.data.profile.avatar);
      setAuthorName(value.data.name);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const post = {
    id: postData.id,
    author: {
      userName: authorName,
      avatar: authorAvatar,
      id: postData.authorId,
    },

    content: postData.content,
    image: postData.image ? postData.image : null,
    timestamp: getTimestamp(postData.updatedAt),

    commentCount: postData._count.comments,
    likeCount: postData._count.likes,
    shareCount: postData._count.listShare,
  };

  const tmpUser = useSelector(selectAuth);
  const isAccOwner = tmpUser.userID && post.author.id === tmpUser.userID;

  const fetchLiked = () => {
    if (tmpUser.token == null) return;

    checkPostLike(tmpUser.token, post.id).then((res) => {
      if (res.error === 0) setLiked(res.data);
      else console.log(res.message);
    });
  };

  useEffect(() => {
    fetchLiked();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDeletePost = () => {
    deletePost(tmpUser.token, post.id).then((res) => {
      if (res.error === 0) {
        alert(res.message);

        if (canClick) triggerFetch();
        else navigate("/", { replace: true });
      } else console.log(res.message);
    });
  };

  const handleLikePost = () => {
    togglePostLike(tmpUser.token, post.id).then((res) => {
      if (res.error !== 0) console.log(res.message);

      fetchLiked();
      triggerFetch();
    });
  };

  return (
    <div
      className="border-layout flex cursor-pointer border-b pt-4 pb-4 hover:bg-hoverLight dark:text-white dark:hover:bg-hoverDark"
      onClick={() => {
        if (canClick) {
          navigate(pagePath.POST + "/" + post.id, {
            replace: true,
            state: { from: location },
          });
        }
      }}
    >
      <img
        className="ml-5 mr-4 h-14 cursor-pointer rounded-full"
        src={post.author.avatar}
        alt="prof"
      />
      <div className="flex w-[82%] flex-col">
        <div className="flex w-full items-center">
          <div className="flex items-center space-x-2">
            <span
              className="cursor-pointer font-bold hover:underline"
              onClick={(e) => {
                e.stopPropagation();

                navigate(pagePath.PROFILE + "/" + post.author.id, {
                  replace: true,
                  state: { from: location },
                });
              }}
            >
              {post.author.userName}
            </span>
            <span className="text-xs opacity-60">{post.timestamp}</span>
          </div>

          <div className="group ml-auto mt-[1px] flex-shrink-0 pr-2">
            <HiDotsHorizontal className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>
        <p className="">{post.content}</p>
        {post.image && (
          <div className="mt-2 mr-2">
            <img className="rounded-2xl" src={post?.image} alt="content" />
          </div>
        )}
        <div className="mt-1 -mb-3 flex justify-between pr-2">
          {/* Comment */}
          <div className="group flex items-center space-x-1 ">
            <div
              className="post-icon tooltip group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10"
              data-tip="Comment"
            >
              <BsChat className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            {post.commentCount > 0 && (
              <span className="text-sm group-hover:text-[#1d9bf0]">
                {post.commentCount}
              </span>
            )}
          </div>
          {/* Like */}
          <div className="group flex items-center space-x-1">
            <div
              className="tooltip post-icon group-hover:bg-pink-600/10"
              data-tip="Like"
              onClick={(e) => {
                e.stopPropagation();
                handleLikePost();
              }}
            >
              {liked ? (
                <BsFillHeartFill className="h-5 text-pink-600" />
              ) : (
                <BsHeart className="h-5 group-hover:text-pink-600" />
              )}
            </div>
            {post.likeCount > 0 && (
              <span
                className={` text-sm group-hover:text-pink-600 ${
                  liked && "text-pink-600"
                }`}
              >
                {post.likeCount}
              </span>
            )}
          </div>
          {/* Share */}
          <div className="post-icon tooltip group" data-tip="Share">
            <BsShare className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          {/* ShareLink/Delete*/}
          {sessionUIDEqualsPOSTUID ? (
            isAccOwner && (
              <div
                className="tooltip group flex items-center space-x-1"
                data-tip="Delete"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeletePost();
                }}
              >
                <div className="post-icon tooltip group-hover:bg-red-600/10">
                  <BsTrash className="h-5 group-hover:text-red-600" />
                </div>
              </div>
            )
          ) : (
            <div
              className="tooltip group flex items-center space-x-1"
              data-tip="Link"
            >
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

export default PostCard;
