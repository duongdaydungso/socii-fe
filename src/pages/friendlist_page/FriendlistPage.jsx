import Navbar from "../../components/navbar/Navbar";
import ProfileSearch from "../../components/profile/ProfileSearch";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

import { getDataUserByID } from "../../services/publicServices";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function FriendlistPage() {
  const tmpUser = useSelector(selectAuth);

  const [isFriendList, setIsFriendList] = useState(true);
  const [friendlistData, setFriendlistData] = useState([]);

  const fetchFriendList = () => {
    getDataUserByID(tmpUser.userID).then((res) => {
      if (res.error === 0) {
        setFriendlistData(res.data.hasFriends);
      } else console.log(res.message);
    });
  };

  useEffect(() => {
    fetchFriendList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (tmpUser.token === null)
    return (
      <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]"></div>
    );

  return (
    <div className="flex flex-col">
      <Navbar pageName="Friends" showBackButton />
      <div className="border-layout sticky top-[4.5rem] flex h-12 items-center justify-center border-t">
        <button className="filterButton">New Requests</button>

        <button className="filterButton">All Friends</button>
      </div>

      <div className="border-layout flex flex-col border-t">
        {friendlistData.map((friend, index) => (
          <ProfileSearch key={index} friendData={friend} />
        ))}
      </div>
    </div>
  );
}
