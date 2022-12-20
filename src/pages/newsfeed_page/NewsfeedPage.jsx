import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSlice";

import Navbar from "../../components/navbar/Navbar";
import PostInput from "../../components/post/PostInput";

import { getNewsfeedData } from "../../services/userServices";
import PostCard from "../../components/post/PostCard";

export default function NewsfeedPage() {
  const [newsfeedData, setNewsfeedData] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(0);

  const doTriggerFetch = () => {
    setTriggerFetch(triggerFetch + 1);
  };

  const auths = useSelector(selectAuth);
  const accessToken = auths.token;

  const fetchNewsfeedData = async () => {
    const res = await getNewsfeedData(accessToken).catch((e) => console.log(e));

    return res;
  };

  useEffect(() => {
    fetchNewsfeedData().then((value) => {
      if (value.error === 0) setNewsfeedData(value.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchNewsfeedData().then((value) => {
      if (value.error === 0) setNewsfeedData(value.data);
    });
  }, [triggerFetch]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="border-layout">
      <Navbar pageName="News Feed" />
      <PostInput />
      {newsfeedData.map((post) => (
        <PostCard
          postData={post}
          key={post.id}
          canClick
          triggerFetch={doTriggerFetch}
        />
      ))}
    </div>
  );
}
