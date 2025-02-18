import apiCall from "../../hooks/apicalls/apicall.js";

export const allProducts = async () => {
  try {
    const res = await apiCall("/product/get-all", "GET");
    console.log("res of all products", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};
