import { react, useState } from "react";
import Button from "../../Elements/Button";
import kristLogo from "../../../assets/kristlog.svg";
import girlImg from "../../../assets/Girl.png";

const Home = () => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
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

          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                className="border border-gray-600 rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-600 rounded-md w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                id="password"
                type="password"
                placeholder="Enter your password"
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
                  className="cursor-pointer text-gray-700"
                  htmlFor="checkbox"
                >
                  Remember Me
                </label>
              </div>
              <p className="cursor-pointer text-gray-700 hover:underline">
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
