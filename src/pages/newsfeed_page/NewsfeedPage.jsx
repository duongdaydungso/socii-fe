import FeedTest from "../../components/FeedTest";
import Navbar from "../../components/Navbar";
import PostInput from "../../components/PostInput";

export default function NewsfeedPage() {
  return (
    <div className="border-layout">
      <Navbar pageName="News Feed" />
      <PostInput />
      <FeedTest />
    </div>
  );
}
