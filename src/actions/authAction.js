import userApi from "api/userApi";
import {
  notificationSuccessLogin,
  notificationFail,
} from "actions/notificationAction";

import { user_request, user_success } from "features/authentication/userSlice";

export const login = (email, password) => async (dispatch) => {
  dispatch(user_request());
  try {
    const response = await userApi.login({ email: email, password: password });
    const { token } = response;
    dispatch(user_success(response));
    dispatch(notificationSuccessLogin(response.infoUser.name));
    localStorage.setItem("info-user", JSON.stringify(response.infoUser));
    localStorage.setItem("auth-token", token);
  } catch (err) {
    const message = err.response.data.errors;
    dispatch(notificationFail(message));
  }
};

export const logout = () => {
  localStorage.clear();
};
