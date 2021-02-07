import React, { useRef, useState } from "react";
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
import discountApi from "api/discountApi";
import {
  notificationFail,
  notificationSuccess,
} from "actions/notificationAction";

export default function CartPage() {
  const [discountCode, setDiscountCode] = useState(null);
  const inputRef = useRef();
  const [no] = useState(nanoid);
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { listCart } = cart;

  const sum = (listCart) => {
    let sum = 0;
    listCart.forEach((item) => (sum = sum + item.price * item.quantity));
    return sum;
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

  const handleNextClick = () => {
    const discount = discountCode ? discountCode.code : null;
    dispatch(
      editToInvoice({
        no: no,
        order: listCart,
        status: "waiting",
        discount: discount,
      })
    );
    history.push("shipping");
  };

  const handleApplyClick = async () => {
    try {
      const response = await discountApi.get({ code: inputRef.current.value });
      setDiscountCode(response[0]);
      dispatch(
        notificationSuccess(
          `Đã áp dụng mã giảm giá ${response[0].code} vào đơn hàng`
        )
      );
    } catch (err) {
      const message = err.response.data.errors;
      dispatch(notificationFail(message));
    }
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
        <div className="col l-3 m-3 s-3">
          <div className="heading__title heading__title--quantity">
            Số Lượng
          </div>
        </div>
        <div className="col l-3 m-3 s-3">
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
                    Giá: <span>{`${convertPrice(item.price)}đ`}</span>
                  </p>
                </div>
              </div>
              <div className="col l-3 m-3 s-3">
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
              <div className="col l-3 m-3 s-3">
                <div className="item__content item__content--totalPrice">{`${convertPrice(
                  item.quantity * item.price
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
        <div className="col l-4">
          <input
            className="cart-footer__discount"
            type="text"
            placeholder="Mã giảm giá"
            ref={inputRef}
          />
          <button className="btn apply-btn" onClick={handleApplyClick}>
            Áp dụng
          </button>
        </div>
        <div className="col l-1">
          <div className="cart-footer__discount-tag">
            {sum(listCart) > 800 ? (
              <img src={freeDelivery} alt="" title="Miễn phí giao hàng." />
            ) : null}
            {discountCode && (
              <img src={discount} alt="" title={discountCode.code} />
            )}
          </div>
        </div>
        <div className="col l-3">
          <div className="footer__title footer__title--order-price">
            Thành tiền
          </div>
        </div>
        <div className="col l-3">
          <div className="cart-footer__total">
            {listCart && discountCode ? (
              <p>
                <span>{`${convertPrice(sum(listCart))}đ`}</span>
                <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                {`${convertPrice(
                  sum(listCart) - sum(listCart) * (discountCode.percent / 100)
                )}đ`}
              </p>
            ) : (
              <p>{`${convertPrice(sum(listCart))}đ`}</p>
            )}
          </div>
        </div>
        <div className="col l-1">
          <button
            className={classNames("btn next-btn", {
              "btn--disable": listCart.length === 0,
            })}
            disabled={listCart.length === 0}
            onClick={handleNextClick}
          >
            Tiếp theo
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
