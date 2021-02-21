import React, { Suspense, useEffect } from "react";

import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import {
  HeaderTop,
  HeaderMain,
  Footer,
  Notification,
  NotFound,
} from "assets/import";
import "./app.scss";

const Product = React.lazy(() => import("features/product"));
const Payment = React.lazy(() => import("features/payment"));
const Auth = React.lazy(() => import("features/authentication"));

function App() {
  const { listCart } = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(listCart));
  }, [listCart]);

  const handleGoTopClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <header>
          <HeaderTop />
          <HeaderMain />
        </header>
        <Switch>
          <Redirect exact from="/" to="/product" />

          <Route path="/product" component={Product} />
          <Route path="/payment" component={Payment} />
          <Route path="/auth" component={Auth} />

          <Route component={NotFound} />
        </Switch>
        <Footer />

        <button className="go-top-btn" onClick={handleGoTopClick}>
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        </button>

        <Notification />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
