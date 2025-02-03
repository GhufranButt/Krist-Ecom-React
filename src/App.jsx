import Login from "../src/Pages/Auth/login.jsx";
import Register from "../src/Pages/Auth/signup.jsx";
import ForgotPassword from "../src/Pages/Auth/forgotPass.jsx";
import VerifyOtp from "../src/Pages/Auth/verifyOtp.jsx";
import ConfrimPassword from "../src/Pages/Auth/confirmPass.jsx";
import Home from "../src/Pages/Home/home.jsx";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyOtp" element={<VerifyOtp />} />
        <Route path="/confirmPassword" element={<ConfrimPassword />} />
        <Route path="/Home" element={<Home />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
