import apiCall from "../../hooks/apicalls/apicall.js";

export const addCart = async (obj) => {
  const { quantity, name, images, price } = obj;

  const body = {
    quantity,
    productName: name,
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
