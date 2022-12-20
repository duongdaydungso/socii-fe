import { BiSearchAlt } from "react-icons/bi";
import Navbar from "../../components/navbar/Navbar";
import ProfileTray from "../../components/profile/ProfileTray";

export default function IntroPageContent() {
  return (
    <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
      <Navbar pageName="Socii" />
      <div className="sticky top-[4.5rem] z-10 flex w-full items-center justify-center bg-slate-100 dark:bg-dark">
        <input
          type="text"
          className="h-10 w-[95%] rounded-full bg-slate-50 p-4 pl-10 text-dark outline-none focus:bg-white focus:outline-[2px] dark:bg-hoverDark dark:text-white dark:focus:bg-black"
          placeholder="Search Socii..."
        />
        <BiSearchAlt className="absolute top-[10px] left-[23px] h-6 w-6 dark:text-white" />
      </div>
      {/*famous post*/}
      <div className="mt-3 flex w-full flex-col">
        <div className="content-title mb-3">What's happening?</div>

        {/*famous guy*/}
        <div className="border-layout mt-3 flex flex-col justify-center border-t">
          <span className="content-title right-0 my-3">Famous People</span>
          <ProfileTray />
        </div>
      </div>
    </div>
  );
}
