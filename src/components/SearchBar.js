import React, { createRef, useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import productApi from "api/productApi";
import { convertPrice } from "custom-hooks/globalFunc";
import { notificationFail } from "actions/notificationAction";

import { SearchIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import useOutsideClick from "custom-hooks/useOutsideClick";

export default function SearchBar() {
  const location = useLocation();
  const dispatch = useDispatch();

  const inputRef = createRef();
  const searchModalRef = createRef();

  useOutsideClick(searchModalRef, () => setOpen(false));

  const [value, setValue] = useState("");
  const [data, setData] = useState({ queryProducts: [] });
  const [open, setOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

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

  const handleClearClick = () => {
    setValue("");
  };

  return (
    <div className="static md:relative">
      <div
        className={`flex items-center transition border-2 bg-gray-50 border-gray-100 rounded-full dark:bg-gray-800 dark:border-gray-600 ${
          isFocus && "border-red-400"
        }`}
      >
        <SearchIcon
          className={`h-4 w-4 ml-2 my-2 ${loading && "animate-bounce"}`}
        />
        <input
          type="text"
          placeholder="Tìm kiếm"
          autoComplete="off"
          onChange={handleChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          ref={inputRef}
          className="focus:outline-none px-2 mr-2 text-sm bg-transparent"
        />
        <button onClick={handleClearClick}>
          <XCircleIcon className="h-4 w-4 mx-2 my-2" />
        </button>
      </div>
      {open && (
        <div
          ref={searchModalRef}
          className="absolute bg-white top-16 md:top-10 left-0 w-screen md:w-80 p-2 rounded-lg z-50 shadow"
        >
          {data.queryProducts.length !== 0 ? (
            data.queryProducts.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-gray-100 mb-1 overflow-hidden rounded-lg"
                >
                  <div className="w-9/12 p-2">
                    <Link
                      to={`/product/${item._id}`}
                      className="capitalize font-semibold truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm">
                      Giá:
                      <span className="text-red-500">{` ${convertPrice(
                        item.price
                      )}đ`}</span>
                    </p>
                  </div>
                  <div className="w-3/12">
                    <img src={item.img[0]} alt="none" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-red-500 text-center">Không có kết quả</div>
          )}
        </div>
      )}
    </div>
  );
}
