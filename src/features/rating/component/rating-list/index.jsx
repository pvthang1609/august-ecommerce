import React from "react";
import "./rating-list.scss";
// import PropTypes from "prop-types";

RatingList.propTypes = {};

function RatingList() {
  return (
    <div className="rating-list">
      <div className="header">Rating overview</div>
      <div className="main">
        <div className="overall-rating"></div>
        <div className="detail-rating">
          <div className="detail-rating__item">
            <div className="percent">
              <div className="percent--active 5star"></div>
            </div>
            <div className="number">25</div>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="content__item"></div>
      </div>
    </div>
  );
}

export default RatingList;
