import { createSlice } from "@reduxjs/toolkit";

const initNotification = [];

const notificationSlice = createSlice({
  name: "notification",
  initialState: initNotification,
  reducers: {
    add_notification: (state, action) => {
      state.push(action.payload);
    },
    remove_notification: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});
const { actions, reducer } = notificationSlice;

export const { add_notification, remove_notification } = actions;

export default reducer;
