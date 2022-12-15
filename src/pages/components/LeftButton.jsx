const LeftButton = ({ Icon, text, active }) => {
  return (
    <div className="hoverAnimation flex items-center space-x-4 p-4">
      <Icon className="btn-side" />
      <p
        className={`hidden text-[17px] text-dark dark:text-white lg:inline ${
          active ? "text-[20px] font-extrabold" : "font-semibold"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default LeftButton;
