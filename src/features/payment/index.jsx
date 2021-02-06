import React from "react";
import { NotFound } from "assets/import";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import CartPage from "./page/cart";
import StepProgressBar from "./components/step-progress-bar";
import "./payment.scss";
import ShippingPage from "./page/shipping";

export default function Payment() {
  const match = useRouteMatch();
  const { pathname } = useLocation();
  return (
    <main className="grid wide">
      <div className="row">
        <div className="col l-12">
          <div className="payment__header">
            <p>
              {pathname === "/payment/cart"
                ? "Giỏ hàng"
                : pathname === "/payment/shipping"
                ? "Thông tin vận chuyển"
                : null}
            </p>
            <div className="payment__header--notification">
              Free ship với đơn hàng trên 800k..!!
            </div>
            <button>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              Quay lại mua hàng
            </button>
          </div>
        </div>
      </div>
      <StepProgressBar
        step={
          pathname === "/payment/cart"
            ? 0
            : pathname === "/payment/shipping"
            ? 1
            : 2
        }
      />
      <Switch>
        <Route path={`${match.url}/shipping`} component={ShippingPage} />
        <Route path={`${match.url}/cart`} component={CartPage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}
