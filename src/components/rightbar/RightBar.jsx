import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

import { getUserFriendRequest } from "../../services/userServices";

import { BiSearchAlt } from "react-icons/bi";

import ProfileTray from "../profile/ProfileTray";
import FriendRequest from "../profile/FriendRequest";

const RightBar = () => {
  const [requestList, setRequestList] = useState([]);
  const [cntFF, setCntFF] = useState(0);

  const changeTempMethod = () => {
    setCntFF(cntFF + 1);
  };

  const tmpAuth = useSelector(selectAuth);

  const fetchUserFriendRequest = () => {
    getUserFriendRequest(tmpAuth.token).then((res) => {
      if (res.error === 0) {
        setRequestList(res.data);
      } else {
        console.log(res.message);
      }
    });
  };

  useEffect(() => {
    fetchUserFriendRequest();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchUserFriendRequest();
  }, [cntFF]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="sticky top-0 hidden w-[300px] max-w-[380px] flex-1 flex-col md:flex">
      <div className="sticky top-0 flex h-[4.5rem] items-center justify-center bg-slate-100 dark:bg-dark">
        <input
          type="text"
          className="h-[70%] w-[90%] rounded-full bg-hoverLight p-4 pl-10 text-black outline-none 
                        focus:outline-[2px] focus:outline-accent dark:bg-hoverDark dark:text-white
                      focus:dark:bg-dark"
          placeholder="Search Socii..."
        />
        <BiSearchAlt className="absolute top-[23px] left-[27px] h-6 w-6  dark:text-white" />
      </div>
      {requestList.length > 0 && (
        <div className="border-layout">
          <div className="content-title mb-2">Friend request</div>
          {requestList.map((us, index) => (
            <FriendRequest
              userRequest={us}
              key={index}
              changer={changeTempMethod}
            />
          ))}
        </div>
      )}
      <div className="border-layout">
        <div className="content-title mb-2">You may know</div>
        <ProfileTray />
      </div>
    </div>
  );
};

export default RightBar;
