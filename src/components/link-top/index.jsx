import React from "react";
import { Link } from "react-router-dom";

import "./link-top.scss";

export default function LinkTop() {
  return (
    <div className="header__top">
      <div className="container">
        <ul className="header__top-list">
          <li className="header__top-item">
            <Link className="header__top-link" to="#">
              <i className="fa fa-file-text" aria-hidden="true"></i>
              Tra cứu đơn hàng
            </Link>
          </li>
          <li className="header__top-item">
            <Link className="header__top-link" to="#">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              Tìm cửa hàng
            </Link>
          </li>
          <li className="header__top-item">
            <Link className="header__top-link" to="/auth/login">
              <i className="fa fa-user" aria-hidden="true"></i>
              Đăng nhập
            </Link>
          </li>
          <li className="header__top-item">
            <Link className="header__top-link" to="#">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Giỏ hàng (<span>0</span>)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
