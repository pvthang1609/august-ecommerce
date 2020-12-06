import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { NotFound, Logo, Navbar, SearchBar, LinkTop } from "assets/import";
import { NAV_MAIN_LIST } from "assets/CONSTANTS";

import "./app.scss";

const Product = React.lazy(() => import("features/product"));

function App() {
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

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
