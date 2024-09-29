import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import "../../scss/components/ShopItem.scss";

function Breweries({ shop }) {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    API.getBreweries().then((data) => {
      setBreweries(data.results);
    });
  });

  function breweryList() {
    return breweries.map((brewery) => {
      return <ShopItem key={brewery.name} shop={brewery} />;
    });
  }

  return (
    <>
      <h1 className="coffee__title">Las mejores cervercerías</h1>
      <div className="coffee__list">{breweryList()}</div>
    </>
  );
}

export default Breweries;
