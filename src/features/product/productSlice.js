import { createSlice } from "@reduxjs/toolkit";

const initProducts = {
  products: {
    detail: {},
    filter: {},
  },
  loading: {},
  error: {},
};

const productSlice = createSlice({
  name: "product",
  initialState: initProducts,
  reducers: {
    //get list
    product_list_request: (state, action) => {
      state.loading[action.payload.nameState] = true;
    },
    product_list_success: (state, action) => {
      state.products[action.payload.nameState] = action.payload.data;
      state.loading[action.payload.nameState] = false;
    },
    product_list_fail: (state, action) => {
      state.error[action.payload.nameState] = action.payload.data;
      state.loading[action.payload.nameState] = false;
    },

    //get detail
    product_detail_request: (state) => {
      state.loading.detail = true;
    },
    product_detail_success: (state, action) => {
      state.products.detail = action.payload;
      state.loading.detail = false;
    },
    product_detail_fail: (state, action) => {
      state.error.detail = action.payload;
      state.loading.detail = false;
    },

    //get filter
    product_filter_request: (state) => {
      state.loading.filter = true;
    },
    product_filter_success: (state, action) => {
      state.products.filter = action.payload;
      state.loading.filter = false;
    },
    product_filter_fail: (state, action) => {
      state.error.filter = action.payload;
      state.loading.filter = false;
    },

    //delete
    product_delete_request: (state) => {
      state.loading = true;
    },
    product_delete_success: (state, action) => {
      state.success = action.payload;
      state.loading = false;
    },
    product_delete_fail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  product_list_request,
  product_list_success,
  product_list_fail,
  product_detail_request,
  product_detail_success,
  product_detail_fail,
  product_filter_request,
  product_filter_success,
  product_filter_fail,
  product_delete_request,
  product_delete_success,
  product_delete_fail,
} = actions;

export default reducer;
