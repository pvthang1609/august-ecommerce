import { createSlice } from "@reduxjs/toolkit";

const initDetailProducts = {
  detail: {
    collections: "",
    img: [],
    views: null,
    favorite: null,
    _id: "",
    id: null,
    name: "",
    price: null,
    gender: "",
    view: null,
    desc: "",
    info: [{ code: "", size: 0, inventory: 0 }],
    timeInit: "",
  },
  loading: false,
};

const detailProductSlice = createSlice({
  name: "detailProduct",
  initialState: initDetailProducts,
  reducers: {
    detail_product_request: (state) => {
      state.loading = true;
    },
    detail_product_success: (state, action) => {
      state.detail = action.payload;
      state.loading = false;
    },
    detail_product_fail: (state, action) => {
      state.fail = action.payload;
      state.loading = false;
    },
  },
});

const { actions, reducer } = detailProductSlice;

export const {
  detail_product_request,
  detail_product_success,
  detail_product_fail,
} = actions;

export default reducer;
