import axios from "../axios";

export const loginAPI = (userEmail, userPassword) => {
  return axios.post("/api/auth/login", {
    email: userEmail,
    password: userPassword,
  });
};

export const registerAPI = (email, password, name, age, gender) => {
  return axios.post("/api/auth/register", {
    email: email,
    password: password,
    name: name,
    age: age,
    gender: gender,
  });
};

export const getDataUserByID = (ID) => {
  return axios.post("/api/user/getUserById", {
    userId: ID,
  });
};

export const getUserDescriptionByID = (ID) => {
  return axios.post("/api/user/getUserDescriptionById", {
    userId: ID,
  });
};

export const getPostByID = (ID) => {
  return axios.post("/api/post/getPostById", {
    postId: ID,
  });
};

export const getTopUser = () => {
  return axios.get("/api/user/getTopUser");
};
