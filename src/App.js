import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NotFound, Logo, Navbar, SearchBar, LinkTop } from "assets/import";
import { NAV_MAIN_LIST } from "assets/CONSTANTS";

import "./app.scss";

const HomePage = React.lazy(() => import("features/product/page/home-page"));

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
          <Route path="/" exact component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
