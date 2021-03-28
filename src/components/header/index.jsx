import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

import { Logo, Navbar, SearchBar } from "assets/import";
import { NAV_MAIN_LIST } from "assets/CONSTANTS";
import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "actions/authAction";

Header.propTypes = {};

function Header() {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.authentication);

  const [scroll, setScroll] = useState(window.scrollY);
  useEffect(() => {
    const scroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  const handleLogoutClick = () => {
    logout();
    history.go(0);
  };
  return (
    <div className={`header${scroll > 0 ? " header--sticky" : ""}`}>
      <div className="grid wide">
        <div className="row">
          <div className="col l-2">
            <Logo size={window.scrollY > 0 ? 4 : 5} />
          </div>
          <div className="col l-5">
            <Navbar list={NAV_MAIN_LIST} />
          </div>
          <div className="col l-3">
            <SearchBar />
          </div>
          <div className="col l-2">
            <div className="header-user">
              <div className="user-item">
                <Link to="#">
                  <i className="fa fa-bell" aria-hidden="true"></i>
                </Link>
              </div>
              <div className="user-item">
                <Link to="/cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </Link>
                {cart.length !== 0 && (
                  <div className="number-notifi">
                    {cart.length > 9 ? "9+" : cart.length}
                  </div>
                )}
              </div>
              <div className="user-item user-info">
                <Link to={!user ? "/auth/login" : "#"}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                </Link>
                {user ? <span>{user.name}</span> : <span>Login</span>}
                <div className="user-info__sub">
                  <ul>
                    <li>
                      <i className="fa fa-cog" aria-hidden="true"></i>
                      Cài đặt
                    </li>
                    <li onClick={handleLogoutClick}>
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
