import React from "react";
import "../scss/components/Header.scss";
import logo from "../images/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div></div>
        {/* <img className="header__image" src={logo} alt="Coffee Web" /> */}
        <div className="header__links">
          <a className="header__login" href="">
            Iniciar Sesión
          </a>
          <a className="header__signup" href="">
            Registrarse
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
