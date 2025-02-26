const BASE_URL = "https://ecommerce-be-one.vercel.app";
// http://192.168.10.120:3001

// https://4f76-182-185-135-35.ngrok-free.app
const apiCall = async (url, method, body = null) => {
  const token = localStorage.getItem("token");
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      auth: token,
    },
    body: body ? JSON.stringify(body) : null,
  };
  try {
    const response = await fetch(`${BASE_URL}${url}`, options, body);
    return response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong.");
  }
};

export default apiCall;
