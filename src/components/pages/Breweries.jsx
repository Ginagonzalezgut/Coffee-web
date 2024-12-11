import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import "../../scss/components/ShopItem.scss";
import Hero from "../partials/Hero";
import LogoCarousel from "../partials/LogoCarousel";

function Breweries() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    API.getBreweries().then((data) => {
      setBreweries(data.results);
    });
  }, []);

  function breweryList() {
    return breweries.map((brewery) => {
      return <ShopItem key={brewery.name} shop={brewery} />;
    });
  }

  return (
    <>
      <Hero
        className="hero__breweries"
        text="Donde las cervezas cuentan historias y los momentos saben mejor"
      />
      <div className="logos">
        <div className="logos__title">Conoce Las Mejores Cervecerías</div>
        <LogoCarousel shops={breweries} />
      </div>

      <div className="shops-section">
        <h1 className="shops-section__title">
          Ellos ya vivieron la experiencia...
        </h1>
        <h2 className="shops-section__subtitle">
          Descubre sus historias y prepárate para la tuya
        </h2>
        <div className="coffee__list">{breweryList()}</div>
      </div>
    </>
  );
}

export default Breweries;
