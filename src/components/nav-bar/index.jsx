import React from "react";
import PropTypes from "prop-types";

Navbar.propTypes = {
  list: PropTypes.array,
};

import "./nav-bar.scss";

import { Link, NavLink } from "react-router-dom";

export default function Navbar({ list }) {
  return (
    <div className="col l-6">
      <div className="nav-bar">
        <ul className="nav-bar__list">
          {list.map((item, index) => {
            return item.dropDown ? (
              <li className="nav-bar__item" key={index}>
                <NavLink
                  to={item.link}
                  exact={item.exact}
                  activeClassName="link-active"
                >
                  {item.name}{" "}
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </NavLink>
                <ul className="nav-bar__listSub">
                  {item.dropDown.map((itemSub, index) => {
                    return (
                      <li className="nav-bar__itemSub" key={index}>
                        <Link to={itemSub.link}>{itemSub.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li className="nav-bar__item" key={index}>
                <NavLink
                  to={item.link}
                  exact={item.exact}
                  activeClassName="link-active"
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
