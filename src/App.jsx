import Login from "../src/Pages/Auth/login.jsx";
import Register from "../src/Pages/Auth/signup.jsx";
import ForgotPassword from "../src/Pages/Auth/forgotPass.jsx";
import VerifyOtp from "../src/Pages/Auth/verifyOtp.jsx";
import ConfrimPassword from "../src/Pages/Auth/confirmPass.jsx";
import ProductCategories from "./Pages/Products/ProductCategories.jsx";
import ProductDetail from "./Pages/Products/ProductDetail.jsx";
import AddProduct from "./addProduct.jsx";
import Home from "../src/Pages/Home/home.jsx";
import Cart from "../src/Pages/Cart/Cart.jsx";
import PublicRoutes from "../src/Routing/PublicRoutes.jsx";
import PrivateRoutes from "../src/Routing/PrivateRoutes.jsx";
import ProceedTocheckOut from "../src/Pages/Checkout/ProceedTocheckOut.jsx";
import NotFound from "../src/Pages/NotFound/NotFound.jsx";
import CartHover from "./Elements/CartHover.jsx";
import { ToastContainer } from "react-toastify";

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
      <Route element={<PublicRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyOtp" element={<VerifyOtp />} />
        <Route path="/confirmPassword" element={<ConfrimPassword />} />
        <Route path="/product-categories" element={<ProductCategories />} />
        <Route path="/product-details/:id" element={<ProductDetail />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/check-out" element={<ProceedTocheckOut />} />
        <Route path="/cartHover" element={<CartHover />} />
      </Route>

      <Route element={<PrivateRoutes />}></Route>

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
