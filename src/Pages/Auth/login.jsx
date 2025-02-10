import { useState } from "react";
import Button from "../../Elements/Button";
import kristLogo from "../../../assets/kristlog.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const values = { email: "", password: "" };
  const [formValues, setFormValues] = useState(values);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleChange = () => {
    const { name, value } = formValues;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <div className="flex md:flex-row justify-center items-center h-screen">
      <div className="bg-[url(/assets/Girl.png)] bg-no-repeat  w-[50%] hidden lg:flex  lg:w-1/2 h-[50vh] lg:h-screen  bg-cover bg-center">
        <div className="flex  justify-center items-center gap-1 h-[50px] w-[50px] mt-16 ml-[100px]">
          <img src={kristLogo} className="h-full w-full" />
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
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-600 rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                name="password"
                value={formValues.password}
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
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
                  // onClick={handleCheck}
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
          </form>
          <div className="w-full">
            <Button text="Login" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
