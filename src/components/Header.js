import React from "react";
// import PropTypes from "prop-types";

import { Logo, Navbar, SearchBar } from "assets/import";
import UserActions from "components/UserActions";
import MenuMobile from "./MenuMobile";

Header.propTypes = {};

function Header() {
  return (
    <div className="shadow-md bg-white z-10 dark:bg-gray-900">
      <div className="flex items-center justify-between container mx-auto px-2 py-2">
        <div className="flex items-center space-x-2.5 w-11/12 lg:w-4/12">
          <Logo />
          <SearchBar />
        </div>
        <div className="w-4/12 hidden lg:block">
          <Navbar />
        </div>
        <div className="w-4/12  hidden lg:block">
          <UserActions />
        </div>
        <div className="flex justify-end items-center w-1/12 lg:hidden">
          <MenuMobile />
        </div>
      </div>
    </div>
  );
}

export default Header;
