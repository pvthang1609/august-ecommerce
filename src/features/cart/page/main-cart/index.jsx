import { editToCart, removeToCart } from "actions/cartAction";
import {
  notificationFail,
  notificationSuccess,
} from "actions/notificationAction";
import { addInfoToOrder } from "actions/orderAction";
import discountApi from "api/discountApi";
import box from "assets/image/box.svg";
import discount from "assets/image/discount.svg";
import freeDelivery from "assets/image/free-delivery.svg";
import classNames from "classnames";
import { convertPrice, sum } from "custom-hooks/globalFunc";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./main-cart.scss";

export default function MainCart() {
  const [discountCode, setDiscountCode] = useState(null);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart } = useSelector((state) => state.cart);

  const removeItem = (index) => {
    dispatch(removeToCart(index));
  };

  const decrementItem = (productId, size, index) => {
    dispatch(editToCart(productId, 1, size, index, "decrement"));
  };

  const incrementItem = (productId, size, index) => {
    dispatch(editToCart(productId, 1, size, index, "increment"));
  };

  const handleNextClick = () => {
    const discount = discountCode ? discountCode : null;
    dispatch(
      addInfoToOrder({
        order: cart,
        status: "waiting",
        discount: discount,
      })
    );
    history.push("checkout/shipping");
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
    <div className="grid cart">
      <div className="row no-gutters cart__header">
        <div className="col l-1 m-1 s-1">
          <div className="heading__title id">STT</div>
        </div>
        <div className="col l-4 m-4 s-4">
          <div className="heading__title name">Sản Phẩm</div>
        </div>
        <div className="col l-3 m-3 s-3">
          <div className="heading__title quantity">Số Lượng</div>
        </div>
        <div className="col l-3 m-3 s-3">
          <div className="heading__title total-price">Tổng giá</div>
        </div>
      </div>
      {cart.length !== 0 ? (
        cart.map((item, index) => {
          return (
            <div className="row no-gutters cart__content" key={index}>
              <div className="col l-1 m-1 s-1">
                <div className="item__content id">{index + 1}</div>
              </div>
              <div className="col l-1 m-1 s-1">
                <img
                  className="item__content image"
                  src={item.img}
                  alt="none"
                />
              </div>
              <div className="col l-3 m-3 s-3">
                <div className="item__content name">
                  <Link to={`/product/${item.id}`}>{item.name}</Link>
                  <p>{`Size: ${item.size}`}</p>
                  <p>
                    Giá: <span>{`${convertPrice(item.price)}đ`}</span>
                  </p>
                </div>
              </div>
              <div className="col l-3 m-3 s-3">
                <div className="item__content quantity">
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
                <div className="item__content totalPrice">{`${convertPrice(
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
        <div className="row item__content">
          <div className="col l-3 l-o-4">
            <div className="no-thing-cart">
              <img src={box} alt="" />
              <p>Không có gì trong giỏ.!</p>
            </div>
          </div>
        </div>
      )}
      <div className="row no-gutters cart__footer">
        <div className="col l-4">
          <input
            className="discount"
            type="text"
            placeholder="Mã giảm giá"
            ref={inputRef}
          />
          <button className="btn apply-btn" onClick={handleApplyClick}>
            Áp dụng
          </button>
        </div>
        <div className="col l-1">
          <div className="discount-tag">
            {sum(cart) > 800 ? (
              <img src={freeDelivery} alt="" title="Miễn phí giao hàng." />
            ) : null}
            {discountCode && (
              <img src={discount} alt="" title={discountCode.code} />
            )}
          </div>
        </div>
        <div className="col l-3">
          <div className="footer__title order-price">Thành tiền</div>
        </div>
        <div className="col l-3">
          <div className="total">
            {cart && discountCode ? (
              <p>
                <span>{`${convertPrice(sum(cart))}đ`}</span>
                <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                {`${convertPrice(
                  sum(cart) - sum(cart) * (discountCode.percent / 100)
                )}đ`}
              </p>
            ) : (
              <p>{`${convertPrice(sum(cart))}đ`}</p>
            )}
          </div>
        </div>
        <div className="col l-1">
          <button
            className={classNames("btn next-btn", {
              "btn--disable": cart.length === 0,
            })}
            disabled={cart.length === 0}
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
