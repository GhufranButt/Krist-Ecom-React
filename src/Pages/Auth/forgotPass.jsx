import { useState } from "react";
import Button from "../../Elements/Button";
import kristLogo from "../../../assets/kristlog.svg";
import ArrowLeft from "../../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const values = { email: "" };
  const [formValues, setFormValues] = useState(values);
  const navigate = useNavigate();

  return (
    <div className="flex md:flex-row justify-center items-center h-screen">
      <div className="bg-[url(/assets/ForgotpasswordIMG.png)] bg-no-repeat  w-[50%] hidden lg:flex  lg:w-1/2 h-[50vh] lg:h-screen  bg-cover bg-center">
        <div className="flex  justify-center items-center gap-1 h-[50px] w-[50px] mt-16 ml-[100px]">
          <img src={kristLogo} className="h-full w-full" />
          <p className="text-black text-[50px]">Krist</p>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-4 sm:px-10 py-6">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-8">
          <div className="flex flex-col gap-2">
            <div
              onClick={() => navigate("/")}
              className="flex cursor-pointer mb-6 gap-1"
            >
              <img src={ArrowLeft} onClick={() => navigate("/")} />
              <p className="hover:text-black hover:font-bold transition duration-300">
                Back
              </p>
            </div>
            <h1 className="text-black text-3xl lg:text-[40px] sm:text-4xl font-bold">
              Forgot Password
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Enter your registered email address. we’ll send you a code to
              reset your password.
            </p>
          </div>

          <form className="space-y-4">
            <div className="flex gap-1 flex-col">
              <label className="text-sm font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                className="border border-gray-600 rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </form>
          <div className="w-full">
            <Button text="Send OTP" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
