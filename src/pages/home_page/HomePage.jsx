import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearToken } from "../../redux/auth/authSlice";
import FeedTest from "../components/FeedTest";
import LeftBar from "../components/LeftBar";
import Navbar from "../components/Navbar";
import PostInput from "../components/PostInput";
import RightBar from "../components/RightBar";

export default function HomePage() {
  const dispatch = useDispatch();

  return (
    <div className="page min-h-screen">
      <div className="mx-auto flex min-w-[450px] max-w-[1280px] justify-center">
        <div className="sticky top-0">
          <LeftBar />
        </div>

        <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
          <Navbar pageName="Home" />
          <PostInput />
          <FeedTest />
        </div>

        <RightBar />
      </div>

      {/* <button
        className="border-red border"
        onClick={() => dispatch(clearToken())}
      >
        LOG OUT
      </button> */}
    </div>
  );
}
