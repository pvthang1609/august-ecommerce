import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";

import { remove_cart } from "./cartSlice";
import { convertPrice } from "custom-hooks/globalFunc";
import { Link, useHistory } from "react-router-dom";
import box from "assets/image/box.svg";
import classNames from "classnames";
import freeDelivery from "assets/image/free-delivery.svg";
import discount from "assets/image/discount.svg";
import { editToCart, editToInvoice } from "actions/paymentAction";
import { nanoid } from "nanoid";

export default function CartPage() {
  const [no] = useState(nanoid);
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { listCart } = cart;

  const sum = (listCart, func) => {
    if (listCart.length !== 0) {
      let sum = 0;
      listCart.forEach((item) => (sum = sum + item.price * item.quantity));
      return `${func(sum * 1000)}đ`;
    }
    return "0đ";
  };

  const removeItem = (index) => {
    dispatch(remove_cart(index));
  };

  const decrementItem = (productId, size, index) => {
    dispatch(editToCart(productId, 1, size, index, "decrement"));
  };

  const incrementItem = (productId, size, index) => {
    dispatch(editToCart(productId, 1, size, index, "increment"));
  };

  const handlerNextClick = () => {
    dispatch(editToInvoice({ no: no, order: listCart, status: "waiting" }));
    history.push("shipping");
  };

  return (
    <div className="cart">
      <div className="row no-gutters cart-header">
        <div className="col l-1 m-1 s-1">
          <div className="heading__title heading__title--id">STT</div>
        </div>
        <div className="col l-4 m-4 s-4">
          <div className="heading__title heading__title--name">Sản Phẩm</div>
        </div>
        <div className="col l-3 l-o-1 m-3 s-3">
          <div className="heading__title heading__title--quantity">
            Số Lượng
          </div>
        </div>
        <div className="col l-2 m-2 s-2">
          <div className="heading__title heading__title--totalPrice">
            Tổng giá
          </div>
        </div>
      </div>
      {listCart.length !== 0 ? (
        listCart.map((item, index) => {
          return (
            <div className="row no-gutters cart-content" key={index}>
              <div className="col l-1 m-1 s-1">
                <div className="item__content item__content--id">
                  {index + 1}
                </div>
              </div>
              <div className="col l-1 m-1 s-1">
                <img
                  className="item__content item__content--image"
                  src={item.img}
                  alt="none"
                />
              </div>
              <div className="col l-3 m-3 s-3">
                <div className="item__content item__content--name">
                  <Link to={`/product/${item.id}`}>{item.name}</Link>
                  <p>{`Size: ${item.size}`}</p>
                  <p>
                    Giá: <span>{`${convertPrice(item.price * 1000)}đ`}</span>
                  </p>
                </div>
              </div>
              <div className="col l-3 l-o-1 m-3 s-3">
                <div className="item__content item__content--quantity">
                  <button
                    className="btn decrement-btn"
                    onClick={() => decrementItem(item.id, item.size, index)}
                  >
                    -
                  </button>
                  <div>{item.quantity}</div>
                  <button
                    className="btn increment-btn"
                    onClick={() => incrementItem(item.id, item.size, index)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col l-2 m-2 s-2">
                <div className="item__content item__content--totalPrice">{`${convertPrice(
                  item.quantity * item.price * 1000
                )}đ`}</div>
              </div>
              <div className="col l-1 m-1 s-1">
                <button
                  onClick={() => removeItem(index)}
                  className="btn remove-btn"
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="row cart-content--empty">
          <div className="col l-2 l-o-5">
            <img src={box} alt="" />
            <p>Không có gì trong giỏ.!</p>
          </div>
        </div>
      )}
      <div className="row no-gutters cart-footer">
        <div className="col l-5">
          <input
            className="cart-footer__discount"
            type="text"
            placeholder="Mã giảm giá"
          />
          <button className="btn apply-btn">Áp dụng</button>
        </div>
        <div className="col l-1">
          <div className="cart-footer__discount-tag">
            <img src={freeDelivery} alt="" title="Miễn phí giao hàng." />
            <img src={discount} alt="" title="Mã giảm giá" />
          </div>
        </div>
        <div className="col l-3">
          <div className="footer__title footer__title--order-price">
            Thành tiền
          </div>
        </div>
        <div className="col l-2">
          <div className="cart-footer__total">
            {listCart ? sum(listCart, convertPrice) : null}
          </div>
        </div>
        <div className="col l-1">
          <button
            className={classNames("btn next-btn", {
              "btn--disable": listCart.length === 0,
            })}
            disabled={listCart.length === 0}
            onClick={handlerNextClick}
          >
            Tiếp theo
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
