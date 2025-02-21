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

export const productByID = async (id) => {
  try {
    const res = await apiCall(`/product/product-details/${id}`, "GET");
    console.log("res of all products", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

export const addProduct = async (product) => {
  const {
    brandName,
    productName,
    productDescription,
    price,
    discountedPrice,
    stock,
    category,
    subCategory,
    images,
  } = product;

  const body = {
    brandName,
    productName,
    productDescription,
    price: Number(price),
    discountedPrice: Number(discountedPrice),
    stock,
    category,
    subCategory,
    images,
  };

  try {
    const res = await apiCall("/product/add-product", "POST", body);
    console.log("res of all products", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

export const getProductsByCat = async (cat) => {
  console.log("get by id", cat);
  try {
    const res = await apiCall(`/product/get-by-category/${cat}`, "GET");
    console.log("res of all products", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};
