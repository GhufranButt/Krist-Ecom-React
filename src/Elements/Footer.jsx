import React from "react";
import kristLogo from "../../assets/kristwhite.jpg";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { LuInstagram, LuTwitter } from "react-icons/lu";
import { CgFacebook } from "react-icons/cg";
import visaCardImg from "../../assets/visa.png";
import masterCardImg from "../../assets/masterCard.png";
import payPalCardImg from "../../assets/papPal.png";
import westernUnionCardImg from "../../assets/westernUnion.png";
import googleCardImg from "../../assets/google.png";

const Footer = () => {
  return (
    <div className="flex flex-col  bg-black text-gray-300">
      <div className="flex  py-8 justify-around items-center">
        <div className="flex flex-col gap-8 items-start">
          <div className="flex justify-center items-center">
            <img
              src={kristLogo}
              color="white"
              className="h-[25px] xl:h-[40px] xl:w-[40px]"
            />
            <h1 className="text-gray-300 font-bold text-[25px] xl:text-[50px]">
              Krist
            </h1>
          </div>
          <div className="flex justify-center gap-3 items-center">
            <BiPhoneCall />
            <p className="text-gray-300">(704) 555-0127</p>
          </div>
          <div className="flex justify-center gap-3 items-center">
            <FiMail />
            <p className="text-gray-300">krist@gmail.com</p>
          </div>
          <div className="flex justify-center gap-3 items-center">
            <SlLocationPin />
            <p className="text-gray-300 max-w-[250px]">
              3891 Ranchview Dr.Richardson, California 62639
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start text-gray-300 gap-6">
          <h2 className="font-bold text-white text-[20px]">Information</h2>
          <p>My Account</p>
          <p>Login</p>
          <p> My Cart</p>
          <p>My Wishlist</p>
          <p>Checkout</p>
        </div>
        <div className="flex flex-col items-start text-gray-300 gap-6">
          <h2 className="font-bold text-white text-[20px]">Service</h2>
          <p>About us</p>
          <p>Careers</p>
          <p> Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms& Condition</p>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-bold text-white text-[20px]">Subscribe</h2>
          <p className="text-gray-300 max-w-[350px]">
            Enter your Email below to be the first to know about new collections
            and product launches
          </p>
        </div>
      </div>
      <div className="flex py-5 border-red-100 border-t justify-around items-center">
        <div className="flex justify-center cursor-pointer w-[30px] h-[30px] gap-4 items-center">
          <img src={visaCardImg} alt="" />
          <img src={masterCardImg} alt="" />
          <img src={payPalCardImg} alt="" />
          <img src={westernUnionCardImg} alt="" />
          <img src={googleCardImg} alt="" />
        </div>
        <div>@2025 Krist All Rights are reserved</div>
        <div className="flex justify-center cursor-pointer items-center gap-6">
          <LuInstagram className="w-[25px] h-[25px]" />
          <CgFacebook className="w-[25px] h-[25px]" />
          <LuTwitter className="w-[25px] h-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
