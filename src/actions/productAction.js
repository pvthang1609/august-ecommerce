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

export const listProduct = () => async (dispatch) => {
  dispatch(main_product_request());
  try {
    const params1 = { gender: "Male", order: "newest" };
    const params2 = { gender: "Female", order: "newest" };
    const response1 = await productApi.get(params1);
    const response2 = await productApi.get(params2);
    dispatch(main_product_success({ response1, response2 }));
  } catch (error) {
    dispatch(main_product_fail(error.message));
  }
};

export const detailProduct = (id) => async (dispatch) => {
  dispatch(detail_product_request());
  try {
    const param = id;
    const response = await productApi.findOne(param);
    dispatch(detail_product_success(response));
  } catch (error) {
    dispatch(detail_product_fail(error.message));
  }
};
