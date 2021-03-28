import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./rating-list.scss";
import PropTypes from "prop-types";
import { getListRating } from "actions/ratingAction";
import useStar from "custom-hooks/useStar";
import man from "assets/image/menu-admin/man.svg";
import { getDateByDatestring } from "custom-hooks/globalFunc";
import usePercent from "custom-hooks/usePercent";
import RatingForm from "../rating-form";

RatingList.propTypes = {
  productId: PropTypes.string,
};

function RatingList(props) {
  const { productId } = props;

  const { overallRating, ratingList } = useSelector((state) => state.rating);

  const star = useStar(overallRating);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListRating(productId));
  }, [productId]);

  const handleReportClick = () => {
    alert(
      "Tính năng này hiện đang trong quá trình phát triển, vui lòng thử lại sau"
    );
  };
  const [five, four, three, two, one] = usePercent(ratingList);
  return (
    <div className="rating-list">
      <div className="rating-list__header">
        <h3>Đánh giá và nhận xét</h3>
      </div>
      <div className="rating-list__main">
        <div className="overall-rating">
          <p className="number">{overallRating ? overallRating : 0}</p>
          <p className="star">{star}</p>
          <p className="comment">{`${ratingList.length} nhận xét.`}</p>
        </div>
        <div className="detail-rating">
          <div className="detail-rating__item">
            <div className="percent">
              <div
                className="percent--active"
                style={{ width: `${five.percent}%` }}
              ></div>
            </div>
            <div className="number">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <span>{five.number}</span>
            </div>
          </div>
          <div className="detail-rating__item">
            <div className="percent">
              <div
                className="percent--active"
                style={{ width: `${four.percent}%` }}
              ></div>
            </div>
            <div className="number">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <span>{four.number}</span>
            </div>
          </div>
          <div className="detail-rating__item">
            <div className="percent">
              <div
                className="percent--active"
                style={{ width: `${three.percent}%` }}
              ></div>
            </div>
            <div className="number">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <span>{three.number}</span>
            </div>
          </div>
          <div className="detail-rating__item">
            <div className="percent">
              <div
                className="percent--active"
                style={{ width: `${two.percent}%` }}
              ></div>
            </div>
            <div className="number">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <span>{two.number}</span>
            </div>
          </div>
          <div className="detail-rating__item">
            <div className="percent">
              <div
                className="percent--active"
                style={{ width: `${one.percent}%` }}
              ></div>
            </div>
            <div className="number">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <span>{one.number}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rating-list__review">
        {ratingList.length !== 0 ? (
          ratingList.map((item, index) => {
            return (
              <div className="review__item" key={index}>
                <div className="info">
                  <div className="info__avatar">
                    <img src={man} alt="man" />
                  </div>
                  <div className="info__decs">
                    <p className="time">{getDateByDatestring(item.timeInit)}</p>
                    <p className="name">{item.user.name}</p>
                    <button className="btn" onClick={handleReportClick}>
                      Report
                    </button>
                  </div>
                </div>
                <div className="content">
                  <div className="content__rate">{useStar(item.star)}</div>
                  <div className="content__commnent">{item.comment}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="review__item nothing">
            <p>Chưa có đánh giá về sản phẩm này.</p>
          </div>
        )}
      </div>
      <RatingForm {...props} />
    </div>
  );
}

export default RatingList;
