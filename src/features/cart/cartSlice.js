import { createSlice } from "@reduxjs/toolkit";

const initCart = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initCart,
  reducers: {
    //add
    card_add_request: (state) => {
      state.loading = true;
    },
    card_add_success: (state, action) => {
      state.cart.push(action.payload);
      state.loading = false;
    },
    card_add_fail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //edit
    card_edit_request: (state) => {
      state.loading = true;
    },
    card_edit_success: (state, action) => {
      if (action.payload.type === "increment") {
        state.cart[action.payload.index].quantity =
          state.cart[action.payload.index].quantity + action.payload.quantity;
      } else {
        state.cart[action.payload.index].quantity =
          state.cart[action.payload.index].quantity - action.payload.quantity;
      }
      state.loading = false;
    },
    card_edit_fail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //remove
    card_remove_request: (state) => {
      state.loading = true;
    },
    card_remove_success: (state, action) => {
      state.cart.splice(action.payload, 1);
      state.loading = false;
    },
    card_remove_fail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //remove all
    card_remove_all_request: (state) => {
      state.loading = true;
    },
    card_remove_all_success: (state) => {
      state.cart = [];
      state.loading = false;
    },
    card_remove_all_fail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
const { actions, reducer } = cartSlice;

export const {
  card_add_request,
  card_add_success,
  card_add_fail,
  card_edit_request,
  card_edit_success,
  card_edit_fail,
  card_remove_request,
  card_remove_success,
  card_remove_fail,
  card_remove_all_request,
  card_remove_all_success,
  card_remove_all_fail,
} = actions;

export default reducer;
