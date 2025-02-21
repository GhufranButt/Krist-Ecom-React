import apiCall from "../../hooks/apicalls/apicall.js";

export const addWishList = async (id) => {
  try {
    const res = await apiCall("/wishlist/add-to-wishlist", "POST", body);
    console.log("res of all products", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

export const getWishList = async (id) => {
  try {
    const res = await apiCall("/wishlist/get-wishlist", "GET", body);
    console.log("res of all products", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};
