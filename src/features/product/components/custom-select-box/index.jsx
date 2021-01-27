import React, { useState, useEffect, createRef } from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import CaretDown from "assets/image/caret-down.svg";
import "./custom-select-box.scss";

CustomSelectBox.propTypes = {
  display: PropTypes.string,
  list: PropTypes.array,
  width: PropTypes.number,
};

function CustomSelectBox(props) {
  const { display, list, width } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [displaySelect, setDisplaySelect] = useState(display);

  const selBoxRef = createRef();

  const history = useHistory();
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

  const getFilterUrl = (params) => {
    const filter = queryString.parse(params);
    const filterGender = filter.gender || gender;
    const filterType = filter.type || type;
    const filterCollections = filter.collections || collections;
    const filterBrand = filter.brand || brand;
    const filterSort = filter.sortOrder || sortOrder;
    const filterLimit = filter.limit || limit;
    return `?gender=${filterGender}&type=${filterType}&collections=${filterCollections}&brand=${filterBrand}&sortOrder=${filterSort}&limit=${filterLimit}`;
  };

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const func = (e) => {
      if (selBoxRef.current && !selBoxRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", func);
    return () => {
      document.removeEventListener("mousedown", func);
    };
  }, [isOpen]);

  const handleSubListClick = (e) => {
    const url = getFilterUrl(e.target.getAttribute("data-url"));
    history.push(`${url}`);
    setDisplaySelect(e.target.getAttribute("data-display"));
    setIsOpen(false);
  };

  return (
    <div className="custom-selBox" ref={selBoxRef}>
      <div
        className="custom-selBox__selected"
        onClick={handleOpenClick}
        style={width ? { width: width } : null}
      >
        <p>{displaySelect}</p>
        <img
          src={CaretDown}
          alt="down"
          style={isOpen ? { transform: "rotate(180deg)" } : null}
        />
      </div>
      {isOpen && (
        <div
          className="custom-selBox__sub-list"
          style={width ? { width: width } : null}
        >
          {list.map((item, index) => {
            const { name, url } = item;
            return (
              <div
                className="sub-list__item"
                data-display={name}
                data-url={url}
                onClick={handleSubListClick}
                key={index}
              >
                {name}
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CustomSelectBox;
