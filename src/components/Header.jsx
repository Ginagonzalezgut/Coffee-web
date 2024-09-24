import React from "react";
import "../scss/components/Header.scss";
import logo from "../images/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__image" src={logo} alt="Coffee Web" />
        <div className="header__links">
          <a className="header__login" href="">
            Login
          </a>
          <a className="header__signup" href="">
            Sign Up
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
