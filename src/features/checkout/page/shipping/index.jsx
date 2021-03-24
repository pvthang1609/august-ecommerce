import React from "react";
import "./shipping.scss";
import { Formik, Form, Field, FastField } from "formik";
import CusSelectAdd from "features/checkout/components/custom-select-address";
import PropTypes from "prop-types";
import CustomTextAddress from "features/checkout/components/custom-text-address";
import viettelpost from "assets/image/logistics/vietel.png";
import ghtk from "assets/image/logistics/ghtk.png";
import jtex from "assets/image/logistics/j-t-express.png";
import classNames from "classnames";
import { editToInvoice } from "actions/paymentAction";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

ShippingPage.propTypes = {
  values: PropTypes.number,
};

const initFormAddress = {
  name: "",
  tel: "",
  email: "",
  addressDetails: "",
  province: "",
  district: "",
  ward: "",
  logistics: "",
};

const phoneRegex = /([+84]|0[3|5|7|8|9])+([0-9]{8})\b/g;
const addressSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Quá ngắn.!")
    .required("Vui lòng nhập tên người nhận."),
  tel: Yup.string()
    .matches(phoneRegex, "Số điện thoại không hợp lệ.")
    .required("Vui lòng nhập số điện thoại."),
  email: Yup.string()
    .email("Email không hợp lệ.")
    .required("Vui lòng nhập địa chỉ email."),
  addressDetails: Yup.string().required("Vui lòng nhập địa chỉ chi tiết."),
  province: Yup.object().required("Vui lòng lựa chọn tỉnh, thành phố."),
  district: Yup.object().required("Vui lòng lựa chọn quận, huyện."),
  ward: Yup.object().required("Vui lòng lựa chọn xã, phường."),
  logistics: Yup.string().required("Vui lòng lựa chọn đơn vị vận chuyển."),
});

function ShippingPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleNextClick = (values) => {
    const {
      addressDetails,
      district,
      email,
      logistics,
      name,
      province,
      tel,
      ward,
    } = values;
    dispatch(
      editToInvoice({
        name: name,
        tel: tel,
        email: email,
        address: `${addressDetails}, ${ward.name}, ${district.name}, ${province.name}`,
        logistics: logistics,
      })
    );
    history.push("payment-method");
  };
  const handlePrevClick = () => {
    history.back();
  };
  return (
    <div className="shipping-page">
      <Formik
        initialValues={initFormAddress}
        onSubmit={handleNextClick}
        validationSchema={addressSchema}
      >
        {(props) => {
          return (
            <Form>
              <div className="grid">
                <div className="row">
                  <div className="col l-12">
                    <h3>Thông tin người nhận</h3>
                  </div>
                  <div className="col l-6">
                    <FastField
                      name="name"
                      component={CustomTextAddress}
                      display="Họ và tên"
                      icon="fa-user"
                    />
                  </div>
                  <div className="col l-6">
                    <FastField
                      name="tel"
                      component={CustomTextAddress}
                      display="Số điện thoại"
                      icon="fa-phone"
                    />
                  </div>
                  <div className="col l-6">
                    <FastField
                      name="email"
                      component={CustomTextAddress}
                      display="Email"
                      icon="fa-envelope"
                    />
                  </div>
                  <div className="col l-6">
                    <FastField
                      name="addressDetails"
                      component={CustomTextAddress}
                      display="Số nhà, ngách, ngõ, tên đường..."
                      icon="fa-map-marker"
                    />
                  </div>
                  <div className="col l-4">
                    <Field
                      name="province"
                      component={CusSelectAdd}
                      display={props.values.province.name || "Tỉnh - Thành phố"}
                    />
                  </div>
                  <div className="col l-4">
                    <Field
                      name="district"
                      component={CusSelectAdd}
                      display={props.values.district.name || "Huyện - Quận"}
                      params={`district/${props.values.province.id}`}
                      disable={props.values.province.name ? false : true}
                    />
                  </div>
                  <div className="col l-4">
                    <Field
                      name="ward"
                      component={CusSelectAdd}
                      display={props.values.ward.name || "Xã - Phường"}
                      params={`ward/${props.values.district.id}`}
                      disable={props.values.district.name ? false : true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col l-12">
                    <div className="shipping-heading">
                      <h3>Thông tin vận chuyển</h3>
                      <p>*Chi phí vận chuyển do người nhận thanh toán</p>
                    </div>
                  </div>
                  <div className="col l-12">
                    <div
                      className="row no-gutters"
                      style={{ borderBottom: "0.1rem solid #ccc" }}
                    >
                      <div className="col l-5 l-o-1">
                        <div className="logistics__heading">
                          Đơn vị vận chuyển
                        </div>
                      </div>
                      <div className="col l-3">
                        <div className="logistics__heading">Thời gian</div>
                      </div>
                      <div className="col l-3">
                        <div className="logistics__heading">Giá cước</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col l-12">
                        <label
                          htmlFor="vietel"
                          className={classNames("logistics__item", {
                            "logistics__item--active":
                              props.values.logistics === "vietel",
                          })}
                        >
                          <FastField
                            id="vietel"
                            type="radio"
                            name="logistics"
                            value="vietel"
                            style={{ width: "8.33%" }}
                          />
                          <div className="logistics__item-name">
                            <img src={viettelpost} alt="" />
                            <p>Vietel Post</p>
                          </div>
                          <div className="logistics__item-time-shipping">
                            Từ 3 đến 7 ngày
                          </div>
                          <div className="logistics__item-shipping-cost">
                            55.000đ
                          </div>
                        </label>
                      </div>
                      <div className="col l-12">
                        <label
                          htmlFor="ghtk"
                          className={classNames("logistics__item", {
                            "logistics__item--active":
                              props.values.logistics === "ghtk",
                          })}
                        >
                          <FastField
                            id="ghtk"
                            type="radio"
                            name="logistics"
                            value="ghtk"
                            style={{ width: "8.33%" }}
                          />
                          <div className="logistics__item-name">
                            <img src={ghtk} alt="" />
                            <p>Giao hàng tiết kiệm</p>
                          </div>
                          <div className="logistics__item-time-shipping">
                            Từ 3 đến 7 ngày
                          </div>
                          <div className="logistics__item-shipping-cost">
                            45.000đ
                          </div>
                        </label>
                      </div>
                      <div className="col l-12">
                        <label
                          htmlFor="jtex"
                          className={classNames("logistics__item", {
                            "logistics__item--active":
                              props.values.logistics === "jtex",
                          })}
                        >
                          <FastField
                            id="jtex"
                            type="radio"
                            name="logistics"
                            value="jtex"
                            style={{ width: "8.33%" }}
                          />
                          <div className="logistics__item-name">
                            <img src={jtex} alt="" />
                            <p>J&T express</p>
                          </div>
                          <div className="logistics__item-time-shipping">
                            Từ 3 đến 7 ngày
                          </div>
                          <div className="logistics__item-shipping-cost">
                            35.000đ
                          </div>
                        </label>
                      </div>
                      <div className="col l-12">
                        <div className="shipping-footer">
                          <button
                            className={classNames("btn prev-btn", {
                              "btn--disable": false,
                            })}
                            onClick={handlePrevClick}
                            type="button"
                          >
                            <i
                              className="fa fa-arrow-left"
                              aria-hidden="true"
                            ></i>
                            Quay lại
                          </button>
                          <button
                            className={classNames("btn next-btn", {
                              "btn--disable": false,
                            })}
                            type="submit"
                          >
                            Tiếp theo
                            <i
                              className="fa fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ShippingPage;
