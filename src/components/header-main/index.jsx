import React from "react";
// import PropTypes from "prop-types";

import { Logo, Navbar, SearchBar } from "assets/import";
import { NAV_MAIN_LIST } from "assets/CONSTANTS";

HeaderMain.propTypes = {};

function HeaderMain() {
  return (
    <div className="header">
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <Logo />
          </div>
          <div className="col l-6">
            <Navbar list={NAV_MAIN_LIST} />
          </div>
          <div className="col l-3">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
