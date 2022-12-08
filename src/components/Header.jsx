import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
          <Link
            to={"/"}
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <h3 style={{ color: "red", fontWeight: "bold" }}>
              EXPENSE TRACKER
            </h3>
          </Link>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to={"/"} className="nav-link px-2 link-danger text-white">
                My-Expense
              </Link>
            </li>
            <li>
              <Link
                to={"/addTransaction"}
                className="nav-link px-2 link-danger text-white"
              >
                New-Expense
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Header;
