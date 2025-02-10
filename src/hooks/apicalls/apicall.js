const BASE_URL = "http://192.168.10.133:3001/review";

const apiCall = async (url, method, body = null) => {
  const options = {
    method,
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: body ? JSON.stringify(body) : null,
  };
  try {
    const response = await fetch(`${BASE_URL}${url}`, options);
    console.log("jdjdsjdksjkd", response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API call failed.");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong.");
  }
};

export default apiCall;
