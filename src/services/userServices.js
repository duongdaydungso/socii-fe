import axios from "../axios";

export const loginAPI = (userEmail, userPassword) => {
  return axios.post("/api/auth/login", {
    email: userEmail,
    password: userPassword,
  });
};

export const registerAPI = (userEmail, userPassword) => {
  return axios.post("/api/auth/register", {
    email: userEmail,
    password: userPassword,
  });
};
