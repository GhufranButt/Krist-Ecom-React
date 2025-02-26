import { useState } from "react";
import Button from "../../Elements/Button";
import kristLogo from "../../../assets/kristlog.svg";
import ArrowLeft from "../../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import { verifyOtp } from "../../apiCalls/authentication/auth";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const handleOtpChange = (value) => {
    setOtp(value);
    setErrors({});
  };

  const validateForm = () => {
    let errors = {};

    if (!otp || otp.length < 5) {
      errors.otp = "OTP is required";
    }  else

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    try {
      setIsloading(true);
      const response = await verifyOtp(otp);

      if (response.status === 404) {
        toast.error(response.message);
        setIsloading(false);
      } else {
        toast.success(response.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex md:flex-row justify-center items-center h-screen">
      <div className="bg-[url(/assets/OtpImg.png)] bg-no-repeat  w-[50%] hidden lg:flex  lg:w-1/2 h-[50vh] lg:h-screen  bg-cover bg-center">
        <div className="flex  justify-center items-center gap-1 h-[50px] w-[50px] mt-16 ml-[100px]">
          <img src={kristLogo} className="h-full w-full" alt="Krist Logo" />
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
                alt="Back Arrow"
              />
              <p className="hover:text-black hover:font-bold transition duration-300">
                Back
              </p>
            </div>
            <h1 className="text-black text-3xl lg:text-[40px] sm:text-4xl font-bold">
              Enter OTP
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              We have shared a code to your registered email address
              robertfox@example.com
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <PinInput
              length={5}
              initialValue=""
              secret
              secretDelay={100}
              onChange={handleOtpChange}
              type="string"
              inputMode="string|number"
              style={{ padding: "10px" }}
              inputStyle={{
                width: "70px",
                height: "70px",
                borderRadius: "10px",
                border: errors.otp ? "1px solid red" : "1px solid black",
                textAlign: "center",
                fontSize: "1rem",
                marginRight: "10px",
                gap: "10px",
                flex: "1 1 auto",
              }}
              inputFocusStyle={{
                borderColor: errors.otp ? "red" : "blue",
                boxShadow: errors.otp
                  ? "0 0 0 3px rgba(255, 0, 0, 0.5)"
                  : "0 0 0 3px rgba(59, 130, 246, 0.5)",
              }}
              onComplete={(value) => setOtp(value)}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />

            {errors.otp && (
              <p className="text-red-500 text-sm mt-2">{errors.otp}</p>
            )}
            <div className="w-[450px]">
              <Button
                text="Verify OTP"
                type="submit"
                className="w-full"
                isLoading={isloading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
