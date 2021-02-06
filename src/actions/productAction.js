import productApi from "api/productApi";
import {
  main_product_request,
  main_product_fail,
  main_product_success,
} from "features/product/page/main-page/mainProductSlice";
import {
  detail_product_request,
  detail_product_fail,
  detail_product_success,
} from "features/product/page/product-page/detailProductSlice";
import {
  filter_product_request,
  filter_product_fail,
  filter_product_success,
} from "features/product/page/filter-page/filterProductSlice";

export const listProduct = () => async (dispatch) => {
  dispatch(main_product_request());
  try {
    const params1 = { gender: "male", order: "newest" };
    const params2 = { gender: "female", order: "newest" };
    const response1 = await productApi.get(params1);
    const response2 = await productApi.get(params2);
    dispatch(main_product_success({ response1, response2 }));
  } catch (err) {
    dispatch(main_product_fail(err.message));
  }
};

export const detailProduct = (id) => async (dispatch) => {
  dispatch(detail_product_request());
  try {
    const param = id;
    const response = await productApi.findOne(param);
    dispatch(detail_product_success(response));
  } catch (err) {
    dispatch(detail_product_fail(err.message));
  }
};

export const filterProduct = (params) => async (dispatch) => {
  dispatch(filter_product_request());
  try {
    const response = await productApi.get(params);
    dispatch(filter_product_success(response));
  } catch (err) {
    dispatch(filter_product_fail(err.message));
  }
};
