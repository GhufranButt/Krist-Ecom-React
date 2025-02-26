import { useState } from "react";
import Button from "../../Elements/Button";
import kristLogo from "../../../assets/kristlog.svg";
import ArrowLeft from "../../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { confirmPassword } from "../../apiCalls/authentication/auth.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const ConfirmPassword = () => {
  const [passShow, setPassShow] = useState(false);
  const [confirmPassShow, setConfirmPassShow] = useState(false);
  const [formValues, setFormValues] = useState({
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const passwordShow = () => {
    setPassShow(!passShow);
  };

  const confirmedPasswordShow = () => {
    setConfirmPassShow(!confirmPassShow);
  };

  const validateForm = () => {
    let errors = {};

    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!formValues.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required";
    } else if (formValues.confirmpassword.length < 8) {
      errors.confirmpassword = "Password must be at least 8 characters long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidation = validateForm();
    if (!isValidation) {
      return;
    }

    const result = await confirmPassword(
      formValues.password,
      formValues.confirmpassword
    );

    if (result.status === 200) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
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
              <img src={ArrowLeft} alt="Back Arrow" />
              <p
                className="hover:text-black hover:font-bold transition duration-300"
                onClick={() => navigate("/forgotpassword")}
              >
                Back
              </p>
            </div>
            <h1 className="text-black text-3xl lg:text-[40px] sm:text-4xl font-bold">
              Enter New Password
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Enter New Password to Change your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" htmlFor="password">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    className="border border-gray-600 rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    name="password"
                    type={passShow ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={formValues.password}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 button right-3 flex items-center text-gray-600"
                    onClick={passwordShow}
                  >
                    {passShow ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-medium"
                  htmlFor="confirmpassword"
                >
                  Confirm Password
                </label>
                <div className="relative w-full">
                  <input
                    className="border border-gray-600  rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    name="confirmpassword"
                    type={confirmPassShow ? "text" : "password"}
                    onChange={handleChange}
                    value={formValues.confirmpassword}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 button flex items-center text-gray-600"
                    onClick={confirmedPasswordShow}
                  >
                    {confirmPassShow ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </div>
                {errors.confirmpassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmpassword}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <Button
                text="Confirm Password"
                type="submit"
                className="w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
