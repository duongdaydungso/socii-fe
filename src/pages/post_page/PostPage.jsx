import React from "react";
import { CommentCard, CommentDialog } from "../../components/Comment";
import LeftBar from "../../components/LeftBar";
import Navbar from "../../components/Navbar";
import PostCard from "../../components/PostCard";
import RightBar from "../../components/RightBar";

const PostPage = () => {
  return (
    <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
      <Navbar pageName="Thread" showBackButton />
      <PostCard />
      <CommentDialog />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
};

export default PostPage;
