import React from "react";
import "../../scss/components/HomePage.scss";
import "../../scss/components/Categories.scss";
import { Link } from "react-router-dom";
import Facts from "./Facts";

function HomePage() {
  const categories = [
    {
      text: "Cafeterías de Especialidad",
      to: "/specialty-coffee-shops",
      className: "specialty-coffee-shops",
    },
    {
      text: "Brunch",
      to: "/brunch",
      className: "brunch",
    },
    {
      text: "Cervecerías",
      to: "/breweries",
      className: "breweries",
    },
    {
      text: "Rooftops",
      to: "/rooftops",
      className: "rooftops",
    },
    {
      text: "Gelato",
      to: "/gelato",
      className: "gelato",
    },
    {
      text: "Para Grupos Grandes",
      to: "/large-groups",
      className: "large-groups",
    },
  ];

  const categoryElements = categories.map((category) => {
    return (
      <Link
        className={`homepage-categories__grid-item homepage-categories__grid-item--${category.className}`}
        key={category.text}
        to={category.to}
      >
        <span className="homepage-categories__grid-item__text">
          {category.text}
        </span>
      </Link>
    );
  });
  return (
    <>
      <div className="homepage-hero">
        <div className="homepage-hero__overlay"></div>
        <h1 className="homepage-hero__title">
          Descubre los mejores spots de Barcelona
        </h1>
        <h2 className="homepage-hero__subtitle">
          Encuentra los lugares perfectos para cada plan
        </h2>
        <div className="homepage-hero__buttons">
          {" "}
          <Link className="homepage-hero__button" to="/login">
            Iniciar Sesión
          </Link>
          <Link className="homepage-hero__button secondary" to="/register">
            Registrarse
          </Link>
        </div>
      </div>
      <Facts />
      <div className="homepage-categories">
        <div className="homepage-categories__intro">
          <h2 className="homepage-categories__title">
            Guía de restaurantes imprescindibles
          </h2>
          <p className="homepage-categories__subtitle">
            Hemos probado y seleccionado los mejores para ti
          </p>
        </div>

        <div className="homepage-categories__grid">{categoryElements}</div>
      </div>
    </>
  );
}

export default HomePage;
