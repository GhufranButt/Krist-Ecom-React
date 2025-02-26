import apiCall from "../../hooks/apicalls/apicall.js";

export const register = async (email, password, firstName, lastName) => {
  try {
    const body = { email, password, firstName, lastName };

    const res = await apiCall("/user/register-user", "POST", body);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

export const login = async (email, password) => {
  try {
    const body = { email, password };

    const res = await apiCall("/user/login-user", "POST", body);
    console.log("res for login", res);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

export const forgotPassword = async (email) => {
  try {
    const body = { email };

    const res = await apiCall("/user/forgot-password", "POST", body);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

export const verifyOtp = async (otp) => {
  try {
    const body = { otp };

    const res = await apiCall("/user/verify-otp", "POST", body);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};

export const confirmPassword = async (password, confirmPassword) => {
  try {
    const body = { password, confirmPassword };

    const res = await apiCall("/user/confirm-password", "POST", body);
    return res;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return error;
  }
};
