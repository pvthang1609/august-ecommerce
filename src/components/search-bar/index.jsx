import React, { createRef, useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import productApi from "api/productApi";
import { convertPrice } from "custom-hooks/globalFunc";
import { notificationFail } from "actions/notificationAction";

import "./search-bar.scss";

export default function SearchBar() {
  const location = useLocation();
  const dispatch = useDispatch();

  const inputRef = createRef();
  const searchBar = createRef();

  const [value, setValue] = useState("");
  const [data, setData] = useState({ queryProducts: [] });
  const [open, setOpen] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    inputRef.current.value = "";
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (inputRef.current.value !== "") {
      const func = setTimeout(() => {
        const feetData = async () => {
          setloading(true);
          try {
            const dataApi = await productApi.get({ name: value });
            setData(dataApi);
            setOpen(true);
            setloading(false);
          } catch (err) {
            dispatch(notificationFail(err.message));
            setloading(false);
          }
        };
        feetData();
      }, 500);
      return () => {
        clearTimeout(func);
      };
    }
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setOpen(false);
    }
  };

  return (
    <div className="search-bar" ref={searchBar}>
      <div className="search-bar__input">
        {loading ? (
          <i className="fa fa-spinner" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-search" aria-hidden="true"></i>
        )}
        <input
          type="text"
          placeholder="Tìm kiếm"
          autoComplete="off"
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
      {open && data.queryProducts.length !== 0 ? (
        <div className="search-bar__result-block">
          {data.queryProducts.map((item, index) => {
            return (
              <div key={index} className="grid">
                <div className="row result-block__item">
                  <div className="col l-9">
                    <Link
                      to={`/product/${item._id}`}
                      className="result-block__name"
                    >
                      {item.name}
                    </Link>
                    <p className="result-block__desc">{item.desc}</p>
                    <p className="result-block__price">{`Giá: ${convertPrice(
                      item.price
                    )}đ`}</p>
                  </div>
                  <div className="col l-3">
                    <Link to={`/product/${item._id}`}>
                      <img
                        src={item.img[0]}
                        alt="none"
                        style={{ borderRadius: "0.3rem" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : open ? (
        <div className="search-bar__result-block">Không có kết quả</div>
      ) : null}
    </div>
  );
}
