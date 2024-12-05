import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import "../../scss/components/ShopItem.scss";
import Hero from "../partials/Hero";

function Breweries({ shop }) {
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
  function renderLogos() {
    return breweries.map((brewery) => {
      return (
        <a href={`#shop-${brewery.id_shop}`}>
          <img
            className="logos__breweries"
            src={`/logos/${brewery.logo_url}`}
            alt={brewery.name}
          />
        </a>
      );
    });
  }

  return (
    <>
      <Hero
        className="hero__breweries"
        text="Donde las cervezas cuentan historias y los momentos saben mejor"
      />
      <div className="logos">
        <div className="logos__title">Conoce las mejores cervecerias</div>
        <div className="logos__info">{renderLogos()}</div>
      </div>

      <div className="coffee__list"> {breweryList()}</div>
    </>
  );
}

export default Breweries;
