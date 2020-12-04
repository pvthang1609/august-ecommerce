import React from "react";
import { Link } from "react-router-dom";
import "./logo.scss";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        August <span>.</span>
      </Link>
    </div>
  );
}
