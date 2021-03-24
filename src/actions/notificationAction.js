import {
  notification_add_request,
  notification_add_success,
  notification_remove_success,
} from "features/notification/notificationSlice";

const timeOut = 2500;

export const notificationSuccess = (message) => async (dispatch) => {
  dispatch(notification_add_request());
  const notifi = {
    status: "success",
    title: message,
  };
  dispatch(notification_add_success(notifi));
  setTimeout(() => {
    dispatch(notification_remove_success(0));
  }, timeOut);
};
export const notificationFail = (message) => (dispatch) => {
  dispatch(notification_add_request());
  const notifi = {
    status: "fail",
    title: message,
  };
  dispatch(notification_add_success(notifi));
  setTimeout(() => {
    dispatch(notification_remove_success(0));
  }, timeOut);
};
