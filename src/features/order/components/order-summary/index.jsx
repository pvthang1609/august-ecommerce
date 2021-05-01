import React from "react";
import "./order-summary.scss";
import Barcode from "react-barcode";
import { useSelector } from "react-redux";
import { convertPrice, convertTel, sum } from "custom-hooks/globalFunc";
import QRCode from "qrcode.react";
import paidStamp from "assets/image/paid-stamp.svg";
// import PropTypes from "prop-types";

// Invoice.propTypes = {

// };
function OrderSummary() {
  const { invoice } = useSelector((state) => state.invoice);
  const {
    no,
    order,
    discount,
    name,
    address,
    tel,
    email,
    logistics,
    status,
    payment,
  } = invoice;

  return (
    <div className="order-summary">
      <div className="gird">
        <div className="row order-summary__header">
          <div className="col l-8">
            <h3 className="order-summary__header-title">Thông tin đơn hàng</h3>
            <p className="order-summary__header-date">02/01/2021</p>
            <p className="order-summary__header-status">{status}</p>
          </div>
          <div className="col l-4">
            <QRCode
              value="https://test.comfasfdsafdafd"
              size={64}
              className="order-summary__header-qrcode"
            />
          </div>
        </div>
        {name && address && tel && email && logistics && (
          <div className="row no-gutters order-summary__receiver">
            <div className="col l-4">
              <p>Họ và tên:</p>
            </div>
            <div className="col l-8">
              <p className="order-summary__receiver-name">{name}</p>
            </div>
            <div className="col l-4">
              <p>Điện thoại:</p>
            </div>
            <div className="col l-8">
              <p>{convertTel(tel)}</p>
            </div>
            <div className="col l-4">
              <p>Email:</p>
            </div>
            <div className="col l-8">
              <p>{email}</p>
            </div>
            <div className="col l-4">
              <p>Địa chỉ:</p>
            </div>
            <div className="col l-8">
              <p>{address}</p>
            </div>
            <div className="col l-4">
              <p>Vận chuyển:</p>
            </div>
            <div className="col l-8">
              <p className="order-summary__receiver-logistics">{logistics}</p>
            </div>
          </div>
        )}
        {payment && (
          <div className="row no-gutters order-summary__payment-method">
            <div className="col l-4">
              <p>Thanh toán:</p>
            </div>
            <div className="col l-8">
              <p className="order-summary__receiver-logistics">
                {payment.method}
              </p>
            </div>
          </div>
        )}
        <div className="row order-summary__order-heading">
          <div className="col l-8">
            <p className="order-summary__order-heading-product">Sản phẩm</p>
          </div>
          <div className="col l-4">
            <p className="order-summary__order-heading-price">Thành tiền</p>
          </div>
        </div>
        {order.map((item, index) => {
          return (
            <div className="row order-summary__order-item" key={index}>
              <div className="col l-2">
                <img
                  className="order-summary__order-item-image"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="col l-6">
                <p className="order-summary__order-item-name">{item.name}</p>
                <p className="order-summary__order-item-quantity">{`Số lượng: ${item.quantity}`}</p>
              </div>
              <div className="col l-4">
                <p className="order-summary__order-item-price">{`${convertPrice(
                  item.price * item.quantity
                )}đ`}</p>
              </div>
            </div>
          );
        })}
        {discount && (
          <div className="row order-summary__discount">
            <div className="col l-4">
              <p className="order-summary__discount-heading">Mã giảm giá:</p>
            </div>
            <div className="col l-4">
              <p className="order-summary__discount-title">{discount.code}</p>
            </div>
            {sum(order) > 800 && (
              <div className="col l-4">
                <p className="order-summary__discount-title">Free-Ship</p>
              </div>
            )}
          </div>
        )}

        <div className="row order-summary__total">
          <div className="col l-4 l-o-4">
            <p className="subTotal-heading">Tạm tính:</p>
          </div>
          <div className="col l-4">
            <p className="subTotal-title">
              <p>{`${convertPrice(sum(order))}đ`}</p>
            </p>
          </div>
          <div className="col l-4 l-o-4">
            <p>Khuyến mại:</p>
          </div>
          <div className="col l-4">
            <p>{`-${convertPrice(
              discount ? (sum(order) * discount.percent) / 100 : 0
            )}đ`}</p>
          </div>
          <div className="col l-4 l-o-4">
            <p className="order-summary__total-sum-key">Thanh toán:</p>
          </div>
          <div className="col l-4">
            <p className="order-summary__total-sum-value">{`${convertPrice(
              sum(order) -
                (discount ? (sum(order) * discount.percent) / 100 : 0)
            )}đ`}</p>
          </div>
        </div>
        <div className="col l-12">
          <Barcode
            value={no}
            // displayValue={false}
            width={2}
            height={50}
            background="transparent"
            marginLeft={30}
            marginRight={30}
          />
        </div>
      </div>
      {status === "đã thanh toán" && (
        <div className="paid-stamp">
          <img src={paidStamp} alt="paidStamp" />
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
