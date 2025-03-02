import React, { useState, useEffect } from "react";
import { getCart } from "../apiCalls/cart/cart.js";

const CartHover = () => {
  const [hoverCart, setHoverCart] = useState([]);

  useEffect(() => {
    const abc = async () => {
      try {
        const response = await getCart();
        setHoverCart(response.cartItems);
      } catch (error) {
        console.log(error);
      }
    };

    abc();
  }, []);

  console.log("hoverCart", hoverCart);

  return (
    <div className="h-[500px] w-[200px] bg-white">
      <div>
        {hoverCart.map(() => {
          return <div>{hoverCart.productNameclear}</div>;
        })}
      </div>
    </div>
  );
};

export default CartHover;
