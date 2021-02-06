import React from "react";
import "./shipping.scss";
import { Formik, Form, Field, FastField } from "formik";
import CusSelectAdd from "features/payment/components/custom-select-address";
import PropTypes from "prop-types";
import CustomTextAddress from "features/payment/components/custom-text-address";
import viettelpost from "assets/logistics/vietel.png";
import ghtk from "assets/logistics/ghtk.png";
import jtex from "assets/logistics/j-t-express.png";
import classNames from "classnames";
import { editToInvoice } from "actions/paymentAction";
import { useDispatch } from "react-redux";

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

function ShippingPage() {
  const dispatch = useDispatch();
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
        address: `${addressDetails}, ${ward}, ${district}, ${province}`,
        logistics: logistics,
      })
    );
  };
  const handlePrevClick = () => {
    history.back();
  };
  return (
    <div className="row">
      <div className="col l-8">
        <div className="shipping-page">
          <Formik initialValues={initFormAddress} onSubmit={handleNextClick}>
            {(props) => {
              return (
                <Form>
                  <div className="grid">
                    <div className="row">
                      <div className="col l-12">
                        <h2>Thông tin người nhận:</h2>
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
                          display={
                            props.values.province.name || "Tỉnh - Thành phố"
                          }
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
                        <h2
                          style={{ marginTop: "1rem ", marginBottom: "1rem " }}
                        >
                          Đơn vị vận chuyển:
                        </h2>
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
                            <div className="logistics__heading">
                              Thời gian giao hàng
                            </div>
                          </div>
                          <div className="col l-3">
                            <div className="logistics__heading">Giá cước</div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col l-12">
                            <label htmlFor="vietel" className="logistics__item">
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
                            <label htmlFor="ghtk" className="logistics__item">
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
                            <label htmlFor="jtex" className="logistics__item">
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
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <div className="col l-4">
        <div className="bill">ĐƠN HÀNG</div>
      </div>
    </div>
  );
}

export default ShippingPage;
