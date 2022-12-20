import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters"),
      lastName: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters"),
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section>
      <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
        {/* FULL NAME */}
        <div>
          <div id="fullName" className="flex flex-row">
            <div id="firstName" className="mr-2 w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.firstName && (
                <span className="text-xs text-red-400">
                  {formik.errors.firstName}
                </span>
              )}
            </div>
            <div id="lastName" className="w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />

              {formik.errors.lastName && (
                <span className="text-xs text-red-400">
                  {formik.errors.lastName}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            placeholder="name@company.com"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <span className="text-xs text-red-400">{formik.errors.email}</span>
          )}
        </div>
        {/* PASSWORD */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && (
            <span className="text-xs text-red-400">
              {formik.errors.password}
            </span>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmedPassword"
            id="confirmedPassword"
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            onChange={formik.handleChange}
            value={formik.values.confirmedPassword}
          />
          {formik.errors.confirmedPassword && (
            <span className="text-xs text-red-400">
              {formik.errors.confirmedPassword}
            </span>
          )}
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
          <a href="#" className="font-medium text-accent hover:underline">
            Login here
          </a>
        </p>
      </form>
    </section>
  );
};

export default RegisterForm;
