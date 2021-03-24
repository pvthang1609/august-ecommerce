import { createSlice } from "@reduxjs/toolkit";

const initAuth = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "",
  token: localStorage.getItem("auth-token")
    ? localStorage.getItem("auth-token")
    : "",
  loading: {
    login: false,
  },
};

const authSlice = createSlice({
  initialState: initAuth,
  name: "auth",
  reducers: {
    //login
    user_login_request: (state) => {
      state.loading.login = true;
    },
    user_login_success: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading.login = false;
    },
    user_login_fail: (state, action) => {
      state.error.login = action.payload;
      state.loading.login = false;
    },
  },
});
const { actions, reducer } = authSlice;

export const {
  user_login_request,
  user_login_success,
  user_login_fail,
} = actions;

export default reducer;
