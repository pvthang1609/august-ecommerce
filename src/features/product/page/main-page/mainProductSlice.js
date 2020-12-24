import { createSlice } from "@reduxjs/toolkit";

const initProducts = {
  listMale: [],
  listFemale: [],
  loading: false,
};

const mainProductSlice = createSlice({
  name: "mainProducts",
  initialState: initProducts,
  reducers: {
    main_product_request: (state) => {
      state.loading = true;
    },
    main_product_success: (state, action) => {
      state.listMale = action.payload.response1.queryProducts;
      state.listFemale = action.payload.response2.queryProducts;
      state.loading = false;
    },
    main_product_fail: (state, action) => {
      state.fail = action.payload;
      state.loading = false;
    },
  },
});

const { actions, reducer } = mainProductSlice;

export const {
  main_product_request,
  main_product_success,
  main_product_fail,
} = actions;

export default reducer;
