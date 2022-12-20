import React from "react";

import { useNavigate } from "react-router-dom";

import useDarkMode from "../../hooks/useDarkMode";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";

export const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun className="btn-top" />
      ) : (
        <FaMoon className="btn-top" />
      )}
    </span>
  );
};

const Navbar = ({ pageName, showBackButton }) => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-10 flex h-[4.5rem] w-full justify-between bg-slate-100 p-6 dark:bg-dark">
      <div className="flex items-center space-x-4">
        {showBackButton && (
          <IoMdArrowBack
            className="btn-top mt-1 scale-[1.3] duration-200"
            onClick={() => {
              if (window.history.state && window.history.state.idx > 0) {
                navigate(-1);
              } else {
                navigate("/", { replace: true });
              }
            }}
          />
        )}

        <p className="text-2xl font-bold text-[#282A3A] dark:text-accent">
          {pageName}
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <ThemeIcon />
        <FiSettings className="btn-top duration-400 mt-[1px]" />
      </div>
    </div>
  );
};

export default Navbar;
