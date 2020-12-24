import productApi from "api/productApi";

import {
  add_cart,
  edit_cart,
  fail_cart,
} from "features/payment/cart/cartSlice";

export const addToCart = (productId, quantity = 1) => async (dispatch) => {
  try {
    const params = productId;
    console.log(productId);
    const response = await productApi.findOne(params);
    const { _id, name, price } = response;
    dispatch(
      add_cart({ id: _id, name: name, quantity: quantity, price: price })
    );
  } catch (error) {
    dispatch(fail_cart(error.message));
  }
};
export const editToCart = (index, type) => async (dispatch) => {
  dispatch(edit_cart({ index: index, type: type }));
};
