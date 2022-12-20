import { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";

import { assignToken } from "../../redux/auth/authSlice";

import * as Yup from "yup";
import { useFormik } from "formik";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faKey,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import { loginAPI } from "../../services/publicServices";
import swal from "sweetalert";

const humanIconSVG =
  "M 32 2 A 1 1 0 0 0 32 32 C 12 32 2 42 2 62 L 62 62 C 62 42 52 32 32 32 A 1 1 0 0 0 32 2";

export default function LoginDialog() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const navigate = useNavigate();

  const dispact = useDispatch();

  const handleLogin = async (email, password) => {
    try {
      await loginAPI(email, password).then((res) => {
        if (res.data.accessToken && res.error === 0) {
          dispact(
            assignToken({
              token: res.data.accessToken,
              userID: res.data.id,
              userType: res.data.userType,
              userEmail: res.data.email,
              userName: res.data.name,
              userAvatar: res.data.avatar,
            })
          );
        } else {
          swal({
            icon: "error",
            text: res.message,
            button: false,
            timer: 2000,
          });

          formik.resetForm();
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required email"),
      password: Yup.string().required("Required password"),
    }),
    onSubmit: (values) => {
      handleLogin(values.email, values.password);
    },
  });

  return (
    <form
      className="login-background flex bg-opacity-75 bg-gradient-to-r from-accent to-[#CBEDD5] p-3"
      onSubmit={formik.handleSubmit}
    >
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
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
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
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="login-error-message text-md mt-[10px] w-[450px] text-center font-bold text-[red]">
            {formik.values.email !== "" || formik.values.password !== ""
              ? formik.errors.email
                ? formik.errors.email
                : formik.errors.password
              : null}
          </div>
          <div
            className={
              (formik.values.email !== "" || formik.values.password !== "") &&
              (formik.errors.email || formik.errors.password)
                ? "other-options mt-[6px] flex"
                : "other-option mt-[40px] flex"
            }
          >
            <button
              type="button"
              className="toggle-hide-password ml-[40px] text-black-blue hover:scale-[1.05]"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              <FontAwesomeIcon icon={isShowPassword ? faEyeSlash : faEye} />
              {isShowPassword ? " Hide" : " Show"} password
            </button>
            <button
              className="sign-up-option ml-auto mr-[40px] text-black-blue hover:scale-[1.05]"
              type="button"
              onClick={() => navigate("/register")}
            >
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
          type="submit"
        >
          L O G I N
        </button>
      </div>
    </form>
  );
}
