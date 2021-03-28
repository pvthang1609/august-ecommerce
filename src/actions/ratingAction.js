import ratingApi from "api/ratingApi";
import {
  rating_get_request,
  rating_get_success,
  rating_get_fail,
  rating_create_request,
  rating_create_success,
  rating_create_fail,
} from "features/rating/ratingSlice";
import userApi from "api/userApi";

import { notificationSuccess } from "actions/notificationAction";

//
const getMoreInfoUsers = async (array) => {
  if (array) {
    const arr = [];
    array.forEach((item) => {
      if (!arr.includes(item.id_user)) {
        arr.push(item.id_user);
      }
    });
    const idUsers = await userApi.getUserByIds({ ...arr });
    return array.map((item) => {
      const user = idUsers.find((e) => e.id === item.id_user);
      return {
        comment: item.comment,
        id_product: item.id_product,
        user: user,
        star: item.star,
        timeInit: item.timeInit,
      };
    });
  }
};

export const getListRating = (id) => async (dispatch) => {
  dispatch(rating_get_request());
  try {
    const response = await ratingApi.get(id);
    const ratingList = await getMoreInfoUsers(response.ratingList);
    dispatch(
      rating_get_success({
        overallRating: response.overallRating,
        ratingList: ratingList,
      })
    );
  } catch (error) {
    dispatch(rating_get_fail(error.message));
  }
};

export const createRating = (data) => async (dispatch) => {
  dispatch(rating_create_request());
  try {
    await ratingApi.post(data);
    dispatch(rating_create_success());
    dispatch(notificationSuccess("Cám ơn về những đánh giá của bạn."));
  } catch (error) {
    dispatch(rating_create_fail(error.message));
  }
};
