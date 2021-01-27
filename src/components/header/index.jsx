import { NAV_MAIN_LIST } from "assets/CONSTANTS";
import { LinkTop, Navbar } from "assets/import";
import Logo from "components/logo";
import SearchBar from "components/search-bar";
import React from "react";

function Header() {
  return (
    <header>
      <LinkTop />
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <Logo />
          </div>
          <Navbar list={NAV_MAIN_LIST} />
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
