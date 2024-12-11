import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import Hero from "../partials/Hero";
import LogoCarousel from "../partials/LogoCarousel";

function LargeGroups() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    API.getLargeGroups().then((data) => {
      setRestaurants(data.results);
    });
  }, []);

  function listLargeGroups() {
    return restaurants.map((restaurant) => {
      return <ShopItem key={restaurant.name} shop={restaurant} />;
    });
  }

  return (
    <>
      <Hero
        text={
          "Los restaurantes más chic y acogedores para compartir momentos únicos"
        }
        className="hero__large-groups"
      />
      <div className="logos">
        <div className="logos__title">
          Conoce Los Mejores Restaurantes Para Grupos
        </div>
        <LogoCarousel shops={restaurants} />
      </div>
      <div className="shops-section">
        <h1 className="shops-section__title">Lo que otros descubrieron</h1>
        <h2 className="shops-section__subtitle">
          Opiniones honestas para ayudarte a decidir
        </h2>
        <div className="coffee__list">{listLargeGroups()}</div>;
      </div>
    </>
  );
}

export default LargeGroups;
