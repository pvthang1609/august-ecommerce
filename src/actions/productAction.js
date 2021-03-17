import productApi from "api/productApi";

import {
  filter_product_request,
  filter_product_fail,
  filter_product_success,
} from "features/product/page/filter-page/filterProductSlice";

import {
  product_list_request,
  product_list_success,
  product_list_fail,
  product_detail_request,
  product_detail_fail,
  product_detail_success,
  product_delete_request,
  product_delete_success,
  product_delete_fail,
} from "features/product/productSlice";

export const filterProduct = (params) => async (dispatch) => {
  dispatch(filter_product_request());
  try {
    const response = await productApi.get(params);
    dispatch(filter_product_success(response));
  } catch (err) {
    dispatch(filter_product_fail(err.message));
  }
};

// Edit last
// PRODUCT_LIST_REQUEST,
// PRODUCT_LIST_SUCCESS,
// PRODUCT_LIST_FAIL,
// PRODUCT_DETAILS_REQUEST,
// PRODUCT_DETAILS_SUCCESS,
// PRODUCT_DETAILS_FAIL,
// PRODUCT_SAVE_REQUEST,
// PRODUCT_SAVE_SUCCESS,
// PRODUCT_SAVE_FAIL,
// PRODUCT_DELETE_REQUEST,
// PRODUCT_DELETE_SUCCESS,
// PRODUCT_DELETE_FAIL,
// PRODUCT_REVIEW_SAVE_SUCCESS,
// PRODUCT_REVIEW_SAVE_REQUEST,
// PRODUCT_REVIEW_SAVE_FAIL,
// PRODUCT_REVIEW_SAVE_RESET,

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

export const deleteProduct = (id) => async (dispatch) => {
  dispatch(product_delete_request());
  try {
    const response = await productApi.delete(id);
    dispatch(product_delete_success(response));
  } catch (error) {
    dispatch(product_delete_fail(error.message));
  }
};
