import { axiosClient } from "./axiosClient";

const discountApi = {
  get: (params) => {
    const url = "/discount";
    return axiosClient.get(url, { params });
  },
};
export default discountApi;
