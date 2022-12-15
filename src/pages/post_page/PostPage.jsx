import React from "react";
import { CommentCard, CommentDialog } from "../components/Comment";
import LeftBar from "../components/LeftBar";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import RightBar from "../components/RightBar";

const PostPage = () => {
  return (
    <div className="page min-h-screen">
      <div className="mx-auto flex min-w-[450px] max-w-[1280px] justify-center">
        <div className="sticky top-0">
          <LeftBar />
        </div>

        <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
          <Navbar pageName="Thread" showButton={true} />
          <PostCard />
          <CommentDialog />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>

        <RightBar />
      </div>
    </div>
  );
};

export default PostPage;
