import { react, useState } from "react";
import Button from "../../Elements/Button";
import kristLogo from "../../../assets/kristlog.svg";
import { register } from "../../apiCalls/authentication/auth.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [check, setCheck] = useState(false);
  const [errors, setErrors] = useState({});

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

    if (!formValues.firstName) {
      errors.firstName = "First name is required";
    }
    if (!formValues.lastName) {
      errors.lastName = "Last name is required";
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
      const result = await register(
        formValues.email,
        formValues.password,
        formValues.firstName,
        formValues.lastName
      );
      if (result.status === 400) {
        toast.error(result.message);
      } else {
        navigate("/");
        toast.success(result.message);
      }
    } catch (error) {
      console.log("EEWLLWKELKWLK", error);
    }
  };

  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <div className="flex md:flex-row justify-center items-center h-screen">
      <div className="bg-[url(/assets/register.png)] bg-no-repeat  w-[50%] hidden lg:flex  lg:w-1/2 h-[50vh] lg:h-screen  bg-cover bg-center">
        <div className="flex  justify-center items-center gap-1 h-[50px] w-[50px] mt-16 ml-[100px]">
          <img src={kristLogo} className="h-full w-full" />
          <p className="text-black text-[50px]">Krist</p>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-4 sm:px-10 py-6">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-black text-3xl lg:text-[40px] sm:text-4xl font-bold">
              Create New Account
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Please enter details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="firstName">
                First Name
              </label>
              <input
                className="border border-gray-600 rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                name="firstName"
                type="text"
                placeholder="Enter first name"
                value={formValues.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="border border-gray-600 rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                name="lastName"
                type="text"
                placeholder="Enter last name"
                value={formValues.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="email">
                Email
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
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-600 rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <div className="flex justify-start gap-2 items-center text-sm">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="check"
                  className="accent-black cursor-pointer"
                  checked={check}
                  onChange={handleCheck}
                />
                <label
                  // onClick={handleCheck}
                  className="cursor-pointer text-gray-700 hover:text-black hover:font-medium transition duration-300"
                  htmlFor="check"
                >
                  I agree to
                </label>
              </div>
              <p className="cursor-pointer text-black font-bold">
                Terms & Conditions
              </p>
            </div>
            <div className="w-full">
              <Button text="Login" type="submit" className="w-full" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
