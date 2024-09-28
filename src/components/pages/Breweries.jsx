import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";

function Breweries() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    API.getBreweries().then((data) => {
      setBreweries(data.results);
    });
  });

  function breweryList() {
    return breweries.map((brewery) => {
      return <ShopItem shop={brewery} />;
    });
  }

  return (
    <>
      <h1>Las mejores 5 cervercerías</h1>
      <div>{breweryList()}</div>
    </>
  );
}

export default Breweries;
