const BASE_URL = "http://192.168.10.120:3001";

const apiCall = async (url, method, body = null) => {
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");
  console.log("", token);
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
