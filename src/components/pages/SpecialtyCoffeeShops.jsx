import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import "../../scss/components/SpecialtyCoffeeShops.scss";
import "../../scss/components/ShopItem.scss";

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
      <div className="hero__background hero__background__coffee"></div>
      <h1 className="hero__title">
        Las mejores cafeterias de especialidad para los amantes del café
      </h1>
      <div className="coffee__list">{coffeeShopList()}</div>
    </>
  );
}

export default SpecialtyCoffeeShops;
