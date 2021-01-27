import { createSlice } from "@reduxjs/toolkit";

const initFilter = {
  listFilter: [],
  page: 1,
  totalPage: 1,
  loading: false,
};

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState: initFilter,
  reducers: {
    filter_product_request: (state) => {
      state.loading = true;
    },
    filter_product_success: (state, action) => {
      state.listFilter = action.payload.queryProducts;
      state.page = action.payload.page;
      state.totalPage = action.payload.totalPage;

      state.loading = false;
    },
    filter_product_fail: (state, action) => {
      state.fail = action.payload;
      state.loading = false;
    },
  },
});

const { actions, reducer } = filterProductSlice;

export const {
  filter_product_request,
  filter_product_success,
  filter_product_fail,
} = actions;

export default reducer;
