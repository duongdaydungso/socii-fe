import React from "react";
import { Link } from "react-router-dom";
import { ThemeIcon } from "../../components/navbar/Navbar";
import RegisterForm from "../../components/register/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="relative w-screen dark:bg-dark">
      <div className="flex h-full flex-wrap items-center justify-center">
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <div className="mb-3">
            <ThemeIcon />
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full"
            alt="Phone background"
          />
        </div>

        <div className="md:w-8/12 lg:ml-20 lg:w-5/12">
          <div className="mx-auto flex flex-col items-center justify-center px-6 py-4 md:h-screen">
            <Link to="/">
              <div className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                <img
                  className="mr-2 h-12 w-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/900px-Android_O_Preview_Logo.png"
                  alt="logo"
                />
                Socii
              </div>
            </Link>

            <div className="w-full rounded-lg bg-slate-50 shadow dark:border dark:border-gray-700 dark:bg-hoverDark sm:max-w-md md:mt-0 lg:p-0">
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                  Create an account
                </h1>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
