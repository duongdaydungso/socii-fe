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

export const getFriendRequestSent = (token) => {
  return axios({
    method: "get",
    url: `/api/user/getFriendRequestSent`,
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

export const rejectFriendRequest = (token, friendID) => {
  return axios({
    method: "delete",
    url: `/api/user/rejectFriendRequest`,
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

export const togglePostLike = (token, postID) => {
  return axios({
    method: "post",
    url: `/api/post/togglePostLike`,
    headers: {
      Authorization: token,
    },
    data: {
      postId: postID,
    },
  });
};

export const toggleCommentLike = (token, commentID) => {
  return axios({
    method: "post",
    url: `/api/post/toggleCommentLike`,
    headers: {
      Authorization: token,
    },
    data: {
      commentId: commentID,
    },
  });
};

export const createPost = (token, content, file) => {
  let formData = new FormData();

  formData.append("content", content);
  formData.append("type", "post");
  formData.append("file", file);

  const config = {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(`/api/post/addPost`, formData, config);
};

export const deletePost = (token, postID) => {
  return axios({
    method: "delete",
    url: `/api/post/removePost`,
    headers: {
      Authorization: token,
    },
    data: {
      postId: postID,
    },
  });
};

export const checkPostLike = (token, postID) => {
  return axios({
    method: "post",
    url: `/api/post/checkPostLike`,
    headers: {
      Authorization: token,
    },
    data: {
      postId: postID,
    },
  });
};

export const checkCommentLike = (token, commentID) => {
  return axios({
    method: "post",
    url: `/api/post/checkCommentLike`,
    headers: {
      Authorization: token,
    },
    data: {
      commentId: commentID,
    },
  });
};

export const deleteComment = (token, commentID) => {
  return axios({
    method: "delete",
    url: `/api/post/removeCommentFromPost`,
    headers: {
      Authorization: token,
    },
    data: {
      commentId: commentID,
    },
  });
};

export const editProfile = (token, name, description, avatar, wallpaper) => {
  let formData = new FormData();

  formData.append("type", "profile");
  formData.append("name", name);
  formData.append("description", description);
  formData.append("avatar", avatar);
  formData.append("wallpaper", wallpaper);

  const config = {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(`/api/user/editProfile`, formData, config);
};

export const createComment = (token, content, postID, file) => {
  let formData = new FormData();

  formData.append("content", content);
  formData.append("postId", postID);
  formData.append("type", "post");
  formData.append("file", file);

  const config = {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(`/api/post/addCommentToPost`, formData, config);
};

export const getRandomUserNotFriend = (token) => {
  return axios({
    method: "get",
    url: `/api/user/getRandomUserNotFriend`,
    headers: {
      Authorization: token,
    },
  });
};

export const sharePost = (token, content, postID) => {
  return axios({
    method: "post",
    url: `/api/post/sharePost`,
    headers: {
      Authorization: token,
    },
    data: {
      content: content,
      postId: postID,
    },
  });
};
