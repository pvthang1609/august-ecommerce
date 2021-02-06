import React from "react";
import classNames from "classnames";
import shoppingCart from "assets/image/step-progress-bar/001-shopping-cart.svg";
import trolley from "assets/image/step-progress-bar/002-trolley.svg";
import dollar from "assets/image/step-progress-bar/003-dollar.svg";
import checkmark from "assets/image/step-progress-bar/004-checkmark.svg";
import "./step-progress-bar.scss";
import PropTypes from "prop-types";

StepProgressBar.propTypes = {
  step: PropTypes.number,
};

function StepProgressBar({ step = 0 }) {
  return (
    <div className="row">
      <div className="col l-10 l-o-1">
        <div className="step-progress-bar">
          <ul className="step-progress-bar__list">
            <li className="step-progress-bar__item">
              <div className="step-progress-bar__item-inner">
                <div
                  className={classNames("step-progress-bar__icon", {
                    "step-progress-bar__icon--done": step >= 0,
                  })}
                >
                  <img src={shoppingCart} alt="" />
                </div>
                <div
                  className={classNames("step-progress-bar__status", {
                    "step-progress-bar__status--done": step >= 0,
                  })}
                >
                  {step === 0 ? (
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                  ) : step > 0 ? (
                    <i className="fa fa-check" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-times" aria-hidden="true"></i>
                  )}
                </div>
                <div>
                  <p
                    className={classNames("step-progress-bar__tittle", {
                      "step-progress-bar__tittle--done": step >= 0,
                    })}
                  >
                    1. Kiểm tra giỏ hàng
                  </p>
                </div>
              </div>
            </li>
            <li className="step-progress-bar__item">
              <div className="step-progress-bar__item-inner">
                <div
                  className={classNames("step-progress-bar__icon", {
                    "step-progress-bar__icon--done": step >= 1,
                  })}
                >
                  <img src={trolley} alt="" />
                </div>
                <div
                  className={classNames("step-progress-bar__status", {
                    "step-progress-bar__status--done": step >= 1,
                  })}
                >
                  {step === 1 ? (
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                  ) : step > 1 ? (
                    <i className="fa fa-check" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-times" aria-hidden="true"></i>
                  )}
                </div>
                <div>
                  <p
                    className={classNames("step-progress-bar__tittle", {
                      "step-progress-bar__tittle--done": step >= 1,
                    })}
                  >
                    2. Thêm địa chỉ giao hàng
                  </p>
                </div>
              </div>
            </li>
            <li className="step-progress-bar__item">
              <div className="step-progress-bar__item-inner">
                <div
                  className={classNames("step-progress-bar__icon", {
                    "step-progress-bar__icon--done": step >= 2,
                  })}
                >
                  <img src={dollar} alt="" />
                </div>
                <div
                  className={classNames("step-progress-bar__status", {
                    "step-progress-bar__status--done": step >= 2,
                  })}
                >
                  {step === 2 ? (
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                  ) : step > 2 ? (
                    <i className="fa fa-check" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-times" aria-hidden="true"></i>
                  )}
                </div>
                <div>
                  <p
                    className={classNames("step-progress-bar__tittle", {
                      "step-progress-bar__tittle--done": step >= 2,
                    })}
                  >
                    3. Hình thức thanh toán
                  </p>
                </div>
              </div>
            </li>
            <li className="step-progress-bar__item">
              <div className="step-progress-bar__item-inner">
                <div
                  className={classNames("step-progress-bar__icon", {
                    "step-progress-bar__icon--done": step >= 3,
                  })}
                >
                  <img src={checkmark} alt="" />
                </div>
                <div
                  className={classNames("step-progress-bar__status", {
                    "step-progress-bar__status--done": step >= 3,
                  })}
                >
                  {step === 3 ? (
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                  ) : step > 3 ? (
                    <i className="fa fa-check" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-times" aria-hidden="true"></i>
                  )}
                </div>
                <div>
                  <p
                    className={classNames("step-progress-bar__tittle", {
                      "step-progress-bar__tittle--done": step >= 3,
                    })}
                  >
                    4. Kiểm tra và xác nhận
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="step-progress-bar__container-status-bar">
            <div
              className="step-progress-bar__status-bar"
              style={{ width: `${step * 33.33}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepProgressBar;
