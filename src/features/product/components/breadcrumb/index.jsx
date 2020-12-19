import React from "react";
import PropTypes from "prop-types";

BreadCrumb.propTypes = {
  collection: PropTypes.string,
  classify: PropTypes.string,
  name: PropTypes.string,
};

import { Link } from "react-router-dom";

import "./breadcurmb.scss";

const getCollection = (collection) => {
  switch (collection) {
    case "man":
      return "Nam";
    case "woman":
      return "Nữ";
    case "sale":
      return "Giảm giá";
    case "hot":
      return "Yêu thích";
    case "new":
      return "Sản phẩm mới";
    case "new-arrivals":
      return "Xu hướng";
    default:
      return collection;
  }
};

const getClassify = (classify) => {
  switch (classify) {
    case "shoe":
      return "Giày";
    case "socks":
      return "Tất";
    case "jacket":
      return "Áo khoác";
    case "dress":
      return "Váy";
    case "tshirt":
      return "Áo phông";
    case "watch":
      return "Đồng hồ";
    default:
      return classify;
  }
};

export default function BreadCrumb({ collection, classify, name }) {
  return (
    <div className="bread-crumb">
      <div className="container bread-crumb">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true"></i>Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/">{getCollection(collection)}</Link>
          </li>
          <li>
            <Link to="/">{getClassify(classify)}</Link>
          </li>
          <li>{name}</li>
        </ul>
      </div>
    </div>
  );
}
