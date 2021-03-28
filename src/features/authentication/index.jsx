import { BreadCrumbs, NotFound } from "assets/import";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LoginPage from "./page/login-page";
import RegisterPage from "./page/register-page";
import authImg from "assets/image/login/login.svg";

const BREADCRUMBS_LIST = [
  {
    name: "Đăng nhập",
    url: "#",
  },
];

export default function Auth() {
  const { user } = useSelector((state) => state.authentication);
  const match = useRouteMatch();
  return (
    <main style={{ paddingTop: "7.1rem" }}>
      <div className="grid wide">
        <div className="row">
          <div className="col l-12">
            <BreadCrumbs list={BREADCRUMBS_LIST} />
          </div>
        </div>
        <div className="row">
          <div className="col l-7">
            <img src={authImg} alt="login" />
          </div>
          <div className="col l-5">
            <Switch>
              <Route path={`${match.url}/login`}>
                {user ? <Redirect to="/" /> : <LoginPage />}
              </Route>
              <Route path={`${match.url}/register`} component={RegisterPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </main>
  );
}
