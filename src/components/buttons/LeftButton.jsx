import { NavLink } from "react-router-dom";

const LeftButton = ({ Icon, text, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return isActive ? `scale-105 font-[1000]` : `text-[17px]`;
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
