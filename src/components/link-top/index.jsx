import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./link-top.scss";

export default function LinkTop() {
  const cart = useSelector(state => state.cart)

  const  { listCart } = cart

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
            <Link className="header__top-link" to="/payment/cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Giỏ hàng (<span>{listCart.length}</span>)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
