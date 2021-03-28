import { createSlice } from "@reduxjs/toolkit";

const initRating = {
  overallRating: 0,
  ratingList: [],
  loading: false,
};

const ratingSlice = createSlice({
  name: "rating",
  initialState: initRating,
  reducers: {
    //get
    rating_get_request: (state) => {
      state.loading = true;
    },
    rating_get_success: (state, action) => {
      state.ratingList = action.payload.ratingList;
      state.overallRating = action.payload.overallRating;
      state.loading = false;
    },
    rating_get_fail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //create
    rating_create_request: (state) => {
      state.loading = true;
    },
    rating_create_success: (state) => {
      state.loading = false;
    },
    rating_create_fail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

const { actions, reducer } = ratingSlice;

export const {
  rating_get_request,
  rating_get_success,
  rating_get_fail,
  rating_create_request,
  rating_create_success,
  rating_create_fail,
} = actions;

export default reducer;
