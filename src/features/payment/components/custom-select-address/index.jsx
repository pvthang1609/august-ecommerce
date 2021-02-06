import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CaretDown from "assets/image/caret-down.svg";
import provinceApi from "api/provinceApi";
import "./custom-sel-address.scss";

CusSelectAdd.propTypes = {
  display: PropTypes.string,
  params: PropTypes.string,
  form: PropTypes.object,
  field: PropTypes.object,
  name: PropTypes.string,
  disable: PropTypes.bool,
};

function CusSelectAdd(props) {
  const { display, params, form, field, disable } = props;
  const { setFieldValue } = form;
  const { name } = field;

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();

  useEffect(async () => {
    if (name !== "province") {
      if (params === `${name}/`) {
        return;
      }
    }
    try {
      const { results } = await provinceApi.get(params);
      setData(results);
    } catch (error) {
      console.log(error);
    }
  }, [params]);

  const handleClick = () => {
    if (disable) {
      return;
    }
    setIsOpen(!isOpen);
  };

  const handleSubListClick = (e) => {
    setFieldValue(name, {
      id: e.target.getAttribute("data-id"),
      name: e.target.getAttribute("data-display"),
    });
    switch (name) {
      case "province":
        setFieldValue("district", "");
        setFieldValue("ward", "");
        break;
      case "district":
        setFieldValue("ward", "");
        break;
    }
    setIsOpen(false);
  };

  return (
    <div className="custom-sel-address">
      <div className="custom-sel-address__selected" onClick={handleClick}>
        <p>{display}</p>
        <img
          src={CaretDown}
          alt="down"
          style={isOpen ? { transform: "rotate(180deg)" } : null}
        />
      </div>
      {isOpen && (
        <div className="custom-sel-address__sub-list">
          {data.map((item, index) => {
            return (
              <div
                className="custom-sel-address__sub-list--item"
                data-display={item[`${name}_name`]}
                data-id={item[`${name}_id`]}
                key={index}
                onClick={handleSubListClick}
              >
                {item[`${name}_name`]}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CusSelectAdd;
