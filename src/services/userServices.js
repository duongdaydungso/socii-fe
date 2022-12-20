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
    method: "delete",
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

export const cancelFriendRequest = (token, friendID) => {
  return axios({
    method: "delete",
    url: `/api/user/cancelFriendRequest`,
    headers: {
      Authorization: token,
    },
    data: {
      friendId: friendID,
    },
  });
};

export const getRelationship = (token, userID) => {
  return axios({
    method: "post",
    url: `/api/user/getRelationship`,
    headers: {
      Authorization: token,
    },
    data: {
      userId: userID,
    },
  });
};
