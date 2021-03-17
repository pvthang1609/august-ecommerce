import NotFound from "components/404";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import FilterPage from "./page/filter-page";
import MainPage from "./page/main-page";
import ManagerPage from "./page/manager-page";
import ProductPage from "./page/product-page";

export default function Product() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path} component={MainPage} />

      <Route path={`${match.path}/filter-page`} component={FilterPage} />
      <Route path={`${match.path}/manager-page`} component={ManagerPage} />
      <Route path={`${match.url}/:productId`} component={ProductPage} />

      <Route component={NotFound} />
    </Switch>
  );
}
