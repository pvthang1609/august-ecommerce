import { addInfoToOrder } from "actions/orderAction";
import deliveryTruck from "assets/image/delivery-truck.svg";
import JCB_Logo from "assets/image/payment-logo/JCB_Logo.svg";
import Mastercard_Logo from "assets/image/payment-logo/Mastercard_Logo.svg";
import Momo_Logo from "assets/image/payment-logo/Momo_Logo.svg";
import Visa_Debit_Logo from "assets/image/payment-logo/Visa_Debit_Logo.svg";
import ZaloPay_Logo from "assets/image/payment-logo/ZaloPay_Logo.svg";
import classNames from "classnames";
import { removeVietnameseTones } from "custom-hooks/globalFunc";
import CreditCard from "features/order/components/credit-card";
import CustomTextAddress from "features/order/components/custom-text-address";
import DialogTerms from "features/order/components/dialog-terms";
import { FastField, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import "./paying.scss";

const initValues = {
  paymentMethod: "",
  detail: {
    number: "",
    name: "",
    date: "",
  },
};

const dateRegex = /(01|02|03|04|05|06|07|08|09|10|11|12)-([1|2]{1}[9|0]{1}[0-9]{1}[0-9]{1})\b/;
const numberRegex = /([0-9]){16}\b/;

const payingSchema = yup.object().shape({
  paymentMethod: yup
    .string()
    .required("Vui lòng lựa chọn phương thức thanh toán."),
  detail: yup.object().when("paymentMethod", {
    is: "creditCard",
    then: yup.object().shape({
      number: yup
        .string()
        .matches(numberRegex, "Số tài khoản không hợp lệ")
        .required("Vui lòng nhập số tài khoản."),
      name: yup
        .string()
        .min(2, "Quá ngắn.!")
        .required("Vui lòng nhập tên chủ thẻ."),
      date: yup
        .string()
        .matches(dateRegex, "Tháng, năm không hợp lệ")
        .required("Vui lòng nhập ngày hết hạn của thẻ"),
    }),
  }),
});

PaymentMethodPage.propTypes = {};

const handlePrevClick = () => {
  console.log("isRun");
};

function PaymentMethodPage() {
  const dispatch = useDispatch();
  const [isDialog, setIsDialog] = useState(false);

  useEffect(() => {
    if (isDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDialog]);

  const handleSubmit = (value) => {
    const { paymentMethod, detail } = value;
    if (paymentMethod === "creditCard") {
      dispatch(
        addInfoToOrder({
          status: "chưa thanh toán",
          payment: {
            method: "creditCard",
            number: detail.number,
            name: removeVietnameseTones(detail.name),
            date: detail.date,
          },
        })
      );
    } else {
      dispatch(
        addInfoToOrder({
          status: "unpaid",
          payment: paymentMethod,
        })
      );
    }
    setIsDialog(true);
    // history.push("check-order");
  };

  const handleHiddenDialog = () => {
    setIsDialog(false);
  };

  return (
    <div className="paying">
      <div className="paying__header">
        <h2>Phương thức thanh toán</h2>
        <p
          style={{ fontSize: "1.4rem", fontStyle: "italic", color: "#f55d5c" }}
        >
          *Các phương thức thanh toán đang được phát triển.
        </p>
      </div>
      <Formik
        initialValues={initValues}
        validationSchema={payingSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors }) => {
          return (
            <Form>
              <div
                className={classNames("paying__item", {
                  "paying__item--active": values.paymentMethod === "cod",
                })}
              >
                <label htmlFor="cod" className="paying__item-main">
                  <FastField
                    id="cod"
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                  />
                  <div className="paying__item-tittle">
                    <p>Thanh toán COD</p>
                    <p>
                      Khách hàng nhận sản phẩm rồi thanh toán cho đơn vị vận
                      chuyển
                    </p>
                  </div>
                  <div className="paying__item-img">
                    <img src={deliveryTruck} alt="deliveryTruck" />
                  </div>
                </label>
                {values.paymentMethod === "cod" && (
                  <div className="paying__item-sub">SUB BLOCK</div>
                )}
              </div>
              <div
                className={classNames("paying__item", {
                  "paying__item--active": values.paymentMethod === "eWallet",
                })}
              >
                <label htmlFor="eWallet" className="paying__item-main">
                  <FastField
                    id="eWallet"
                    type="radio"
                    name="paymentMethod"
                    value="eWallet"
                  />
                  <div className="paying__item-tittle">
                    <p>Thanh toán qua ví điện tử</p>
                    <p>Khách hàng chọn 1 trong các loại ví điện tử</p>
                  </div>
                  <div className="paying__item-img">
                    <img src={ZaloPay_Logo} alt="ZaloPay_Logo" />
                    <img src={Momo_Logo} alt="Momo_Logo" />
                  </div>
                </label>
                {values.paymentMethod === "eWallet" && (
                  <div className="paying__item-sub">
                    <p>
                      Sau khi đồng ý với các điều khoản thanh toán khách hàng sẽ
                      được redirect ( chuyển tiếp) đến trang cổng thanh toán
                      ZaloPay.
                    </p>
                    <p>Hướng dẫn thanh toán.</p>
                    <p>Bạn sẽ nghĩ tại sao phải có hướng dẫn này??</p>
                    <p>
                      Hình thức thanh toán bằng ví điện tử là 1 phiên bản thử
                      nhiệm. Do chung tôi chưa hoàn thành được thủ tục đăng kí
                      thông tin doanh nghiệp, nên tester sẽ thanh toán bằng app
                      sandbox của Zalopay được tải về tại địa chỉ:
                      <a href="https://docs.zalopay.vn/v1/start/">
                        https://docs.zalopay.vn/v1/start/
                      </a>
                    </p>
                    <p>
                      Sau khi tải ứng dụng, tiến hành yêu cầu nạp tiền ở phần
                      &quot;A. Trải nghiệm với ZaloPay&quot; -&gt; &quot;II. Nạp
                      tiền vào tài khoản ZaloPay Sandbox&quot;, đăng nhập vào số
                      điện thoại vừa nạp tiền và tiến hành thanh toán như bình
                      thường
                    </p>
                  </div>
                )}
              </div>
              <div
                className={classNames("paying__item", {
                  "paying__item--active": values.paymentMethod === "creditCard",
                })}
              >
                <label htmlFor="creditCard" className="paying__item-main">
                  <FastField
                    id="creditCard"
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                  />
                  <div className="paying__item-tittle">
                    <p>Thanh toán qua Credit Card</p>
                    <p>
                      Khách hàng thanh toán bằng 1 trong những thẻ credit được
                      chấp nhận
                    </p>
                  </div>
                  <div className="paying__item-img">
                    <img src={Visa_Debit_Logo} alt="Visa_Debit_Logo" />
                    <img src={Mastercard_Logo} alt="Mastercard_Logo" />
                    <img src={JCB_Logo} alt="JCB_Logo" />
                  </div>
                </label>
                {values.paymentMethod === "creditCard" && (
                  <div className="paying__item-sub Item-sub__credit-card">
                    <div className="Item-sub__credit-card-input">
                      <FastField
                        type="text"
                        name="detail.number"
                        component={CustomTextAddress}
                        display="Số thẻ"
                        icon="fa-credit-card"
                      />
                      <FastField
                        type="text"
                        name="detail.name"
                        component={CustomTextAddress}
                        display="Tên chủ tài khoản"
                        icon="fa-user"
                      />
                      <FastField
                        type="text"
                        name="detail.date"
                        component={CustomTextAddress}
                        display="Ngày hết hạn, ví dụ: 09-1994"
                        icon="fa-calendar"
                      />
                    </div>
                    <CreditCard
                      className="Item-sub__credit-card-ui"
                      number={
                        values.detail.number !== "" &&
                        (errors.detail ? !errors.detail.number : true)
                          ? values.detail.number
                          : "________________"
                      }
                      name={
                        values.detail.name !== "" &&
                        (errors.detail ? !errors.detail.name : true)
                          ? values.detail.name
                          : "___ ___ __"
                      }
                      date={
                        values.detail.date !== "" &&
                        (errors.detail ? !errors.detail.date : true)
                          ? values.detail.date
                          : "__-____"
                      }
                    />
                  </div>
                )}
              </div>
              <div className="paying__footer">
                <button
                  className={classNames("btn prev-btn", {
                    "btn--disable": false,
                  })}
                  onClick={handlePrevClick}
                  type="button"
                >
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                  Quay lại
                </button>
                <button
                  className={classNames("btn next-btn", {
                    "btn--disable": false,
                  })}
                  type="submit"
                >
                  Tiếp theo
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      {isDialog && <DialogTerms hiddenDialog={handleHiddenDialog} />}
    </div>
  );
}

export default PaymentMethodPage;
