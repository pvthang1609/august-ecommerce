// Phần này để router đến từng trang của feature Product
import { BANNER_LIST } from "assets/CONSTANTS";
import NotFound from "components/404";
import Banner from "components/banner";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./page/main-page";
import ManagerPage from "./page/manager-page";
import ProductPage from "./page/product-page";

export default function Product() {
  const match = useRouteMatch();

  return (
    <main>
      <Banner bannerList={BANNER_LIST} />
      <Switch>
        <Route exact path={match.path} component={MainPage} />

        <Route path={`${match.path}/manager-page`} component={ManagerPage} />
        <Route path={`${match.url}/:productId`} component={ProductPage} />

        <Route component={NotFound} />
      </Switch>
    </main>
  );
}
