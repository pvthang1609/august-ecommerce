import { axiosClient } from "./axiosClient";

const ratingApi = {
  get: (id) => {
    const url = "/rating";
    return axiosClient.get(`${url}/${id}`);
  },
  post: (data) => {
    const url = "/rating";
    return axiosClient.post(url, data);
  },
};

export default ratingApi;
