import { useState } from "react";
import Button from "../../Elements/Button";
import kristLogo from "../../../assets/kristlog.svg";
import ArrowLeft from "../../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOtp({ ...otp, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (otp.length === 0) {
      errors.otp = "otp is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log("Form submitted:", formValues);
    }
  };

  return (
    <div className="flex md:flex-row justify-center items-center h-screen">
      <div className="bg-[url(/assets/OtpImg.png)] bg-no-repeat  w-[50%] hidden lg:flex  lg:w-1/2 h-[50vh] lg:h-screen  bg-cover bg-center">
        <div className="flex  justify-center items-center gap-1 h-[50px] w-[50px] mt-16 ml-[100px]">
          <img src={kristLogo} className="h-full w-full" />
          <p className="text-black text-[50px]">Krist</p>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-4 sm:px-10 py-6">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-8">
          <div className="flex flex-col gap-2">
            <div
              onClick={() => navigate("/forgotpassword")}
              className="flex cursor-pointer mb-6 gap-1"
            >
              <img
                src={ArrowLeft}
                onClick={() => navigate("/forgotpassword")}
              />
              <p className="hover:text-black hover:font-bold transition duration-300">
                Back
              </p>
            </div>
            <h1 className="text-black text-3xl lg:text-[40px] sm:text-4xl font-bold">
              Enter OTP
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              We have share a code of your registered email address
              robertfox@example.com
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-x-8" data-hs-pin-input="">
              <PinInput
                length={4}
                initialValue=""
                secret
                secretDelay={100}
                onChange={(otp, index) => {}}
                type="numeric"
                inputMode="number"
                style={{ padding: "10px" }}
                inputStyle={{ borderColor: "red" }}
                inputFocusStyle={{ borderColor: "blue" }}
                onComplete={(value, index) => {}}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
              {/* {otp.map(() => {
                return (
                  <input
                    type="text"
                    className="block w-[60px] h-[60px] rounded-[10px] text-center border border-black text-md focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    data-hs-pin-input-item=""
                    autoFocus=""
                    onChange={handleChange}
                    value={otp}
                  />
                );
              })}
              {errors.otp && (
                <p className="text-red-500 text-sm">{errors.otp}</p>
              )} */}
            </div>
            <div className="w-full">
              <Button text="Verify OTP" type="submit" className="w-full" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
