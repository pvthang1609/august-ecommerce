import axiosClient from "./axiosClient";

const assignObject = (...object) => {
  return Object.assign({}, ...object);
};

const productApi = {
  get: (params) => {
    const url = "/api/products";
    return axiosClient.get(url, { params });
  },
  findOne: (params) => {
    const url = "api/products";
    return axiosClient.get(`${url}/${params}`);
  },
  getMany: (...manyParams) => {
    const params = assignObject({}, ...manyParams);
    const url = "api/products";
    return axiosClient.get(url, { params });
  },
};

export default productApi;
