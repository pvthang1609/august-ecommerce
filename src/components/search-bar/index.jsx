import React from "react";

import "./search-bar.scss";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input type="text" placeholder="Tìm kiếm" autoComplete="off" />
    </div>
  );
}
