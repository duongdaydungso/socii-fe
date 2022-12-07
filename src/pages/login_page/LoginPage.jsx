import { useState } from "react";

import { useDispatch } from "react-redux";

import { assignToken } from "../../redux/auth/authSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faKey,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import { loginAPI } from "../../services/userServices";

const humanIconSVG =
  "M 32 2 A 1 1 0 0 0 32 32 C 12 32 2 42 2 62 L 62 62 C 62 42 52 32 32 32 A 1 1 0 0 0 32 2";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispact = useDispatch();

  const handleLogin = async () => {
    try {
      await loginAPI(email, password).then((res) => {
        if (res.accessToken) {
          console.log(res.accessToken);

          dispact(assignToken({ token: res.accessToken }));
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-background flex h-screen w-screen bg-gradient-to-r from-[blue] to-[pink]">
      <div className="login-container m-auto flex h-[470px] w-[450px]">
        <div className="human-icon-container absolute mx-[165px] mt-0 flex h-[120px] w-[120px] rounded-full bg-black-blue">
          <svg className="m-auto h-[64px] w-[64px]">
            <path d={humanIconSVG} stroke="white" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <div className="form-container m-auto h-[350px] w-[450px] rounded-[40px] bg-[white]/50">
          <div className="input-field mx-[45px] mt-[100px] flex">
            <div className="icon-input-field flex h-[60px] w-[60px] bg-black-blue">
              <FontAwesomeIcon
                className="m-auto"
                icon={faEnvelope}
                size="xl"
                inverse
              />
            </div>
            <input
              className="h-[60px] w-[300px] bg-black-blue/60 px-5 text-lg text-[white]/90 placeholder-[white]/70"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-field mx-[45px] mt-[20px] flex">
            <div className="icon-input-field flex h-[60px] w-[60px] bg-black-blue">
              <FontAwesomeIcon
                className="m-auto"
                icon={faKey}
                size="xl"
                inverse
              />
            </div>
            <input
              className="h-[60px] w-[300px] bg-black-blue/60 px-5 text-lg text-[white]/90 placeholder-[white]/70"
              type={isShowPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="login-error-message mt-[10px] w-[450px] text-center text-lg font-bold text-[red]">
            {errorMessage}
          </div>
          <div
            className={
              errorMessage !== ""
                ? "other-options mt-[2px] flex"
                : "other-option mt-[40px] flex"
            }
          >
            <button
              className="toggle-hide-password ml-[40px] text-black-blue hover:scale-[1.05]"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              <FontAwesomeIcon icon={isShowPassword ? faEyeSlash : faEye} />
              {isShowPassword ? " Hide" : " Show"} password
            </button>
            <button className="sign-up-option ml-auto mr-[40px] text-black-blue hover:scale-[1.05]">
              <FontAwesomeIcon icon={faUserPlus} />
              {" Register"}
            </button>
          </div>
        </div>
        <button
          className="login-button 
                    absolute mx-[65px] mt-[410px] h-[60px] w-[320px] rounded-b-[40px] 
                    bg-gradient-to-t from-[white]/50 via-[white]/50 
                    text-base font-bold text-[white]/90 hover:scale-[1.05]"
          onClick={() => handleLogin()}
        >
          L O G I N
        </button>
      </div>
    </div>
  );
}
