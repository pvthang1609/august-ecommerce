import { logout } from "actions/authAction";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import "./link-top.scss";

export default function LinkTop() {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const { infoUser } = useSelector((state) => state.authentication);

  const { listCart } = cart;

  const handleLogoutClick = () => {
    logout();
    history.go(0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(listCart));
  }, [listCart]);

  return (
    <div className="header__top">
      <div className="grid wide">
        <div className="row">
          <div className="col l-8 l-o-4">
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
                {infoUser ? (
                  <Link
                    className="header__top-link"
                    to="#"
                    onClick={handleLogoutClick}
                  >
                    <i className="fa fa-user" aria-hidden="true"></i>
                    {infoUser.name}
                  </Link>
                ) : (
                  <Link className="header__top-link" to="/auth/login">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    Đăng nhập
                  </Link>
                )}
              </li>
              <li className="header__top-item">
                <Link className="header__top-link" to="/payment/cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  Giỏ hàng (<span>{listCart ? listCart.length : 0}</span>)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
