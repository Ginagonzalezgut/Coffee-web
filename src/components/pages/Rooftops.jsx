import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import Hero from "../partials/Hero";
import LogoCarousel from "../partials/LogoCarousel";

function Rooftops() {
  const [rooftops, setRooftops] = useState([]);

  useEffect(() => {
    API.getRooftops().then((data) => {
      setRooftops(data.results);
    });
  }, []);

  function rooftopsList() {
    return rooftops.map((rooftop) => {
      return <ShopItem key={rooftop.name} shop={rooftop} />;
    });
  }

  return (
    <>
      <Hero
        text="Tu próxima aventura comienza en las alturas"
        className="hero__rooftops"
      />
      <div className="logos">
        <LogoCarousel shops={rooftops} />
      </div>

      <div className="shops-section">
        <h1 className="shops-section__title">Tu opinión, nuestra guía</h1>
        <h2 className="shops-section__subtitle">
          Porque las mejores elecciones nacen de experiencias compartidas
        </h2>
        <div className="coffee__list">{rooftopsList()}</div>
      </div>
    </>
  );
}

export default Rooftops;
