import { useDispatch } from "react-redux";
import { clearToken } from "../../redux/auth/authSlice";

export default function HomePage() {
  const dispact = useDispatch();

  return (
    <div>
      <button
        className="border-red border"
        onClick={() => dispact(clearToken())}
      >
        LOG OUT
      </button>
    </div>
  );
}
