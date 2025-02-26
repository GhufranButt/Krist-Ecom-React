import { useState } from "react";
import Button from "../../Elements/Button";
import kristLogo from "../../../assets/kristlog.svg";
import { useNavigate } from "react-router-dom";
import { login } from "../../apiCalls/authentication/auth.js";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [check, setCheck] = useState(false);
  const [errors, setErrors] = useState({});
  const [passShow, setPassShow] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const handleCheck = () => {
    setCheck(!check);
  };

  const passwordShow = () => {
    setPassShow(!passShow);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = "Invalid email format";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
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

    try {
      setIsloading(true);
      const result = await login(formValues.email, formValues.password);

      if (result.status === 200) {
        const userData = {
          token: result.token,
          email: result.user.email,
          firstName: result.user.firstName,
          lastName: result.user.lastName,
          userId: result.user.id,
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        toast.success(result.message || "Login successfulllyyy!!!!!!");
        navigate("/home");
      } else {
        toast.error(
          result.message || "Login failed! Please try again..........."
        );
      }
    } catch (error) {
      console.error("Login error", error);
      toast.error(
        error.response?.data?.message || "An unexpected error occurred."
      );
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="flex md:flex-row justify-center items-center h-screen">
      <div className="bg-[url(/assets/Girl.png)] bg-no-repeat w-[50%] hidden lg:flex lg:w-1/2 h-[50vh] lg:h-screen bg-cover bg-center">
        <div className="flex justify-center items-center gap-1 h-[50px] w-[50px] mt-16 ml-[100px]">
          <img src={kristLogo} className="h-full w-full" alt="Krist Logo" />
          <p className="text-black text-[50px]">Krist</p>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-4 sm:px-10 py-6">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-black text-3xl lg:text-[40px] sm:text-4xl font-bold">
              Welcome 👋
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Please login here
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                className="border border-gray-600 rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                name="email"
                value={formValues.email}
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <div className="relative w-full">
                <input
                  className="border border-gray-600 rounded-md w-full h-12 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  name="password"
                  value={formValues.password}
                  type={passShow ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={handleChange}
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

            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="accent-black cursor-pointer"
                  checked={check}
                  onChange={handleCheck}
                />
                <label
                  className="cursor-pointer text-gray-700 hover:text-black hover:font-medium transition duration-300"
                  htmlFor="checkbox"
                >
                  Remember Me
                </label>
              </div>
              <p
                onClick={() => navigate("/forgotpassword")}
                className="cursor-pointer text-gray-700 hover:text-black hover:font-medium transition duration-300"
              >
                Forgot Password?
              </p>
            </div>
            <div className="w-full">
              <Button text="Login" type="submit" isLoading={isloading} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
