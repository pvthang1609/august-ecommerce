import { axiosClient } from "./axiosClient";

const invoiceApi = {
  post: (data) => {
    const url = "/invoice";
    return axiosClient.post(url, data);
  },
};

export default invoiceApi;
