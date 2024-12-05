import React, { useEffect, useState } from "react";
import "../../scss/components/ShopItem.scss";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import Hero from "../partials/Hero";
import LogoCarousel from "../partials/LogoCarousel";

function Brunch() {
  const [brunches, setBrunches] = useState([]);

  useEffect(() => {
    API.getBrunch().then((data) => {
      setBrunches(data.results);
    });
  }, []);
  function brunchList() {
    return brunches.map((brunch) => {
      return <ShopItem key={brunch.name} shop={brunch} />;
    });
  }
  function renderLogos() {
    return brunches.map((brunch) => {
      return (
        <a href={`#shop-${brunch.id_shop}`}>
          <img
            className="logos__carousel__item"
            src={`/logos/${brunch.logo_url}`}
            alt={brunch.name}
          />
        </a>
      );
    });
  }

  return (
    <>
      <Hero
        text="Sabores que despiertan tus mañanas y momentos que alegran tu día"
        className="hero__brunch"
      />
      <div className="logos">
        <div className="logos__title">Conoce Los Mejores Brunch</div>
        <LogoCarousel renderLogos={renderLogos} />
      </div>
      <div className="shops-section">
        <h1 className="shops-section__title">Lo que ellos piensan</h1>
        <h2 className="shops-section__subtitle">
          Opiniones sinceras de visitantes
        </h2>
        <div className="coffee__list">{brunchList()}</div>
      </div>
    </>
  );
}

export default Brunch;
