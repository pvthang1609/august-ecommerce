import React, { Suspense, useEffect } from "react";

import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Header, Footer, Notification, NotFound } from "assets/import";
import "./app.scss";
import UploadFile from "features/upload/component/UploadFile";

const Product = React.lazy(() => import("features/product"));
const Checkout = React.lazy(() => import("features/order"));
const Auth = React.lazy(() => import("features/authentication"));
const Cart = React.lazy(() => import("features/cart"));

function App() {
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
          <Header />
        </header>
        <div style={{ paddingTop: "7.1rem" }}>
          <Switch>
            <Redirect exact from="/" to="/product" />

            <Route path="/product" component={Product} />
            <Route path="/test" component={UploadFile} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/auth" component={Auth} />
            <Route component={NotFound} />
          </Switch>
        </div>
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
