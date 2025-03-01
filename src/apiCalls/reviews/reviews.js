import apiCall from "../../hooks/apicalls/apicall.js";

export const reviews = async () => {
  try {
    const res = await apiCall("/review/get-reviews", "GET");
    return res.reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
  }
};
