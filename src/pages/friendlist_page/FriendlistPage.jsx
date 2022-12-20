import Navbar from "../../components/navbar/Navbar";
import ProfileSearch from "../../components/profile/ProfileSearch";

export default function FriendlistPage() {
  return (
    <div className="flex flex-col">
      <Navbar pageName="Friends" showBackButton />
      <div className="border-layout flex flex-col border-t">
        <ProfileSearch />
        <ProfileSearch />
      </div>
    </div>
  );
}
