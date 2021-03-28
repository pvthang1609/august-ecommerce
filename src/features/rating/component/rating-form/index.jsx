import { FastField, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./rating-form.scss";
import PropTypes from "prop-types";
import { createRating } from "actions/ratingAction";
import { useHistory } from "react-router";
import { RatingSchema } from "app/yup.validation";

RatingForm.propTypes = {
  productId: PropTypes.string,
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
};

function RatingForm({ productId }) {
  const { user } = useSelector((state) => state.authentication);
  const history = useHistory();

  const dispatch = useDispatch();
  const initValues = {
    id_product: productId,
    star: 0,
    comment: "",
  };

  const handleSubmit = (value) => {
    if (user) {
      dispatch(createRating(value));
    } else {
      const cf = confirm(
        `Bạn cần đăng nhập để thực hiện chức năng này.
Nhấn OK để đến trang đăng nhập`
      );
      if (cf) {
        history.push("/auth/login");
      }
    }
  };

  return (
    <div className="rating-form">
      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={RatingSchema}
      >
        {(props) => {
          const { values, touched, errors } = props;
          return (
            <Form>
              <div className="rating-form__header">
                <h3>Đánh giá của bạn</h3>
                <div className="rating-form__star">
                  {touched.star && errors.star && (
                    <div className="error">
                      <i
                        className="fa fa-exclamation-circle"
                        aria-hidden="true"
                      ></i>
                    </div>
                  )}
                  <label htmlFor="onestar">
                    {values.star >= 1 ? (
                      <i className="fa fa-star" aria-hidden="true"></i>
                    ) : (
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    )}
                  </label>
                  <label htmlFor="twostar">
                    {values.star >= 2 ? (
                      <i className="fa fa-star" aria-hidden="true"></i>
                    ) : (
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    )}
                  </label>
                  <label htmlFor="threestar">
                    {values.star >= 3 ? (
                      <i className="fa fa-star" aria-hidden="true"></i>
                    ) : (
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    )}
                  </label>
                  <label htmlFor="fourstar">
                    {values.star >= 4 ? (
                      <i className="fa fa-star" aria-hidden="true"></i>
                    ) : (
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    )}
                  </label>
                  <label htmlFor="fivestar">
                    {values.star == 5 ? (
                      <i className="fa fa-star" aria-hidden="true"></i>
                    ) : (
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    )}
                  </label>
                </div>
              </div>

              <div style={{ display: "none" }}>
                <FastField type="radio" name="star" value={5} id="fivestar" />
                <FastField type="radio" name="star" value={4} id="fourstar" />
                <FastField type="radio" name="star" value={3} id="threestar" />
                <FastField type="radio" name="star" value={2} id="twostar" />
                <FastField type="radio" name="star" value={1} id="onestar" />
              </div>
              <div
                className="rating-form__comment"
                style={
                  touched.comment &&
                  errors.comment && { border: "0.1rem solid red" }
                }
              >
                <FastField
                  type="text"
                  name="comment"
                  placeholder="Vui lòng nhập đánh giá của bạn..."
                />
                {touched.comment && errors.comment && (
                  <div className="error">
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  </div>
                )}
              </div>
              <div className="rating-form__button">
                <button type="submit" className="btn btn--submit-rating">
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RatingForm;
