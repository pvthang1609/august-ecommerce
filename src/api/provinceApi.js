import { provinceAxiosClient } from "./axiosClient";

const provinceApi = {
  get: (params = "") => {
    const url = "/api/province/";
    return provinceAxiosClient.get(`${url}${params}`);
  },
};

export default provinceApi;
