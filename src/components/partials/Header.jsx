import React, { useState } from "react";
import "../../scss/components/Header.scss";

import { Link } from "react-router-dom";
import Logo from "../partials/Logo";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <Logo className="header__image" />

        <div className="header__links">
          <Link className="header__login" to="/login">
            Iniciar Sesión
          </Link>

          <Link className="header__signup" to="/register">
            Registrarse
          </Link>
        </div>

        {menuOpen && (
          <div className="menu__mobile">
            <div className="menu__mobile__images">
              <Logo />

              <button onClick={closeMenu} className="menu__mobile__icon">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <Link
              onClick={closeMenu}
              className="menu__mobile__link"
              to="/login"
            >
              INICIA SESIÓN
            </Link>

            <Link
              onClick={closeMenu}
              className="menu__mobile__link"
              to="/register"
            >
              REGISTRATE
            </Link>
            <Link onClick={closeMenu} className="menu__mobile__link" to="/">
              CATEGORIAS
            </Link>
            <Link
              onClick={closeMenu}
              className="menu__mobile__link"
              to="/specialty-coffee-shops"
            >
              CAFETERIAS DE ESPECIALIDAD
            </Link>
            <Link
              onClick={closeMenu}
              className="menu__mobile__link"
              to="/brunch"
            >
              BRUNCH
            </Link>
            <Link
              onClick={closeMenu}
              className="menu__mobile__link"
              to="/breweries"
            >
              CERVECERIAS
            </Link>
            <Link
              onClick={closeMenu}
              className="menu__mobile__link"
              to="/rooftops"
            >
              ROOFTOPS
            </Link>
            <Link
              onClick={closeMenu}
              className="menu__mobile__link"
              to="/gelato"
            >
              GELATO
            </Link>
            <Link
              onClick={closeMenu}
              className="menu__mobile__link"
              to="/large-groups"
            >
              PARA GRUPOS GRANDES
            </Link>
          </div>
        )}

        <div className="header__icon" onClick={openMenu}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
