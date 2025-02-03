import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-black text-[#FFFFFF] w-full px-10 py-4 cursor-pointer rounded-[14px] hover:bg-gray-800">
      {text}
    </button>
  );
};

export default Button;
