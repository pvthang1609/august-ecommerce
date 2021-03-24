import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./bread-crumbs.scss";

BreadCrumbs.propTypes = {
  list: PropTypes.array,
};

function BreadCrumbs(props) {
  const { list } = props;
  return (
    <div className="bread-crumb">
      <Link className="bread-crumb__item" to="/">
        <i className="fa fa-home" aria-hidden="true"></i>Home
      </Link>
      {list.map((item, index) => {
        return (
          <Link className="bread-crumb__item" to={item.url} key={index}>
            <i className="fa fa-caret-right" aria-hidden="true"></i>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export default BreadCrumbs;
