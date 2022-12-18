import { HiDotsHorizontal, HiSwitchHorizontal } from "react-icons/hi";
import {
  BsChat,
  BsFillHeartFill,
  BsHeart,
  BsShare,
  BsTrash,
} from "react-icons/bs";

const PostCard = (/*post*/) => {
<<<<<<< HEAD
  const sessionUIDEqualsPOSTUID = true;
=======
  const sessionUIDEqualsPOSTUID = false;
>>>>>>> 823e50f9932d75c387dd3f85f2017e80fc988e15
  const liked = false;

  const post = {
    user: {
      userName: "Elon Musk",
      avatar:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    },

    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltfcdeffabeec48348/60dc14140401cb0ebfac177e/cc0acdf7dc2968346cc8d86dc76b6763cbb8b8dd.jpg?format=jpg",
    timestamp: "1 min",

    comments: ["hay", "ngu", "nice"],
    likes: ["NghiaMai", "Cr7", "M10"],
  };

  return (
    <div className="border-layout flex cursor-pointer border-b pt-4 pb-4 hover:bg-hoverLight dark:text-white dark:hover:bg-hoverDark">
      <img
        className="ml-5 mr-4 h-14 cursor-pointer rounded-full"
        src={post.user.avatar}
        alt="prof"
      />
      <div className="flex w-[82%] flex-col">
        <div className="flex w-full items-center">
          <div className="flex items-center space-x-2">
            <span className="cursor-pointer font-bold hover:underline">
              {post.user.userName}
            </span>
            <span className="text-xs opacity-60">{post.timestamp} ago</span>
          </div>

<<<<<<< HEAD
          <div
            className="tooltip group ml-auto mt-[1px] flex-shrink-0 pr-2"
            data-tip="More"
          >
=======
          <div className="group ml-auto mt-[1px] flex-shrink-0 pr-2">
>>>>>>> 823e50f9932d75c387dd3f85f2017e80fc988e15
            <HiDotsHorizontal className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

        <p className="">{post.content}</p>
        <div className="mt-2 mr-2">
          <img className="rounded-2xl" src={post?.image} alt="content image" />
        </div>

        <div className="mt-1 -mb-3 flex justify-between pr-2">
          {/* Comment */}
          <div className="group flex items-center space-x-1 ">
<<<<<<< HEAD
            <div
              className="post-icon tooltip group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10"
              data-tip="Comment"
            >
=======
            <div className="post-icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
>>>>>>> 823e50f9932d75c387dd3f85f2017e80fc988e15
              <BsChat className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            {post.comments.length > 0 && (
              <span className="text-sm group-hover:text-[#1d9bf0]">
                {post.comments.length}
              </span>
            )}
          </div>
          {/* Like */}
          <div className="group flex items-center space-x-1">
<<<<<<< HEAD
            <div
              className="post-icon tooltip group-hover:bg-pink-600/10"
              data-tip="Like"
            >
=======
            <div className="post-icon group-hover:bg-pink-600/10">
>>>>>>> 823e50f9932d75c387dd3f85f2017e80fc988e15
              {liked ? (
                <BsFillHeartFill className="h-5 text-pink-600" />
              ) : (
                <BsHeart className="h-5 group-hover:text-pink-600" />
              )}
            </div>
            {post.likes.length > 0 && (
              <span
                className={` text-sm group-hover:text-pink-600 ${
                  liked && "text-pink-600"
                }`}
              >
                {post.likes.length}
              </span>
            )}
          </div>
          {/* ShareLink */}
<<<<<<< HEAD
          <div className="post-icon tooltip group" data-tip="Share">
=======
          <div className="post-icon group">
>>>>>>> 823e50f9932d75c387dd3f85f2017e80fc988e15
            <BsShare className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          {/* Share/Delete*/}
          {sessionUIDEqualsPOSTUID ? (
            <div
              className="group flex items-center space-x-1"
              onClick={() => {}}
            >
<<<<<<< HEAD
              <div
                className="post-icon tooltip group-hover:bg-red-600/10"
                data-tip="Delete Post"
              >
=======
              <div className="post-icon group-hover:bg-red-600/10">
>>>>>>> 823e50f9932d75c387dd3f85f2017e80fc988e15
                <BsTrash className="h-5 group-hover:text-red-600" />
              </div>
            </div>
          ) : (
            <div className="group flex items-center space-x-1">
<<<<<<< HEAD
              <div
                className="post-icon tooltip group-hover:bg-green-500/10"
                data-tip="Link"
              >
=======
              <div className="post-icon group-hover:bg-green-500/10">
>>>>>>> 823e50f9932d75c387dd3f85f2017e80fc988e15
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
