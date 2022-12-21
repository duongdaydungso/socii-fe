import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

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

  const [postData, setPostData] = useState(loaderData.data);
  const [triggerFetch, setTriggerFetch] = useState(0);

  const doTriggerFetch = () => {
    setTriggerFetch(triggerFetch + 1);
  };

  const fetchPostData = () => {
    getPostByID(loaderData.data.id).then((res) => {
      if (res.error === 0) {
        setPostData(res.data);
      } else console.log(res.message);
    });
  };

  useEffect(() => {
    fetchPostData();
  }, [triggerFetch]); // eslint-disable-line react-hooks/exhaustive-deps

  const tmpAuth = useSelector(selectAuth);

  return (
    <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
      <Navbar pageName="Thread" showBackButton />
      <PostCard postData={postData} triggerFetch={doTriggerFetch} />
      {tmpAuth.token && <CommentDialog postID={postData.id} />}
      {postData.comments.map((cmt) => (
        <CommentCard
          commentData={cmt}
          key={cmt.id}
          triggerFetch={doTriggerFetch}
        />
      ))}
    </div>
  );
};

export default PostPage;
