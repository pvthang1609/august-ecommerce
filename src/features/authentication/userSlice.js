import { createSlice } from "@reduxjs/toolkit";

const initUser = {
  infoUser: localStorage.getItem("info-user")
    ? JSON.parse(localStorage.getItem("info-user"))
    : "",
  token: localStorage.getItem("auth-token")
    ? localStorage.getItem("auth-token")
    : "",
  loading: false,
};

const userSlice = createSlice({
  initialState: initUser,
  name: "user",
  reducers: {
    user_request: (state) => {
      state.loading = true;
    },
    user_success: (state, action) => {
      state.infoUser = action.payload.infoUser;
      state.token = action.payload.token;
      state.loading = false;
    },
  },
});
const { actions, reducer } = userSlice;

export const { user_request, user_success, user_fail } = actions;

export default reducer;
