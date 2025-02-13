import react, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../Elements/Navbar";
import BannerImg from "../../../assets/HomeBannerImg.png";
import Footer from "../../Elements/Footer.jsx";
import ShopByCategories from "../../Elements/ShopByCategories.jsx";
import InstagramStories from "../../Elements/InstagramStories.jsx";
import BestSellers from "../../Elements/BestSellers.jsx";
import CustomerReviews from "../../Elements/CustomerReviews.jsx";
import CountDown from "../../Elements/CountDown.jsx";

const home = () => {
  return (
    <div className="flex flex-col relative">
      <Navbar />

      <div className="px-2 xl:px-6">
        <img src={BannerImg} />
      </div>
      <div className="py-4">
        <ShopByCategories />
      </div>
      <BestSellers />
      <CountDown />
      <CustomerReviews />
      <InstagramStories />
      <Footer />
    </div>
  );
};

export default home;
