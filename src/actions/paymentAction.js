import productApi from "api/productApi";

import { add_cart, edit_cart } from "features/payment/page/cart/cartSlice";
import {
  notificationAddCart,
  notificationFailLogin,
} from "./notificationAction";

export const addToCart = (productId, quantity, size) => async (
  dispatch,
  getState
) => {
  try {
    const {
      cart: { listCart },
    } = getState();
    const params = productId;
    const response = await productApi.findOne(params);
    const { _id, info, name } = response;
    const { inventory } = info.find((item) => item.size === size);
    const findItem = listCart.find(
      (item) => item.size === size && item.id === productId
    );
    const totalQuantity = (findItem ? findItem.quantity : 0) + quantity;
    if (totalQuantity > inventory) {
      throw new Error("Số lượng mua vượt quá số lượng hàng hóa trong kho");
    }
    const value = listCart.find(
      (item) => item.id === productId && item.size == size
    );
    const index = listCart.indexOf(value);

    if (index >= 0) {
      dispatch(edit_cart({ index: index, quantity: quantity }));
    } else
      dispatch(
        add_cart({
          id: _id,
          quantity: quantity,
          size: size,
        })
      );
    dispatch(notificationAddCart(name));
  } catch (err) {
    dispatch(notificationFailLogin(err.message));
  }
};
