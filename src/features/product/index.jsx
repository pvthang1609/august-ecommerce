// Phần này để router đến từng trang của feature Product

import NotFound from "components/404";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./page/main-page";
import ManagerPage from "./page/manager-page";
import ProductPage from "./page/product-page";

export default function Product() {
  const match = useRouteMatch();

  return (
    <main>
      <Switch>
        <Route exact path={match.path} component={MainPage} />

        <Route path={`${match.path}/manager-page`} component={ManagerPage} />
        <Route path={`${match.url}/:productId`} component={ProductPage} />

        <Route component={NotFound} />
      </Switch>
    </main>
  );
}
