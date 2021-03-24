import { createSlice } from "@reduxjs/toolkit";

const initRating = {
    overallRating = 0,
    ratingList = [],
    loading: false,
}

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
            state.overlallRating = action.payload.overallRating;
            state.loading = false;
        },
        rating_get_fail: (state, action) => {
            state.error = action.payload
            state.loading = false;
        },
    }
})

const { actions, reducer } = ratingSlice;

export const {
    rating_get_request,
    rating_get_success,
    rating_get_fail,
} = actions;

export default reducer;