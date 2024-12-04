import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import "../../scss/components/SpecialtyCoffeeShops.scss";
import "../../scss/components/ShopItem.scss";
import Hero from "../partials/Hero";

function SpecialtyCoffeeShops() {
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    API.getSpecialtyCoffeeShops().then((data) => {
      setCoffeeShops(data.results);
    });
  }, []);

  function coffeeShopList() {
    return coffeeShops.map((coffeeShop) => {
      return <ShopItem key={coffeeShop.id_shop} shop={coffeeShop} />;
    });
  }

  return (
    <>
      <Hero
        text="Descubre el arte del café de especialidad, donde cada taza cuenta una historia."
        className="hero__coffee"
      />

      <div className="coffee__list">{coffeeShopList()}</div>
    </>
  );
}

export default SpecialtyCoffeeShops;
