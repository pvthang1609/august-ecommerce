import { axiosClient } from "./axiosClient";

const userApi = {
  login: (data) => {
    const url = "/user/login";
    return axiosClient.post(url, data);
  },
  getUserByIds: (params) => {
    const url = "/user";
    return axiosClient.get(url, { params });
  },
  register: (data) => {
    const url = "/user/register";
    return axiosClient.post(url, data);
  },
};

export default userApi;
