import { BreadCrumbs, NotFound } from "assets/import";
import React from "react";
// import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router";
import MainCart from "./page/main-cart";

Cart.propTypes = {};

function Cart() {
  const match = useRouteMatch();
  return (
    <main className="grid wide">
      <div className="row">
        <div className="col l-12 m-12 s-12">
          <BreadCrumbs list={[{ name: "Giỏ Hàng", url: "/cart" }]} />
        </div>
      </div>
      <div className="row">
        <div className="col l-12 m-12 s-12">
          <Switch>
            <Route exact path={match.path} component={MainCart} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </main>
  );
}

export default Cart;
