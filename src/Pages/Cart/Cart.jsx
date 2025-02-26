import React, { useState, useEffect } from "react";
import { getCart } from "../../apiCalls/cart/cart";
import Navbar from "../../Elements/Navbar";
import Footer from "../../Elements/Footer";
import { deleteCart } from "../../apiCalls/cart/cart";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  const [numberOfCartItems, setNumberOfCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCart();
        console.log("response", response);
        const cartItemsWithQuantity = response.cartItems.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setNumberOfCartItems(cartItemsWithQuantity);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, []);

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

  console.log("numberOfCartItems", numberOfCartItems);

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center py-10 gap-20">
        <div className="flex flex-col ">
          <p className="text-[50px] text-black barlow-semibold">Checkout</p>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="py-3 px-[4px] text-gray-400">Product</th>
                <th className="py-3 px-[100px] text-gray-400">Price</th>
                <th className="py-3  text-gray-400">Quantity</th>
                <th className="py-3 px-[40px] text-gray-400">Subtotal</th>
                <th className="py-3  text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {numberOfCartItems.map((obj) => (
                <tr key={obj._id} className="border-b  border-gray-200">
                  <td className="py-4 px-[4px]">
                    <div className="flex gap-4 items-center">
                      <div className="bg-gray-100 w-[60px] h-[60px] flex items-center justify-center">
                        <img
                          src={obj.productImage}
                          className="p-3 object-contain"
                          alt="product"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-[15px] max-w-[100px] text-nowrap barlow-bold">
                          {obj.productName}
                        </div>
                        <div>Size: {obj.size}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-[100px]">${obj.productPrice}.00</td>
                  <td className="py-4 ">
                    <div className="flex items-center gap-3">
                      <button className="flex justify-center items-center gap-3 sm:gap-5 border py-2 border-black w-[80px] sm:w-[100px] rounded-[8px]">
                        <p
                          onClick={() => decreaseQuantity(obj._id)}
                          className="text-lg sm:text-[20px] cursor-pointer button"
                        >
                          -
                        </p>
                        <p className="text-lg sm:text-[20px]">{obj.quantity}</p>
                        <p
                          onClick={() => increaseQuantity(obj._id)}
                          className="text-lg sm:text-[20px] cursor-pointer button"
                        >
                          +
                        </p>
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-[40px]">
                    ${obj.productPrice * obj.quantity}.00
                  </td>
                  <td className="py-4 px-[10px]">
                    <RiDeleteBinLine
                      onClick={() => cartDelete(obj._id)}
                      color="red"
                      className="button"
                      size={20}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-2 px-6 flex flex-col gap-4 border border-gray-200 rounded-[16px]">
          <div className="flex justify-between border-b py-2 border-gray-200">
            <div className="text-black barlow-semibold">Subtotal</div>
            <p className="text-black  barlow-semibold">$200</p>
          </div>
          <p className="text-xs barlow-regular">Enter Discount Code</p>
          <div className="flex">
            <input
              placeholder="FLAT50"
              className="rounded-tl-lg border border-gray-500 outline-none"
              disabled
            />
            <button className="border rounded-bl-lg text-white p-2 butt on border-gray-200 bg-black">
              Apply
            </button>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <div className="text-black barlow-semibold">Delivery Charges</div>
            <p className="text-black  barlow-semibold">$5</p>
          </div>
          <div className="flex flex-col w-full gap-6 justify-center ">
            <div className="flex justify-between">
              <p className="text-[14px] barlow-bold">Grand Total</p>
              <p className="text-[14px] barlow-bold">$200</p>
            </div>
            <button className=" text-white bg-black text-[14px] justify-center items-center px-4 py-3 rounded-[10px] w-[350px]">
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
