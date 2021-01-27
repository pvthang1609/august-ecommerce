import React from "react";
import shoppingCart from "assets/image/step-progress-bar/001-shopping-cart.svg";
import trolley from "assets/image/step-progress-bar/002-trolley.svg";
import dollar from "assets/image/step-progress-bar/003-dollar.svg";
import checkmark from "assets/image/step-progress-bar/004-checkmark.svg";
import "./step-progress-bar.scss";
// import PropTypes from "prop-types";

// StepProgressBar.propTypes = {};

function StepProgressBar() {
  return (
    <div className="step-progress-bar">
      <ul className="step-progress-bar__list">
        <li className="step-progress-bar__item">
          <div className="step-progress-bar__item-inner">
            <div className="step-progress-bar__icon">
              <img src={shoppingCart} alt="" />
            </div>
            <div className="step-progress-bar__status">
              <i className="fa fa-check" aria-hidden="true"></i>
              {/* <i className="fa fa-times" aria-hidden="true"></i> */}
            </div>
            <div>
              <p className="step-progress-bar__tittle">1. Kiểm tra giỏ hàng</p>
            </div>
          </div>
        </li>
        <li className="step-progress-bar__item">
          <div className="step-progress-bar__item-inner">
            <div className="step-progress-bar__icon">
              <img src={trolley} alt="" />
            </div>
            <div className="step-progress-bar__status">
              {/* <i className="fa fa-check" aria-hidden="true"></i> */}
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <div>
              <p className="step-progress-bar__tittle">2. Thông tin mua hàng</p>
            </div>
          </div>
        </li>
        <li className="step-progress-bar__item">
          <div className="step-progress-bar__item-inner">
            <div className="step-progress-bar__icon">
              <img src={dollar} alt="" />
            </div>
            <div className="step-progress-bar__status">
              {/* <i className="fa fa-check" aria-hidden="true"></i> */}
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <div>
              <p className="step-progress-bar__tittle">
                3. Hình thức thanh toán
              </p>
            </div>
          </div>
        </li>
        <li className="step-progress-bar__item">
          <div className="step-progress-bar__item-inner">
            <div className="step-progress-bar__icon">
              <img src={checkmark} alt="" />
            </div>
            <div className="step-progress-bar__status">
              {/* <i className="fa fa-check" aria-hidden="true"></i> */}
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <div>
              <p className="step-progress-bar__tittle">
                4. Kiểm tra và xác nhận
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default StepProgressBar;
