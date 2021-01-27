import axios from "axios";

import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "content-type": "application/json",
    "auth-token": localStorage.getItem("auth-token"),
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
