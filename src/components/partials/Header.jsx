import React from "react";
import "../../scss/components/Header.scss";
import logo from "../../images/logo2.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="header__image" src={logo} alt="Hangoutspots" />
        </Link>

        <div className="header__links">
          <a className="header__login" href="">
            Iniciar Sesión
          </a>
          <Link className="header__signup" to="/register">
            Registrarse
          </Link>
        </div>
        <div className="header__icon">
          <i class="fa-solid fa-bars"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
