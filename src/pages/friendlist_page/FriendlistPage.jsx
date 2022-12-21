import Navbar from "../../components/navbar/Navbar";
import ProfileSearch from "../../components/profile/ProfileSearch";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

import { getDataUserByID } from "../../services/publicServices";
import { getFriendRequestSent } from "../../services/userServices";
import { useEffect, useState } from "react";

export default function FriendlistPage() {
  const tmpUser = useSelector(selectAuth);

  const [isFriendList, setIsFriendList] = useState(true);
  const [friendlistData, setFriendlistData] = useState([]);
  const [friendRequestData, setFriendRequestData] = useState([]);

  const fetchFriendList = () => {
    getDataUserByID(tmpUser.userID).then((res) => {
      if (res.error === 0) {
        setFriendlistData(res.data.hasFriends);
      } else console.log(res.message);
    });
  };

  const fetchFriendRequestSent = () => {
    getFriendRequestSent(tmpUser.token).then((res) => {
      if (res.error === 0) {
        setFriendRequestData(res.data);
      } else console.log(res.message);
    });
  };

  useEffect(() => {
    fetchFriendList();
    fetchFriendRequestSent();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (tmpUser.token === null)
    return (
      <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]"></div>
    );

  return (
    <div className="flex flex-col">
      <Navbar pageName="Friends" showBackButton />
      <div className="border-layout sticky top-[4.5rem] flex h-12 items-center justify-center border-t">
        <button
          className="filterButton"
          onClick={() => {
            setIsFriendList(true);
          }}
        >
          Friend List
        </button>
        <button
          className="filterButton"
          onClick={() => {
            setIsFriendList(false);
          }}
        >
          Requests Sent
        </button>
      </div>
      <div className="border-layout ml-6 mt-4 mb-4 text-2xl font-bold text-[#282A3A] dark:text-accent">
        {isFriendList ? "Friend list" : "Friend request sent"}
      </div>
      {isFriendList && (
        <div className="border-layout flex flex-col border-t">
          {friendlistData.map((friend, index) => (
            <ProfileSearch key={index} friendData={friend} />
          ))}
        </div>
      )}
      {!isFriendList && (
        <div className="border-layout flex flex-col border-t">
          {friendRequestData.map((friend, index) => (
            <ProfileSearch key={index} friendData={friend.receiver} />
          ))}
        </div>
      )}
    </div>
  );
}
