import apiCall from "../../hooks/apicalls/apicall.js";

export const addCart = async (obj) => {
  const { quantity, name, images, price } = obj;

  const body = {
    quantity,
    brandName: name,
    productImage: images[0],
    productPrice: price,
  };

  try {
    const res = await apiCall("/cart/add-to-cart", "POST", body);
    console.log("res of all products", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

// NEED TO SEND ONLY TOKEN
export const getCart = async () => {
  try {
    const res = await apiCall("/cart/get-cart-items", "GET", body);
    console.log("res of all products", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

// need to send only cartID
export const deleteCart = async () => {
  try {
    const res = await apiCall("/cart/delete-item", "DELETE", body);
    console.log("res of all products", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

// Need to send CartID and quantity
export const updateCart = async () => {
  try {
    const res = await apiCall("/cart/update-cart", "PUT", body);
    console.log("res of all products", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};
