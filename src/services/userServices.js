import axios from "../axios";

export const getNewsfeedData = (token) => {
  return axios({
    method: "get",
    url: `/api/user/getNewsFeed`,
    headers: {
      Authorization: token,
    },
  });
};

export const getUserFriendRequest = (token) => {
  return axios({
    method: "get",
    url: `/api/user/getFriendRequest`,
    headers: {
      Authorization: token,
    },
  });
};

export const sendFriendRequest = (token, friendID) => {
  return axios({
    method: "post",
    url: `/api/user/sendFriendRequest`,
    headers: {
      Authorization: token,
    },
    data: {
      friendId: friendID,
    },
  });
};

export const removeFriend = (token, friendID) => {
  return axios({
    method: "post",
    url: `/api/user/removeFriend`,
    headers: {
      Authorization: token,
    },
    data: {
      friendId: friendID,
    },
  });
};

export const acceptFriendRequest = (token, friendID) => {
  return axios({
    method: "post",
    url: `/api/user/acceptFriendRequest`,
    headers: {
      Authorization: token,
    },
    data: {
      friendId: friendID,
    },
  });
};
