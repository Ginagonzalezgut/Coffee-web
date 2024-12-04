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

  return (
    <>
      <Hero
        className="hero__breweries"
        text="Donde las cervezas cuentan historias y los momentos saben mejor"
      />
      <div className="coffee__list">{breweryList()}</div>
    </>
  );
}

export default Breweries;
