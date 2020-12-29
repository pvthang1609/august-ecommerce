import {
  add_notification,
  remove_notification,
} from "features/notification/notificationSlice";

export const notificationAddCart = (name) => (dispatch) => {
  dispatch(
    add_notification({
      status: "success",
      title: `Bạn đã thêm ${name} vào giỏ hàng`,
    })
  );
  setTimeout(() => {
    dispatch(remove_notification(0));
  }, 5000);
};
