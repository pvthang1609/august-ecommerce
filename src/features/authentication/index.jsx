import { NotFound } from "assets/import";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import LoginPage from "./page/login-page";
import RegisterPage from "./page/register-page";

export default function Auth() {
  const match = useRouteMatch();
  return (
    <main>
      <Switch>
        <Route path={`${match.url}/login`} component={LoginPage} />
        <Route path={`${match.url}/register`} component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}
