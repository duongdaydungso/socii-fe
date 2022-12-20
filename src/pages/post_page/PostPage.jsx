import React from "react";

import { useLoaderData } from "react-router-dom";

import { getPostByID } from "../../services/publicServices";

import CommentCard from "../../components/comment/CommentCard";
import CommentDialog from "../../components/comment/CommentDialog";
import Navbar from "../../components/navbar/Navbar";
import PostCard from "../../components/post/PostCard";

export async function postLoader({ params }) {
  const postID = Number(params.postID);

  const res = await getPostByID(postID);

  return res;
}

const PostPage = () => {
  const loaderData = useLoaderData();

  if (loaderData.error !== 0) console.log(loaderData);

  const postData = loaderData.data;

  return (
    <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
      <Navbar pageName="Thread" showBackButton />
      <PostCard postData={postData} />
      <CommentDialog />
      {postData.comments.map((cmt) => (
        <CommentCard commentData={cmt} key={cmt.id} />
      ))}
    </div>
  );
};

export default PostPage;
