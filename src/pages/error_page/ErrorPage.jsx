import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 bg-dark">
      <div className="flex h-36 w-36">
        <img
          src="https://streamsentials.com/wp-content/uploads/2022/05/HUH-PNG.png"
          alt=""
        />
      </div>
      <span className="text-[45px] font-bold text-white">Oops</span>
      <span className="text-lg text-white">
        We can't find the place you looking for
      </span>
      <Link to="/">
        <button class="focus:shadow-outline mx-auto block rounded bg-indigo-800 py-3 px-10 text-xs uppercase text-white shadow hover:bg-indigo-700 focus:outline-none">
          Back To Home Page
        </button>
      </Link>
    </div>
  );
}
