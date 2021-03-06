import { axiosClient } from "./axiosClient";

const assignObject = (...object) => {
  return Object.assign({}, ...object);
};

const productApi = {
  get: (params) => {
    const url = "/product";
    return axiosClient.get(url, { params });
  },
  getOne: (params) => {
    const url = "product";
    return axiosClient.get(`${url}/${params}`);
  },
  getMany: (...manyParams) => {
    const params = assignObject({}, ...manyParams);
    const url = "product";
    return axiosClient.get(url, { params });
  },
  delete: (id) => {
    const url = "product";
    return axiosClient.delete(`${url}/${id}`);
  },
};

export default productApi;
