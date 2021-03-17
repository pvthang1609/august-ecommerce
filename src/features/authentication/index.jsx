import { NotFound } from "assets/import";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import AdminPage from "./page/admin-page";
import LoginPage from "./page/login-page";
import RegisterPage from "./page/register-page";

export default function Auth() {
  const authentication = useSelector((state) => state.authentication);
  const { infoUser } = authentication;
  const match = useRouteMatch();
  return (
    <main>
      <Switch>
        <Route path={`${match.url}/admin`}>
          {infoUser.isAdmin ? <AdminPage /> : <Redirect to="/" />}
        </Route>
        <Route path={`${match.url}/login`}>
          {infoUser ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route path={`${match.url}/register`} component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}
