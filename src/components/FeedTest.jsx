import React from "react";
import PostCard from "./PostCard";

const FeedTest = () => {
  return (
    <div>
      <PostCard />
      <PostCard />
      <PostCard />
      <button className="w-full text-center text-sm font-semibold text-accent hover:underline">
        Show more
      </button>
    </div>
  );
};

export default FeedTest;
