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
