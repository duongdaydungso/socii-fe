import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftButton = ({ Icon, text, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return isActive ? `text-[20px] font-bold` : `text-[17px] font-semibold`;
      }}
    >
      <div className="hoverAnimation flex items-center space-x-4 p-4">
        <Icon className="btn-side" />
        <p
          className={`hidden text-black dark:text-white lg:inline 
        `}
        >
          {text}
        </p>
      </div>
    </NavLink>
  );
};

export default LeftButton;
