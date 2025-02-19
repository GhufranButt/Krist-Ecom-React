import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiDollarCircle } from "react-icons/bi";
import { FaHeadphones } from "react-icons/fa6";
import { LuCreditCard } from "react-icons/lu";

const KirstBenefits = () => {
  return (
    <div className="flex flex-col md:flex-row w-full px-4 py-10 justify-center gap-[40px] xl:gap-[150px]">
      <div className="flex flex-col gap-2 barlow-regular w-[200px] ">
        <LiaShippingFastSolid size={35} />
        <div>
          <p className="barlow-bold text-[20px]">Free Shipping</p>
          <p className="barlow-regular">Free Shipping for Above $150</p>
        </div>
      </div>
      <div className="flex gap-2 flex-col w-[220px]">
        <BiDollarCircle size={35} />
        <div>
          <p className="barlow-bold text-[20px]">Money Gurantee</p>
          <p className="barlow-regular">Within 30 days for an exchange</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[210px]">
        <FaHeadphones size={35} />
        <div>
          <p className="barlow-bold text-[20px]">Online Support</p>
          <p className="barlow-regular">24 hours a day, 7 days a week</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[210px] ">
        <LuCreditCard size={35} />
        <div>
          <p className="barlow-bold text-[20px]">Flexible Payment</p>
          <p className="barlow-regular">Pay with multiple credit cards</p>
        </div>
      </div>
    </div>
  );
};

export default KirstBenefits;
