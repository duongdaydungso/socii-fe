import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import swal from "sweetalert";

import { registerAPI } from "../../services/publicServices";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleRegister = async (email, password, name, age, gender) => {
    try {
      await registerAPI(email, password, name, Number(age), gender).then(
        (res) => {
          if (res.error === 0) {
            swal({
              icon: "success",
              text: res.message,
              button: false,
              timer: 1500,
            });

            navigate("/");
          } else {
            swal({
              icon: "error",
              text: res.message,
              button: false,
              timer: 3000,
            });

            console.log(res);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      gender: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      age: Yup.number()
        .required("Required")
        .positive("Enter a positive number")
        .integer("Invalid"),
      gender: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: (values) => {
      handleRegister(
        values.email,
        values.password,
        values.name,
        values.age,
        values.gender
      );
    },
  });

  return (
    <section>
      <form className="space-y-2 md:space-y-3" onSubmit={formik.handleSubmit}>
        {/* NAME */}
        <div>
          <div id="fullName" className="flex flex-row">
            <div id="name" className="w-full">
              <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                onChange={formik.handleChange}
                placeholder="John"
                value={formik.values.name}
              />
              {formik.errors.name && (
                <span className="text-xs text-red-400">
                  {formik.errors.name}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* EMAIL */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            placeholder="name@company.com"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <span className="text-xs text-red-400">{formik.errors.email}</span>
          )}
        </div>

        {/* ETC */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
            Gender
          </label>
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
            Your age
          </label>
          <input
            type="age"
            name="age"
            id="age"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            placeholder="18"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {formik.errors.email && (
            <span className="text-xs text-red-400">{formik.errors.age}</span>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="????????????????????????"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
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
          <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmedPassword"
            id="confirmedPassword"
            placeholder="????????????????????????"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-accentLight focus:ring-accentLight dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
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
        <div className="flex text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/">
            <div className="ml-1 font-medium text-accent hover:underline">
              Login here
            </div>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
