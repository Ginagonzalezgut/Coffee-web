import React, { useEffect, useState } from "react";
import API from "../services/api";

function Breweries() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    API.getBreweries().then((data) => {
      setBreweries(data.results);
    });
  });

  function breweryList() {
    return breweries.map((brewery) => {
      return (
        <div>
          <div key={brewery.id_shop}>{brewery.name}</div>

          <img
            className="shop__image"
            src={`/logos/${brewery.logo_url}`}
            alt={brewery.name}
          />
        </div>
      );
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
