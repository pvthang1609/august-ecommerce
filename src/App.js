import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { NotFound, Logo, Navbar, SearchBar, LinkTop } from "assets/import";
import { NAV_MAIN_LIST } from "assets/CONSTANTS";

import "./app.scss";
import Footer from "components/footer";
import Auth from "features/authentication";
import Payment from "features/payment";
import Notification from "features/notification";

const Product = React.lazy(() => import("features/product"));

function App() {
  const handlerUpTopBtn = () => {
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
          <LinkTop />
          <div className="container main__header">
            <Logo />
            <Navbar list={NAV_MAIN_LIST} />
            <SearchBar />
          </div>
        </header>
        <Switch>
          <Redirect exact from="/" to="/product" />

          <Route path="/product" component={Product} />
          <Route path="/payment" component={Payment} />
          <Route path="/auth" component={Auth} />
          <Route component={NotFound} />
        </Switch>
        <Footer />

        <button className="upTop-btn" onClick={handlerUpTopBtn}>
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        </button>
        <Notification />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
