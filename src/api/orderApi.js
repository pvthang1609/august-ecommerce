import { axiosClient } from "./axiosClient";

const orderApi = {
  post: (data) => {
    const url = "/order";
    return axiosClient.post(url, data);
  },
};

export default orderApi;
