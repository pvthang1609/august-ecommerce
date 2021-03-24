import productApi from "api/productApi";

import {
  product_list_request,
  product_list_success,
  product_list_fail,
  product_detail_request,
  product_detail_fail,
  product_detail_success,
  product_filter_request,
  product_filter_fail,
  product_filter_success,
  product_delete_request,
  product_delete_success,
  product_delete_fail,
} from "features/product/productSlice";

export const getListProduct = (nameState, params) => async (dispatch) => {
  dispatch(product_list_request({ nameState: nameState }));
  try {
    const response = await productApi.get(params);
    dispatch(product_list_success({ nameState: nameState, data: response }));
  } catch (error) {
    console.log(error.message);
    dispatch(product_list_fail({ nameState: nameState, data: error.message }));
  }
};

export const getDetailProduct = (id) => async (dispatch) => {
  dispatch(product_detail_request());
  try {
    const param = id;
    const response = await productApi.getOne(param);
    dispatch(product_detail_success(response));
  } catch (error) {
    dispatch(product_detail_fail(error.message));
  }
};

export const getFilterProduct = (params) => async (dispatch) => {
  dispatch(product_filter_request());
  try {
    const response = await productApi.get(params);
    dispatch(product_filter_success(response));
  } catch (error) {
    dispatch(product_filter_fail(error.message));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch(product_delete_request());
  try {
    const response = await productApi.delete(id);
    dispatch(product_delete_success(response));
  } catch (error) {
    dispatch(product_delete_fail(error.message));
  }
};
