import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import "../../scss/components/SpecialtyCoffeeShops.scss";
import "../../scss/components/ShopItem.scss";
import Hero from "../partials/Hero";

function SpecialtyCoffeeShops() {
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    API.getSpecialtyCoffeeShops().then((data) => {
      setCoffeeShops(data.results);
    });
  }, []);

  function coffeeShopList() {
    return coffeeShops.map((coffeeShop) => {
      return (
        <div key={coffeeShop.id_shop}>
          <ShopItem shop={coffeeShop} />
        </div>
      );
    });
  }
  function renderLogos() {
    return coffeeShops.map((coffeeShop) => {
      return (
        <a href={`#shop-${coffeeShop.id_shop}`}>
          <img
            className="logos__breweries"
            src={`/logos/${coffeeShop.logo_url}`}
            alt={coffeeShop.name}
          />
        </a>
      );
    });
  }

  return (
    <>
      <Hero
        text="Descubre el arte del café de especialidad, donde cada taza cuenta una historia."
        className="hero__coffee"
      />
      <div className="logos">
        <div className="logos__title">
          Conoce Las Mejores Cafeterías de Especialidad
        </div>
        <div className="logos__info">
          <div className="logos__list">{renderLogos()}</div>
        </div>
      </div>
      <div className="shops-section">
        <h1 className="shops-section__title">Historias que cuentan más...</h1>
        <h2 className="shops-section__subtitle">
          Porque cada experiencia tiene algo especial que decir.
        </h2>
        <div className="coffee__list">{coffeeShopList()}</div>
      </div>
    </>
  );
}

export default SpecialtyCoffeeShops;
