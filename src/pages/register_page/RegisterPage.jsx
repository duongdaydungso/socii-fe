import React from "react";
import { ThemeIcon } from "../../components/navbar/Navbar";

const RegisterPage = () => {
  return (
    <div className="relative w-screen dark:bg-dark">
      <div className="p-3">
        <ThemeIcon />
      </div>
      <div className="flex h-full flex-wrap items-center justify-center">
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full"
            alt="Phone image"
          />
        </div>

        <div className="md:w-8/12 lg:ml-20 lg:w-5/12">
          <div className="mx-auto flex flex-col items-center justify-center px-6 py-6 md:h-screen lg:py-0">
            <a
              href="#"
              className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="mr-2 h-12 w-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/900px-Android_O_Preview_Logo.png"
                alt="logo"
              />
              Socii
            </a>
            <div className="w-full rounded-lg bg-slate-50 shadow dark:border dark:border-gray-700 dark:bg-hoverDark sm:max-w-md md:mt-0 lg:p-0">
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                  Create an account
                </h1>

                <form className="space-y-4 md:space-y-6" action="#">
                  {/* FULL NAME */}
                  <div>
                    <div id="fullName" className="flex flex-row">
                      <div id="firstName" className="mr-2 w-1/2">
                        <label
                          for="fname"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                          required=""
                        />
                      </div>
                      <div id="lastName" className="w-1/2">
                        <label
                          for="lname"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* EMAIL */}
                  <div>
                    <label
                      for="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  {/* PASSWORD */}
                  <div>
                    <label
                      for="password"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="confirm-password"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      required=""
                    />
                  </div>
                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-accentLight px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-accent focus:outline-none focus:ring-4"
                  >
                    Create account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="font-medium text-accent hover:underline"
                    >
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
