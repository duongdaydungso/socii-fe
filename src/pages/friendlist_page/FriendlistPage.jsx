import Navbar from "../../components/navbar/Navbar";
import ProfileSearch from "../../components/profile/ProfileSearch";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

import { getDataUserByID } from "../../services/publicServices";
import { useEffect, useState } from "react";

export default function FriendlistPage() {
  const tmpUser = useSelector(selectAuth);

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

  return (
    <div className="flex flex-col">
      <Navbar pageName="Friends" showBackButton />
      <div className="border-layout flex flex-col border-t">
        {friendlistData.map((friend, index) => (
          <ProfileSearch key={index} friendData={friend} />
        ))}
      </div>
    </div>
  );
}
