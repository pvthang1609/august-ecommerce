import userApi from "api/userApi";
import { notificationSuccess } from "./notificationAction";

import {
  user_login_request,
  user_login_success,
  user_login_fail,
} from "features/authentication/authSlice";

export const login = (email, password) => async (dispatch) => {
  dispatch(user_login_request());
  try {
    const response = await userApi.login({ email: email, password: password });
    const { token } = response;
    dispatch(user_login_success({ user: response.infoUser, token: token }));
    dispatch(
      notificationSuccess(
        `Xin chào ${response.infoUser.name}, bạn đã đăng nhập thành công`
      )
    );
    localStorage.setItem("user", JSON.stringify(response.infoUser));
    localStorage.setItem("auth-token", token);
  } catch (error) {
    const message = error.response.data.errors;
    dispatch(user_login_fail(message));
  }
};

export const logout = () => {
  localStorage.clear();
};
