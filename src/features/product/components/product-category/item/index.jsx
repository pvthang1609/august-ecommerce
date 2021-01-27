import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import "./item.scss";
import classNames from "classnames";

Item.propTypes = {
  name: PropTypes.string,
  subList: PropTypes.array,
};

function Item(props) {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(true);

  const { name, subList } = props;

  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const {
    gender = "all",
    type = "all",
    collections = "all",
    brand = "all",
    sortOrder = "newest",
    limit = 8,
  } = parsed;

  const findToUrl = (value) => {
    const obj = queryString.parse(value);
    const arr = Object.values(obj);
    if (Object.values(parsed).find((value) => value === arr[0])) {
      return true;
    }
    return false;
  };

  const getFilterUrl = (filter) => {
    const filterGender = filter.gender || gender;
    const filterType = filter.type || type;
    const filterCollections = filter.collections || collections;
    const filterBrand = filter.brand || brand;
    const filterSort = filter.sortOrder || sortOrder;
    const filterLimit = filter.limit || limit;
    return `?gender=${filterGender}&type=${filterType}&collections=${filterCollections}&brand=${filterBrand}&sortOrder=${filterSort}&limit=${filterLimit}`;
  };

  const removeFilterUrl = (url) => {
    const filter = queryString.parse(url);

    const filterType = filter.type ? "all" : type;
    const filterCollections = filter.collections ? "all" : collections;
    const filterBrand = filter.brand ? "all" : brand;
    history.push(
      `?gender=${gender}&type=${filterType}&collections=${filterCollections}&brand=${filterBrand}&sortOrder=${sortOrder}&limit=${limit}`
    );
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="category__item">
      <p onClick={handleClick}>
        {name}
        <i
          className="fa fa-caret-down"
          aria-hidden="true"
          style={isOpen ? { transform: "rotate(180deg)" } : null}
        ></i>
      </p>

      {isOpen && (
        <ul className="category__subList">
          {subList.map((subItem, index) => {
            const value = queryString.parse(subItem.url);
            return (
              <li
                key={index}
                className={classNames("category__subList-item", {
                  "category__subList-item--active": findToUrl(subItem.url),
                })}
              >
                <Link to={getFilterUrl(value)}>{subItem.name}</Link>
                {findToUrl(subItem.url) && (
                  <button onClick={() => removeFilterUrl(subItem.url)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default Item;
