const BASE_URL = "http://192.168.10.132:3001";

const apiCall = async (url, method, body = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
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
