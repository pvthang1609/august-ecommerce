import productApi from "api/productApi";

import {
  card_add_request,
  card_add_success,
  //   card_add_fail,
  //   card_edit_request,
  card_edit_success,
  //   card_edit_fail,
  //   card_remove_request,
  card_remove_success,
  //   card_remove_fail,
  //   card_remove_all_request,
  card_remove_all_success,
  //   card_remove_all_fail,
} from "features/cart/cartSlice";
import { notificationFail, notificationSuccess } from "./notificationAction";

export const addToCart = (productId, quantity, size) => async (
  dispatch,
  getState
) => {
  const {
    cart: { cart },
  } = getState();
  dispatch(card_add_request());
  try {
    const response = await productApi.getOne(productId);
    const { _id, info, name, img, price } = response;
    const { inventory } = info.find((item) => item.size === size);
    const findItem = cart.find(
      (item) => item.size === size && item.id === productId
    );
    const totalQuantity = (findItem ? findItem.quantity : 0) + quantity;
    if (totalQuantity > inventory) {
      throw new Error("Số lượng mua vượt quá số lượng hàng hóa trong kho");
    }
    const value = cart.find(
      (item) => item.id === productId && item.size == size
    );
    const index = cart.indexOf(value);

    if (index >= 0) {
      dispatch(
        card_edit_success({
          index: index,
          quantity: quantity,
          type: "increment",
        })
      );
    } else
      dispatch(
        card_add_success({
          id: _id,
          name: name,
          img: img[0],
          price: price,
          quantity: quantity,
          size: size,
        })
      );
    dispatch(notificationSuccess("Sản phẩm đã được thêm vào giỏ"));
  } catch (error) {
    dispatch(notificationFail(error.message));
  }
};

//
export const editToCart = (
  productId,
  quantity = 1,
  size,
  index,
  type
) => async (dispatch, getState) => {
  const {
    cart: { cart },
  } = getState();
  if (type === "decrement") {
    if (cart[index].quantity === 1) {
      dispatch(card_remove_success(index));
    } else {
      dispatch(
        card_edit_success({ index: index, quantity: 1, type: "decrement" })
      );
    }
  } else {
    try {
      const params = productId;
      const response = await productApi.getOne(params);
      const { info } = response;
      const { inventory } = info.find((item) => item.size === size);
      const totalQuantity = cart[index].quantity + quantity;
      if (totalQuantity > inventory) {
        throw new Error("Số lượng mua vượt quá số lượng hàng hóa trong kho");
      }
      dispatch(
        card_edit_success({
          index: index,
          quantity: quantity,
          type: "increment",
        })
      );
    } catch (err) {
      dispatch(notificationFail(err.message));
    }
  }
};

//
export const removeToCart = (index = "all") => async (dispatch) => {
  if (index !== "all") {
    dispatch(card_remove_success(index));
  } else {
    dispatch(card_remove_all_success());
  }
};
