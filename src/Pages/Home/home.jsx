import React from "react";
import Navbar from "../../Elements/Navbar";
import BannerImg from "../../../assets/HomeBannerImg.png";
import SimpleSlider from "../../Elements/ReactSlick.jsx";

const home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="container">
        <img src={BannerImg} />
      </div>
      <SimpleSlider />
    </div>
  );
};

export default home;
