import invoiceApi from "api/invoiceApi";
import productApi from "api/productApi";

import {
  add_cart,
  edit_cart,
  remove_cart,
  remove_all_cart,
} from "features/payment/page/cart/cartSlice";
import {
  edit_invoice,
  remove_invoice,
} from "features/payment/page/invoiceSlide";
import {
  notificationAddCart,
  notificationFail,
  notificationSuccessInvoice,
} from "./notificationAction";

export const addToCart = (productId, quantity, size) => async (
  dispatch,
  getState
) => {
  const {
    cart: { listCart },
  } = getState();
  try {
    const params = productId;
    const response = await productApi.getOne(params);
    const { _id, info, name, img, price } = response;
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
      dispatch(
        edit_cart({ index: index, quantity: quantity, type: "increment" })
      );
    } else
      dispatch(
        add_cart({
          id: _id,
          name: name,
          img: img[0],
          price: price,
          quantity: quantity,
          size: size,
        })
      );
    dispatch(notificationAddCart(name));
  } catch (err) {
    dispatch(notificationFail(err.message)); //???????????
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
    cart: { listCart },
  } = getState();
  if (type === "decrement") {
    if (listCart[index].quantity === 1) {
      dispatch(remove_cart(index));
    } else {
      dispatch(edit_cart({ index: index, quantity: 1, type: "decrement" }));
    }
  } else {
    try {
      const params = productId;
      const response = await productApi.findOne(params);
      const { info } = response;
      const { inventory } = info.find((item) => item.size === size);
      const totalQuantity = listCart[index].quantity + quantity;
      if (totalQuantity > inventory) {
        throw new Error("Số lượng mua vượt quá số lượng hàng hóa trong kho");
      }
      dispatch(
        edit_cart({ index: index, quantity: quantity, type: "increment" })
      );
    } catch (err) {
      dispatch(notificationFail(err.message)); //????????
    }
  }
};

//
export const removeToCart = (index = "all") => async (dispatch) => {
  if (index !== "all") {
    dispatch(remove_cart(index));
  } else {
    dispatch(remove_all_cart());
  }
};

export const addInvoiceToServer = () => async (dispatch, getState) => {
  const {
    invoice: { invoice },
  } = getState();
  try {
    const response = await invoiceApi.post(invoice);
    dispatch(notificationSuccessInvoice(response.no));
  } catch (err) {
    dispatch(notificationFail(err.message));
  }
};
export const editToInvoice = (data) => async (dispatch) => {
  dispatch(edit_invoice(data));
};
export const removeToInvoice = () => async (dispatch) => {
  dispatch(remove_invoice());
};
