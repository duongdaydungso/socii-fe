import LeftBar from "../../components/LeftBar";
import RightBar from "../../components/RightBar";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page min-h-screen">
      <div className="mx-auto flex min-w-[450px] justify-center justify-items-center">
        <div className="">
          <LeftBar />
        </div>

        <div className="border-layout flex min-w-[380px] max-w-[600px] flex-1 shrink-0 flex-col border-x sm:min-w-[600px]">
          <Outlet />
        </div>

        <div className="">
          <RightBar />
        </div>
      </div>
    </div>
  );
}
