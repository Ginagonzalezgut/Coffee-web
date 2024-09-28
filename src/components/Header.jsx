import React from "react";
import "../scss/components/Header.scss";
import logo from "../images/logo2.png";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__image" src={logo} alt="Coffee Web" />
        <div className="header__links">
          <a className="header__login" href="">
            Iniciar Sesión
          </a>
          <a className="header__signup" href="">
            Registrarse
          </a>
        </div>
        <div className="header__icon">
          <i class="fa-solid fa-bars"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
