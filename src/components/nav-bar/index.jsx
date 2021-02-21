import React from "react";
import PropTypes from "prop-types";

import { Link, NavLink } from "react-router-dom";

import "./nav-bar.scss";

Navbar.propTypes = {
  list: PropTypes.array,
};

function Navbar(props) {
  const { list } = props;

  return (
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
              <ul className="nav-bar__list-sub">
                {item.dropDown.map((itemSub, index) => {
                  return (
                    <li className="nav-bar__item-sub" key={index}>
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
  );
}

export default Navbar;
