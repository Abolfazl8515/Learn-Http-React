import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
axios.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  (err) => {
    console.log(err);
    return Promise.reject();
  }
);

export const get = (url) => {
  return axios.get(url);
};
export const post = (url, info) => {
  const header = {
    headers: {
      Authorization: "SECURE TOKEN",
    },
  };
  return axios.post(url, info, header);
};
export const deleteMethod = (url) => {
  return axios.delete(url);
};
