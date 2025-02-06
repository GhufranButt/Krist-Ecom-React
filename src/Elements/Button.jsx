import React from "react";

const Button = ({ text, style, onClick, baseDisplay }) => {
  return (
    <button
      style={style}
      // baseDisplay={baseDisplay}
      // smDisplay={smDisplay}
      className={`bg-black text-[#FFFFFF] w-full px-10 py-4 cursor-pointer rounded-[14px] hover:bg-gray-800 ${baseDisplay} lg:block`}
    >
      {text}
    </button>
  );
};

export default Button;
