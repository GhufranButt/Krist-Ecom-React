import React, { useState, useEffect } from "react";
import { getCart } from "../../apiCalls/cart/cart";
import Navbar from "../../Elements/Navbar";
import Footer from "../../Elements/Footer";
import { deleteCart } from "../../apiCalls/cart/cart";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [numberOfCartItems, setNumberOfCartItems] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("isAuthenticated", isAuthenticated);

  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("userData"));

    const fetchCart = async () => {
      try {
        setIsloading(true);
        const response = await getCart();
        const cartItemsWithQuantity = response.cartItems.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setIsloading(false);
        setNumberOfCartItems(cartItemsWithQuantity);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, []);

  const handleProceedToCheckOut = () => {
    if (isAuthenticated) {
      navigate("/check-out");
    } else {
      navigate("/login");
    }
  };

  const decreaseQuantity = (id) => {
    setNumberOfCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const increaseQuantity = (id) => {
    setNumberOfCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id && item.quantity < 5
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const cartDelete = async (id) => {
    await deleteCart(id);
    setNumberOfCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== id)
    );
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row items-center justify-center py-4 sm:py-6 lg:py-10 gap-5 sm:gap-10 lg:gap-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col relative w-full lg:w-auto">
          <p className="text-[30px] sm:text-[40px] lg:text-[50px] text-black barlow-semibold">
            Checkout
          </p>

          {isloading && (
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 z-10">
              <svg
                aria-hidden="true"
                className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-black"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          )}

          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="py-2 sm:py-3 px-[4px] text-gray-400 text-sm sm:text-base">
                  Product
                </th>
                <th className="py-2 sm:py-3 px-[20px] sm:px-[100px] text-gray-400 text-sm sm:text-base">
                  Price
                </th>
                <th className="py-2 sm:py-3 text-gray-400 text-sm sm:text-base">
                  Quantity
                </th>
                <th className="py-2 sm:py-3 px-[10px] sm:px-[40px] text-gray-400 text-sm sm:text-base">
                  Subtotal
                </th>
                <th className="py-2 sm:py-3 text-gray-400 text-sm sm:text-base">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {numberOfCartItems.map((obj) => (
                <tr key={obj._id} className="border-b border-gray-200">
                  <td className="py-2 sm:py-4 px-[4px]">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
                      <div className="bg-gray-100 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center justify-center">
                        <img
                          src={obj.productImage}
                          className="p-2 sm:p-3 object-contain"
                          alt="product"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-[12px] sm:text-[15px] max-w-[80px] sm:max-w-[100px] text-nowrap barlow-bold">
                          {obj.productName}
                        </div>
                        <div className="text-[10px] sm:text-[12px]">
                          Size: {obj.size}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 sm:py-4 px-[20px] sm:px-[100px] text-sm sm:text-base">
                    ${obj.productPrice}.00
                  </td>
                  <td className="py-2 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button className="flex justify-center items-center gap-2 sm:gap-3 border py-1 sm:py-2 border-black w-[60px] sm:w-[80px] rounded-[8px]">
                        <p
                          onClick={() => decreaseQuantity(obj._id)}
                          className="text-sm sm:text-lg cursor-pointer button"
                        >
                          -
                        </p>
                        <p className="text-sm sm:text-lg">{obj.quantity}</p>
                        <p
                          onClick={() => increaseQuantity(obj._id)}
                          className="text-sm sm:text-lg cursor-pointer button"
                        >
                          +
                        </p>
                      </button>
                    </div>
                  </td>
                  <td className="py-2 sm:py-4 px-[10px] sm:px-[40px] text-sm sm:text-base">
                    ${obj.productPrice * obj.quantity}.00
                  </td>
                  <td className="py-2 sm:py-4 px-[10px]">
                    <RiDeleteBinLine
                      onClick={() => cartDelete(obj._id)}
                      color="red"
                      className="button"
                      size={16}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="py-2 px-4 sm:px-6 flex flex-col gap-3 sm:gap-4 border border-gray-200 rounded-[16px] w-full lg:w-auto">
          <div className="flex justify-between border-b py-2 border-gray-200">
            <div className="text-black barlow-semibold text-sm sm:text-base">
              Subtotal
            </div>
            <p className="text-black barlow-semibold text-sm sm:text-base">
              $200
            </p>
          </div>
          <p className="text-xs barlow-regular">Enter Discount Code</p>
          <div className="flex">
            <input
              placeholder="FLAT50"
              className="rounded-tl-lg border border-gray-500 outline-none w-full sm:w-auto"
              disabled
            />
            <button className="border rounded-bl-lg text-white p-2 button border-gray-200 bg-black text-sm sm:text-base">
              Apply
            </button>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <div className="text-black barlow-semibold text-sm sm:text-base">
              Delivery Charges
            </div>
            <p className="text-black barlow-semibold text-sm sm:text-base">
              $5
            </p>
          </div>
          <div className="flex flex-col w-full gap-4 sm:gap-6 justify-center">
            <div className="flex justify-between">
              <p className="text-[12px] sm:text-[14px] barlow-bold">
                Grand Total
              </p>
              <p className="text-[12px] sm:text-[14px] barlow-bold">$200</p>
            </div>
            <button
              onClick={handleProceedToCheckOut}
              className="text-white bg-black text-[12px] button sm:text-[14px] justify-center items-center px-4 py-2 sm:py-3 rounded-[10px] w-full sm:w-[350px]"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
