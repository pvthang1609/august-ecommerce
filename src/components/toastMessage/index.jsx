import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./toast-message.scss";

ToastMessage.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
};

export default function ToastMessage({ status, title }) {
  const icon = {
    success: <i className="fa fa-check-circle" aria-hidden="true"></i>,
    fail: <i className="fa fa-exclamation-circle" aria-hidden="true"></i>,
  };
  return (
    <div
      className={classnames("toast-message", {
        "toast-message--success": status === "success",
        "toast-message--fail": status === "fail",
      })}
    >
      <div className="toast-message__icon">{icon[status]}</div>
      <div className="toast-message__message">
        <div className="message__status">{status}</div>
        <div className="message__title">{title}</div>
      </div>
      <div className="toast-message__btn">
        <i className="fa fa-times-circle" aria-hidden="true"></i>
      </div>
    </div>
  );
}
