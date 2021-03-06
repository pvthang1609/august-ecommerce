import React from "react";
import { NotFound } from "assets/import";
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import CartPage from "../cart/page/main-cart";
import StepProgressBar from "./components/step-progress-bar";
import "./checkout.scss";
import ShippingPage from "./page/shipping";
import { useSelector } from "react-redux";
import PaymentMethodPage from "./page/payment-method";
import OrderSummary from "features/order/components/order-summary";
import classNames from "classnames";
import CompletedOrderPage from "./page/completed-order";

export default function Checkout() {
  const { invoice } = useSelector((state) => state.invoice);
  const match = useRouteMatch();
  const { pathname } = useLocation();
  return (
    <main className="grid wide">
      <div className="row">
        <div className="col l-12">
          <div className="checkout__header">
            <p>{pathname === "/checkout/shipping" ? "Vận chuyển" : null}</p>
            <div className="checkout__header--notification">
              Free ship với đơn hàng trên 800k..!!
            </div>
            <button>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              Quay lại mua hàng
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col l-10 l-o-1">
          <StepProgressBar
            step={
              pathname === "/checkout/cart"
                ? 0
                : pathname === "/checkout/shipping"
                ? 1
                : 2
            }
          />
        </div>
      </div>
      <div className="row">
        <Switch>
          <Route path={`${match.url}/completed`}>
            {!invoice ? (
              <Redirect to={`${match.url}/cart`} />
            ) : (
              <div className="col l-8">
                <CompletedOrderPage />
              </div>
            )}
          </Route>

          <Route path={`${match.url}/payment-method`}>
            {!invoice ? (
              <Redirect to={"/cart"} />
            ) : (
              <div className="col l-8">
                <PaymentMethodPage />
              </div>
            )}
          </Route>

          <Route path={`${match.url}/shipping`}>
            {!invoice ? (
              <Redirect to={"/cart"} />
            ) : (
              <div className="col l-8">
                <ShippingPage />
              </div>
            )}
          </Route>

          <Route path={"/cart"}>
            <div className="col l-12">
              <CartPage />
            </div>
          </Route>

          <Route>
            <div className="col l-12">
              <NotFound />
            </div>
          </Route>
        </Switch>
        {console.log(invoice)}
        {invoice && (
          <div className={classNames("col l-4", { "l-o-4": false })}>
            <OrderSummary />
          </div>
        )}
      </div>
    </main>
  );
}
