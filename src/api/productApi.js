import axiosClient from "./axiosClient";

const productApi = {
  get: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
};

export default productApi;
