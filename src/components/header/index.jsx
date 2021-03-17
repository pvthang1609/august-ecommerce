import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

import { Logo, Navbar, SearchBar } from "assets/import";
import { NAV_MAIN_LIST } from "assets/CONSTANTS";
import "./header.scss";
import { Link } from "react-router-dom";

Header.propTypes = {};

function Header() {
  const [scroll, setScroll] = useState(window.scrollY);
  useEffect(() => {
    const scroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <div className={`header${scroll > 0 ? " header--sticky" : ""}`}>
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <Logo size={window.scrollY > 0 ? 4 : 5} />
          </div>
          <div className="col l-5">
            <Navbar list={NAV_MAIN_LIST} />
          </div>
          <div className="col l-3">
            <SearchBar />
          </div>
          <div className="col l-1">
            <div className="header__user">
              <Link to="/payment/cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
              <Link to="#">
                <i className="fa fa-user" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
