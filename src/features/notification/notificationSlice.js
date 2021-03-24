import { createSlice } from "@reduxjs/toolkit";

const initNotification = {
  notifications: [],
  loading: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initNotification,
  reducers: {
    notification_add_request: (state) => {
      state.loading = true;
    },
    notification_add_success: (state, action) => {
      state.notifications.unshift(action.payload);
      state.loading = false;
    },
    notification_remove_success: (state, action) => {
      state.notifications.splice(action.payload, 1);
      state.loading = false;
    },
  },
});
const { actions, reducer } = notificationSlice;

export const {
  notification_add_request,
  notification_add_success,
  notification_remove_success,
} = actions;

export default reducer;
