import React from "react";
import "./nav-bar.scss";

import { Link, NavLink } from "react-router-dom";

export default function Navbar({ list }) {
  return (
    <ul className="navBar__list">
      {list.map((item, index) => {
        return item.dropDown ? (
          <li className="navBar__item" key={index}>
            <NavLink
              to={item.link}
              exact={item.exact}
              activeClassName="link-active"
            >
              {item.name}{" "}
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </NavLink>
            <ul className="navBar__listSub">
              {item.dropDown.map((itemSub, index) => {
                return (
                  <li className="navBar__itemSub" key={index}>
                    <Link to={itemSub.link}>{itemSub.name}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ) : (
          <li className="navBar__item" key={index}>
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
  );
}
