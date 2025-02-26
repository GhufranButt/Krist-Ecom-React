import apiCall from "../../hooks/apicalls/apicall.js";

export const addCart = async (cartItem) => {
  const { quantity, color, productImage, productName, productPrice, size } =
    cartItem;

  const body = {
    quantity,
    productName,
    productImage,
    productPrice,
    productColor: color,
    productSize: size,
  };

  try {
    const res = await apiCall("/cart/add-to-cart", "POST", body);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

// NEED TO SEND ONLY TOKEN
export const getCart = async () => {
  try {
    const res = await apiCall("/cart/get-cart-items", "GET");
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

// need to send only cartID
export const deleteCart = async (id) => {
  console.log("-------->", id);
  const body = {
    cartId: id,
  };
  try {
    const res = await apiCall("/cart/delete-item", "POST", body);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    all;
    return error;
  }
};

// Need to send CartID and quantity
export const updateCart = async () => {
  try {
    const res = await apiCall("/cart/update-cart", "PUT", body);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};
