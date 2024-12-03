import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import Hero from "../partials/Hero";

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
          "Descubre los rincones más chic y acogedores donde cada comida con amigos se convierte en un momento inolvidable."
        }
        className="hero__background__large-groups"
      />
      <div className="coffee__list">{listLargeGroups()}</div>;
    </>
  );
}

export default BigGroups;
