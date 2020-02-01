import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/electronics"
          className={window.location.pathname === "/electronics" ? "nav-link active" : "nav-link"}
        >
          Electronics
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/cart"
          className={window.location.pathname === "/cart" ? "nav-link active" : "nav-link"}
        >
          Cart
        </Link>
      </li>

    </ul>
  );
}

export default NavTabs;
