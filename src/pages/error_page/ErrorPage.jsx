import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 bg-dark">
      <div className="flex h-36 w-36">
        <img
          src="https://pbs.twimg.com/media/FPOauJfXwAEYG1A?format=png&name=240x240"
          alt=""
        />
      </div>
      <span className="text-[45px] font-bold text-white">Oops</span>
      <span className="text-lg text-white">
        We can't find the place you looking for
      </span>
      <Link to="/">
        <button className="focus:shadow-outline mx-auto block rounded bg-indigo-800 py-3 px-10 text-xs uppercase text-white shadow hover:bg-indigo-700 focus:outline-none">
          Back To Home Page
        </button>
      </Link>
    </div>
  );
}
