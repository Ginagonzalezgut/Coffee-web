import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import "../../scss/components/ShopItem.scss";
import Hero from "../partials/Hero";
import LogoCarousel from "../partials/LogoCarousel";

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

  return (
    <>
      <Hero text="Cada taza cuenta una historia" className="hero__coffee" />
      <div className="logos">
        {/* <div className="logos__title">
          Conoce Las Mejores Cafeterías de Especialidad
        </div> */}
        <LogoCarousel shops={coffeeShops} />
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
