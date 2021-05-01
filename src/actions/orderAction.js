import orderApi from "api/orderApi";
import {
  clearState,
  order_create_request,
  order_create_success,
  order_edit_fail,
  order_edit_request,
  order_edit_success,
} from "features/order/orderSlide";
import { notificationFail, notificationSuccess } from "./notificationAction";

export const addOrderToServer = () => async (dispatch, getState) => {
  dispatch(order_create_request());
  const {
    order: { order },
  } = getState();
  try {
    const response = await orderApi.post(order);
    dispatch(notificationSuccess(`Đơn hàng ${response._id} đã được tạo`));
    dispatch(order_create_success());
  } catch (err) {
    dispatch(notificationFail(err.message));
  }
};
export const addInfoToOrder = (data) => async (dispatch) => {
  dispatch(order_edit_request());
  try {
    dispatch(order_edit_success(data));
  } catch (error) {
    dispatch(order_edit_fail(error.message));
  }
};
export const clearOrderInState = () => async (dispatch) => {
  dispatch(clearState());
};
