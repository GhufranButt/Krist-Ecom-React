import { useState } from "react";
import Button from "../../Elements/Button";
import kristLogo from "../../../assets/kristlog.svg";
import ArrowLeft from "../../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../apiCalls/authentication/auth.js";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [formValues, setFormValues] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidation = validateForm();
    if (!isValidation) {
      return;
    }

    try {
      setIsloading(true);
      const result = await forgotPassword(formValues.email);

      if (result.status === 200) {
        toast.success(result.message);
        setIsloading(false);
        navigate("/verifyOtp");
      } else {
        setIsloading(false);
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = "Invalid email format";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-1 flex-col">
              <label className="text-sm font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                className="border border-gray-600 rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="w-full">
              <Button
                text="Send OTP"
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

export default ForgotPassword;
