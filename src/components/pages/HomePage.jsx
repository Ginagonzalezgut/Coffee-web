import React from "react";
import "../../scss/components/HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  const categories = [
    {
      text: "Cafeterías de Especialidad",
      to: "/specialty-coffee-shops",
      className: "categories__specialty-coffee-shops",
    },
    {
      text: "Brunch",
      to: "/brunch",
      className: "categories__brunch",
    },
    {
      text: "Cervecerías",
      to: "/breweries",
      className: "categories__breweries",
    },
    {
      text: "Rooftops",
      to: "/rooftops",
      className: "categories__rooftops",
    },
    {
      text: "Gelato",
      to: "/gelato",
      className: "categories__gelato",
    },
    {
      text: "Para Grupos Grandes",
      to: "/large-groups",
      className: "categories__large-groups",
    },
  ];

  const categoryElements = categories.map((category) => {
    return (
      <Link className={category.className} key={category.text} to={category.to}>
        <span className="categories__text">{category.text}</span>
      </Link>
    );
  });
  return (
    <>
      <div className="homepage-hero">
        <h1 className="homepage-hero__title">
          Descubre los mejores spots de Barcelona
        </h1>
        <h2 className="homepage-hero__subtitle">
          Encuentra los lugares perfectos para cada plan
        </h2>
      </div>
      <div className="categories">{categoryElements}</div>
    </>
  );
}

export default HomePage;
